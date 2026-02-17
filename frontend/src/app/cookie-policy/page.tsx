import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Cookie Policy - AI Solutions Company',
  description: 'Learn about how we use cookies and similar technologies on our website. Understand your rights and choices regarding cookie preferences.',
  openGraph: {
    title: 'Cookie Policy - AI Solutions Company',
    description: 'Learn about how we use cookies and similar technologies on our website.',
    url: '/cookie-policy',
  },
}

export default function CookiePolicyPage() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Cookie <span className="text-blue-600">Policy</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Learn about how we use cookies to enhance your browsing experience
                </p>
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="py-16">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <p className="text-gray-600 mb-8">
                      <strong>Last Updated:</strong> February 2024
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
                    <p className="text-gray-600 mb-6">
                      Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
                      They help the website remember information about your visit, which can make it easier to visit the site again 
                      and make the site more useful to you.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
                    <p className="text-gray-600 mb-4">
                      We use cookies for various purposes, including:
                    </p>
                    <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                      <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                      <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                      <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for advertising purposes</li>
                      <li><strong>Preference Cookies:</strong> Enable the website to remember your preferences</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                      <p className="text-gray-600 mb-4">
                        These cookies are necessary for the website to function and cannot be switched off in our systems. 
                        They are usually only set in response to actions made by you, such as:
                      </p>
                      <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                        <li>Setting your privacy preferences</li>
                        <li>Logging in or filling in forms</li>
                        <li>Remembering items in your shopping cart</li>
                      </ul>
                      <p className="text-gray-600">
                        You can set your browser to block or alert you about these cookies, but some parts of the site may not work then.
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                      <p className="text-gray-600 mb-4">
                        These cookies help us understand how visitors arrive at and navigate our website, which pages are most 
                        visited, and how long visitors spend on each page. This helps us improve the performance of our website.
                      </p>
                      <p className="text-gray-600 mb-4">We use the following analytics tools:</p>
                      <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                        <li>Google Analytics</li>
                        <li>Plausible Analytics</li>
                        <li>Next.js Analytics</li>
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                      <p className="text-gray-600 mb-4">
                        These cookies may be set through our site by our advertising partners. They may be used to:
                      </p>
                      <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                        <li>Build a profile of your interests</li>
                        <li>Show you relevant advertisements on other sites</li>
                        <li>Measure the effectiveness of advertising campaigns</li>
                      </ul>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookie List</h2>
                    <p className="text-gray-600 mb-4">Here is a detailed list of cookies we use:</p>
                    
                    <div className="overflow-x-auto mb-8">
                      <table className="min-w-full border border-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Cookie Name</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Purpose</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Duration</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-3 text-sm text-gray-600">_ga</td>
                            <td className="px-4 py-3 text-sm text-gray-600">Analytics</td>
                            <td className="px-4 py-3 text-sm text-gray-600">Google Analytics - Distinguish users</td>
                            <td className="px-4 py-3 text-sm text-gray-600">2 years</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm text-gray-600">_gid</td>
                            <td className="px-4 py-3 text-sm text-gray-600">Analytics</td>
                            <td className="px-4 py-3 text-sm text-gray-600">Google Analytics - 24-hour usage</td>
                            <td className="px-4 py-3 text-sm text-gray-600">24 hours</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm text-gray-600">next-auth.callback-url</td>
                            <td className="px-4 py-3 text-sm text-gray-600">Essential</td>
                            <td className="px-4 py-3 text-sm text-gray-600">Authentication callback</td>
                            <td className="px-4 py-3 text-sm text-gray-600">Session</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm text-gray-600">next-auth.session-token</td>
                            <td className="px-4 py-3 text-sm text-gray-600">Essential</td>
                            <td className="px-4 py-3 text-sm text-gray-600">User session management</td>
                            <td className="px-4 py-3 text-sm text-gray-600">30 days</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm text-gray-600">theme</td>
                            <td className="px-4 py-3 text-sm text-gray-600">Preference</td>
                            <td className="px-4 py-3 text-sm text-gray-600">Dark/light mode preference</td>
                            <td className="px-4 py-3 text-sm text-gray-600">1 year</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Your Cookie Preferences</h2>
                    <p className="text-gray-600 mb-4">
                      You can manage your cookie preferences at any time by:
                    </p>
                    <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                      <li>Using our Cookie Consent Banner to customize your preferences</li>
                      <li>Adjusting your browser settings to block or delete cookies</li>
                      <li>Using private/incognito mode when browsing</li>
                    </ul>

                    <div className="bg-blue-50 rounded-xl p-6 mb-8">
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">Browser Settings</h3>
                      <p className="text-blue-800 mb-4">
                        Most browsers allow you to control cookies through their settings. Here's how to manage cookies in popular browsers:
                      </p>
                      <ul className="list-disc pl-6 text-blue-800 space-y-2">
                        <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                        <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                        <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                        <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
                      </ul>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Cookies</h2>
                    <p className="text-gray-600 mb-4">
                      Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. 
                      The third parties include:
                    </p>
                    <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                      <li>Google Analytics (analytics)</li>
                      <li>Plausible Analytics (analytics)</li>
                      <li>Social media platforms (sharing functionality)</li>
                      <li>Payment processors (transaction handling)</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Updates to This Policy</h2>
                    <p className="text-gray-600 mb-6">
                      We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, 
                      legal, or regulatory reasons. We will post any changes on this page and update the "Last Updated" date at the top.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
                    <p className="text-gray-600 mb-4">
                      If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                    </p>
                    <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                      <li>Email: privacy@ai-solutions.com</li>
                      <li>Phone: +1 (555) 123-4567</li>
                      <li>Address: 123 Tech Street, Silicon Valley, CA 94025</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  )
}
