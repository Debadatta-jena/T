import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code, Cloud, Shield, Cpu, Database, Smartphone, Users, BarChart3, Lock, Zap, Globe, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: 'Enterprise Services - AI, Cloud, Security Solutions',
  description: 'Comprehensive enterprise services including AI solutions, cloud services, cybersecurity, and digital transformation. Trusted by Fortune 500 companies worldwide.',
  keywords: 'enterprise services, AI solutions, cloud services, cybersecurity, digital transformation, enterprise software',
};

const services = [
  {
    id: 'ai-solutions',
    title: 'AI & Machine Learning',
    description: 'Advanced AI solutions that transform your business operations with intelligent automation, predictive analytics, and decision-making capabilities.',
    icon: Cpu,
    features: [
      'Machine Learning Model Development',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics Platform',
      'AI-Powered Automation',
      'Custom ML Model Training',
    ],
    benefits: [
      'Reduce operational costs by up to 40%',
      'Improve decision-making accuracy',
      'Automate complex workflows',
      'Gain competitive intelligence',
    ],
    pricing: 'Custom Enterprise Pricing',
    cta: 'Explore AI Solutions',
  },
  {
    id: 'cloud-services',
    title: 'Cloud Architecture & Migration',
    description: 'Comprehensive cloud solutions that modernize your infrastructure with scalable, secure, and cost-effective cloud architectures.',
    icon: Cloud,
    features: [
      'Multi-Cloud Architecture Design',
      'Cloud Migration Strategy',
      'Infrastructure as Code',
      'Serverless Computing',
      'Container Orchestration',
      'Cloud Cost Optimization',
    ],
    benefits: [
      'Reduce infrastructure costs by 30%',
      '99.99% uptime guarantee',
      'Auto-scaling capabilities',
      'Global content delivery',
    ],
    pricing: 'Starting at $50K',
    cta: 'Start Cloud Migration',
  },
  {
    id: 'cybersecurity',
    title: 'Enterprise Cybersecurity',
    description: 'Military-grade security solutions that protect your digital assets with advanced threat detection, zero-trust architecture, and compliance frameworks.',
    icon: Shield,
    features: [
      'Zero Trust Architecture',
      'Advanced Threat Detection',
      'Data Encryption & Privacy',
      'Compliance Management',
      'Security Monitoring',
      'Incident Response',
    ],
    benefits: [
      'SOC 2 Type II & ISO 27001 compliant',
      '24/7 security monitoring',
      'Advanced threat protection',
      'Regulatory compliance',
    ],
    pricing: 'Custom Security Pricing',
    cta: 'Secure Your Business',
  },
  {
    id: 'enterprise-software',
    title: 'Custom Enterprise Software',
    description: 'Tailored software solutions designed for enterprise-scale operations with robust architecture, scalability, and seamless integration capabilities.',
    icon: Code,
    features: [
      'Custom Application Development',
      'System Integration',
      'API Development & Management',
      'Legacy System Modernization',
      'Microservices Architecture',
      'DevOps Implementation',
    ],
    benefits: [
      'Scalable to millions of users',
      'Seamless system integration',
      'Reduced time-to-market',
      'Future-proof architecture',
    ],
    pricing: 'Project-Based Pricing',
    cta: 'Build Your Solution',
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & BI',
    description: 'Transform your data into actionable insights with advanced analytics, real-time dashboards, and business intelligence solutions.',
    icon: BarChart3,
    features: [
      'Real-Time Data Processing',
      'Business Intelligence Dashboards',
      'Data Warehousing Solutions',
      'ETL Pipeline Development',
      'Advanced Analytics',
      'Self-Service Analytics',
    ],
    benefits: [
      'Real-time business insights',
      'Data-driven decision making',
      'Improved operational efficiency',
      'Predictive capabilities',
    ],
    pricing: 'Starting at $25K/month',
    cta: 'Unlock Your Data',
  },
  {
    id: 'mobile-enterprise',
    title: 'Mobile Enterprise Solutions',
    description: 'Enterprise-grade mobile applications that enhance workforce productivity with secure, scalable, and user-friendly mobile experiences.',
    icon: Smartphone,
    features: [
      'Native Mobile Development',
      'Cross-Platform Solutions',
      'Mobile App Security',
      'Offline Capabilities',
      'Push Notifications',
      'Mobile Analytics',
    ],
    benefits: [
      'Enhanced workforce productivity',
      'Secure mobile access',
      'Offline functionality',
      'Cross-device compatibility',
    ],
    pricing: 'Starting at $75K',
    cta: 'Go Mobile',
  },
];

