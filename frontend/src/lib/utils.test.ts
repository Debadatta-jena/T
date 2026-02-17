import { 
  cn, 
  formatPhoneNumber, 
  isValidEmail, 
  slugify, 
  truncateText, 
  formatDate, 
  getExcerpt, 
  debounce, 
  animateCounter 
} from './utils'

describe('Utils Library', () => {
  describe('cn (class names)', () => {
    it('merges class names correctly', () => {
      expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white')
    })

    it('handles conditional classes', () => {
      expect(cn('bg-red-500', false && 'text-white', 'p-4')).toBe('bg-red-500 p-4')
    })

    it('handles undefined and null values', () => {
      expect(cn('bg-red-500', undefined, null, 'p-4')).toBe('bg-red-500 p-4')
    })
  })

  describe('formatPhoneNumber', () => {
    it('formats 10-digit phone numbers', () => {
      expect(formatPhoneNumber('1234567890')).toBe('(123) 456-7890')
    })

    it('handles phone numbers with country code', () => {
      expect(formatPhoneNumber('+11234567890')).toBe('+1 (123) 456-7890')
    })

    it('returns original if invalid format', () => {
      expect(formatPhoneNumber('123')).toBe('123')
    })

    it('handles empty string', () => {
      expect(formatPhoneNumber('')).toBe('')
    })
  })

  describe('isValidEmail', () => {
    it('validates correct email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true)
      expect(isValidEmail('user.name+tag@domain.co.uk')).toBe(true)
    })

    it('rejects invalid email addresses', () => {
      expect(isValidEmail('invalid')).toBe(false)
      expect(isValidEmail('test@')).toBe(false)
      expect(isValidEmail('@example.com')).toBe(false)
      expect(isValidEmail('test.example.com')).toBe(false)
    })

    it('handles empty and null values', () => {
      expect(isValidEmail('')).toBe(false)
      expect(isValidEmail(null as any)).toBe(false)
      expect(isValidEmail(undefined as any)).toBe(false)
    })
  })

  describe('slugify', () => {
    it('converts text to slug format', () => {
      expect(slugify('Hello World')).toBe('hello-world')
      expect(slugify('AI & Machine Learning')).toBe('ai-machine-learning')
    })

    it('handles special characters', () => {
      expect(slugify('Hello, World!')).toBe('hello-world')
      expect(slugify('What\'s up?')).toBe('whats-up')
    })

    it('handles multiple spaces and dashes', () => {
      expect(slugify('Hello   World')).toBe('hello-world')
      expect(slugify('Hello---World')).toBe('hello-world')
    })
  })

  describe('truncateText', () => {
    it('truncates long text', () => {
      const longText = 'This is a very long text that should be truncated'
      expect(truncateText(longText, 20)).toBe('This is a very long...')
    })

    it('returns original text if shorter than limit', () => {
      const shortText = 'Short text'
      expect(truncateText(shortText, 20)).toBe('Short text')
    })

    it('handles empty text', () => {
      expect(truncateText('', 10)).toBe('')
    })
  })

  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2024-01-15')
      expect(formatDate(date)).toBe('January 15, 2024')
    })

    it('handles string dates', () => {
      expect(formatDate('2024-01-15')).toBe('January 15, 2024')
    })

    it('handles invalid dates', () => {
      expect(formatDate('invalid')).toBe('Invalid Date')
    })
  })

  describe('getExcerpt', () => {
    it('creates excerpt from HTML content', () => {
      const html = '<p>This is <strong>important</strong> content</p>'
      expect(getExcerpt(html, 20)).toBe('This is important content')
    })

    it('handles plain text', () => {
      const text = 'This is plain text content'
      expect(getExcerpt(text, 15)).toBe('This is plain...')
    })

    it('handles empty content', () => {
      expect(getExcerpt('', 10)).toBe('')
    })
  })

  describe('debounce', () => {
    jest.useFakeTimers()

    it('delays function execution', () => {
      const mockFn = jest.fn()
      const debouncedFn = debounce(mockFn, 500)

      debouncedFn()
      expect(mockFn).not.toHaveBeenCalled()

      jest.advanceTimersByTime(500)
      expect(mockFn).toHaveBeenCalledTimes(1)
    })

    it('cancels previous calls', () => {
      const mockFn = jest.fn()
      const debouncedFn = debounce(mockFn, 500)

      debouncedFn()
      debouncedFn()
      debouncedFn()

      jest.advanceTimersByTime(500)
      expect(mockFn).toHaveBeenCalledTimes(1)
    })

    afterEach(() => {
      jest.clearAllTimers()
    })
  })

  describe('animateCounter', () => {
    jest.useFakeTimers()

    it('animates counter from start to end', () => {
      const callback = jest.fn()
      animateCounter(0, 100, 1000, callback)

      // Should not call immediately
      expect(callback).not.toHaveBeenCalled()

      // After half the time
      jest.advanceTimersByTime(500)
      expect(callback).toHaveBeenCalledWith(expect.any(Number))

      // After full time
      jest.advanceTimersByTime(500)
      expect(callback).toHaveBeenCalledWith(100)
    })

    it('handles instant animation', () => {
      const callback = jest.fn()
      animateCounter(0, 100, 0, callback)

      expect(callback).toHaveBeenCalledWith(100)
    })

    afterEach(() => {
      jest.clearAllTimers()
    })
  })
})

