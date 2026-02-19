// Smart Chatbot Brain - Human-like conversation without external APIs

interface Context {
  userName?: string;
  lastTopic?: string;
  mentionedService?: string;
  conversationCount: number;
  userMood?: 'happy' | 'frustrated' | 'curious' | 'neutral';
}

interface ResponsePattern {
  keywords: string[];
  responses: string[];
  followUp?: string;
  action?: string;
}

// Brain containing patterns for human-like conversation
const CONVERSATION_PATTERNS: ResponsePattern[] = [
  // Greetings
  {
    keywords: ['hi', 'hello', 'hey', 'hiya', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    responses: [
      "Hey there! 😊 Great to see you! How can I help you out today?",
      "Hello! Welcome in! What brings you here today?",
      "Hi! Nice to meet you! What can I do for you?",
      "Hey! How's it going? Let me know what you need!"
    ],
    followUp: "Feel free to ask me about our services, pricing, or anything else!"
  },
  
  // How are you
  {
    keywords: ['how are you', 'how do you do', 'hows it going', 'how you doing'],
    responses: [
      "I'm doing great, thanks for asking! 😊 Ready to help you with whatever you need!",
      "Pretty good! Always happy to chat with visitors like you. What can I help with?",
      "Doing well! Just here, ready to assist you. What's on your mind?"
    ]
  },
  
  // What's your name / Who are you
  {
    keywords: ['what is your name', 'who are you', 'what are you', 'your name', 'who is this'],
    responses: [
      "I'm the AI assistant for Trionex Technologies! Just a friendly bot here to help you find what you need.",
      "You can call me the Trionex helper! I'm here to answer questions and guide you around."
    ]
  },
  
  // Capabilities
  {
    keywords: ['what can you do', 'what can you help with', 'help me', 'what do you offer', 'services'],
    responses: [
      "I can help you with:\n\n• Website Development\n• AI Solutions\n• Mobile Apps\n• Academic Projects\n\nJust tell me what you're interested in!",
      "Here's what I can help with:\n\n🖥️ Websites\n🤖 AI & Chatbots\n📱 Mobile Apps\n📚 Academic Projects\n\nWhat catches your interest?"
    ],
    action: 'show-services'
  },
  
  // Thanks / Gratitude
  {
    keywords: ['thank you', 'thanks', 'thank u', 'thx', 'appreciate', 'grateful'],
    responses: [
      "You're welcome! 😊 Happy to help!",
      "No problem at all! That's what I'm here for!",
      "Anytime! Feel free to reach out if you have more questions!"
    ]
  },
  
  // Goodbye
  {
    keywords: ['bye', 'goodbye', 'see you', 'later', 'take care', 'cya'],
    responses: [
      "Bye for now! It was great chatting with you! Come back anytime! 👋",
      "Take care! Hope I was helpful! See you soon! 😊",
      "Goodbye! Don't hesitate to return if you need anything else!"
    ]
  },
  
  // Pricing questions
  {
    keywords: ['price', 'cost', 'pricing', 'how much', 'expensive', 'cheap', 'budget'],
    responses: [
      "Great question! Our pricing varies based on what you need:\n\n• Website: Starting at $499\n• AI Solutions: Starting at $999\n• Mobile Apps: Starting at $799\n• Academic: Starting at $199\n\nI can give you more details if you tell me what you're interested in!",
      "It depends on the project! We have options for different budgets. What type of project do you have in mind?"
    ],
    action: 'show-pricing'
  },
  
  // Website questions
  {
    keywords: ['website', 'web design', 'web development', 'site'],
    responses: [
      "We build amazing websites! 🚀\n\nOur websites are:\n• Fast & Responsive\n• SEO Optimized\n• Secure & Cloud-hosted\n• Professionally Designed\n\nWhat kind of website do you need?"
    ],
    action: 'service-website'
  },
  
  // AI questions
  {
    keywords: ['ai', 'artificial intelligence', 'chatbot', 'machine learning', 'ml', 'automation'],
    responses: [
      "AI is our thing! 🤖\n\nWe can build:\n• Smart Chatbots\n• Voice Assistants\n• Automation Tools\n• Data Analytics\n\nAI can transform your business! What would you like to build?"
    ],
    action: 'service-ai'
  },
  
  // App questions
  {
    keywords: ['app', 'mobile', 'ios', 'android', 'application'],
    responses: [
      "Need a mobile app? 📱\n\nWe create:\n• iOS Apps\n• Android Apps\n• Cross-platform Apps\n\nWhat type of app are you thinking about?"
    ],
    action: 'service-app'
  },
  
  // Contact questions
  {
    keywords: ['contact', 'phone', 'email', 'call', 'reach', 'location', 'address'],
    responses: [
      "Here's how you can reach us:\n\n📧 Email: debadattajena552@gmail.com\n📞 Phone: +91 9692292496\n📍 Location: Bhubaneswar, Odisha, India\n\nOr I can help you fill out a consultation form!"
    ]
  },
  
  // About company
  {
    keywords: ['about', 'company', 'who are you', 'trionex', 'your company'],
    responses: [
      "We're Trionex Technologies! 🚀\n\nFounded by Debadatta Jena, we're a growing tech company specializing in:\n• Web Development\n• AI Solutions\n• Mobile Apps\n• Custom Software\n\nWe're passionate about helping businesses grow with technology!"
    ]
  },
  
  // Time / How long
  {
    keywords: ['how long', 'time', 'duration', 'how soon', 'when'],
    responses: [
      "Great question! Project timelines depend on what you need:\n\n• Small websites: 1-2 weeks\n• Medium projects: 2-4 weeks\n• Complex solutions: 1-3 months\n\nWe work with your timeline. What do you need?"
    ]
  },
  
  // Urgency / Fast
  {
    keywords: ['urgent', 'asap', 'fast', 'quick', 'soon', 'emergency'],
    responses: [
      "We understand sometimes you need things fast! Let us know your timeline and we'll do our best to accommodate.\n\nWe can often expedite projects. Tell us what you need and when!"
    ]
  },
  
  // Confused / Don't know
  {
    keywords: ["i don't know", 'not sure', 'confused', 'help me choose', 'what do you recommend'],
    responses: [
      "No worries! That's what I'm here for. 😊\n\nTell me a bit about:\n• What business are you in?\n• What are your goals?\n• What's your budget?\n\nI can help recommend the best option!",
      "Let's figure it out together! What are you trying to achieve? Once I know that, I can point you in the right direction!"
    ]
  },
  
  // Not understanding
  {
    keywords: ['what', 'huh', 'explain', 'what do you mean'],
    responses: [
      "Sorry if I wasn't clear! Let me try again - what would you like to know?",
      "I might have gotten a bit confused! 😄 What were you asking about?"
    ]
  },
  
  // Yes / Agreement
  {
    keywords: ['yes', 'yeah', 'sure', 'ok', 'okay', 'alright', 'yep'],
    responses: [
      "Awesome! 😊 What would you like to know more about?",
      "Great! Ask me anything!"
    ]
  },
  
  // No / Disagreement
  {
    keywords: ['no', 'nope', 'nah', 'not really'],
    responses: [
      "No problem! Just let me know if you have any questions!",
      "Alright! I'm here if you need anything!"
    ]
  },
  
  // Weather / Casual
  {
    keywords: ['weather', 'weekend', 'Friday', 'Monday'],
    responses: [
      "I don't really know about that, but I hope you're having a great day! 😊\n\nIs there something I can help you with regarding our services?"
    ]
  },
  
  // Fun / Jokes
  {
    keywords: ['joke', 'funny', 'lol', 'haha', 'laugh'],
    responses: [
      "😄 I don't have jokes programmed, but I'm here to make your experience smooth! How can I help you today?",
      "I'm more of a helpful bot than a comedian! 😂 But I'm happy to help you with anything you need!"
    ]
  }
]

// Company info for accurate responses
const COMPANY_INFO = {
  name: 'GLYVEXA',
  founder: 'Debadatta Jena',
  email: 'debadattajena552@gmail.com',
  phone: '+91 9692292496',
  location: 'Bhubaneswar, Odisha, India',
  services: ['Web Development', 'AI Solutions', 'Mobile Apps', 'Academic Projects'],
  started: '2024'
}

// Generate greeting based on time of day
export function getTimeBasedGreeting(): string {
  const hour = new Date().getHours()
  
  if (hour < 12) {
    return "Good morning! ☀️ Welcome to Trionex Technologies! How can I help you today?"
  } else if (hour < 17) {
    return "Good afternoon! 🌤️ Welcome! What can I do for you?"
  } else {
    return "Good evening! 🌙 Welcome! How may I assist you?"
  }
}

// Main response generator
export function generateResponse(
  userInput: string, 
  context: Context
): { text: string; action?: string; contextUpdate?: Partial<Context> } {
  const input = userInput.toLowerCase().trim()
  
  // Check for exact matches first
  for (const pattern of CONVERSATION_PATTERNS) {
    for (const keyword of pattern.keywords) {
      if (input.includes(keyword)) {
        // Pick a random response
        const response = pattern.responses[Math.floor(Math.random() * pattern.responses.length)]
        
        // Personalize with name if available
        let personalizedResponse = response
        if (context.userName && response.includes('you')) {
          personalizedResponse = response.replace(/you/gi, context.userName)
        }
        
        return {
          text: personalizedResponse,
          action: pattern.action,
          contextUpdate: {
            conversationCount: context.conversationCount + 1
          }
        }
      }
    }
  }
  
  // Fallback for unknown input
  const fallbacks = [
    "I see! That's interesting. 😊 What else would you like to know about our services?",
    "Got it! I'm here to help. What questions do you have?",
    "I understand! Is there something specific about our services you'd like to know?",
    "Sure thing! Feel free to ask me about pricing, services, or anything else!",
    "Interesting! Let me know what you'd like to explore - services, pricing, or something else?"
  ]
  
  return {
    text: fallbacks[Math.floor(Math.random() * fallbacks.length)],
    contextUpdate: {
      conversationCount: context.conversationCount + 1
    }
  }
}

// Extract name from user input
export function extractName(input: string): string | null {
  const namePatterns = [
    /my name is (.+)/i,
    /i am (.+)/i,
    /i'm (.+)/i,
    /this is (.+)/i,
    /i'm called (.+)/i
  ]
  
  for (const pattern of namePatterns) {
    const match = input.match(pattern)
    if (match && match[1]) {
      return match[1].trim().split(' ')[0] // Just first name
    }
  }
  
  return null
}

// Check if input is a greeting
export function isGreeting(input: string): boolean {
  const greetingKeywords = ['hi', 'hello', 'hey', 'hiya', 'greetings']
  const lowerInput = input.toLowerCase()
  return greetingKeywords.some(k => lowerInput.includes(k))
}

// Check if input is a goodbye
export function isGoodbye(input: string): boolean {
  const goodbyeKeywords = ['bye', 'goodbye', 'see you', 'later', 'take care', 'cya']
  const lowerInput = input.toLowerCase()
  return goodbyeKeywords.some(k => lowerInput.includes(k))
}

export { COMPANY_INFO, CONVERSATION_PATTERNS }
