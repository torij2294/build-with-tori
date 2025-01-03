import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from "crypto";

export async function POST(request) {
  try {
    const { firstName, lastName, email, projectType, description } =
      await request.json();

    if (!firstName || !lastName || !email || !description) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // 1. Send email notification to you via Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Format project types for email
    const selectedProjects = [];
    if (projectType.website) selectedProjects.push("Website");
    if (projectType.mobileApp) selectedProjects.push("Mobile App");
    if (projectType.landingPage) selectedProjects.push("$400 Landing Page");
    const projectTypeText = selectedProjects.join(", ");

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "Officialbuildwithtori@gmail.com",
      subject: `New Project Inquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectTypeText}</p>
        <p><strong>Project Description:</strong></p>
        <p>${description}</p>
      `,
    });

    // 2. Add to Mailchimp audience
    const emailHash = crypto
      .createHash("md5")
      .update(email.toLowerCase())
      .digest("hex");

    const mailchimpData = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      },
      tags: ["Services @buildwithtori"],
    };

    const response = await fetch(
      `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${emailHash}`,
      {
        method: "PUT",
        headers: {
          Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mailchimpData),
      }
    );

    if (!response.ok) {
      console.error("Mailchimp error:", await response.text());
      throw new Error("Failed to add subscriber to Mailchimp");
    }

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { message: "Failed to submit form", error: error.message },
      { status: 500 }
    );
  }
}
