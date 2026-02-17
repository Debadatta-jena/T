'use client'

import React, { useState, useEffect, lazy, Suspense } from 'react'
import FloatingChatButton from './FloatingChatButton'

// Lazy load the chat window to improve performance
const ChatWindow = lazy(() => import('./ChatWindow'))

interface ChatbotProps {
  autoOpen?: boolean
  openDelay?: number
}

const Chatbot: React.FC<ChatbotProps> = ({ 
  autoOpen = false, 
  openDelay = 3000 
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  // Auto-open functionality
  useEffect(() => {
    if (autoOpen && !isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, openDelay)
      
      return () => clearTimeout(timer)
    }
  }, [autoOpen, openDelay, isOpen])

  // Mark as loaded after a short delay to prevent layout shift
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  // Handle chat toggle
  const toggleChat = () => {
    setIsOpen(prev => {
      if (prev) {
        // Reset unread count when opening chat
        setUnreadCount(0)
      }
      return !prev
    })
  }

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Ctrl/Cmd + K to toggle chat
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault()
        toggleChat()
      }
      
      // Escape to close chat
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [isOpen])

  // Prevent body scroll when chat is open on mobile
  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isLoaded) {
    // Return placeholder to prevent layout shift
    return (
      <div className="fixed bottom-6 right-6 w-14 h-14 pointer-events-none" />
    )
  }

  return (
    <>
      {/* Floating Chat Button */}
      <FloatingChatButton
        isOpen={isOpen}
        onClick={toggleChat}
        unreadCount={unreadCount}
      />

      {/* Chat Window - Lazy Loaded */}
      <Suspense 
        fallback={
          <div className="fixed bottom-24 right-6 w-96 max-w-[90vw] h-32 bg-white rounded-t-2xl shadow-2xl border border-gray-200 flex items-center justify-center">
            <div className="text-gray-500 text-sm">Loading chat...</div>
          </div>
        }
      >
        <ChatWindow
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </Suspense>
    </>
  )
}

export default Chatbot

