'use client';

import { useState, useEffect, useRef } from 'react';
import { Send, X, Bot, User as UserIcon, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAuth } from '@/components/auth/auth-provider';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant' | 'system';
  timestamp: Date;
  type?: 'text' | 'lead_form' | 'contact_info' | 'service_info';
}

interface AIAssistantProps {
  className?: string;
}

export function AIAssistant({ className }: AIAssistantProps) {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        content: `Hello${user?.name ? ` ${user.name}` : ''}! I'm your AI assistant. I can help you with:

• Learn about our services
• Get pricing information
• Schedule consultations
• Find contact details
• Answer questions about Trionox Technologies

How can I assist you today?`,
        role: 'assistant',
        timestamp: new Date(),
        type: 'text',
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length, user?.name]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
      type: 'text',
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Call AI API
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          userId: user?.id,
          context: messages.slice(-5), // Last 5 messages for context
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.message,
        role: 'assistant',
        timestamp: new Date(),
        type: data.type || 'text',
      };

      setMessages(prev => [...prev, assistantMessage]);

      // Track conversation analytics
      if (typeof window !== 'undefined' && (window as any).plausible) {
        (window as any).plausible('AI Chat Interaction', {
          props: {
            messageType: data.type || 'text',
            userRole: user?.role || 'anonymous',
          },
        });
      }
    } catch (error) {
      console.error('AI Chat Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        content: 'I apologize, but I encountered an error. Please try again or contact our support team.',
        role: 'assistant',
        timestamp: new Date(),
        type: 'text',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'services':
        setInput('Tell me about your services');
        break;
      case 'pricing':
        setInput('What are your pricing options?');
        break;
      case 'contact':
        setInput('How can I contact you?');
        break;
      case 'consultation':
        setInput('I want to schedule a consultation');
        break;
    }
  };

  if (!isOpen) {
    return (
      <div className={cn('fixed bottom-6 right-6 z-50', className)}>
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
        >
          <MessageSquare className="h-6 w-6" />
          <span className="sr-only">Open AI Assistant</span>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col h-[600px] z-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-full bg-primary/10 text-primary">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">AI Assistant</h3>
            <p className="text-xs text-muted-foreground">
              {isLoading ? 'Typing...' : 'Online'}
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="h-8 w-8 hover:bg-primary/10"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close assistant</span>
        </Button>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex',
                message.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              <div
                className={cn(
                  'max-w-[80%] rounded-lg px-4 py-3 text-sm',
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground ml-4'
                    : 'bg-gray-100 dark:bg-gray-800 mr-4'
                )}
              >
                <div className="flex items-center space-x-2 mb-1">
                  {message.role === 'user' ? (
                    <UserIcon className="h-3 w-3 opacity-70" />
                  ) : (
                    <Bot className="h-3 w-3 opacity-70" />
                  )}
                  <span className="text-xs opacity-70">
                    {message.role === 'user' ? 'You' : 'AI Assistant'}
                  </span>
                </div>
                <div className="whitespace-pre-wrap">{message.content}</div>
                <p className="text-xs opacity-50 text-right mt-2">
                  {new Date(message.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Quick Actions */}
      {messages.length === 1 && (
        <div className="px-4 pb-2">
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuickAction('services')}
              className="text-xs"
            >
              Our Services
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuickAction('pricing')}
              className="text-xs"
            >
              Pricing
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuickAction('contact')}
              className="text-xs"
            >
              Contact Info
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuickAction('consultation')}
              className="text-xs"
            >
              Consultation
            </Button>
          </div>
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex space-x-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 text-sm"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
            size="sm"
            className="px-3"
          >
            {isLoading ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

