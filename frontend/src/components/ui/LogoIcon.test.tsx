import { render, screen } from '@testing-library/react'
import LogoIcon from './LogoIcon'

test('LogoIcon renders (smoke)', () => {
  const { container } = render(<LogoIcon />)
  expect(container).toBeTruthy()
})

