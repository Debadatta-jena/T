import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, Users, Target, Heart, Shield, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'About Trionex Technologies - Our Mission, Vision & Leadership',
  description: 'Learn about Trionex Technologies - a global leader in enterprise software, AI solutions, and cloud services. Meet our leadership team and discover our commitment to innovation.',
  keywords: 'about trionex, company mission, leadership team, enterprise software company, AI solutions company',
};

const leadership = [
  {
    name: 'Debadatta Jena',
    role: 'Founder & CEO',
    bio: 'Visionary leader driving innovation in AI and software solutions. Passionate about transforming businesses through cutting-edge technology.',
    image: '/leadership/debadatta-jena.jpg',
    linkedin: 'https://linkedin.com/in/debadatta-jena',
  },
];

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We push the boundaries of technology to solve the world\'s most complex challenges.',
  },
  {
    icon: Shield,
    title: 'Security by Design',
    description: 'Every solution we build incorporates enterprise-grade security from the ground up.',
  },
  {
    icon: Heart,
    title: 'Customer Obsession',
    description: 'Our customers\' success is our success. We measure our performance by their achievements.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We operate worldwide, serving enterprises across every major industry and region.',
  },
  {
    icon: Users,
    title: 'Inclusive Excellence',
    description: 'We foster a diverse, inclusive culture where every voice contributes to our mission.',
  },
  {
    icon: Zap,
    title: 'Operational Excellence',
    description: 'We maintain the highest standards of quality, reliability, and performance in everything we do.',
  },
];

const milestones = [
  {
    year: '2024',
    title: 'Company Founded',
    description: 'Trionex Technologies founded with a vision to provide professional AI and software solutions.',
  },
  {
    year: '2024',
    title: 'Building Our Portfolio',
    description: 'Currently working on our first projects and establishing partnerships with clients.',
  },
  {
    year: '2025',
    title: 'Growing Our Team',
    description: 'Planning to expand our team as we grow our client base.',
  },
  {
    year: '2025',
    title: 'More Projects',
    description: 'Aiming to complete multiple successful projects and build long-term client relationships.',
  },
];

interface AboutPageProps {
  params: {
    lang: string;
  };
}

export default function AboutPage({ params: { lang } }: AboutPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">
              About Trionex
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Transforming Enterprises Through{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Intelligent Technology
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We're on a mission to democratize access to enterprise-grade AI and cloud solutions,
              empowering organizations worldwide to achieve unprecedented levels of efficiency,
              security, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-16 md:grid-cols-2">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower enterprises with intelligent, secure, and scalable technology solutions
                  that drive digital transformation and sustainable growth. We believe that by
                  combining cutting-edge AI with enterprise-grade security and cloud-native
                  architectures, we can solve the world's most complex business challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the global leader in enterprise AI and cloud solutions, trusted by
                  organizations worldwide for mission-critical operations. We envision a future
                  where every enterprise can harness the power of AI securely and efficiently,
                  regardless of size or industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Leadership Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Meet the experienced leaders driving innovation and excellence at Trionex Technologies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {leadership.map((leader, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted">
                  {/* Placeholder for leader image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium mb-3">{leader.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{leader.bio}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                      View LinkedIn
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Journey</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Key milestones in our mission to transform enterprise technology.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <Badge variant="secondary">{milestone.year}</Badge>
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <Card className="p-12 text-center bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Ready to Work with Us?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of enterprise clients who trust Trionex Technologies for their most critical operations.
                Let's discuss how we can transform your business.
              </p>
              <div className="flex items-center justify-center gap-x-6">
                <Button size="lg" asChild>
                  <Link href={`/${lang}/contact`}>
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={`/${lang}/services`}>
                    View Services
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
