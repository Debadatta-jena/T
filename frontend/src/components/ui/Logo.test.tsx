import { render, screen } from '@testing-library/react'
import Logo from './Logo'

test('Logo renders (smoke)', () => {
  const { container } = render(<Logo />)
  expect(container).toBeTruthy()
})

