'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');
      
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/v1/auth/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    // Add update profile logic here
    setTimeout(() => setSaving(false), 1000);
  };

  if (loading) {
    return (
      <div className="text-center py-10">Loading...</div>
    );
  }

  return (
    <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <Input 
                    id="name" 
                    defaultValue={user?.name || ''}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <Input 
                    id="email" 
                    type="email"
                    defaultValue={user?.email || ''}
                    className="mt-1"
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                  <Input 
                    id="phone" 
                    defaultValue={user?.phone || ''}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium">Company</label>
                  <Input 
                    id="company" 
                    defaultValue={user?.company || ''}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium">Role</label>
                  <Input 
                    id="role" 
                    value={user?.role || 'admin'}
                    className="mt-1"
                    disabled
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" disabled={saving}>
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
  );
}
