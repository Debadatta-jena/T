import { render, screen } from '@testing-library/react'
// Mock next-themes to avoid requiring the package in tests
jest.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light', setTheme: () => {} }),
}))
import { Header } from './Header'
import { AuthProvider } from '@/components/auth/auth-provider'

test('Header renders (smoke)', () => {
  const { container } = render(
    <AuthProvider>
      <Header />
    </AuthProvider>
  )
  expect(container).toBeTruthy()
})

