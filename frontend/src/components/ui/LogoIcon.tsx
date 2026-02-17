import React from 'react'
import { motion } from 'framer-motion'

interface LogoIconProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  variant?: 'light' | 'dark' | 'colored'
  animated?: boolean
  className?: string
}

const LogoIcon: React.FC<LogoIconProps> = ({ 
  size = 'md', 
  variant = 'colored',
  animated = true,
  className = ''
}) => {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12',
    '2xl': 'w-16 h-16'
  }

  const logoSrc = {
    light: '/images/logo-icon.svg',
    dark: '/images/logo-icon.svg',
    colored: '/images/logo-icon.svg'
  }

  const currentLogoSrc = logoSrc[variant]

  const animationProps = animated ? {
    initial: { opacity: 0, rotate: -180 },
    animate: { opacity: 1, rotate: 0 },
    transition: { duration: 0.5, ease: 'easeOut' }
  } : {}

  return (
    <motion.div
      className={`${sizeClasses[size]} transition-colors duration-300 ${className}`}
      {...animationProps}
    >
      <img
        src={currentLogoSrc}
        alt="AI Solutions Icon"
        className="w-full h-full"
      />
    </motion.div>
  )
}

export default LogoIcon

