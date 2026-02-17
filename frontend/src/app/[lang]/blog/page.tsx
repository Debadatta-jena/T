import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Blog - Insights & Innovation | Trionex Technologies',
  description: 'Stay updated with the latest insights in AI, cloud computing, cybersecurity, and enterprise technology. Expert analysis and industry trends.',
  keywords: 'AI blog, cloud computing insights, cybersecurity news, enterprise technology trends, digital transformation',
};

// Sample blog posts data
const blogPosts = [
  {
    id: 'ai-transformation-2024',
    title: 'The AI Transformation: How Enterprises Are Leading the Revolution',
    excerpt: 'Discover how forward-thinking enterprises are leveraging AI to drive unprecedented business growth and competitive advantage in 2024.',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'AI & Machine Learning',
    featured: true,
    image: '/blog/ai-transformation.jpg',
  },
  {
    id: 'cloud-security-best-practices',
    title: 'Cloud Security Best Practices for Enterprise Applications',
    excerpt: 'Essential security frameworks and implementation strategies for protecting enterprise applications in cloud environments.',
    author: 'James Park',
    date: '2024-01-12',
    readTime: '6 min read',
    category: 'Cybersecurity',
    featured: false,
    image: '/blog/cloud-security.jpg',
  },
  {
    id: 'microservices-architecture-guide',
    title: 'Complete Guide to Microservices Architecture in 2024',
    excerpt: 'Everything you need to know about designing, implementing, and managing microservices architectures for enterprise applications.',
    author: 'Marcus Rodriguez',
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'Cloud Architecture',
    featured: false,
    image: '/blog/microservices.jpg',
  },
  {
    id: 'data-analytics-transformation',
    title: 'From Data to Decisions: The Analytics Transformation Journey',
    excerpt: 'How leading enterprises are transforming raw data into actionable business intelligence and competitive advantages.',
    author: 'Dr. Emily Watson',
    date: '2024-01-08',
    readTime: '7 min read',
    category: 'Data Analytics',
    featured: false,
    image: '/blog/data-analytics.jpg',
  },
  {
    id: 'quantum-computing-enterprise',
    title: 'Quantum Computing: Preparing Enterprise Applications for the Future',
    excerpt: 'Understanding quantum computing implications and preparing enterprise applications for quantum-ready architectures.',
    author: 'Dr. Raj Patel',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Innovation',
    featured: false,
    image: '/blog/quantum-computing.jpg',
  },
  {
    id: 'devsecops-implementation',
    title: 'Implementing DevSecOps: A Comprehensive Enterprise Guide',
    excerpt: 'Step-by-step guide to implementing DevSecOps practices for enhanced security and faster development cycles.',
    author: 'Lisa Thompson',
    date: '2024-01-03',
    readTime: '9 min read',
    category: 'DevOps',
    featured: false,
    image: '/blog/devsecops.jpg',
  },
];

const categories = [
  'All Posts',
  'AI & Machine Learning',
  'Cloud Architecture',
  'Cybersecurity',
  'Data Analytics',
  'DevOps',
  'Innovation',
  'Enterprise Software',
];

interface BlogPageProps {
  params: {
    lang: string;
  };
}

export default function BlogPage({ params: { lang } }: BlogPageProps) {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Insights &{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Stay ahead of the curve with expert analysis, industry trends, and cutting-edge insights
              from our team of enterprise technology leaders and AI specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container">
            <div className="mb-8">
              <Badge variant="outline" className="mb-4">Featured Article</Badge>
            </div>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="aspect-[16/10] bg-muted">
                    {/* Placeholder for featured image */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="text-6xl">📈</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{featuredPost.author}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                    </div>

                    <Button asChild>
                      <Link href={`/${lang}/blog/${featuredPost.id}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 border-y bg-muted/30">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All Posts' ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[16/10] bg-muted">
                  {/* Placeholder for post image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-4xl">
                      {post.category === 'AI & Machine Learning' ? '🤖' :
                       post.category === 'Cybersecurity' ? '🔒' :
                       post.category === 'Cloud Architecture' ? '☁️' :
                       post.category === 'Data Analytics' ? '📊' :
                       post.category === 'Innovation' ? '💡' :
                       '⚡'}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground">{post.author}</span>
                    </div>

                    <div className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                  </div>

                  <Button variant="ghost" size="sm" className="w-full mt-4 group-hover:bg-primary/5" asChild>
                    <Link href={`/${lang}/blog/${post.id}`}>
                      Read Article
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Get weekly insights on AI, cloud, cybersecurity, and enterprise technology trends
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                aria-label="Email address"
                className="flex-1 px-4 py-3 rounded-md bg-white text-gray-900 placeholder:text-gray-500"
              />
              <Button size="lg" variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
