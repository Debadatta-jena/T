'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const rotatingTexts = [
    'Starting Our Journey',
    'Building Solutions',
    'Learning & Growing',
    'Ready to Help',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  const features = [
    'Fresh perspectives',
    'Dedicated focus',
    'Modern approaches',
    'Personal attention',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Company Intro */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <img 
                src="/images/small-logo.png" 
                alt="Trionex Technologies" 
                className="h-8 w-auto"
              />
              <span className="text-gray-500">|</span>
              <span className="text-gray-600 font-medium">Trionex Technologies</span>
            </div>

            <motion.div 
              className="inline-flex items-center bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-8"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span 
                className="w-2 h-2 bg-blue-600 rounded-full mr-2"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              Starting Our Journey
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Building{' '}
              <span className="text-blue-600">
                {rotatingTexts[currentText]}
              </span>
              <br />
              for Modern Businesses
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              We're a new company passionate about helping businesses with modern software solutions. 
              While we're just starting our journey, we bring fresh perspectives, dedication, and a commitment 
              to learning and growing with our clients. We're ready to help you solve your challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <MagneticButton>
                <Link href="/contact" className="btn-primary group flex items-center">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              
              <MagneticButton>
                <button className="btn-secondary flex items-center justify-center group">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </MagneticButton>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
        >
          <motion.div 
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
