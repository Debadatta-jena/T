import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Award, TrendingUp, Shield, Zap, Globe, Cpu, Cloud, Database, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'AI Solutions - Advanced Artificial Intelligence & Machine Learning | Trionex Technologies',
  description: 'Transform your business with enterprise AI solutions. Custom machine learning models, predictive analytics, and AI-powered automation for competitive advantage.',
  keywords: 'AI solutions, machine learning, artificial intelligence, predictive analytics, AI automation, enterprise AI, custom ML models',
};

const features = [
  {
    icon: Cpu,
    title: 'Machine Learning Model Development',
    description: 'Custom ML models trained on your data with industry-leading accuracy and performance.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast trends, identify patterns, and make data-driven decisions with advanced analytics.',
  },
  {
    icon: Zap,
    title: 'AI-Powered Automation',
    description: 'Streamline workflows and reduce manual tasks with intelligent automation solutions.',
  },
  {
    icon: Database,
    title: 'Natural Language Processing',
    description: 'Understand and process human language with advanced NLP capabilities.',
  },
  {
    icon: Shield,
    title: 'Computer Vision Solutions',
    description: 'Extract insights from images and videos with state-of-the-art computer vision technology.',
  },
  {
    icon: Globe,
    title: 'MLOps & Model Deployment',
    description: 'Production-ready ML pipelines with automated deployment and monitoring.',
  },
];

const useCases = [
  {
    industry: 'Financial Services',
    applications: [
      'Fraud detection and prevention',
      'Risk assessment and scoring',
      'Algorithmic trading optimization',
      'Customer behavior analysis',
      'Regulatory compliance automation',
    ],
  },
  {
    industry: 'Healthcare',
    applications: [
      'Medical image analysis',
      'Drug discovery acceleration',
      'Patient risk prediction',
      'Treatment personalization',
      'Administrative workflow automation',
    ],
  },
  {
    industry: 'Manufacturing',
    applications: [
      'Predictive maintenance',
      'Quality control automation',
      'Supply chain optimization',
      'Production line efficiency',
      'Defect detection and prevention',
    ],
  },
  {
    industry: 'Retail & E-commerce',
    applications: [
      'Personalized recommendations',
      'Demand forecasting',
      'Inventory optimization',
      'Customer sentiment analysis',
      'Dynamic pricing strategies',
    ],
  },
];

const testimonials = [
  {
    name: 'Dr. Michael Chen',
    role: 'Chief Data Officer',
    company: 'Global Finance Corp',
    content: 'Trionex AI solutions transformed our fraud detection capabilities. We reduced false positives by 60% while catching 95% of fraudulent transactions.',
    avatar: 'MC',
    metrics: ['60% fewer false positives', '95% fraud detection rate', '$2M annual savings'],
  },
  {
    name: 'Sarah Rodriguez',
    role: 'VP of Operations',
    company: 'MediTech Solutions',
    content: 'The predictive analytics platform helped us reduce patient readmission rates by 30% and improve treatment outcomes across our network.',
    avatar: 'SR',
    metrics: ['30% lower readmissions', '25% cost reduction', 'Improved patient outcomes'],
  },
];

const pricingTiers = [
  {
    name: 'Starter',
    price: 'Custom',
    description: 'Perfect for small to medium businesses getting started with AI',
    features: [
      'Basic ML model development',
      'Data preprocessing and cleaning',
      'Standard model deployment',
      'Email support',
      'Basic documentation',
    ],
  },
  {
    name: 'Professional',
    price: 'Custom',
    description: 'Advanced AI solutions for growing enterprises',
    features: [
      'Advanced ML model development',
      'Custom algorithm design',
      'Real-time model serving',
      'Priority support',
      'Advanced analytics dashboard',
      'Model performance monitoring',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Full-scale AI transformation for large organizations',
    features: [
      'Custom AI platform development',
      'Multi-model orchestration',
      'Enterprise-grade security',
      '24/7 dedicated support',
      'Custom integrations',
      'Advanced MLOps capabilities',
      'Regulatory compliance support',
    ],
  },
];

interface AISolutionsPageProps {
  params: {
    lang: string;
  };
}

export default function AISolutionsPage({ params: { lang } }: AISolutionsPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-4">
              🚀 AI Solutions
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Enterprise AI
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Harness the power of artificial intelligence to drive innovation, optimize operations,
              and gain competitive advantage. Our enterprise AI solutions deliver measurable results
              across every industry.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href={`/${lang}/contact`}>
                  Start AI Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={`/${lang}/solutions/case-studies`}>
                  View Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Our AI Solutions?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Enterprise-grade AI capabilities designed for real business impact
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Measurable ROI</h3>
                <p className="text-muted-foreground mb-4">
                  Average 300% ROI within 12 months. Our AI solutions deliver quantifiable business value.
                </p>
                <div className="text-2xl font-bold text-primary">300%</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground mb-4">
                  Sub-second response times with our optimized AI infrastructure and edge computing.
                </p>
                <div className="text-2xl font-bold text-primary">&lt;100ms</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground mb-4">
                  SOC 2 compliant with end-to-end encryption and zero-trust architecture.
                </p>
                <div className="text-2xl font-bold text-primary">SOC 2</div>
                <div className="text-sm text-muted-foreground">Type II Certified</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Comprehensive AI Capabilities</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From machine learning to natural language processing, we deliver the full spectrum of AI technologies
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">AI Across Industries</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tailored AI solutions designed for specific industry requirements and challenges
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {useCases.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl mb-4">{industry.industry}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {industry.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Success Stories</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real results from enterprises leveraging our AI solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    {testimonial.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-sm font-semibold text-primary">{metric}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Flexible Pricing Options</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Custom AI solutions tailored to your specific needs and budget
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.name === 'Enterprise' ? 'border-primary shadow-lg' : ''}`}>
                {tier.name === 'Enterprise' && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{tier.price}</div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={tier.name === 'Enterprise' ? 'default' : 'outline'} asChild>
                    <Link href={`/${lang}/contact?service=ai-${tier.name.toLowerCase()}`}>
                      Get Started
                    </Link>
                  </Button>
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
              Ready to Harness the Power of AI?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Let's discuss how AI can transform your business operations and drive competitive advantage.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" className="h-12 px-8" asChild>
                <Link href={`/${lang}/contact`}>
                  Schedule AI Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href={`/${lang}/resources/ai-guide`}>
                  Download AI Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