const industries = [
  {
    name: 'Financial Services',
    description: 'Secure, compliant solutions for banking, fintech, and financial institutions.',
    services: ['AI Solutions', 'Cybersecurity', 'Data Analytics'],
  },
  {
    name: 'Healthcare & Life Sciences',
    description: 'HIPAA-compliant platforms for healthcare providers and life sciences companies.',
    services: ['Cloud Services', 'Data Analytics', 'Custom Software'],
  },
  {
    name: 'Manufacturing',
    description: 'IoT-enabled solutions for smart manufacturing and industrial operations.',
    services: ['AI Solutions', 'Cloud Services', 'Mobile Solutions'],
  },
  {
    name: 'Retail & E-commerce',
    description: 'Scalable platforms for retail operations and customer experience enhancement.',
    services: ['Cloud Services', 'Data Analytics', 'Mobile Solutions'],
  },
  {
    name: 'Government & Public Sector',
    description: 'Secure, compliant solutions meeting government standards and regulations.',
    services: ['Cybersecurity', 'Cloud Services', 'Custom Software'],
  },
  {
    name: 'Energy & Utilities',
    description: 'Mission-critical systems for energy production and utility management.',
    services: ['AI Solutions', 'Cloud Services', 'Data Analytics'],
  },
];

interface ServicesPageProps {
  params: {
    lang: string;
  };
}

export default function ServicesPage({ params: { lang } }: ServicesPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">
              Enterprise Services
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Enterprise Solutions
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              From AI-powered intelligence to enterprise-grade security, our comprehensive suite of services
              is designed to transform your business operations and drive sustainable growth.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href={`/${lang}/contact`}>
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={`/${lang}/solutions`}>
                  View Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              <TabsTrigger value="all">All Services</TabsTrigger>
              <TabsTrigger value="ai">AI & ML</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-12">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <Card key={service.id} className="group hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <Badge variant="secondary">{service.pricing}</Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Business Benefits:</h4>
                          <ul className="space-y-1">
                            {service.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center text-sm text-muted-foreground">
                                <Zap className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button className="w-full mt-6" asChild>
                          <Link href={`/${lang}/services/${service.id}`}>
                            {service.cta}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ai" className="space-y-12">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.filter(s => s.id === 'ai-solutions' || s.id === 'data-analytics').map((service) => (
                  <Card key={service.id} className="group hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <Badge variant="secondary">{service.pricing}</Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" asChild>
                        <Link href={`/${lang}/services/${service.id}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cloud" className="space-y-12">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.filter(s => s.id === 'cloud-services' || s.id === 'enterprise-software').map((service) => (
                  <Card key={service.id} className="group hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <Badge variant="secondary">{service.pricing}</Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" asChild>
                        <Link href={`/${lang}/services/${service.id}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="security" className="space-y-12">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.filter(s => s.id === 'cybersecurity').map((service) => (
                  <Card key={service.id} className="group hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <Badge variant="secondary">{service.pricing}</Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" asChild>
                        <Link href={`/${lang}/services/${service.id}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Industry Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tailored solutions for specific industry requirements and regulatory compliance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{industry.name}</CardTitle>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {industry.services.map((service, serviceIndex) => (
                      <Badge key={serviceIndex} variant="secondary">{service}</Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/${lang}/solutions/industry/${industry.name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Process</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A proven methodology that ensures successful delivery of enterprise solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Discovery & Strategy',
                description: 'Comprehensive assessment of your business needs, technical requirements, and strategic objectives.',
              },
              {
                step: '02',
                title: 'Design & Architecture',
                description: 'Creation of scalable, secure architecture designs with detailed technical specifications.',
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'Agile development with continuous integration, automated testing, and quality assurance.',
              },
              {
                step: '04',
                title: 'Deployment & Support',
                description: 'Seamless deployment, training, and ongoing support with 24/7 monitoring and maintenance.',
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
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
              Let's discuss how our enterprise services can drive your digital transformation journey.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" className="h-12 px-8" asChild>
                <Link href={`/${lang}/contact`}>
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href={`/${lang}/solutions/case-studies`}>
                  View Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
