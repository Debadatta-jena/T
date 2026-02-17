'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LeadData, ValidationError } from '@/types/chatbot'
import { LEAD_FORM_FIELDS, validateLeadData, sanitizeInput } from '@/lib/chatbot-utils'

interface LeadFormProps {
  onSubmit: (data: LeadData) => void
  onCancel: () => void
  disabled?: boolean
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit, onCancel, disabled = false }) => {
  const [formData, setFormData] = useState<Partial<LeadData>>({})
  const [errors, setErrors] = useState<ValidationError[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    const sanitizedValue = sanitizeInput(value)
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }))
    
    // Clear error for this field when user starts typing
    setErrors(prev => prev.filter(error => error.field !== field))
  }

  const validateForm = (): boolean => {
    const validationErrors = validateLeadData(formData)
    setErrors(validationErrors)
    return validationErrors.length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm() || isSubmitting) return

    setIsSubmitting(true)
    
    try {
      const leadData: LeadData = {
        name: formData.name!,
        businessType: formData.businessType!,
        phone: formData.phone!,
        email: formData.email!,
        timestamp: new Date()
      }
      
      onSubmit(leadData)
    } catch (error) {
      console.error('Error submitting lead:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getFieldError = (field: string): string => {
    const error = errors.find(err => err.field === field)
    return error?.message || ''
  }

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="visible"
      className="bg-gray-50 rounded-lg p-4 mb-4"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Book a Consultation
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {LEAD_FORM_FIELDS.map((field: any) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label} {(field as any).required && <span className="text-red-500">*</span>}
            </label>
            
            {field.type === 'select' ? (
              <select
                value={String(formData[field.name as keyof LeadData] ?? '')}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                disabled={disabled || isSubmitting}
                className={`
                  w-full px-3 py-2 border rounded-md text-sm
                  ${getFieldError(field.name) 
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  }
                  ${disabled || isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''}
                `}
              >
                <option value="">{(field as any).placeholder}</option>
                {field.options?.map((option: string) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                value={String(formData[field.name as keyof LeadData] ?? '')}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                placeholder={(field as any).placeholder}
                disabled={disabled || isSubmitting}
                className={`
                  w-full px-3 py-2 border rounded-md text-sm
                  ${getFieldError(field.name) 
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  }
                  ${disabled || isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''}
                `}
              />
            )}
            
            {getFieldError(field.name) && (
              <p className="text-red-500 text-xs mt-1">
                {getFieldError(field.name)}
              </p>
            )}
          </div>
        ))}

        <div className="flex space-x-3 pt-2">
          <button
            type="submit"
            disabled={disabled || isSubmitting}
            className={`
              flex-1 bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium
              hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200
              ${disabled || isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'hover:bg-blue-700'
              }
            `}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          
          <button
            type="button"
            onClick={onCancel}
            disabled={disabled || isSubmitting}
            className={`
              px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium
              hover:bg-gray-50 active:bg-gray-100 transition-colors duration-200
              ${disabled || isSubmitting ? 'cursor-not-allowed opacity-50' : ''}
            `}
          >
            Cancel
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default LeadForm

