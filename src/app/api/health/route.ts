import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check if environment variables are loaded
    const envCheck = {
      SMTP_USER: !!process.env.SMTP_USER,
      SMTP_PASS: !!process.env.SMTP_PASS,
      NOTIFICATION_EMAIL: !!process.env.NOTIFICATION_EMAIL,
      RECAPTCHA_SECRET_KEY: !!process.env.RECAPTCHA_SECRET_KEY,
      NEXT_PUBLIC_RECAPTCHA_SITE_KEY: !!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    };

    return NextResponse.json(
      {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
        envVariables: envCheck,
        nodeVersion: process.version,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
