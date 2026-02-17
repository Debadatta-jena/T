import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/AI Solutions Company/)
    await expect(page.locator('h1')).toContainText('Transform Your Business with AI')
  })

  test('should display all main sections', async ({ page }) => {
    // Hero section
    await expect(page.locator('section')).toHaveClass(/min-h-screen/)
    await expect(page.locator('text=Transform Your Business with AI')).toBeVisible()
    
    // Services section
    await expect(page.locator('text=Our Services')).toBeVisible()
    await expect(page.locator('[data-testid="services-grid"]')).toBeVisible()
    
    // Why Choose Us section
    await expect(page.locator('text=Why Choose Us')).toBeVisible()
    
    // Stats section
    await expect(page.locator('text=Our Achievements')).toBeVisible()
    
    // Testimonials section
    await expect(page.locator('text=What Our Clients Say')).toBeVisible()
    
    // Industries section
    await expect(page.locator('text=Industries We Serve')).toBeVisible()
    
    // Contact section
    await expect(page.locator('text=Get In Touch')).toBeVisible()
  })

  test('should have working navigation', async ({ page }) => {
    // Test navigation links
    await page.click('text=Services')
    await expect(page.url()).toContain('/services')
    
    await page.click('text=About')
    await expect(page.url()).toContain('/about')
    
    await page.click('text=Contact')
    await expect(page.url()).toContain('/contact')
  })

  test('should display service cards with correct information', async ({ page }) => {
    const services = await page.locator('[data-testid="service-card"]').count()
    expect(services).toBeGreaterThan(0)
    
    // Check first service card
    const firstService = page.locator('[data-testid="service-card"]').first()
    await expect(firstService.locator('h3')).toBeVisible()
    await expect(firstService.locator('p')).toBeVisible()
  })

  test('should animate statistics counters', async ({ page }) => {
    await page.scrollToView('text=Our Achievements')
    
    // Wait for stats to be in view
    await page.waitForTimeout(1000)
    
    // Check if stats are displayed
    await expect(page.locator('[data-testid="stats-container"]')).toBeVisible()
    
    const statNumbers = await page.locator('[data-testid="stat-number"]').count()
    expect(statNumbers).toBeGreaterThan(0)
  })

  test('should have working testimonial carousel', async ({ page }) => {
    await page.scrollToView('text=What Our Clients Say')
    
    // Check if testimonials are displayed
    await expect(page.locator('[data-testid="testimonial-carousel"]')).toBeVisible()
    
    const testimonials = await page.locator('[data-testid="testimonial-card"]').count()
    expect(testimonials).toBeGreaterThan(0)
    
    // Test carousel navigation if controls exist
    const nextButton = page.locator('[data-testid="testimonial-next"]')
    if (await nextButton.isVisible()) {
      await nextButton.click()
      await page.waitForTimeout(500)
    }
  })

  test('should submit contact form successfully', async ({ page }) => {
    // Mock contact API response
    await page.route('**/api/v1/contact', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Message sent successfully' }),
      })
    })

    await page.scrollToView('text=Get In Touch')
    
    await page.fill('input[name="name"]', 'Test User')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.fill('input[name="phone"]', '1234567890')
    await page.fill('textarea[name="message"]', 'This is a test message')
    
    await page.click('button[type="submit"]')
    
    await expect(page.locator('text=Message sent successfully')).toBeVisible()
  })

  test('should validate contact form fields', async ({ page }) => {
    await page.scrollToView('text=Get In Touch')
    
    // Try to submit empty form
    await page.click('button[type="submit"]')
    
    await expect(page.locator('text=Name is required')).toBeVisible()
    await expect(page.locator('text=Email is required')).toBeVisible()
    await expect(page.locator('text=Message is required')).toBeVisible()
    
    // Test invalid email
    await page.fill('input[name="email"]', 'invalid-email')
    await page.click('button[type="submit"]')
    
    await expect(page.locator('text=Please enter a valid email')).toBeVisible()
  })

  test('should be responsive on mobile devices', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Check mobile navigation
    await expect(page.locator('[data-testid="mobile-menu-button"]')).toBeVisible()
    
    // Open mobile menu
    await page.click('[data-testid="mobile-menu-button"]')
    await expect(page.locator('[data-testid="mobile-menu"]')).toBeVisible()
    
    // Check if content is still readable
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('text=Our Services')).toBeVisible()
  })

  test('should have proper SEO meta tags', async ({ page }) => {
    // Check meta description
    const metaDescription = await page.getAttribute('meta[name="description"]', 'content')
    expect(metaDescription).toBeTruthy()
    expect(metaDescription?.length).toBeGreaterThan(0)
    
    // Check Open Graph tags
    const ogTitle = await page.getAttribute('meta[property="og:title"]', 'content')
    expect(ogTitle).toBeTruthy()
    
    const ogDescription = await page.getAttribute('meta[property="og:description"]', 'content')
    expect(ogDescription).toBeTruthy()
    
    // Check Twitter Card tags
    const twitterCard = await page.getAttribute('meta[name="twitter:card"]', 'content')
    expect(twitterCard).toBe('summary_large_image')
  })

  test('should have structured data', async ({ page }) => {
    // Check for JSON-LD structured data
    const structuredData = await page.locator('script[type="application/ld+json"]').count()
    expect(structuredData).toBeGreaterThan(0)
  })

  test('should handle dark mode toggle', async ({ page }) => {
    // Check if dark mode toggle exists
    const darkModeToggle = page.locator('[data-testid="dark-mode-toggle"]')
    
    if (await darkModeToggle.isVisible()) {
      // Test light mode (default)
      await expect(page.locator('body')).not.toHaveClass(/dark/)
      
      // Toggle to dark mode
      await darkModeToggle.click()
      await expect(page.locator('body')).toHaveClass(/dark/)
      
      // Toggle back to light mode
      await darkModeToggle.click()
      await expect(page.locator('body')).not.toHaveClass(/dark/)
    }
  })

  test('should load images properly', async ({ page }) => {
    const images = page.locator('img')
    const imageCount = await images.count()
    
    for (let i = 0; i < imageCount; i++) {
      const image = images.nth(i)
      await expect(image).toBeVisible()
      
      // Check if image has proper alt text
      const altText = await image.getAttribute('alt')
      expect(altText).toBeTruthy()
    }
  })
})
