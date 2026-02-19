'use client';

import { motion } from 'framer-motion';

export function FloatingLogo() {
  return (
    <motion.div
      className="fixed top-4 left-4 z-50 pointer-events-none"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="bg-white rounded-lg shadow-md p-2 flex items-center">
        <img 
          src="/images/small-logo.png" 
          alt="GLYVEXA" 
          className="h-8 w-auto"
        />
      </div>
    </motion.div>
  );
}
