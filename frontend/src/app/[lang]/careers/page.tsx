import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, DollarSign, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Careers - Join Our Team | Trionex Technologies',
  description: 'Explore career opportunities at Trionex Technologies. Join our team of innovators in AI, cloud, cybersecurity, and enterprise software development.',
  keywords: 'careers, jobs, AI engineer, cloud architect, cybersecurity specialist, software engineer, enterprise technology',
};

// Sample job openings
const jobOpenings = [
  {
    id: 'senior-ai-engineer',
    title: 'Senior AI Engineer',
    department: 'AI & Machine Learning',
    location: 'San Francisco, CA (Remote Available)',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$150K - $220K',
    description: 'Lead the development of cutting-edge AI solutions for enterprise clients. Work with the latest ML frameworks and deploy models at scale.',
    requirements: [
      'PhD or MS in Computer Science, AI, or related field',
      '5+ years of experience in AI/ML development',
      'Expertise in TensorFlow, PyTorch, or similar frameworks',
      'Experience with MLOps and model deployment',
      'Strong background in distributed systems',
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work arrangements and remote options',
      'Professional development budget',
      'Annual company retreat',
    ],
    featured: true,
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Solutions Architect',
    department: 'Cloud Engineering',
    location: 'New York, NY (Remote Available)',
    type: 'Full-time',
    experience: '7+ years',
    salary: '$160K - $240K',
    description: 'Design and implement scalable cloud architectures for Fortune 500 clients. Lead migration projects and optimize cloud infrastructure.',
    requirements: [
      'AWS/Azure/GCP certifications required',
      '7+ years of cloud architecture experience',
      'Expertise in Infrastructure as Code (Terraform, CloudFormation)',
      'Experience with Kubernetes and container orchestration',
      'Strong background in DevOps practices',
    ],
    benefits: [
      'Top-tier compensation package',
      'Unlimited PTO policy',
      'Home office stipend',
      'Annual learning budget ($5K)',
      'Stock options and performance bonuses',
    ],
    featured: false,
  },
  {
    id: 'cybersecurity-engineer',
    title: 'Enterprise Security Engineer',
    department: 'Cybersecurity',
    location: 'London, UK (Remote Available)',
    type: 'Full-time',
    experience: '4+ years',
    salary: '£80K - £130K',
    description: 'Protect enterprise systems and data with advanced security solutions. Implement zero-trust architectures and threat detection systems.',
    requirements: [
      'CISSP, CISM, or equivalent certification',
      '4+ years in enterprise cybersecurity',
      'Experience with SIEM and threat intelligence',
      'Knowledge of zero-trust security models',
      'Familiarity with compliance frameworks (SOC 2, ISO 27001)',
    ],
    benefits: [
      'Competitive UK salary and benefits',
      'Private medical insurance',
      'Flexible working hours',
      'Professional certification support',
      'International relocation assistance',
    ],
    featured: false,
  },
  {
    id: 'full-stack-developer',
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'Singapore (Remote Available)',
    type: 'Full-time',
    experience: '3+ years',
    salary: 'SGD $120K - $180K',
    description: 'Build scalable web applications and APIs for enterprise clients. Work across the full stack with modern technologies.',
    requirements: [
      '3+ years of full-stack development experience',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS/Azure)',
      'Knowledge of microservices architecture',
      'Strong understanding of security best practices',
    ],
    benefits: [
      'Competitive Singapore salary',
      'Comprehensive health insurance',
      'Remote work flexibility',
      'Annual tech conference budget',
      'Career development opportunities',
    ],
    featured: false,
  },
];

const companyBenefits = [
  {
    icon: '💰',
    title: 'Competitive Compensation',
    description: 'Top-tier salaries, equity packages, and performance bonuses.',
  },
  {
    icon: '🏥',
    title: 'Comprehensive Health',
    description: 'Medical, dental, vision, and mental health coverage for you and your family.',
  },
  {
    icon: '🏠',
    title: 'Flexible Work',
    description: 'Remote-first culture with flexible hours and unlimited PTO.',
  },
  {
    icon: '📚',
    title: 'Learning & Development',
    description: 'Annual learning budget, conference attendance, and professional development.',
  },
  {
    icon: '🌍',
    title: 'Global Impact',
    description: 'Work on projects that transform industries and impact millions of users.',
  },
  {
    icon: '🤝',
    title: 'Inclusive Culture',
    description: 'Diverse, inclusive workplace where every voice is valued and heard.',
  },
];

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Senior AI Engineer',
    content: 'Trionex gave me the opportunity to work on cutting-edge AI projects that I never thought possible. The culture of innovation and support for professional growth is unmatched.',
    avatar: 'AC',
    years: '2 years',
  },
  {
    name: 'Maria Rodriguez',
    role: 'Cloud Architect',
    content: 'The level of technical challenge and the impact of our work on enterprise clients is incredible. I\'ve grown tremendously both technically and professionally here.',
    avatar: 'MR',
    years: '3 years',
  },
  {
    name: 'David Kim',
    role: 'Security Engineer',
    content: 'Working at Trionex means being at the forefront of cybersecurity innovation. The team is world-class and the mission-driven work is incredibly fulfilling.',
    avatar: 'DK',
    years: '1.5 years',
  },
];

interface CareersPageProps {
  params: {
    lang: string;
  };
}

export default function CareersPage({ params: { lang } }: CareersPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Join Our Mission to{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Transform Technology
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Be part of a team that's shaping the future of enterprise technology.
              Work on groundbreaking projects in AI, cloud, cybersecurity, and digital transformation
              that impact millions of users worldwide.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="#openings">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 border-y bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15</div>
              <div className="text-sm text-muted-foreground">Global Offices</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Join Trionex?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're not just another tech company. We're a mission-driven organization
              that's pushing the boundaries of what's possible in enterprise technology.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {companyBenefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Team Says</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from our talented team members about their experience at Trionex.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
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
                      <div className="text-xs text-muted-foreground">{testimonial.years} at Trionex</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Open Positions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join our team and work on projects that are transforming industries worldwide.
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className={`hover:shadow-xl transition-all duration-300 ${job.featured ? 'border-primary/50 bg-primary/5' : ''}`}>
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {job.featured && <Badge className="bg-primary">Featured</Badge>}
                        <Badge variant="outline">{job.department}</Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <p className="text-muted-foreground mb-3">{job.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {job.experience}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" asChild>
                        <Link href={`/${lang}/careers/${job.id}`}>
                          Learn More
                        </Link>
                      </Button>
                      <Button asChild>
                        <Link href={`/${lang}/careers/${job.id}/apply`}>
                          Apply Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Requirements</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Benefits</h4>
                      <ul className="space-y-1">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No positions message */}
          {jobOpenings.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No Open Positions Right Now</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button asChild>
                <Link href={`/${lang}/contact`}>
                  Send Your Resume
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Join Our Mission?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              We're always looking for exceptional talent to join our team.
              Even if you don't see a perfect match, we'd love to hear from you.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <Link href={`/${lang}/contact`}>
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href={`/${lang}/contact?subject=careers`}>
                  Send Your Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
