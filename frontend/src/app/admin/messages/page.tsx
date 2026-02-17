import { Metadata } from 'next';
import { AdminLayout } from '@/components/admin/admin-layout';
import { MessagesContent } from './messages-content';

export const metadata: Metadata = {
  title: 'Messages - Admin Dashboard',
  description: 'View and manage customer messages',
};

export default function MessagesPage() {
  return (
    <AdminLayout>
      <MessagesContent />
    </AdminLayout>
  );
}
