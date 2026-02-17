import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const stats = [
  { label: 'Projects Completed', value: '15+', icon: Users },
  { label: 'Happy Clients', value: '12+', icon: Award },
  { label: 'Years Experience', value: '1+', icon: TrendingUp },
  { label: 'Countries Served', value: '3+', icon: Star },
];

const features = [
  {
    title: 'AI-Powered Intelligence',
    description: 'Advanced machine learning algorithms that learn from your data to provide predictive insights and automated decision-making.',
    icon: '🤖',
  },
  {
    title: 'Enterprise Security',
    description: 'Military-grade encryption, zero-trust architecture, and compliance with SOC 2, ISO 27001, and GDPR standards.',
    icon: '🔒',
  },
  {
    title: 'Cloud-Native Scalability',
    description: 'Built for the cloud with microservices architecture supporting millions of concurrent users and petabytes of data.',
    icon: '☁️',
  },
  {
    title: 'Real-Time Analytics',
    description: 'Live dashboards and reporting with sub-second latency for critical business intelligence and monitoring.',
    icon: '📊',
  },
  {
    title: 'Multi-Cloud Deployment',
    description: 'Deploy across AWS, Azure, and Google Cloud with unified management and seamless data portability.',
    icon: '🌐',
  },
  {
    title: '24/7 Global Support',
    description: 'Round-the-clock technical support with dedicated account managers and enterprise SLA guarantees.',
    icon: '🛠️',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp Global',
    company: 'Fortune 500 Technology Company',
    content: 'Trionex transformed our entire data infrastructure. The AI-powered insights have reduced our operational costs by 40% while improving decision-making speed.',
    avatar: 'SJ',
  },
  {
    name: 'Marcus Chen',
    role: 'VP of Engineering, DataFlow Inc',
    company: 'Leading Analytics Platform',
    content: 'The scalability and reliability of Trionex platform allowed us to handle 10x traffic growth without any downtime. Enterprise-grade security gives us complete peace of mind.',
    avatar: 'MC',
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Chief Data Officer, HealthTech Solutions',
    company: 'Healthcare Technology Provider',
    content: 'In healthcare, compliance and security are paramount. Trionex not only meets but exceeds all regulatory requirements while delivering incredible performance.',
    avatar: 'ER',
  },
];

const industries = [
  'Financial Services',
  'Healthcare & Life Sciences',
  'Manufacturing',
  'Retail & E-commerce',
  'Government & Public Sector',
  'Energy & Utilities',
  'Telecommunications',
  'Transportation & Logistics',
];

export default function HomePage() {
  const lang = 'en'; // Default to English for now
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-4">
              🚀 Now in Beta - Join 500K+ Users
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Enterprise-grade platform combining artificial intelligence, cloud-native architecture, and military-grade security.
              Trusted by Fortune 500 companies worldwide for mission-critical operations.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="h-12 px-8" asChild>
                <Link href={`/${lang}/contact`}>
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8" asChild>
                <Link href={`/${lang}/solutions`}>
                  View Solutions
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                SOC 2 Type II Certified
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                ISO 27001 Compliant
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                GDPR Ready
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                99.99% Uptime SLA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/30">
        <div className="container py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Enterprise-Grade Features Built for Scale
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Advanced capabilities designed for Fortune 500 companies and mission-critical applications.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted Across Industries
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From financial services to healthcare, our platform powers critical operations worldwide.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-background rounded-lg border hover:shadow-md transition-shadow">
                <span className="font-medium text-center">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Enterprise Clients Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Trusted by industry leaders for mission-critical operations and transformative results.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Join hundreds of enterprise clients who trust Trionex for their most critical operations.
              Start your free trial today.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" className="h-12 px-8" asChild>
                <Link href={`/${lang}/contact`}>
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href={`/${lang}/contact`}>
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
