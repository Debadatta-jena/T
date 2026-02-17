import {
  sanitizeInput,
  isValidEmail,
  isValidPhone,
  isValidName,
  validateLeadData,
  generateId,
  formatTime,
  formatPhone,
  isMobile,
  storage
} from './chatbot-utils'
import { LeadData } from '@/types/chatbot'

describe('Chatbot Utils', () => {
  beforeEach(() => {
    localStorage.clear()
    jest.clearAllMocks()
  })

  describe('sanitizeInput', () => {
    it('removes HTML tags', () => {
      expect(sanitizeInput('<script>alert("xss")</script>')).toBe('alert("xss")')
      expect(sanitizeInput('<p>Hello</p>')).toBe('Hello')
    })

    it('removes javascript protocol', () => {
      expect(sanitizeInput('javascript:alert("xss")')).toBe('alert("xss")')
    })

    it('removes event handlers', () => {
      expect(sanitizeInput('onclick="alert("xss")')).toBe('"alert("xss")')
    })

    it('trims whitespace', () => {
      expect(sanitizeInput('  hello world  ')).toBe('hello world')
    })

    it('limits length', () => {
      const longInput = 'a'.repeat(600)
      expect(sanitizeInput(longInput)).toHaveLength(500)
    })
  })

  describe('isValidEmail', () => {
    it('validates correct emails', () => {
      expect(isValidEmail('test@example.com')).toBe(true)
      expect(isValidEmail('user.name+tag@domain.co.uk')).toBe(true)
      expect(isValidEmail('user123@test-domain.org')).toBe(true)
    })

    it('rejects invalid emails', () => {
      expect(isValidEmail('invalid')).toBe(false)
      expect(isValidEmail('test@')).toBe(false)
      expect(isValidEmail('@example.com')).toBe(false)
      expect(isValidEmail('test.example.com')).toBe(false)
      expect(isValidEmail('test@.com')).toBe(false)
    })
  })

  describe('isValidPhone', () => {
    it('validates correct phone numbers', () => {
      expect(isValidPhone('+1 (555) 123-4567')).toBe(true)
      expect(isValidPhone('555-123-4567')).toBe(true)
      expect(isValidPhone('(555) 123-4567')).toBe(true)
      expect(isValidPhone('+44 20 7123 4567')).toBe(true)
    })

    it('rejects invalid phone numbers', () => {
      expect(isValidPhone('123')).toBe(false)
      expect(isValidPhone('abc-def-ghij')).toBe(false)
      expect(isValidPhone('')).toBe(false)
    })
  })

  describe('isValidName', () => {
    it('validates correct names', () => {
      expect(isValidName('John Doe')).toBe(true)
      expect(isValidName('Mary Jane Smith')).toBe(true)
      expect(isValidName('José')).toBe(true)
    })

    it('rejects invalid names', () => {
      expect(isValidName('J')).toBe(false) // Too short
      expect(isValidName('John123')).toBe(false) // Contains numbers
      expect(isValidName('')).toBe(false) // Empty
      expect(isValidName('   ')).toBe(false) // Only spaces
    })
  })

  describe('validateLeadData', () => {
    const validLeadData: LeadData = {
      name: 'John Doe',
      businessType: 'Startup',
      phone: '+1 (555) 123-4567',
      email: 'john@example.com',
      timestamp: new Date()
    }

    it('validates complete valid data', () => {
      const errors = validateLeadData(validLeadData)
      expect(errors).toHaveLength(0)
    })

    it('detects invalid name', () => {
      const invalidData = { ...validLeadData, name: 'J' }
      const errors = validateLeadData(invalidData)
      expect(errors).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ field: 'name' })
        ])
      )
    })

    it('detects invalid email', () => {
      const invalidData = { ...validLeadData, email: 'invalid-email' }
      const errors = validateLeadData(invalidData)
      expect(errors).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ field: 'email' })
        ])
      )
    })

    it('detects invalid phone', () => {
      const invalidData = { ...validLeadData, phone: '123' }
      const errors = validateLeadData(invalidData)
      expect(errors).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ field: 'phone' })
        ])
      )
    })

    it('detects missing business type', () => {
      const invalidData = { ...validLeadData, businessType: '' }
      const errors = validateLeadData(invalidData)
      expect(errors).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ field: 'businessType' })
        ])
      )
    })
  })

  describe('generateId', () => {
    it('generates unique IDs', () => {
      const id1 = generateId()
      const id2 = generateId()
      
      expect(id1).not.toBe(id2)
      expect(typeof id1).toBe('string')
      expect(id1.length).toBeGreaterThan(0)
    })
  })

  describe('formatTime', () => {
    it('formats time correctly', () => {
      const date = new Date('2024-01-15T14:30:00')
      const formatted = formatTime(date)
      
      expect(formatted).toMatch(/^(1[0-2]|[1-9]):[0-5][0-9]\s?(AM|PM)$/i)
    })
  })

  describe('formatPhone', () => {
    it('formats 10-digit numbers', () => {
      expect(formatPhone('5551234567')).toBe('(555) 123-4567')
    })

    it('returns original for other formats', () => {
      expect(formatPhone('+1 (555) 123-4567')).toBe('+1 (555) 123-4567')
      expect(formatPhone('invalid')).toBe('invalid')
    })
  })

  describe('isMobile', () => {
    it('detects mobile devices', () => {
      // Mock mobile user agent
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
        configurable: true
      })
      
      expect(isMobile()).toBe(true)
    })

    it('detects desktop devices', () => {
      // Mock desktop user agent
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        configurable: true
      })
      
      expect(isMobile()).toBe(false)
    })
  })

  describe('storage', () => {
    const mockLead: LeadData = {
      name: 'Test User',
      businessType: 'Startup',
      phone: '+1 (555) 123-4567',
      email: 'test@example.com',
      timestamp: new Date()
    }

    describe('saveLead', () => {
      it('saves lead to localStorage', () => {
          storage.saveLead(mockLead)

          const leads = storage.getLeads()
          expect(leads).toContainEqual(mockLead)
      })

      it('handles localStorage errors gracefully', () => {
        // Mock localStorage to throw error
        const originalSetItem = localStorage.setItem
        localStorage.setItem = jest.fn(() => {
          throw new Error('Storage error')
        })

        expect(() => storage.saveLead(mockLead)).not.toThrow()
        
        // Restore original
        localStorage.setItem = originalSetItem
      })
    })

    describe('getLeads', () => {
      it('retrieves leads from localStorage', () => {
        localStorage.setItem('chatbot_leads', JSON.stringify([mockLead]))
        
        const leads = storage.getLeads()
        expect(leads).toEqual([mockLead])
      })

      it('returns empty array when no leads exist', () => {
        const leads = storage.getLeads()
        expect(leads).toEqual([])
      })

      it('handles localStorage errors gracefully', () => {
        localStorage.setItem('chatbot_leads', 'invalid-json')
        
        const leads = storage.getLeads()
        expect(leads).toEqual([])
      })
    })

    describe('saveConversation', () => {
      it('saves conversation to localStorage', () => {
        const messages = [
          { id: '1', text: 'Hello', sender: 'bot', timestamp: new Date() }
        ]
        
        storage.saveConversation('test-convo', messages)
        
        storage.saveConversation('test-convo', messages)
        const conversations = storage.getConversations()
        expect(conversations['test-convo']).toEqual({
          messages,
          timestamp: expect.any(String)
        })
      })
    })

    describe('clearData', () => {
      it('clears all chatbot data', () => {
        localStorage.setItem('chatbot_leads', '[]')
        localStorage.setItem('chatbot_conversations', '{}')
        
        storage.clearData()
        
        expect(localStorage.getItem('chatbot_leads')).toBeNull()
        expect(localStorage.getItem('chatbot_conversations')).toBeNull()
      })
    })
  })
})

