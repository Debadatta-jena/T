import { NextResponse } from 'next/server';

// Simple chatbot responses (fallback when AI API is not available)
const simpleResponses: Record<string, string> = {
  'hello': "Hello! Welcome to Trionex Technologies! How can I help you today?",
  'hi': "Hi there! How can I assist you?",
  'services': "We offer:\n• Website Development\n• AI Solutions\n• Mobile Apps\n• Academic Projects\n\nWhat interests you?",
  'pricing': "Our pricing varies by project:\n• Website: Starting at $499\n• AI Solutions: Starting at $999\n• Mobile Apps: Starting at $799\n\nContact us for a custom quote!",
  'contact': "You can reach us at:\n📧 debadattajena552@gmail.com\n📞 +91 9692292496\n📍 Bhubaneswar, Odisha, India",
  'default': "Thank you for your message! Our team will get back to you within 24 hours. For immediate assistance, please call us at +91 9692292496."
};

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return NextResponse.json(
        { message: 'Message is required', type: 'text' },
        { status: 400 }
      );
    }

    const lowerMessage = message.toLowerCase();
    
    // Find matching response
    let response = simpleResponses.default;
    for (const [key, value] of Object.entries(simpleResponses)) {
      if (lowerMessage.includes(key)) {
        response = value;
        break;
      }
    }

    return NextResponse.json({
      message: response,
      type: 'text'
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { message: 'Sorry, something went wrong. Please try again.', type: 'text' },
      { status: 500 }
    );
  }
}
