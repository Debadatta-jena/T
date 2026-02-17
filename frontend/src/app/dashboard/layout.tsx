import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Dashboard - AI Solutions Company',
  description: 'Client and Admin dashboard for managing projects, testimonials, and account settings.',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Dashboard Sidebar */}
        <aside className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 bg-white shadow-lg border-r border-gray-200 z-40">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Dashboard</h2>
            
            <nav className="space-y-2">
              <a
                href="/dashboard"
                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3z" />
                </svg>
                Overview
              </a>
              
              <a
                href="/dashboard/projects"
                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m6 0V9a2 2 0 00-2-2m0 0V5a2 2 0 012-2m6 0v6a2 2 0 002 2m-2 0V9a2 2 0 00-2-2m-2 0V5a2 2 0 012-2" />
                </svg>
                Projects
              </a>
              
              <a
                href="/dashboard/testimonials"
                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Testimonials
              </a>
              
              <a
                href="/dashboard/profile"
                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profile
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="ml-64 p-6">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

