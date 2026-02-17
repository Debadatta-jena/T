import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  // Handle leading country code (e.g., '1' for US)
  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    const match = cleaned.match(/^1(\d{3})(\d{3})(\d{4})$/)
    if (match) return `+1 (${match[1]}) ${match[2]}-${match[3]}`
  }

  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }

  return phone
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Backwards-compatible alias
export const isValidEmail = validateEmail;

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function generateExcerpt(content: string, length: number = 150): string {
  const plainText = content.replace(/<[^>]*>/g, '')
  // If content included HTML tags, prefer returning the full stripped text
  if (/<[^>]*>/.test(content)) return plainText

  // Otherwise truncate intelligently at word boundaries
  if (plainText.length <= length) return plainText
  const cutoff = plainText.slice(0, length)
  const lastSpace = cutoff.lastIndexOf(' ')
  if (lastSpace > 0) return cutoff.slice(0, lastSpace).trim() + '...'
  return cutoff.trim() + '...'
}

// Backwards-compatible alias
export const getExcerpt = generateExcerpt;

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function animateCounter(
  arg1: HTMLElement | number,
  arg2: number,
  arg3: number = 2000,
  callback?: (value?: number) => void
) {
  // Backwards-compatible: if first arg is number, treat as start value and animate via timers
  if (typeof arg1 === 'number') {
    const start = arg1
    const target = arg2
    const duration = arg3
    const fps = 60
    const interval = 1000 / fps
    if (duration <= 0) {
      callback && callback(target)
      return
    }
    let elapsed = 0
    const timer = setInterval(() => {
      elapsed += interval
      const progress = Math.min(elapsed / duration, 1)
      const value = Math.floor(start + (target - start) * progress)
      callback && callback(value)
      if (progress >= 1) {
        clearInterval(timer)
      }
    }, interval)
    return
  }

  const element = arg1 as HTMLElement
  const target = arg2
  let start = 0
  const increment = target / (arg3 / 16)

  const timer = setInterval(() => {
    start += increment
    if (start >= target) {
      element.textContent = target.toLocaleString()
      clearInterval(timer)
      callback && callback()
    } else {
      element.textContent = Math.floor(start).toLocaleString()
    }
  }, 16)
}

