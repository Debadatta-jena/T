import { render, screen, fireEvent } from '@testing-library/react'
import { Hero } from './Hero'

// Mock Framer Motion - provide all motion components
jest.mock('framer-motion', () => {
  const React = require('react')
  return {
    motion: {
      div: ({ children, ...props }: any) => React.createElement('div', props, children),
      h1: ({ children, ...props }: any) => React.createElement('h1', props, children),
      h2: ({ children, ...props }: any) => React.createElement('h2', props, children),
      p: ({ children, ...props }: any) => React.createElement('p', props, children),
      button: ({ children, ...props }: any) => React.createElement('button', props, children),
      span: ({ children, ...props }: any) => React.createElement('span', props, children),
      section: ({ children, ...props }: any) => React.createElement('section', props, children),
    },
    AnimatePresence: ({ children }: any) => React.createElement(React.Fragment, null, children),
    useAnimation: () => ({ start: jest.fn() }),
    useInView: () => true,
  }
})

// Mock MagneticButton component
jest.mock('@/components/ui/MagneticButton', () => ({
  MagneticButton: ({ children }: { children: React.ReactNode }) => 
    require('React').createElement('div', null, children),
}))

describe('Hero Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without crashing (smoke)', () => {
    const { container } = render(<Hero />)
    expect(container).toBeTruthy()
  })
})

