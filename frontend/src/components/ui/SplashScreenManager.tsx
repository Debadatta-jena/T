'use client'

import { useState, useEffect } from 'react'
import SplashScreen from './SplashScreen'

export function SplashScreenManager() {
  const [showSplash, setShowSplash] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    // Check if this is the first visit
    const hasSeenSplash = localStorage.getItem('hasSeenSplashScreen')
    
    if (!hasSeenSplash) {
      // First visit - show splash screen
      setShowSplash(true)
      localStorage.setItem('hasSeenSplashScreen', 'true')
    }
    
    setIsChecking(false)
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  // Don't render anything while checking (prevents flash)
  if (isChecking) {
    return null
  }

  return (
    <SplashScreen 
      isVisible={showSplash} 
      onComplete={handleSplashComplete} 
    />
  )
}
