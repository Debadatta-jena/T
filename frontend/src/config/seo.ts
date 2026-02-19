// SEO Configuration - Centralized metadata for all pages
// This ensures consistent SEO across the entire website

export const siteConfig = {
  siteName: 'GLYVEXA',
  siteUrl: 'https://glyvexa.com',
  siteDescription: 'Professional AI & Software Solutions company offering Website Development, AI Chatbots, AI Agents, Voice Bots, Mobile Applications, and Cloud Services.',
  logo: '/images/logo.svg',
  twitter: '@glyvexa',
  locale: 'en_US',
};

export const defaultSeo = {
  title: 'GLYVEXA - Professional AI & Software Solutions',
  description: siteConfig.siteDescription,
  image: siteConfig.logo,
  url: siteConfig.siteUrl,
};

// Page-specific SEO configurations
export const pageSeo = {
  home: {
    title: 'GLYVEXA - Professional AI & Software Solutions',
    description: 'Expert AI & Software Solutions including Web Development, AI Chatbots, AI Agents, Voice Bots, Mobile Apps, and Cloud Services.',
    keywords: ['AI Solutions', 'Software Development', 'Web Development', 'AI Chatbots', 'Mobile Apps'],
  },
  about: {
    title: 'About Us - GLYVEXA',
    description: 'Learn about GLYVEXA - a leading AI and software solutions company with expertise in chatbots, web development, and mobile applications.',
    keywords: ['About Us', 'AI Company', 'Software Company', 'Tech Company'],
  },
  services: {
    title: 'Services - GLYVEXA',
    description: 'Explore our professional services: Website Development, AI Chatbots, AI Agents, Voice Bots, Mobile Applications, and Cloud Solutions.',
    keywords: ['Services', 'Web Development', 'AI Chatbots', 'AI Agents', 'Voice Bots', 'Mobile Apps'],
  },
  'services/web-development': {
    title: 'Website Development Services - GLYVEXA',
    description: 'Professional website development services. We create responsive, modern websites using React, Next.js, and modern technologies.',
    keywords: ['Website Development', 'Web Design', 'React Development', 'Next.js'],
  },
  'services/ai-chatbots': {
    title: 'AI Chatbot Development - GLYVEXA',
    description: 'Custom AI chatbot development for customer support, lead generation, and business automation. Powered by advanced AI technology.',
    keywords: ['AI Chatbot', 'Chatbot Development', 'Customer Support Bot', 'AI Assistant'],
  },
  'services/ai-agents': {
    title: 'AI Agents Development - GLYVEXA',
    description: 'Build intelligent AI agents for business automation, data processing, and complex task handling.',
    keywords: ['AI Agents', 'Intelligent Agents', 'AI Automation', 'Business AI'],
  },
  'services/voice-bots': {
    title: 'Voice Bot Development - GLYVEXA',
    description: 'Voice-enabled AI solutions for customer service, IVR systems, and voice assistants.',
    keywords: ['Voice Bot', 'Voice Assistant', 'IVR', 'Speech AI'],
  },
  'services/mobile-apps': {
    title: 'Mobile App Development - GLYVEXA',
    description: 'Native and cross-platform mobile application development for iOS and Android.',
    keywords: ['Mobile App Development', 'iOS Apps', 'Android Apps', 'Cross-platform'],
  },
  'services/academic-projects': {
    title: 'Academic Projects & Research - GLYVEXA',
    description: 'Professional academic project assistance in AI, machine learning, and software engineering.',
    keywords: ['Academic Projects', 'Research Papers', 'Thesis', 'ML Projects'],
  },
  industries: {
    title: 'Industries We Serve - GLYVEXA',
    description: 'We provide AI and software solutions across various industries including healthcare, finance, education, retail, and more.',
    keywords: ['Industries', 'Healthcare AI', 'Fintech', 'EdTech', 'Retail Solutions'],
  },
  projects: {
    title: 'Our Projects - GLYVEXA',
    description: 'View our portfolio of successful projects including websites, AI chatbots, mobile apps, and custom software solutions.',
    keywords: ['Portfolio', 'Projects', 'Case Studies', 'Our Work'],
  },
  'case-studies': {
    title: 'Case Studies - GLYVEXA',
    description: 'Explore detailed case studies of our successful AI and software projects.',
    keywords: ['Case Studies', 'Success Stories', 'Client Projects'],
  },
  testimonials: {
    title: 'Testimonials - GLYVEXA',
    description: 'See what our clients say about working with GLYVEXA.',
    keywords: ['Testimonials', 'Reviews', 'Client Feedback'],
  },
  pricing: {
    title: 'Pricing - GLYVEXA',
    description: 'Competitive pricing for all our AI and software development services.',
    keywords: ['Pricing', 'Cost', 'Quotes', 'Rates'],
  },
  contact: {
    title: 'Contact Us - GLYVEXA',
    description: 'Get in touch with GLYVEXA for AI and software solutions. Contact us for free consultation.',
    keywords: ['Contact', 'Get Quote', 'Consultation', 'Support'],
  },
  privacy: {
    title: 'Privacy Policy - GLYVEXA',
    description: 'GLYVEXA privacy policy - how we protect your data.',
    keywords: ['Privacy Policy', 'Data Protection'],
  },
  terms: {
    title: 'Terms of Service - GLYVEXA',
    description: 'GLYVEXA terms of service.',
    keywords: ['Terms of Service', 'Terms and Conditions'],
  },
  'cookie-policy': {
    title: 'Cookie Policy - GLYVEXA',
    description: 'GLYVEXA cookie policy.',
    keywords: ['Cookie Policy', 'Cookies'],
  },
};

export type PageKey = keyof typeof pageSeo;
