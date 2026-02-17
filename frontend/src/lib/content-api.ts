// Content API - Fetch dynamic content from database
import { PrismaClient } from '@prisma/client'
import type { PrismaClient as PrismaClientType } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientType | undefined
}

export const prisma: PrismaClientType = (globalForPrisma.prisma ?? new PrismaClient()) as PrismaClientType

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Services API
export async function getServices() {
  try {
    const services = await prisma.service.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
    })
    return services.map((s: any) => ({
      ...s,
      features: JSON.parse(s.features || '[]'),
    }))
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export async function getServiceById(id: string) {
  try {
    const service = await prisma.service.findUnique({
      where: { id },
    })
    if (service) {
      return {
        ...service,
        features: JSON.parse(service.features || '[]'),
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching service:', error)
    return null
  }
}

// Projects API
export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
    })
    return projects
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function getProjectById(id: string) {
  try {
    return await prisma.project.findUnique({
      where: { id },
    })
  } catch (error) {
    console.error('Error fetching project:', error)
    return null
  }
}

// Testimonials API
export async function getTestimonials() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
    })
    return testimonials
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

// Blog API
export async function getBlogPosts() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { isActive: true, isPublished: true },
      orderBy: { publishedAt: 'desc' },
    })
    return posts.map((p: any) => ({
      ...p,
      tags: p.tags ? JSON.parse(p.tags) : [],
    }))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug },
    })
    if (post) {
      return {
        ...post,
        tags: post.tags ? JSON.parse(post.tags) : [],
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

// Contact Form API
export async function submitContactForm(data: {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  service?: string
}) {
  try {
    const submission = await prisma.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        company: data.company || '',
        message: data.message,
        service: data.service || '',
      },
    })
    return { success: true, data: submission }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: 'Failed to submit form' }
  }
}

// Site Settings API
export async function getSiteSetting(key: string) {
  try {
    const setting = await prisma.siteSettings.findUnique({
      where: { key },
    })
    return setting?.value || null
  } catch (error) {
    console.error('Error fetching site setting:', error)
    return null
  }
}

export async function setSiteSetting(key: string, value: string) {
  try {
    const setting = await prisma.siteSettings.upsert({
      where: { key },
      update: { value },
      create: { key, value },
    })
    return { success: true, data: setting }
  } catch (error) {
    console.error('Error setting site setting:', error)
    return { success: false, error: 'Failed to save setting' }
  }
}
