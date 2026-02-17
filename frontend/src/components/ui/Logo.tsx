import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'light' | 'dark' | 'colored'
  animated?: boolean
  className?: string
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'colored',
  animated = true,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  }

  const logoSrc = {
    light: '/images/logo-dark.svg',
    dark: '/images/logo-dark.svg',
    colored: '/images/logo.svg'
  }

  const textColors = {
    light: 'text-gray-900',
    dark: 'text-white',
    colored: 'text-gray-900 dark:text-white'
  }

  const currentLogoSrc = logoSrc[variant]
  const currentTextColor = textColors[variant]

  const animationProps = animated ? {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: 'easeOut' }
  } : {}

  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <motion.div {...animationProps}>
        <img
          src={currentLogoSrc}
          alt="AI Solutions Logo"
          className={`${sizeClasses[size]} transition-colors duration-300`}
        />
      </motion.div>
      
      <motion.div 
        className={`font-bold ${textSizes[size]} ${currentTextColor} transition-colors duration-300`}
        {...animationProps}
        transition={{ ...animationProps.transition, delay: 0.1 }}
      >
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI
        </span>
        <span className="ml-1">Solutions</span>
      </motion.div>
    </Link>
  )
}

export default Logo

