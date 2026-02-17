import { LeadData, ValidationError } from '@/types/chatbot'

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/<[^>]*>/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .slice(0, 500) // Limit length
}

// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Phone validation
export const isValidPhone = (phone: string): boolean => {
  const cleaned = phone.replace(/[^0-9+]/g, '')
  // Remove plus for counting digits
  const digits = cleaned.replace(/\D/g, '')
  // Accept common phone lengths between 10 and 15 digits
  return digits.length >= 10 && digits.length <= 15
}

// Name validation
export const isValidName = (name: string): boolean => {
  const nameTrimmed = name.trim()
  if (!nameTrimmed) return false
  const nameRegex = /^\p{L}[\p{L}\s'-]{1,49}$/u
  return nameRegex.test(nameTrimmed)
}

// Form validation
export const validateLeadData = (data: Partial<LeadData>): ValidationError[] => {
  const errors: ValidationError[] = []

  if (!data.name || !isValidName(data.name)) {
    errors.push({
      field: 'name',
      message: 'Please enter a valid name (2-50 characters, letters only)'
    })
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push({
      field: 'email',
      message: 'Please enter a valid email address'
    })
  }

  if (!data.phone || !isValidPhone(data.phone)) {
    errors.push({
      field: 'phone',
      message: 'Please enter a valid phone number'
    })
  }

  if (!data.businessType || data.businessType.trim() === '') {
    errors.push({
      field: 'businessType',
      message: 'Please select a business type'
    })
  }

  return errors
}

// Local storage utilities
export const storage = {
  // Save lead to local storage
  saveLead: (lead: LeadData): void => {
    try {
      const leads = storage.getLeads()
      leads.push(lead)
      localStorage.setItem('chatbot_leads', JSON.stringify(leads))
    } catch (error) {
      console.warn('Failed to save lead to localStorage:', error)
    }
  },

  // Get all leads from local storage
  getLeads: (): LeadData[] => {
    try {
      const stored = localStorage.getItem('chatbot_leads')
      if (!stored) return []
      const parsed = JSON.parse(stored)
      // Convert timestamp strings back to Date objects when possible
      return parsed.map((item: any) => ({
        ...item,
        timestamp: item.timestamp ? new Date(item.timestamp) : undefined,
      }))
    } catch (error) {
      console.warn('Failed to get leads from localStorage:', error)
      return []
    }
  },

  // Save conversation to local storage
  saveConversation: (conversationId: string, messages: any[]): void => {
    try {
      const conversations = storage.getConversations()
      conversations[conversationId] = {
        messages,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('chatbot_conversations', JSON.stringify(conversations))
    } catch (error) {
      console.warn('Failed to save conversation to localStorage:', error)
    }
  },

  // Get conversations from local storage
  getConversations: (): Record<string, any> => {
    try {
      const stored = localStorage.getItem('chatbot_conversations')
      if (!stored) return {}
      const parsed = JSON.parse(stored)
      // Convert message timestamps to Date objects for callers
      Object.keys(parsed).forEach(key => {
        const convo = parsed[key]
        if (convo?.messages && Array.isArray(convo.messages)) {
          convo.messages = convo.messages.map((m: any) => ({
            ...m,
            timestamp: m.timestamp ? new Date(m.timestamp) : undefined,
          }))
        }
      })
      return parsed
    } catch (error) {
      console.warn('Failed to get conversations from localStorage:', error)
      return {}
    }
  },

  // Clear all chatbot data
  clearData: (): void => {
    try {
      localStorage.removeItem('chatbot_leads')
      localStorage.removeItem('chatbot_conversations')
    } catch (error) {
      console.warn('Failed to clear chatbot data:', error)
    }
  }
}

// Generate unique ID
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// Format timestamp
export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  })
}

// Delay utility for typing effect
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Check if device is mobile
export const isMobile = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

// Format phone number for display
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
  }
  return phone
}

// Fields for lead form (used by LeadForm component)
export const LEAD_FORM_FIELDS = [
  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Full name', required: true },
  { name: 'businessType', label: 'Business Type', type: 'select', options: ['Startup', 'SMB', 'Enterprise'], placeholder: 'Select business type', required: true },
  { name: 'phone', label: 'Phone Number', type: 'text', placeholder: 'Phone number', required: true },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'email@example.com', required: true }
]

