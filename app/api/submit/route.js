import { NextResponse } from 'next/server';
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

    // 1. Send transactional email via Mandrill
    const emailResponse = await fetch('https://mandrillapp.com/api/1.0/messages/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: process.env.MAILCHIMP_TRANSACTIONAL_API_KEY,
        message: {
          from_email: process.env.FROM_EMAIL,
          to: [{ email: process.env.GMAIL_RECIPIENT_EMAIL, type: 'to' }],
          subject: `New Idea Submission from ${firstName} ${lastName}`,
          text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nIdea: ${idea}`,
        },
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      return NextResponse.json(
        { message: 'Failed to send email', error: errorData },
        { status: 500 }
      );
    }
    

    // 2. Save/Update user details to Mailchimp audience with tag
    const emailHash = crypto
      .createHash('md5')
      .update(email.toLowerCase())
      .digest('hex');

    const mailchimpResponse = await fetch(
      `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${emailHash}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${process.env.MAILCHIMP_API_KEY}`).toString('base64')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status_if_new: 'subscribed',
          status: 'subscribed',
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
          },
          tags: ['Tiktok @buildwithtori']
        }),
      }
    );

    if (!mailchimpResponse.ok) {
      const errorData = await mailchimpResponse.json();
      return NextResponse.json(
        { message: 'Failed to save to Mailchimp', error: errorData },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Success! Email sent and subscriber saved.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 }
    );
  }
}
