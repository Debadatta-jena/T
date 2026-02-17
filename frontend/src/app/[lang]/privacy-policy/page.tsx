import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Trionex Technologies',
  description: 'Trionex Technologies privacy policy and data protection information. Learn how we collect, use, and protect your personal information.',
  keywords: 'privacy policy, data protection, GDPR compliance, privacy rights, data security',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-24">
        <div className="container max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>

            <div className="bg-muted/50 p-4 rounded-lg mb-8">
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> {lastUpdated}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                This privacy policy describes how Trionex Technologies ("we", "us", or "our") collects, uses, and protects your personal information when you use our services.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

              <h3 className="text-xl font-medium mb-3">Personal Information</h3>
              <p className="mb-4">
                We may collect the following types of personal information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name, email address, and contact information</li>
                <li>Company name and business information</li>
                <li>Payment information for billing purposes</li>
                <li>Account credentials and authentication data</li>
                <li>Professional background and job-related information</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Usage Data</h3>
              <p className="mb-4">
                We automatically collect certain information when you use our services:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address and location information</li>
                <li>Browser type and version</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referral sources and navigation patterns</li>
                <li>Performance metrics and error logs</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">AI Assistant Data</h3>
              <p className="mb-4">
                When you interact with our AI assistant, we may collect:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Conversation content and context</li>
                <li>Interaction timestamps and duration</li>
                <li>User satisfaction ratings</li>
                <li>Query resolution status</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>

              <p className="mb-4">We use the collected information for the following purposes:</p>

              <ul className="list-disc pl-6 mb-4">
                <li><strong>Service Provision:</strong> To provide, maintain, and improve our services</li>
                <li><strong>Account Management:</strong> To create and manage your account</li>
                <li><strong>Communication:</strong> To respond to inquiries and provide customer support</li>
                <li><strong>AI Enhancement:</strong> To train and improve our AI systems</li>
                <li><strong>Analytics:</strong> To analyze usage patterns and improve user experience</li>
                <li><strong>Security:</strong> To detect and prevent fraud and security threats</li>
                <li><strong>Compliance:</strong> To meet legal obligations and regulatory requirements</li>
                <li><strong>Marketing:</strong> To send promotional materials (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>

              <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>

              <ul className="list-disc pl-6 mb-4">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in our operations</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> With your explicit consent</li>
                <li><strong>Aggregated Data:</strong> Non-personally identifiable, aggregated data for analytics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>

              <p className="mb-4">
                We implement comprehensive security measures to protect your personal information:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li><strong>Encryption:</strong> All data is encrypted in transit and at rest using AES-256 encryption</li>
                <li><strong>Access Controls:</strong> Role-based access control with principle of least privilege</li>
                <li><strong>Multi-Factor Authentication:</strong> Required for all administrative access</li>
                <li><strong>Regular Audits:</strong> Continuous security monitoring and regular penetration testing</li>
                <li><strong>Compliance:</strong> SOC 2 Type II, ISO 27001, and GDPR compliant</li>
                <li><strong>Data Residency:</strong> Data stored in secure, compliant data centers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>

              <p className="mb-4">You have the following rights regarding your personal information:</p>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold mb-2">Access Rights</h4>
                  <ul className="list-disc pl-4 text-sm">
                    <li>Right to access your personal data</li>
                    <li>Right to data portability</li>
                    <li>Right to know what data we collect</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Control Rights</h4>
                  <ul className="list-disc pl-4 text-sm">
                    <li>Right to rectify inaccurate data</li>
                    <li>Right to erase your data</li>
                    <li>Right to restrict processing</li>
                    <li>Right to object to processing</li>
                  </ul>
                </div>
              </div>

              <p className="mb-4">
                To exercise these rights, please contact us at privacy@trionex.tech or through our support portal.
                We will respond to your request within 30 days as required by applicable law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>

              <p className="mb-4">
                We use cookies and similar technologies to enhance your experience and analyze usage patterns:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how you use our services</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>

              <p className="mb-4">
                You can control cookie preferences through your browser settings or our cookie consent banner.
                However, disabling certain cookies may affect website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>

              <p className="mb-4">
                As a global company, we may transfer your personal information to countries other than your own.
                When we do so, we ensure appropriate safeguards are in place:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li>Adequacy decisions by relevant data protection authorities</li>
                <li>Standard contractual clauses approved by the European Commission</li>
                <li>Binding corporate rules for intra-group transfers</li>
                <li>Your explicit consent for specific transfers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>

              <p className="mb-4">
                We retain your personal information only as long as necessary for the purposes outlined in this policy:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li><strong>Account Data:</strong> Retained while your account is active and for 3 years after deactivation</li>
                <li><strong>Transaction Data:</strong> Retained for 7 years for tax and legal compliance</li>
                <li><strong>Analytics Data:</strong> Aggregated and anonymized after 2 years</li>
                <li><strong>Security Logs:</strong> Retained for 1 year for security monitoring</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>

              <p className="mb-4">
                We may integrate with third-party services. These services have their own privacy policies:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li><strong>Payment Processors:</strong> Stripe, PayPal for secure payment processing</li>
                <li><strong>Analytics:</strong> Google Analytics, Mixpanel for usage analytics</li>
                <li><strong>Email Services:</strong> SendGrid, Mailgun for email communications</li>
                <li><strong>Cloud Services:</strong> AWS, Azure for data storage and processing</li>
                <li><strong>AI Services:</strong> OpenAI, Anthropic for AI-powered features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>

              <p className="mb-4">
                Our services are not intended for children under 16 years of age. We do not knowingly collect
                personal information from children under 16. If you are a parent or guardian and believe your
                child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>

              <p className="mb-4">
                We may update this privacy policy from time to time to reflect changes in our practices or
                applicable laws. We will notify you of any material changes by:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li>Email notification to your registered email address</li>
                <li>Prominent notice on our website</li>
                <li>Update to the "Last Updated" date at the top of this policy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

              <p className="mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Data Protection Officer</h4>
                    <p className="text-sm">privacy@trionex.tech</p>
                    <p className="text-sm">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">General Inquiries</h4>
                    <p className="text-sm">contact@trionex.tech</p>
                    <p className="text-sm">support@trionex.tech</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Mailing Address</h4>
                  <p className="text-sm">
                    Trionex Technologies<br />
                    Attn: Data Protection Officer<br />
                    123 Innovation Drive<br />
                    Tech Valley, CA 94043<br />
                    United States
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
