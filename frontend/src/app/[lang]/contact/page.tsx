import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Trionex Technologies - Get in Touch',
  description: 'Contact Trionex Technologies for enterprise solutions. Schedule consultations, request demos, and connect with our global team.',
  keywords: 'contact trionex, enterprise consultation, schedule demo, get quote, customer support',
};

const officeLocations = [
  {
    city: 'Bhubaneswar',
    country: 'India',
    address: 'Odisha, India',
    phone: '+91 9692292496',
    email: 'debadattajena552@gmail.com',
    timezone: 'IST (UTC+5:30)',
  },
];

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our team',
    details: 'Available during business hours',
    action: 'Call Now',
    href: 'tel:+919692292496',
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send detailed inquiries and requirements',
    details: 'Response within 24 hours',
    action: 'Send Email',
    href: 'mailto:debadattajena552@gmail.com',
  },
  {
    icon: Clock,
    title: 'Schedule Meeting',
    description: 'Book a consultation with our experts',
    details: '30-minute discovery call included',
    action: 'Book Meeting',
    href: 'mailto:debadattajena552@gmail.com',
  },
];

interface ContactPageProps {
  params: {
    lang: string;
  };
}

export default function ContactPage({ params: { lang } }: ContactPageProps) {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let's Start Your{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Digital Transformation
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Ready to unlock the power of AI and cloud solutions? Our enterprise specialists
              are here to understand your unique challenges and design the perfect solution
              for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-2">{method.description}</p>
                  <p className="text-sm text-muted-foreground mb-6">{method.details}</p>
                  <Button asChild>
                    <a href={method.href}>{method.action}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <ContactForm />

            {/* Office Locations */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Our Office</h2>
                <p className="text-muted-foreground">
                  We're based in Bhubaneswar, Odisha, India. 
                  Contact us to discuss your project needs.
                </p>
              </div>

              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{office.city}</h3>
                          <p className="text-sm text-muted-foreground">{office.country}</p>
                        </div>
                        <Badge variant="outline">{office.timezone}</Badge>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Quick answers to common questions about working with Trionex Technologies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'How quickly can you start a new project?',
                answer: 'We can typically begin within 1-2 weeks of contract signing, depending on project complexity and current workload.',
              },
              {
                question: 'Do you work with international clients?',
                answer: 'Yes! We work with clients globally and can accommodate different timezones for meetings and communication.',
              },
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on scope and complexity. We provide detailed timelines during our initial consultation.',
              },
              {
                question: 'Do you provide ongoing support after project completion?',
                answer: 'Yes! We offer post-launch support including maintenance, updates, and optimization for all our projects.',
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
