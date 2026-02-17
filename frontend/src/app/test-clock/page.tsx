'use client';

import { WebsiteAgeCounter } from '@/components/ui/WebsiteAgeCounter';

export default function TestClockPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Website Age Counter Test</h1>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Full Version (Updates Every Second)</h2>
          <WebsiteAgeCounter variant="full" />
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Compact Version (Updates Daily)</h2>
          <WebsiteAgeCounter variant="compact" />
        </div>
      </div>
    </div>
  );
}
