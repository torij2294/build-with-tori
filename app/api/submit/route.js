import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

export async function POST(request) {
  try {
    const { firstName, lastName, email, idea } = await request.json();

    if (!firstName || !lastName || !email || !idea) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // 1. Send email via Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_RECIPIENT_EMAIL,
      subject: `New Idea Submission from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nIdea: ${idea}`,
      html: `
        <h2>New Idea Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Idea:</strong></p>
        <p>${idea}</p>
      `,
    });

    // 2. Add to Mailchimp audience
    const emailHash = crypto
      .createHash('md5')
      .update(email.toLowerCase())
      .digest('hex');

    const mailchimpData = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      },
      tags: ['Tiktok @buildwithtori']
    };

    const response = await fetch(
      `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${emailHash}`,
      {
        method: 'PUT', // Using PUT to update if exists, create if doesn't
        headers: {
          Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mailchimpData),
      }
    );

    if (!response.ok) {
      console.error('Mailchimp error:', await response.text());
      throw new Error('Failed to add subscriber to Mailchimp');
    }

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { message: 'Failed to submit form', error: error.message },
      { status: 500 }
    );
  }
}
