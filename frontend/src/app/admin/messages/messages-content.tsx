'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Mail, 
  Phone, 
  Building, 
  Calendar,
  Eye,
  CheckCircle,
  Clock,
  AlertCircle,
  Filter
} from 'lucide-react';

interface Message {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
  status: 'new' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
}

export function MessagesContent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    // In production, fetch from backend API
    // For now, using mock data
    const mockMessages: Message[] = [
      {
        id: '1',
        name: 'John Smith',
        email: 'john@example.com',
        phone: '+91 9876543210',
        company: 'Tech Corp',
        service: 'web-development',
        message: 'I need a website for my restaurant. Can you help?',
        status: 'new',
        priority: 'high',
        createdAt: '2026-02-16T10:30:00Z'
      },
      {
        id: '2',
        name: 'Sarah Johnson',
        email: 'sarah@startup.io',
        phone: '+91 9876543211',
        company: 'Startup Inc',
        service: 'ai-chatbots',
        message: 'Interested in AI chatbot for customer support',
        status: 'in-progress',
        priority: 'medium',
        createdAt: '2026-02-15T14:20:00Z'
      },
      {
        id: '3',
        name: 'Mike Chen',
        email: 'mike@enterprise.com',
        company: 'Enterprise Ltd',
        service: 'mobile-apps',
        message: 'Need a mobile app for our team',
        status: 'completed',
        priority: 'low',
        createdAt: '2026-02-14T09:15:00Z'
      }
    ];
    
    setMessages(mockMessages);
    setLoading(false);
  }, []);

  const filteredMessages = messages.filter(msg => {
    const matchesSearch = msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || msg.status === filter;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge className="bg-blue-500">New</Badge>;
      case 'in-progress':
        return <Badge className="bg-yellow-500">In Progress</Badge>;
      case 'completed':
        return <Badge className="bg-green-500">Completed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded">Urgent</span>;
      case 'high':
        return <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded">High</span>;
      case 'medium':
        return <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Medium</span>;
      case 'low':
        return <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded">Low</span>;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getServiceLabel = (service?: string) => {
    const labels: Record<string, string> = {
      'web-development': 'Website Development',
      'ai-chatbots': 'AI Chatbots',
      'ai-agents': 'AI Agents',
      'voice-bots': 'Voice Bots',
      'mobile-apps': 'Mobile Apps',
      'academic-projects': 'Academic Projects'
    };
    return service ? labels[service] || service : 'Not specified';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Messages</p>
                <p className="text-2xl font-bold">{messages.length}</p>
              </div>
              <Mail className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">New</p>
                <p className="text-2xl font-bold text-blue-600">
                  {messages.filter(m => m.status === 'new').length}
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {messages.filter(m => m.status === 'in-progress').length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">
                  {messages.filter(m => m.status === 'completed').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button
            variant={filter === 'new' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('new')}
          >
            New
          </Button>
          <Button
            variant={filter === 'in-progress' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('in-progress')}
          >
            In Progress
          </Button>
          <Button
            variant={filter === 'completed' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('completed')}
          >
            Completed
          </Button>
        </div>
      </div>

      {/* Messages List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-lg font-semibold">Messages ({filteredMessages.length})</h2>
          {filteredMessages.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center text-gray-500">
                No messages found
              </CardContent>
            </Card>
          ) : (
            filteredMessages.map((msg) => (
              <Card 
                key={msg.id}
                className={`cursor-pointer hover:shadow-md transition-shadow ${
                  selectedMessage?.id === msg.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedMessage(msg)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium">{msg.name}</h3>
                        {getPriorityBadge(msg.priority)}
                      </div>
                      <p className="text-sm text-gray-600 truncate">{msg.message}</p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        {formatDate(msg.createdAt)}
                      </div>
                    </div>
                    {getStatusBadge(msg.status)}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Message Details */}
        <div className="lg:col-span-2">
          {selectedMessage ? (
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{selectedMessage.name}</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">{formatDate(selectedMessage.createdAt)}</p>
                  </div>
                  <div className="flex gap-2">
                    {getStatusBadge(selectedMessage.status)}
                    {getPriorityBadge(selectedMessage.priority)}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="text-sm font-medium">{selectedMessage.email}</p>
                    </div>
                  </div>
                  {selectedMessage.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Phone</p>
                        <p className="text-sm font-medium">{selectedMessage.phone}</p>
                      </div>
                    </div>
                  )}
                  {selectedMessage.company && (
                    <div className="flex items-center gap-3">
                      <Building className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Company</p>
                        <p className="text-sm font-medium">{selectedMessage.company}</p>
                      </div>
                    </div>
                  )}
                  {selectedMessage.service && (
                    <div>
                      <p className="text-xs text-gray-500">Service Interest</p>
                      <p className="text-sm font-medium">{getServiceLabel(selectedMessage.service)}</p>
                    </div>
                  )}
                </div>

                {/* Message */}
                <div>
                  <h4 className="font-medium mb-2">Message</h4>
                  <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t">
                  <Button className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Reply
                  </Button>
                  <Button variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Mark as Read
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6 text-center text-gray-500">
                <Mail className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Select a message to view details</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
