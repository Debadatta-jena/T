import { test, expect } from '@playwright/test'

test.describe('Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display login form', async ({ page }) => {
    await page.click('text=Login')
    await expect(page.locator('h2')).toContainText('Login to Your Account')
    await expect(page.locator('input[name="email"]')).toBeVisible()
    await expect(page.locator('input[name="password"]')).toBeVisible()
    await expect(page.locator('button[type="submit"]')).toContainText('Login')
  })

  test('should show validation errors for empty form', async ({ page }) => {
    await page.click('text=Login')
    await page.click('button[type="submit"]')
    
    await expect(page.locator('text=Email is required')).toBeVisible()
    await expect(page.locator('text=Password is required')).toBeVisible()
  })

  test('should show error for invalid credentials', async ({ page }) => {
    await page.click('text=Login')
    await page.fill('input[name="email"]', 'invalid@example.com')
    await page.fill('input[name="password"]', 'wrongpassword')
    await page.click('button[type="submit"]')
    
    await expect(page.locator('text=Invalid credentials')).toBeVisible()
  })

  test('should successfully login with valid credentials', async ({ page }) => {
    // Mock successful API response
    await page.route('**/api/v1/auth/login', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          accessToken: 'mock-access-token',
          refreshToken: 'mock-refresh-token',
          user: {
            id: '1',
            name: 'Test User',
            email: 'test@example.com',
            role: 'client',
          },
        }),
      })
    })

    await page.click('text=Login')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.fill('input[name="password"]', 'password123')
    await page.click('button[type="submit"]')
    
    // Should redirect to dashboard or show success message
    await expect(page.locator('text=Welcome, Test User')).toBeVisible()
  })

  test('should register new user successfully', async ({ page }) => {
    // Mock successful registration API response
    await page.route('**/api/v1/auth/register', async route => {
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({
          accessToken: 'mock-access-token',
          refreshToken: 'mock-refresh-token',
          user: {
            id: '2',
            name: 'New User',
            email: 'newuser@example.com',
            role: 'client',
          },
        }),
      })
    })

    await page.click('text=Login')
    await page.click('text=Create an account')
    
    await expect(page.locator('h2')).toContainText('Create Your Account')
    
    await page.fill('input[name="name"]', 'New User')
    await page.fill('input[name="email"]', 'newuser@example.com')
    await page.fill('input[name="password"]', 'password123')
    await page.fill('input[name="confirmPassword"]', 'password123')
    await page.click('button[type="submit"]')
    
    await expect(page.locator('text=Welcome, New User')).toBeVisible()
  })

  test('should show password mismatch error', async ({ page }) => {
    await page.click('text=Login')
    await page.click('text=Create an account')
    
    await page.fill('input[name="name"]', 'Test User')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.fill('input[name="password"]', 'password123')
    await page.fill('input[name="confirmPassword"]', 'differentpassword')
    await page.click('button[type="submit"]')
    
    await expect(page.locator('text=Passwords do not match')).toBeVisible()
  })

  test('should logout successfully', async ({ page }) => {
    // Mock login API response
    await page.route('**/api/v1/auth/login', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          accessToken: 'mock-access-token',
          refreshToken: 'mock-refresh-token',
          user: {
            id: '1',
            name: 'Test User',
            email: 'test@example.com',
            role: 'client',
          },
        }),
      })
    })

    // Mock logout API response
    await page.route('**/api/v1/auth/logout', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Logged out successfully' }),
      })
    })

    // Login first
    await page.click('text=Login')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.fill('input[name="password"]', 'password123')
    await page.click('button[type="submit"]')
    
    await expect(page.locator('text=Welcome, Test User')).toBeVisible()
    
    // Logout
    await page.click('button[aria-label="Logout"]')
    
    await expect(page.locator('text=Login')).toBeVisible()
  })

  test('should handle token refresh', async ({ page }) => {
    // Mock expired token response
    await page.route('**/api/v1/auth/profile', async route => {
      await route.fulfill({
        status: 401,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Unauthorized' }),
      })
    })

    // Mock token refresh response
    await page.route('**/api/v1/auth/refresh', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          accessToken: 'new-mock-access-token',
          refreshToken: 'new-mock-refresh-token',
        }),
      })
    })

    // Mock successful profile after refresh
    await page.route('**/api/v1/auth/profile', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: '1',
          name: 'Test User',
          email: 'test@example.com',
          role: 'client',
        }),
      })
    })

    // Simulate accessing protected route
    await page.goto('/dashboard')
    
    // Should automatically refresh token and load content
    await expect(page.locator('text=Dashboard')).toBeVisible()
  })
})
