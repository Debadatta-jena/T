export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trionex Technologies",
    "url": "https://trionex.tech",
    "logo": "https://trionex.tech/images/logo.svg",
    "description": "Professional AI & Software Solutions company offering Website Development, AI Chatbots, AI Agents, Voice Bots, Analysis Systems, Mobile Applications, and Cloud Services.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "Silicon Valley",
      "addressRegion": "CA",
      "postalCode": "94025",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/trionextech",
      "https://www.twitter.com/trionextech",
      "https://www.linkedin.com/company/trionex-technologies",
      "https://github.com/ai-solutions"
    ],
    "services": [
      {
        "@type": "Service",
        "name": "Website Development",
        "description": "Custom website development using modern technologies"
      },
      {
        "@type": "Service", 
        "name": "AI Chatbots",
        "description": "Intelligent chatbot solutions for customer service"
      },
      {
        "@type": "Service",
        "name": "AI Agents",
        "description": "Autonomous AI agents for business automation"
      },
      {
        "@type": "Service",
        "name": "Voice Bots",
        "description": "Voice-enabled AI assistants and bots"
      },
      {
        "@type": "Service",
        "name": "Mobile Applications",
        "description": "Native and cross-platform mobile app development"
      },
      {
        "@type": "Service",
        "name": "Cloud Solutions",
        "description": "AWS and Azure cloud infrastructure services"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

