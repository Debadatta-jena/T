'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { QuickReply } from '@/types/chatbot'

interface QuickRepliesProps {
  replies: QuickReply[]
  onReplyClick: (reply: QuickReply) => void
  disabled?: boolean
}

const QuickReplies: React.FC<QuickRepliesProps> = ({ 
  replies, 
  onReplyClick, 
  disabled = false 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  if (replies.length === 0) return null

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap gap-2 mb-4"
    >
      {replies.map((reply) => (
        <motion.button
          key={reply.id}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => !disabled && onReplyClick(reply)}
          disabled={disabled}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${disabled 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-md hover:shadow-lg'
            }
          `}
        >
          {reply.text}
        </motion.button>
      ))}
    </motion.div>
  )
}

export default QuickReplies

