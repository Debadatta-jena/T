'use client';

import { motion } from 'framer-motion';

interface SlidingTextProps {
  text: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
  className?: string;
}

export function SlidingText({ 
  text, 
  direction = 'left', 
  duration = 20, 
  className = '' 
}: SlidingTextProps) {
  const getAnimation = () => {
    switch (direction) {
      case 'left':
        return { x: [0, '-100%'] };
      case 'right':
        return { x: [0, '100%'] };
      case 'up':
        return { y: [0, '-100%'] };
      case 'down':
        return { y: [0, '100%'] };
      default:
        return { x: [0, '-100%'] };
    }
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        animate={getAnimation()}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear"
        }}
        className="whitespace-nowrap"
      >
        {text}
      </motion.div>
    </div>
  );
}
