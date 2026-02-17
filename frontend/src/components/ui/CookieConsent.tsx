'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

const COOKIE_CONSENT_KEY = 'cookie-consent-preferences'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!savedConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
      ...prefs,
      timestamp: new Date().toISOString()
    }))
    setShowBanner(false)
    setShowSettings(false)
  }

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true
    }
    setPreferences(allAccepted)
    savePreferences(allAccepted)
  }

  const acceptEssential = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false
    }
    setPreferences(essentialOnly)
    savePreferences(essentialOnly)
  }

  const saveCustomPreferences = () => {
    savePreferences(preferences)
  }

  const openSettings = () => {
    setShowSettings(true)
  }

  const closeSettings = () => {
    setShowSettings(false)
  }

  const toggleAnalytics = () => {
    setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))
  }

  const toggleMarketing = () => {
    setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Main Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="max-w-6xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-6 md:p-8">
                  {!showSettings ? (
                    <>
                      <div className="flex items-start mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                            We value your privacy
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                            By clicking "Accept All", you consent to our use of cookies.
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={acceptAll}
                          className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                        >
                          Accept All
                        </button>
                        <button
                          onClick={acceptEssential}
                          className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                        >
                          Essential Only
                        </button>
                        <button
                          onClick={openSettings}
                          className="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all"
                        >
                          Customize
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <Link 
                          href="/cookie-policy" 
                          className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Learn more about our Cookie Policy
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          Cookie Settings
                        </h3>
                        <button
                          onClick={closeSettings}
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      <div className="space-y-4 mb-6">
                        {/* Essential Cookies */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Essential Cookies</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Required for the website to function properly
                            </p>
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-500 mr-3">Always On</span>
                            <div className="w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative">
                              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                            </div>
                          </div>
                        </div>

                        {/* Analytics Cookies */}
                        <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Analytics Cookies</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Help us understand how visitors interact with our website
                            </p>
                          </div>
                          <button
                            onClick={toggleAnalytics}
                            className={`relative w-12 h-6 rounded-full transition-colors ${
                              preferences.analytics 
                                ? 'bg-blue-600' 
                                : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                          >
                            <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              preferences.analytics ? 'translate-x-7' : 'translate-x-1'
                            }`} />
                          </button>
                        </div>

                        {/* Marketing Cookies */}
                        <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Marketing Cookies</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Used to track visitors for advertising purposes
                            </p>
                          </div>
                          <button
                            onClick={toggleMarketing}
                            className={`relative w-12 h-6 rounded-full transition-colors ${
                              preferences.marketing 
                                ? 'bg-blue-600' 
                                : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                          >
                            <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              preferences.marketing ? 'translate-x-7' : 'translate-x-1'
                            }`} />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={saveCustomPreferences}
                          className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                        >
                          Save Preferences
                        </button>
                        <button
                          onClick={acceptEssential}
                          className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                        >
                          Reject All
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
