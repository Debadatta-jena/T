import { Metadata } from 'next';
import { AdminLayout } from '@/components/admin/admin-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  MessageSquare,
  Bot,
  Users,
  TrendingUp,
  Settings,
  Play,
  Pause,
  RotateCcw,
  BarChart3,
  Zap,
  Target,
  MessageCircle,
  Brain,
  Activity
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Assistant Management - Trionox Technologies',
  description: 'Manage and monitor the AI assistant performance, training data, conversation analytics, and user interactions.',
};

// Mock AI assistant data
const aiStats = {
  totalConversations: 15632,
  activeUsers: 2847,
  avgResponseTime: '1.2s',
  satisfactionRate: '4.8/5',
  resolutionRate: '87.6%',
  totalInteractions: 45231,
};

const conversationTopics = [
  { topic: 'Service Inquiries', count: 4247, percentage: 27.2 },
  { topic: 'Pricing Questions', count: 2891, percentage: 18.5 },
  { topic: 'Technical Support', count: 2156, percentage: 13.8 },
  { topic: 'Contact Information', count: 1834, percentage: 11.7 },
  { topic: 'Company Information', count: 1567, percentage: 10.0 },
  { topic: 'Consultation Requests', count: 1234, percentage: 7.9 },
  { topic: 'Other', count: 1703, percentage: 10.9 },
];

const recentConversations = [
  {
    id: '1',
    user: 'john.smith@techcorp.com',
    topic: 'Service Inquiries',
    duration: '3:24',
    satisfaction: 5,
    resolved: true,
    timestamp: '2024-01-15T14:30:00Z',
  },
  {
    id: '2',
    user: 'sarah.j@consulting.com',
    topic: 'Pricing Questions',
    duration: '2:15',
    satisfaction: 4,
    resolved: true,
    timestamp: '2024-01-15T14:25:00Z',
  },
  {
    id: '3',
    user: 'mike.chen@startup.io',
    topic: 'Technical Support',
    duration: '5:42',
    satisfaction: 5,
    resolved: true,
    timestamp: '2024-01-15T14:20:00Z',
  },
  {
    id: '4',
    user: 'anonymous',
    topic: 'Contact Information',
    duration: '1:08',
    satisfaction: 3,
    resolved: false,
    timestamp: '2024-01-15T14:15:00Z',
  },
];

const knowledgeBase = [
  {
    id: '1',
    title: 'AI Solutions Overview',
    category: 'Services',
    lastUpdated: '2024-01-10',
    status: 'active',
  },
  {
    id: '2',
    title: 'Pricing Information',
    category: 'Pricing',
    lastUpdated: '2024-01-12',
    status: 'active',
  },
  {
    id: '3',
    title: 'Technical Specifications',
    category: 'Technical',
    lastUpdated: '2024-01-08',
    status: 'active',
  },
  {
    id: '4',
    title: 'Contact Information',
    category: 'Company',
    lastUpdated: '2024-01-05',
    status: 'active',
  },
  {
    id: '5',
    title: 'Security Features',
    category: 'Security',
    lastUpdated: '2024-01-03',
    status: 'draft',
  },
];

function AIAssistantDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Assistant Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Monitor and manage your AI assistant performance and training</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Configure
          </Button>
          <Button>
            <Bot className="h-4 w-4 mr-2" />
            Train Model
          </Button>
        </div>
      </div>

      {/* AI Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Conversations</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{aiStats.totalConversations.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm font-medium text-green-600">+12.5%</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Users</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{aiStats.activeUsers.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm font-medium text-green-600">+8.2%</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Response Time</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{aiStats.avgResponseTime}</p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm font-medium text-green-600">-0.3s</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">User Satisfaction</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{aiStats.satisfactionRate}</p>
              </div>
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
                <Target className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm font-medium text-green-600">+0.2</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Resolution Rate</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{aiStats.resolutionRate}</p>
              </div>
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                <Activity className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm font-medium text-green-600">+5.1%</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Interactions</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{aiStats.totalInteractions.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-pink-100 dark:bg-pink-900 rounded-full">
                <BarChart3 className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm font-medium text-green-600">+15.3%</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">vs last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Management Tabs */}
      <Tabs defaultValue="conversations" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="conversations">Conversations</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
        </TabsList>

        <TabsContent value="conversations" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Conversations */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Conversations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentConversations.map((conversation) => (
                    <div key={conversation.id} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <MessageCircle className="h-4 w-4 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {conversation.user}
                          </p>
                          <Badge variant={conversation.resolved ? 'default' : 'secondary'} className="text-xs">
                            {conversation.resolved ? 'Resolved' : 'Open'}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                          {conversation.topic} • {conversation.duration}
                        </p>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-xs ${i < conversation.satisfaction ? 'text-yellow-400' : 'text-gray-300'}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Conversation Topics */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {conversationTopics.map((topic, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{topic.topic}</span>
                        <div className="text-right">
                          <p className="text-sm font-medium">{topic.count.toLocaleString()}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{topic.percentage}%</p>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${topic.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conversation Controls */}
          <Card>
            <CardHeader>
              <CardTitle>AI Assistant Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">AI Assistant Status</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Currently active and responding to user queries</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm">
                    <Pause className="h-4 w-4 mr-2" />
                    Pause
                  </Button>
                  <Button variant="outline" size="sm">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                  <Button size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    Resume
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="knowledge" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Knowledge Base</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Manage the AI assistant's knowledge and training data
                  </p>
                </div>
                <Button>
                  <Brain className="h-4 w-4 mr-2" />
                  Add Knowledge
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {knowledgeBase.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Brain className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Category: {item.category} • Updated: {new Date(item.lastUpdated).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={
                        item.status === 'active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                      }>
                        {item.status}
                      </Badge>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Response Accuracy</span>
                      <span className="text-sm font-medium">94.2%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '94.2%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">User Engagement</span>
                      <span className="text-sm font-medium">87.6%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '87.6%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Query Resolution</span>
                      <span className="text-sm font-medium">82.1%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '82.1%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage Patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Usage Analytics Chart</p>
                    <p className="text-xs text-gray-400 mt-1">Interactive chart would be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="training" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Model Training</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Current Model Status</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Model Version</span>
                        <Badge>v2.1.3</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Training Status</span>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Last Trained</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">2 hours ago</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Accuracy</span>
                        <span className="text-sm font-medium">94.7%</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Training Configuration</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium mb-1">Learning Rate</label>
                        <Input type="number" defaultValue="0.001" step="0.0001" className="text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Batch Size</label>
                        <Input type="number" defaultValue="32" className="text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Epochs</label>
                        <Input type="number" defaultValue="100" className="text-sm" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t">
                  <div>
                    <p className="font-medium">Training Progress</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Currently training on new conversation data</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline">Pause Training</Button>
                    <Button>Start Training</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function AIAssistantPage() {
  return (
    <AdminLayout>
      <AIAssistantDashboard />
    </AdminLayout>
  );
}

