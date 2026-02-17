'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  category: string;
  status: string;
  featured: boolean;
  imageUrl: string;
  createdAt: string;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/v1/testimonials`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setTestimonials(data);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <Button>Add New Testimonial</Button>
        </div>

        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : testimonials.length === 0 ? (
          <Card>
            <CardContent className="py-10 text-center">
              <p className="text-gray-500">No testimonials found. Add your first testimonial!</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                      {testimonial.imageUrl ? (
                        <img src={testimonial.imageUrl} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" />
                      ) : (
                        <span className="text-lg font-bold">{testimonial.name.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-sm text-gray-500">{testimonial.position} at {testimonial.company}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">"{testimonial.content}"</p>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">{testimonial.category}</Badge>
                    <Badge variant={testimonial.status === 'approved' ? 'default' : 'secondary'}>
                      {testimonial.status}
                    </Badge>
                    {testimonial.featured && <Badge variant="outline">Featured</Badge>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
  );
}
