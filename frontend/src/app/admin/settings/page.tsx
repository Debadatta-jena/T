import { Metadata } from 'next';
import { AdminLayout } from '@/components/admin/admin-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Settings,
  Save,
  RefreshCw,
  Database,
  Mail,
  Bell,
  Shield,
  Palette,
  Globe,
  Users,
  Key,
  Server,
  Cloud,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'System Settings - Trionox Technologies',
  description: 'Configure system-wide settings, integrations, security policies, and platform preferences for Trionox Technologies.',
};

function SettingsDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">System Settings</h1>
          <p className="text-gray-600 dark:text-gray-400">Configure platform settings and preferences</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset to Defaults
          </Button>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Platform Name</label>
                  <Input defaultValue="Trionox Technologies" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company Website</label>
                  <Input defaultValue="https://Trionox.tech" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Support Email</label>
                  <Input type="email" defaultValue="support@Trionox.tech" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company Description</label>
                  <Textarea
                    rows={4}
                    defaultValue="Leading provider of enterprise software, AI solutions, and cloud services for global businesses."
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regional Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Default Language</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="de">Deutsch</option>
                    <option value="fr">Français</option>
                    <option value="ja">日本語</option>
                    <option value="hi">हिंदी</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Default Timezone</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="UTC">UTC</option>
                    <option value="America/New_York">Eastern Time</option>
                    <option value="America/Los_Angeles">Pacific Time</option>
                    <option value="Europe/London">London</option>
                    <option value="Asia/Tokyo">Tokyo</option>
                    <option value="Asia/Singapore">Singapore</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date Format</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Currency</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="JPY">JPY (¥)</option>
                    <option value="SGD">SGD (S$)</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>System Limits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Max File Upload Size (MB)</label>
                  <Input type="number" defaultValue="50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Session Timeout (minutes)</label>
                  <Input type="number" defaultValue="30" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">API Rate Limit (requests/minute)</label>
                  <Input type="number" defaultValue="1000" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Authentication Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Enable Multi-Factor Authentication</label>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Require MFA for all user accounts</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Password Expiration</label>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Automatically expire passwords after 90 days</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Login Attempt Limiting</label>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Lock accounts after 5 failed attempts</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Password Minimum Length</label>
                  <Input type="number" defaultValue="12" min="8" max="128" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security Monitoring</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Real-time Threat Detection</label>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Monitor for suspicious activities</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Automated Security Audits</label>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Run daily security scans</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Security Event Logging</label>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Log all security-related events</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Security Alert Email</label>
                  <Input type="email" defaultValue="security@Trionox.tech" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Data Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Data Retention Period (days)</label>
                  <Input type="number" defaultValue="2555" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Encryption Algorithm</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="AES-256">AES-256</option>
                    <option value="AES-128">AES-128</option>
                    <option value="ChaCha20">ChaCha20</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked id="gdpr" />
                  <label htmlFor="gdpr" className="text-sm">Enable GDPR Compliance Mode</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked id="audit" />
                  <label htmlFor="audit" className="text-sm">Enable Data Audit Trail</label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Provider</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="sendgrid">SendGrid</option>
                    <option value="mailgun">Mailgun</option>
                    <option value="ses">Amazon SES</option>
                    <option value="smtp">Custom SMTP</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">API Key</label>
                  <Input type="password" placeholder="Enter API key" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">From Email Address</label>
                  <Input type="email" defaultValue="noreply@Trionox.tech" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">From Name</label>
                  <Input defaultValue="Trionox Technologies" />
                </div>
                <Button className="w-full">Test Email Configuration</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Analytics & Monitoring</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Google Analytics</label>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Track user behavior and conversions</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">GA Tracking ID</label>
                  <Input placeholder="G-XXXXXXXXXX" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Error Monitoring</label>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Track and monitor application errors</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Sentry DSN</label>
                  <Input type="password" placeholder="Enter Sentry DSN" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Cloud Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Primary Cloud Provider</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="aws">Amazon Web Services</option>
                    <option value="azure">Microsoft Azure</option>
                    <option value="gcp">Google Cloud Platform</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">CDN Provider</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="cloudflare">Cloudflare</option>
                    <option value="cloudfront">AWS CloudFront</option>
                    <option value="azure-cdn">Azure CDN</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Region</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="us-east-1">US East (N. Virginia)</option>
                    <option value="us-west-2">US West (Oregon)</option>
                    <option value="eu-west-1">EU West (Ireland)</option>
                    <option value="ap-southeast-1">Asia Pacific (Singapore)</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-4">Email Notifications</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium">Security Alerts</label>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Critical security events and threats</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium">System Updates</label>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Platform maintenance and updates</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium">User Registrations</label>
                        <p className="text-xs text-gray-600 dark:text-gray-400">New user signups and activations</p>
                      </div>
                      <input type="checkbox" className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium">Performance Reports</label>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Weekly performance and analytics reports</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">In-App Notifications</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium">Real-time Alerts</label>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Instant notifications for critical events</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium">Weekly Summary</label>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Weekly digest of platform activity</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Theme & Branding</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Primary Color</label>
                  <div className="flex items-center space-x-2">
                    <input type="color" defaultValue="#2563eb" className="w-12 h-8 rounded border" />
                    <Input defaultValue="#2563eb" className="flex-1" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Secondary Color</label>
                  <div className="flex items-center space-x-2">
                    <input type="color" defaultValue="#64748b" className="w-12 h-8 rounded border" />
                    <Input defaultValue="#64748b" className="flex-1" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Dark Mode Support</label>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Enable dark theme for users</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Custom Logo</label>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Use custom branding assets</p>
                  </div>
                  <input type="checkbox" className="rounded" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Layout & Display</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Default Dashboard Layout</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="grid">Grid View</option>
                    <option value="list">List View</option>
                    <option value="compact">Compact View</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Items Per Page</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="10">10 items</option>
                    <option value="25">25 items</option>
                    <option value="50">50 items</option>
                    <option value="100">100 items</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Show Welcome Screen</label>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Display onboarding for new users</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Enable Animations</label>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Use smooth transitions and animations</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">⚠️ Advanced Settings</CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                These settings can affect system stability. Only modify if you know what you're doing.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Database Connection Pool Size</label>
                  <Input type="number" defaultValue="10" min="1" max="100" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Redis Cache TTL (seconds)</label>
                  <Input type="number" defaultValue="3600" min="60" max="86400" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">API Request Timeout (ms)</label>
                  <Input type="number" defaultValue="30000" min="1000" max="120000" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Log Retention Period (days)</label>
                  <Input type="number" defaultValue="90" min="7" max="365" />
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Danger Zone</h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-4">
                  These actions cannot be undone. Proceed with extreme caution.
                </p>
                <div className="flex items-center gap-4">
                  <Button variant="destructive" size="sm">
                    Clear All Cache
                  </Button>
                  <Button variant="destructive" size="sm">
                    Reset Database
                  </Button>
                  <Button variant="destructive" size="sm">
                    Full System Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <AdminLayout>
      <SettingsDashboard />
    </AdminLayout>
  );
}

