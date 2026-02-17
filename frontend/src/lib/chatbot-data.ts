import { ServiceInfo, QuickReply } from '@/types/chatbot'

export const CHATBOT_CONFIG = {
  companyName: 'Trionex Technologies',
  greeting: 'Hello 👋 Welcome to Trionex Technologies! I\'m here to help. What would you like to know?',
  typingDelay: 800,
  maxRetries: 3,
  allowFreeText: true, // Enable free text input
}

export const SERVICES: ServiceInfo[] = [
  {
    id: 'website-development',
    name: 'Website Development',
    description: 'We build websites for restaurants, clinics, startups, and businesses. Our websites are fast, secure, and cloud-hosted.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Cloud Hosting',
      'Security Features',
      'Performance Optimization'
    ],
    pricing: 'Starting from $999',
    actionButtons: [
      { id: 'see-pricing', text: 'See Pricing', action: 'pricing', payload: 'website-development' },
      { id: 'book-consultation', text: 'Book Consultation', action: 'consultation' },
      { id: 'back-menu', text: 'Back to Menu', action: 'back' }
    ]
  },
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    description: 'Cutting-edge AI solutions including chatbots, voice assistants, and automation tools to transform your business operations.',
    features: [
      'AI Chatbots',
      'Voice Assistants',
      'Process Automation',
      'Data Analytics',
      'Machine Learning Models'
    ],
    pricing: 'Starting from $2,499',
    actionButtons: [
      { id: 'see-pricing', text: 'See Pricing', action: 'pricing', payload: 'ai-solutions' },
      { id: 'book-consultation', text: 'Book Consultation', action: 'consultation' },
      { id: 'back-menu', text: 'Back to Menu', action: 'back' }
    ]
  },
  {
    id: 'app-development',
    name: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX and robust backend integration.',
    features: [
      'iOS & Android Apps',
      'Cross-Platform Development',
      'UI/UX Design',
      'Backend Integration',
      'App Store Deployment'
    ],
    pricing: 'Starting from $1,999',
    actionButtons: [
      { id: 'see-pricing', text: 'See Pricing', action: 'pricing', payload: 'app-development' },
      { id: 'book-consultation', text: 'Book Consultation', action: 'consultation' },
      { id: 'back-menu', text: 'Back to Menu', action: 'back' }
    ]
  },
  {
    id: 'academic-projects',
    name: 'Academic Projects',
    description: 'Assistance with academic projects, research papers, and technical documentation for students and researchers.',
    features: [
      'Research Papers',
      'Technical Documentation',
      'Data Analysis',
      'Project Implementation',
      'Academic Consulting'
    ],
    pricing: 'Starting from $299',
    actionButtons: [
      { id: 'see-pricing', text: 'See Pricing', action: 'pricing', payload: 'academic-projects' },
      { id: 'book-consultation', text: 'Book Consultation', action: 'consultation' },
      { id: 'back-menu', text: 'Back to Menu', action: 'back' }
    ]
  }
]

export const QUICK_REPLIES: QuickReply[] = [
  { id: 'website', text: 'Website Development', action: 'service', payload: 'website-development' },
  { id: 'ai', text: 'AI Solutions', action: 'service', payload: 'ai-solutions' },
  { id: 'app', text: 'App Development', action: 'service', payload: 'app-development' },
  { id: 'academic', text: 'Academic Projects', action: 'service', payload: 'academic-projects' },
  { id: 'pricing', text: 'Pricing', action: 'pricing' },
  { id: 'contact', text: 'Contact Us', action: 'contact' }
]

export const PRICING_INFO = {
  'website-development': {
    basic: '$499 - Basic Website',
    professional: '$999 - Professional Website',
    enterprise: '$1,999 - Advanced Website'
  },
  'ai-solutions': {
    basic: '$999 - Basic AI Solution',
    professional: '$1,999 - Professional AI Suite',
    enterprise: '$3,999 - Advanced AI Platform'
  },
  'app-development': {
    basic: '$799 - Basic App',
    professional: '$1,599 - Professional App',
    enterprise: '$2,999 - Advanced App Suite'
  },
  'academic-projects': {
    basic: '$199 - Basic Project',
    professional: '$399 - Professional Project',
    enterprise: '$799 - Research Partnership'
  }
}

export const LEAD_FORM_FIELDS = [
  {
    name: 'name',
    label: 'Your Name',
    type: 'text',
    required: true,
    placeholder: 'John Doe',
    validation: {
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s]+$/,
      errorMessage: 'Please enter a valid name (2-50 characters, letters only)'
    }
  },
  {
    name: 'businessType',
    label: 'Business Type',
    type: 'select',
    required: true,
    options: [
      'Restaurant',
      'Clinic/Healthcare',
      'Startup',
      'E-commerce',
      'Education',
      'Real Estate',
      'Other'
    ],
    placeholder: 'Select your business type'
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    required: true,
    placeholder: '+1 (555) 123-4567',
    validation: {
      pattern: /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
      errorMessage: 'Please enter a valid phone number'
    }
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    required: true,
    placeholder: 'john@example.com',
    validation: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: 'Please enter a valid email address'
    }
  }
]

