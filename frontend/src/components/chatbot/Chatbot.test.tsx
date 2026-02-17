import { render, screen } from '@testing-library/react'
import Chatbot from './Chatbot'

test('Chatbot renders (smoke)', () => {
  const { container } = render(<Chatbot />)
  expect(container).toBeTruthy()
})

