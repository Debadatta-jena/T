'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  clientName: string;
  status: string;
  featured: boolean;
  imageUrl: string;
  createdAt: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/v1/projects`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button>Add New Project</Button>
      </div>

      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : projects.length === 0 ? (
        <Card>
          <CardContent className="py-10 text-center">
            <p className="text-gray-500">No projects found. Create your first project!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id}>
              <div className="h-40 bg-gray-200 rounded-t-lg flex items-center justify-center">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover rounded-t-lg" />
                ) : (
                  <span className="text-gray-400">No Image</span>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="outline">{project.category}</Badge>
                  <Badge variant={project.status === 'published' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                  {project.featured && <Badge variant="outline">Featured</Badge>}
                </div>
                <p className="text-xs text-gray-500">Client: {project.clientName}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
