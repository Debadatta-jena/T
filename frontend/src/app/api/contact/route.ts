import { NextResponse } from 'next/server';

// In-memory storage for demo purposes
// In production, you would save to database or send email
const contacts: Array<{
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  newsletter: boolean;
  timestamp: Date;
}> = [];

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Save contact submission
    const contact = {
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      company: data.company || '',
      service: data.service || '',
      message: data.message,
      newsletter: data.newsletter || false,
      timestamp: new Date()
    };

    contacts.push(contact);

    // Log to console (for debugging)
    // Contact form submitted - email will be sent via backend

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been received. We\'ll get back to you within 24 hours.'
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve contacts (for admin dashboard)
export async function GET() {
  return NextResponse.json({
    contacts: contacts.reverse() // Most recent first
  });
}
