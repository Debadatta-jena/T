import { Metadata } from 'next';
import { AdminLayout } from '@/components/admin/admin-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import {
  TrendingUp,
  Users,
  Eye,
  Clock,
  MousePointer,
  Smartphone,
  Monitor,
  Globe,
  BarChart3,
  PieChart,
  Activity,
  Download
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Analytics Dashboard - Trionox Technologies',
  description: 'Comprehensive analytics dashboard for monitoring user behavior, performance metrics, and business intelligence.',
};

// Mock data for analytics
const trafficData = [
  { date: '2024-01-01', visitors: 12500, pageViews: 45200, sessions: 15800 },
  { date: '2024-01-02', visitors: 13200, pageViews: 48700, sessions: 16200 },
  { date: '2024-01-03', visitors: 11800, pageViews: 42300, sessions: 14200 },
  { date: '2024-01-04', visitors: 14100, pageViews: 52100, sessions: 17500 },
  { date: '2024-01-05', visitors: 15600, pageViews: 58300, sessions: 19200 },
  { date: '2024-01-06', visitors: 13800, pageViews: 49800, sessions: 16800 },
  { date: '2024-01-07', visitors: 14900, pageViews: 56700, sessions: 18300 },
];

const deviceData = [
  { device: 'Desktop', users: 45230, percentage: 58.2 },
  { device: 'Mobile', users: 28750, percentage: 36.9 },
  { device: 'Tablet', users: 4320, percentage: 5.5 },
];

const topPages = [
  { page: '/services/ai-solutions', views: 12543, bounce: 32.1 },
  { page: '/about', views: 9876, bounce: 28.5 },
  { page: '/contact', views: 8765, bounce: 45.2 },
  { page: '/services/cloud-services', views: 7654, bounce: 38.7 },
  { page: '/blog', views: 6543, bounce: 52.1 },
];

const aiMetrics = [
  { metric: 'Conversations Started', value: 2847, change: '+12.5%' },
  { metric: 'Questions Answered', value: 15632, change: '+8.9%' },
  { metric: 'User Satisfaction', value: '4.8/5', change: '+0.2' },
  { metric: 'Response Time', value: '1.2s', change: '-0.3s' },
];

const conversionFunnels = [
  { stage: 'Landing Page', users: 50000, conversion: 100 },
  { stage: 'Service Interest', users: 12500, conversion: 25 },
  { stage: 'Contact Form', users: 3125, conversion: 6.25 },
  { stage: 'Demo Requested', users: 625, conversion: 1.25 },
  { stage: 'Deal Closed', users: 125, conversion: 0.25 },
];

function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Monitor your platform performance and user engagement</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button size="sm">
            <Activity className="h-4 w-4 mr-2" />
            Real-time View
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Visitors</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">1,247,839</p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
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
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Page Views</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">4,583,291</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                <Eye className="h-6 w-6 text-green-600 dark:text-green-400" />
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
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Session</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">4m 32s</p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm font-medium text-green-600">+15.3%</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">3.24%</p>
              </div>
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
                <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm font-medium text-green-600">+0.8%</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">vs last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="traffic" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="behavior">Behavior</TabsTrigger>
          <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="traffic" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <BarChart3 className="h-12 w-12 text-gray-400" />
                  <span className="ml-2 text-gray-500">Traffic Chart Placeholder</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Organic Search</span>
                    </div>
                    <span className="text-sm font-medium">45.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Direct</span>
                    </div>
                    <span className="text-sm font-medium">28.7%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Social Media</span>
                    </div>
                    <span className="text-sm font-medium">15.8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Referrals</span>
                    </div>
                    <span className="text-sm font-medium">10.3%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audience" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Device Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deviceData.map((device) => (
                    <div key={device.device} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {device.device === 'Desktop' && <Monitor className="h-4 w-4" />}
                          {device.device === 'Mobile' && <Smartphone className="h-4 w-4" />}
                          {device.device === 'Tablet' && <Monitor className="h-4 w-4" />}
                          <span className="text-sm font-medium">{device.device}</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {device.users.toLocaleString()} ({device.percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${device.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm">United States</span>
                    </div>
                    <span className="text-sm font-medium">32.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm">United Kingdom</span>
                    </div>
                    <span className="text-sm font-medium">18.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm">Germany</span>
                    </div>
                    <span className="text-sm font-medium">12.8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm">Canada</span>
                    </div>
                    <span className="text-sm font-medium">8.9%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm">Other</span>
                    </div>
                    <span className="text-sm font-medium">27.6%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="behavior" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPages.map((page, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex-1">
                        <p className="text-sm font-medium">{page.page}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {page.views.toLocaleString()} views • {page.bounce}% bounce rate
                        </p>
                      </div>
                      <Badge variant="outline">{index + 1}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conversion Funnel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {conversionFunnels.map((stage, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{stage.stage}</span>
                        <div className="text-right">
                          <p className="text-sm font-medium">{stage.users.toLocaleString()}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{stage.conversion}%</p>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${stage.conversion}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ai-insights" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {metric.metric}
                      </p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {metric.value}
                      </p>
                    </div>
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                      <Activity className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className={cn(
                      'text-sm font-medium',
                      metric.change.startsWith('+') ? 'text-green-600' : 'text-blue-600'
                    )}>
                      {metric.change}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                      vs last month
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>AI Performance Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Top Performing Topics</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Service Inquiries</span>
                      <Badge>1,247</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Pricing Questions</span>
                      <Badge>892</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Technical Support</span>
                      <Badge>654</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Contact Information</span>
                      <Badge>423</Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Response Quality Metrics</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Accuracy Rate</span>
                      <Badge variant="secondary">94.2%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Resolution Rate</span>
                      <Badge variant="secondary">87.6%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">User Satisfaction</span>
                      <Badge variant="secondary">4.8/5</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Avg Response Time</span>
                      <Badge variant="secondary">1.2s</Badge>
                    </div>
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

export default function AnalyticsPage() {
  return (
    <AdminLayout>
      <AnalyticsDashboard />
    </AdminLayout>
  );
}

