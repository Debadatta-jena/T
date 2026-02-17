import { Metadata } from 'next';
import { AdminLayout, DashboardContent } from '@/components/admin/admin-layout';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Trionox Technologies',
  description: 'Enterprise admin dashboard for managing Trionox Technologies platform, users, content, analytics, and security.',
};

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <DashboardContent />
    </AdminLayout>
  );
}

