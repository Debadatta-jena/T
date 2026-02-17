export interface Message {
  id: string
  text: string
  sender: 'bot' | 'user'
  timestamp: Date
  type?: 'text' | 'quick-reply' | 'form'
}

export interface QuickReply {
  id: string
  text: string
  action: 'service' | 'pricing' | 'contact' | 'consultation' | 'back'
  payload?: string
}

export interface LeadData {
  name: string
  businessType: string
  phone: string
  email: string
  timestamp: Date
}

export interface ConversationState {
  currentStep: 'greeting' | 'service-selection' | 'service-details' | 'lead-collection' | 'completed'
  selectedService?: string
  messages: Message[]
  leadData?: Partial<LeadData>
}

export interface ServiceInfo {
  id: string
  name: string
  description: string
  features: string[]
  pricing?: string
  actionButtons: QuickReply[]
}

export type ValidationError = {
  field: string
  message: string
}

