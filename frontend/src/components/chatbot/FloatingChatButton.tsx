'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface FloatingChatButtonProps {
  isOpen: boolean
  onClick: () => void
  unreadCount?: number
}

const FloatingChatButton: React.FC<FloatingChatButtonProps> = ({ 
  isOpen, 
  onClick, 
  unreadCount = 0 
}) => {
  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  }

  const pulseVariants = {
    idle: { scale: 1 },
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.button
      variants={buttonVariants}
      initial="idle"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center group"
      aria-label="Chat with us"
    >
      {/* Pulse effect when closed */}
      {!isOpen && (
        <motion.div
          variants={pulseVariants}
          animate="pulse"
          className="absolute inset-0 bg-blue-600 rounded-full opacity-75"
        />
      )}

      {/* Chat icon */}
      <div className="relative z-10">
        {isOpen ? (
          // Close icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Chat icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </div>

      {/* Unread count badge */}
      {unreadCount > 0 && !isOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
        >
          {unreadCount > 9 ? '9+' : unreadCount}
        </motion.div>
      )}

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {isOpen ? 'Close chat' : 'Chat with us'}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </motion.button>
  )
}

export default FloatingChatButton

