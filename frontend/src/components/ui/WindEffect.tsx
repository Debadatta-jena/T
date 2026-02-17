'use client';

import { motion } from 'framer-motion';

export function WindEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent opacity-30"
          style={{
            top: `${20 + i * 15}%`,
            width: '100%'
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 8 + i * 2,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
