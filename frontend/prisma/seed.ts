import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding ...')

  // Create a test admin user
  const hashedPassword = await bcrypt.hash('admin123', 12)

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@trionex.tech' },
    update: {},
    create: {
      email: 'admin@trionex.tech',
      name: 'Admin User',
      password: hashedPassword,
      role: 'admin',
    },
  })

  // Create a test regular user
  const userPassword = await bcrypt.hash('user123', 12)

  const regularUser = await prisma.user.upsert({
    where: { email: 'user@trionex.tech' },
    update: {},
    create: {
      email: 'user@trionex.tech',
      name: 'Regular User',
      password: userPassword,
      role: 'user',
    },
  })

  // Create sample projects
  const projects = [
    {
      title: 'Enterprise AI Platform',
      description: 'Custom AI-powered analytics platform for Fortune 500 company',
      category: 'AI Solutions',
      client: 'TechCorp Global',
      isActive: true,
      sortOrder: 1,
    },
    {
      title: 'E-commerce Web Application',
      description: 'Full-stack e-commerce platform with payment integration',
      category: 'Web Development',
      client: 'RetailMax',
      isActive: true,
      sortOrder: 2,
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication',
      category: 'App Development',
      client: 'FinanceFirst Bank',
      isActive: true,
      sortOrder: 3,
    },
    {
      title: 'Healthcare Dashboard',
      description: 'Real-time healthcare analytics dashboard',
      category: 'Web Development',
      client: 'HealthTech Solutions',
      isActive: true,
      sortOrder: 4,
    },
    {
      title: 'Cloud Migration',
      description: 'AWS cloud infrastructure migration and optimization',
      category: 'Cloud Services',
      client: 'DataFlow Inc',
      isActive: true,
      sortOrder: 5,
    },
  ]

  for (const project of projects) {
    await prisma.project.upsert({
      where: { id: project.title.toLowerCase().replace(/\s+/g, '-') },
      update: {},
      create: project,
    })
  }

  // Create sample testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechCorp Global',
      content: 'Trionex transformed our entire data infrastructure. The AI-powered insights have reduced our operational costs by 40% while improving decision-making speed. Outstanding work!',
      rating: 5,
      isActive: true,
      sortOrder: 1,
    },
    {
      name: 'Marcus Chen',
      role: 'VP of Engineering',
      company: 'DataFlow Inc',
      content: 'The scalability and reliability of Trionex platform allowed us to handle 10x traffic growth without any downtime. Enterprise-grade security gives us complete peace of mind.',
      rating: 5,
      isActive: true,
      sortOrder: 2,
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Chief Data Officer',
      company: 'HealthTech Solutions',
      content: 'In healthcare, compliance and security are paramount. Trionex not only meets but exceeds all regulatory requirements while delivering incredible performance.',
      rating: 5,
      isActive: true,
      sortOrder: 3,
    },
    {
      name: 'James Wilson',
      role: 'CEO',
      company: 'RetailMax',
      content: 'Our new e-commerce platform has increased sales by 60%. The team at Trionex delivered on time and exceeded our expectations.',
      rating: 5,
      isActive: true,
      sortOrder: 4,
    },
  ]

  for (const testimonial of testimonials) {
    await prisma.testimonial.upsert({
      where: { id: testimonial.name.toLowerCase().replace(/\s+/g, '-') },
      update: {},
      create: testimonial,
    })
  }

  // Create sample contacts
  const contacts = [
    {
      name: 'John Smith',
      email: 'john@enterprise.com',
      phone: '+1 555-0101',
      company: 'Enterprise Corp',
      message: 'Interested in AI solutions for our business',
      service: 'AI Solutions',
    },
    {
      name: 'Lisa Wang',
      email: 'lisa@startup.io',
      phone: '+1 555-0102',
      company: 'Startup.io',
      message: 'Need a web application developed',
      service: 'Web Development',
    },
  ]

  for (const contact of contacts) {
    await prisma.contactSubmission.upsert({
      where: { id: contact.email },
      update: {},
      create: contact,
    })
  }

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
