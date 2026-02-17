import { Metadata } from 'next';
import { AdminLayout } from '@/components/admin/admin-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Shield,
  AlertTriangle,
  Lock,
  Eye,
  Users,
  Activity,
  Ban,
  CheckCircle,
  XCircle,
  Settings,
  Key,
  Smartphone,
  Globe,
  Database,
  Server,
  Wifi
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'Security Management - Trionox Technologies',
  description: 'Monitor security events, manage access controls, configure security policies, and oversee compliance for the Trionox platform.',
};

// Mock security data
const securityStats = {
  activeThreats: 0,
  blockedAttempts: 1247,
  activeUsers: 2847,
  mfaEnabled: 2156,
  complianceScore: 98.5,
  lastAudit: '2024-01-10',
};

const securityEvents = [
  {
    id: '1',
    type: 'login_attempt',
    severity: 'medium',
    user: 'unknown',
    ip: '192.168.1.100',
    location: 'Unknown',
    timestamp: '2024-01-15T14:30:00Z',
    status: 'blocked',
    description: 'Failed login attempt from unknown IP',
  },
  {
    id: '2',
    type: 'suspicious_activity',
    severity: 'high',
    user: 'john.doe@example.com',
    ip: '10.0.0.50',
    location: 'San Francisco, CA',
    timestamp: '2024-01-15T14:25:00Z',
    status: 'investigating',
    description: 'Multiple failed MFA attempts',
  },
  {
    id: '3',
    type: 'policy_violation',
    severity: 'low',
    user: 'admin@Trionox.tech',
    ip: '10.0.0.1',
    location: 'Internal Network',
    timestamp: '2024-01-15T14:20:00Z',
    status: 'resolved',
    description: 'Password policy reminder sent',
  },
  {
    id: '4',
    type: 'successful_login',
    severity: 'info',
    user: 'sarah.johnson@Trionox.tech',
    ip: '10.0.0.25',
    location: 'New York, NY',
    timestamp: '2024-01-15T14:15:00Z',
    status: 'allowed',
    description: 'Successful login with MFA',
  },
];

const securityPolicies = [
  {
    name: 'Password Policy',
    status: 'enabled',
    lastUpdated: '2024-01-12',
    description: 'Minimum 12 characters, complexity requirements, expiration policy',
  },
  {
    name: 'MFA Enforcement',
    status: 'enabled',
    lastUpdated: '2024-01-10',
    description: 'Required for all admin accounts and optional for regular users',
  },
  {
    name: 'Session Management',
    status: 'enabled',
    lastUpdated: '2024-01-08',
    description: 'Automatic logout after 30 minutes of inactivity, concurrent session limits',
  },
  {
    name: 'IP Whitelisting',
    status: 'partial',
    lastUpdated: '2024-01-05',
    description: 'Enabled for admin panel access, disabled for regular users',
  },
  {
    name: 'Data Encryption',
    status: 'enabled',
    lastUpdated: '2024-01-03',
    description: 'AES-256 encryption for data at rest and in transit',
  },
  {
    name: 'Audit Logging',
    status: 'enabled',
    lastUpdated: '2024-01-01',
    description: 'Comprehensive logging of all security events and user actions',
  },
];

const complianceStatus = [
  { standard: 'SOC 2 Type II', status: 'compliant', lastAudit: '2024-01-10', score: 98 },
  { standard: 'ISO 27001', status: 'compliant', lastAudit: '2024-01-08', score: 96 },
  { standard: 'GDPR', status: 'compliant', lastAudit: '2024-01-05', score: 100 },
  { standard: 'HIPAA', status: 'not_applicable', lastAudit: null, score: null },
  { standard: 'PCI DSS', status: 'compliant', lastAudit: '2024-01-03', score: 95 },
];

function SecurityDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Security Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Monitor security events and manage access controls</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Security Settings
          </Button>
          <Button>
            <Shield className="h-4 w-4 mr-2" />
            Run Security Audit
          </Button>
        </div>
      </div>

      {/* Security Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Threats</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{securityStats.activeThreats}</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div className="mt-4">
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                System Secure
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Blocked Attempts</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{securityStats.blockedAttempts.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-red-100 dark:bg-red-900 rounded-full">
                <Ban className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm font-medium text-red-600">-15.3%</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">MFA Enabled Users</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{securityStats.mfaEnabled.toLocaleString()}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {Math.round((securityStats.mfaEnabled / securityStats.activeUsers) * 100)}% of total users
                </p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Key className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Compliance Score</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{securityStats.complianceScore}%</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div className="mt-4">
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                Excellent
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Users</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{securityStats.activeUsers.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
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
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Last Security Audit</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  {new Date(securityStats.lastAudit).toLocaleDateString()}
                </p>
              </div>
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
                <Activity className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
            <div className="mt-4">
              <Badge variant="outline">Next: Feb 10, 2024</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Management Tabs */}
      <Tabs defaultValue="events" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="events">Security Events</TabsTrigger>
          <TabsTrigger value="policies">Security Policies</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="access">Access Control</TabsTrigger>
        </TabsList>

        <TabsContent value="events" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Security Events Log</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Real-time monitoring of security events and threats
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm">Export Log</Button>
                  <Button variant="outline" size="sm">Configure Alerts</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityEvents.map((event) => (
                  <div key={event.id} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex-shrink-0">
                      {event.severity === 'high' && <AlertTriangle className="h-5 w-5 text-red-500" />}
                      {event.severity === 'medium' && <AlertTriangle className="h-5 w-5 text-yellow-500" />}
                      {event.severity === 'low' && <AlertTriangle className="h-5 w-5 text-blue-500" />}
                      {event.severity === 'info' && <Activity className="h-5 w-5 text-gray-500" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {event.description}
                        </p>
                        <Badge className={
                          event.status === 'blocked'
                            ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                            : event.status === 'allowed'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                            : event.status === 'investigating'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                        }>
                          {event.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-gray-600 dark:text-gray-400">
                        <span>User: {event.user}</span>
                        <span>IP: {event.ip}</span>
                        <span>Location: {event.location}</span>
                        <span>{new Date(event.timestamp).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="policies" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Security Policies</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Configure and manage security policies across the platform
                  </p>
                </div>
                <Button>
                  <Settings className="h-4 w-4 mr-2" />
                  Add Policy
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityPolicies.map((policy, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{policy.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{policy.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right text-sm">
                        <p className="text-gray-600 dark:text-gray-400">Last updated</p>
                        <p className="font-medium">{new Date(policy.lastUpdated).toLocaleDateString()}</p>
                      </div>
                      <Badge className={
                        policy.status === 'enabled'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                          : policy.status === 'partial'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                      }>
                        {policy.status}
                      </Badge>
                      <Button variant="ghost" size="sm">Configure</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceStatus.map((compliance, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div>
                        <h4 className="font-medium">{compliance.standard}</h4>
                        {compliance.lastAudit && (
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Last audit: {new Date(compliance.lastAudit).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <Badge className={
                          compliance.status === 'compliant'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                            : compliance.status === 'not_applicable'
                            ? 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                        }>
                          {compliance.status}
                        </Badge>
                        {compliance.score && (
                          <p className="text-sm font-medium mt-1">{compliance.score}%</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Overall Risk Score</span>
                      <span className="text-sm font-bold text-green-600">Low (2.1/10)</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '21%' }}></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Data Security</span>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Excellent</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Access Controls</span>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Strong</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Network Security</span>
                      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Good</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Compliance</span>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Excellent</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="access" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>User Access Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <Users className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">2,847</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <Key className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">2,156</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">MFA Enabled</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Admin Users</span>
                      <Badge>12</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Power Users</span>
                      <Badge>156</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Standard Users</span>
                      <Badge>2,679</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Access Control Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Role-Based Access Control</span>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Active</Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Users have access based on their assigned roles and permissions.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">IP-Based Restrictions</span>
                      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Partial</Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Admin access is restricted to whitelisted IP addresses.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Session Management</span>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Active</Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Automatic session timeout and concurrent session limits enforced.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function SecurityPage() {
  return (
    <AdminLayout>
      <SecurityDashboard />
    </AdminLayout>
  );
}

