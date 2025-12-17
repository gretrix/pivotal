import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, recaptchaToken } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification required' },
        { status: 400 }
      );
    }

    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: 'POST' }
    );
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.NOTIFICATION_EMAIL) {
      console.error('Missing environment variables:', {
        SMTP_USER: !!process.env.SMTP_USER,
        SMTP_PASS: !!process.env.SMTP_PASS,
        NOTIFICATION_EMAIL: !!process.env.NOTIFICATION_EMAIL,
      });
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to JT with form details
    const notificationEmail = {
      from: 'Pivotal Tech Solutions <jtremblay@pivotaltech.solutions>',
      to: process.env.NOTIFICATION_EMAIL,
      subject: `[Pivotal Tech] New Contact Form from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #10b981 100%); padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
            <p style="color: white; margin: 5px 0 0 0; font-size: 14px;">From: pivotaltech.solutions</p>
          </div>
          <div style="background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb;">
              <p style="margin: 0;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Confirmation email to user
    const confirmationEmail = {
      from: 'Pivotal Tech Solutions <jtremblay@pivotaltech.solutions>',
      to: email,
      subject: 'Thank You for Contacting Pivotal Tech Solutions',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank You for Reaching Out!</h2>
          <p>Hi ${name},</p>
          <p>We've received your message and appreciate you contacting Pivotal Tech Solutions. Our team will review your inquiry and get back to you shortly.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Message:</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p>If you have any urgent questions, feel free to call us at <strong>404-374-9322</strong>.</p>
          
          <p>Best regards,<br>
          <strong>Pivotal Tech Solutions Team</strong></p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="font-size: 12px; color: #6b7280;">
            Pivotal Tech Solutions<br>
            4290 Bells Ferry Rd, Ste 134 #3025<br>
            Kennesaw, GA 30144<br>
            <a href="https://pivotaltech.solutions">pivotaltech.solutions</a>
          </p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(notificationEmail);
    await transporter.sendMail(confirmationEmail);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to send email', details: errorMessage },
      { status: 500 }
    );
  }
}
