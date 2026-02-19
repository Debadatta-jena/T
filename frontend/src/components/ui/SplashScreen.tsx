'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SplashScreenProps {
  isVisible: boolean
  onComplete?: () => void
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isVisible, onComplete }) => {
  useEffect(() => {
    if (isVisible) {
      // Show splash screen for 5 seconds
      const timer = setTimeout(() => {
        onComplete?.()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onComplete])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center"
      >
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            backgroundSize: '200% 200%'
          }}
        />

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Logo with pulse animation */}
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              filter: ['brightness(1)', 'brightness(1.1)', 'brightness(1)']
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <img
              src="/images/splash-screen-640x1136.png"
              alt="GLYVEXA"
              className="w-64 h-64 md:w-80 md:h-80 object-contain"
              onError={(e) => {
                console.error('Splash screen image failed to load:', e);
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>

          {/* Company name with typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wider">
              GLYVEXA
            </h1>
            <motion.p
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="mt-2 text-blue-400 text-lg md:text-xl overflow-hidden whitespace-nowrap"
            >
              Innovating the Future
            </motion.p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-12 w-64"
          >
            <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, ease: 'linear' }}
              />
            </div>
            <p className="text-gray-400 text-sm text-center mt-2">Loading...</p>
          </motion.div>
        </motion.div>

        {/* Corner decorations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.5 }}
          className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/30 rounded-tl-xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.7 }}
          className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white/30 rounded-tr-xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.9 }}
          className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white/30 rounded-bl-xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/30 rounded-br-xl"
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default SplashScreen
