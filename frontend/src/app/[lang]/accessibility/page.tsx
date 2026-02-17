import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement - Trionex Technologies',
  description: 'Trionex Technologies accessibility statement and commitment to digital accessibility. Learn about our efforts to make our platform accessible to all users.',
  keywords: 'accessibility statement, digital accessibility, WCAG compliance, web accessibility, inclusive design',
};

export default function AccessibilityPage() {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-24">
        <div className="container max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold tracking-tight mb-8">Accessibility Statement</h1>

            <div className="bg-muted/50 p-4 rounded-lg mb-8">
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> {lastUpdated}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Trionex Technologies is committed to ensuring digital accessibility for people with disabilities.
                We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment to Accessibility</h2>

              <p className="mb-4">
                At Trionex Technologies, we believe that technology should be accessible to everyone, regardless of
                ability. We are committed to designing, developing, and maintaining our products and services to be
                accessible to people with disabilities. This includes our website, web applications, mobile apps,
                and all digital interfaces.
              </p>

              <p className="mb-4">
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards,
                which are internationally recognized as the standard for web accessibility. Our goal is to make
                our digital experiences usable for everyone, including people with visual, auditory, motor,
                and cognitive disabilities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Accessibility Standards and Guidelines</h2>

              <p className="mb-4">
                Our accessibility efforts are guided by the following standards and principles:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li><strong>WCAG 2.1 Level AA:</strong> Our primary accessibility standard, covering web content accessibility guidelines</li>
                <li><strong>Section 508:</strong> U.S. federal accessibility standards for electronic and information technology</li>
                <li><strong>EN 301 549:</strong> European accessibility requirements for public procurement of ICT products and services</li>
                <li><strong>ISO 14289-1:</strong> International standard for PDF accessibility</li>
                <li><strong>ATAG 2.0:</strong> Authoring Tool Accessibility Guidelines for content creation tools</li>
              </ul>

              <p className="mb-4">
                We regularly audit our products against these standards and implement improvements based on
                user feedback, technological advancements, and regulatory requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Accessibility Features</h2>

              <h3 className="text-xl font-medium mb-3">Website and Web Applications</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Keyboard navigation support for all interactive elements</li>
                <li>Screen reader compatibility with ARIA labels and landmarks</li>
                <li>High contrast color schemes and customizable themes</li>
                <li>Resizable text and zoom functionality up to 200%</li>
                <li>Alternative text for all images and non-text content</li>
                <li>Caption support for videos and multimedia content</li>
                <li>Consistent navigation and heading structure</li>
                <li>Form validation with clear error messages</li>
                <li>Skip links for keyboard users</li>
                <li>Focus indicators that are clearly visible</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">AI Assistant</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Voice input and output capabilities</li>
                <li>Support for screen readers and braille displays</li>
                <li>Customizable response formats (text, audio, visual)</li>
                <li>Multi-language support with proper pronunciation</li>
                <li>Emergency override commands for accessibility needs</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Mobile Applications</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>VoiceOver and TalkBack compatibility</li>
                <li>Large touch targets (minimum 44x44 points)</li>
                <li>High contrast mode support</li>
                <li>Reduced motion options for vestibular disorders</li>
                <li>Dynamic text size adjustment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Assistive Technologies Support</h2>

              <p className="mb-4">
                Our platform is designed to work with a wide range of assistive technologies, including:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold mb-2">Screen Readers</h4>
                  <ul className="list-disc pl-4 text-sm">
                    <li>NVDA (Windows)</li>
                    <li>JAWS (Windows)</li>
                    <li>VoiceOver (macOS/iOS)</li>
                    <li>TalkBack (Android)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Other Technologies</h4>
                  <ul className="list-disc pl-4 text-sm">
                    <li>Braille displays</li>
                    <li>Alternative keyboards</li>
                    <li>Eye tracking devices</li>
                    <li>Switch controls</li>
                    <li>Speech recognition software</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Accessibility Testing and Auditing</h2>

              <p className="mb-4">
                We employ a comprehensive approach to accessibility testing and quality assurance:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li><strong>Automated Testing:</strong> Regular automated accessibility audits using tools like axe-core, WAVE, and Lighthouse</li>
                <li><strong>Manual Testing:</strong> Expert accessibility auditors perform manual testing with assistive technologies</li>
                <li><strong>User Testing:</strong> People with disabilities participate in user testing and provide feedback</li>
                <li><strong>Continuous Monitoring:</strong> Real-time accessibility monitoring and alerting</li>
                <li><strong>Third-Party Audits:</strong> Annual comprehensive accessibility audits by certified experts</li>
              </ul>

              <p className="mb-4">
                Our current accessibility score (based on automated testing) is maintained above 95% across all
                major accessibility guidelines. We aim for 100% compliance and continuously work towards this goal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Known Limitations</h2>

              <p className="mb-4">
                While we strive for full accessibility, some legacy components or third-party integrations may
                have limitations. We are actively working to address these issues:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li>Some PDF documents may not be fully accessible (we provide alternative formats upon request)</li>
                <li>Certain complex data visualizations may require additional description</li>
                <li>Some older browser versions may have limited support for advanced accessibility features</li>
                <li>Third-party integrations are evaluated for accessibility before implementation</li>
              </ul>

              <p className="mb-4">
                If you encounter any accessibility barriers on our platform, please contact us immediately
                so we can address the issue promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Accessibility Training and Awareness</h2>

              <p className="mb-4">
                Accessibility is integrated into our company culture and development processes:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li><strong>Employee Training:</strong> All team members receive accessibility training during onboarding and annually</li>
                <li><strong>Design Reviews:</strong> Accessibility is evaluated in all design and UX reviews</li>
                <li><strong>Code Reviews:</strong> Accessibility standards are checked in all code reviews</li>
                <li><strong>Accessibility Champions:</strong> Designated team members promote accessibility best practices</li>
                <li><strong>External Partnerships:</strong> Collaboration with accessibility experts and disability advocacy groups</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Conformance Status</h2>

              <div className="bg-muted/50 p-6 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">WCAG 2.1 Level AA Conformance</h4>
                <p className="text-sm mb-3">
                  Our platform conforms to WCAG 2.1 Level AA standards. This means we meet all Level A and Level AA
                  success criteria, providing a high level of accessibility for people with disabilities.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-xs text-muted-foreground">Automated Score</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <div className="text-xs text-muted-foreground">Manual Audit</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">4.7/5</div>
                    <div className="text-xs text-muted-foreground">User Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">24/7</div>
                    <div className="text-xs text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Feedback and Support</h2>

              <p className="mb-4">
                We value your feedback on accessibility. If you experience any difficulties using our platform
                or have suggestions for improvement, please don't hesitate to contact us:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold mb-2">Accessibility Support</h4>
                  <p className="text-sm mb-1">Email: accessibility@trionex.tech</p>
                  <p className="text-sm mb-1">Phone: +1 (555) 123-4567</p>
                  <p className="text-sm">Response time: Within 24 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Emergency Support</h4>
                  <p className="text-sm mb-1">For critical accessibility issues</p>
                  <p className="text-sm mb-1">Phone: +1 (555) 911-4567</p>
                  <p className="text-sm">Available 24/7 for enterprise customers</p>
                </div>
              </div>

              <p className="mb-4">
                When contacting us about accessibility issues, please include:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li>A description of the issue or barrier</li>
                <li>The specific page or feature affected</li>
                <li>Your assistive technology and browser information</li>
                <li>Screenshots or detailed steps to reproduce the issue</li>
                <li>Your preferred format for our response</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Alternative Access</h2>

              <p className="mb-4">
                If you are unable to access any part of our platform due to accessibility barriers,
                we provide alternative means of access:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li><strong>Phone Support:</strong> Complete access to all platform features via phone support</li>
                <li><strong>Email Support:</strong> All services available through email communication</li>
                <li><strong>Alternative Formats:</strong> Documents available in accessible formats (Word, HTML, plain text)</li>
                <li><strong>Personal Assistance:</strong> Dedicated support personnel for complex accessibility needs</li>
                <li><strong>Third-Party Tools:</strong> Integration with specialized accessibility tools and services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Continuous Improvement</h2>

              <p className="mb-4">
                Accessibility is an ongoing commitment, not a one-time achievement. We continuously:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li>Monitor emerging accessibility standards and best practices</li>
                <li>Update our platform based on user feedback and technological advancements</li>
                <li>Conduct regular accessibility audits and usability testing</li>
                <li>Train our team on accessibility best practices</li>
                <li>Collaborate with accessibility experts and disability advocacy organizations</li>
              </ul>

              <p className="mb-4">
                We publish quarterly accessibility updates and maintain a public roadmap of planned accessibility improvements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Legal Compliance</h2>

              <p className="mb-4">
                Our accessibility efforts comply with applicable laws and regulations:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li><strong>Americans with Disabilities Act (ADA):</strong> Title II and Title III compliance</li>
                <li><strong>Section 508:</strong> Federal accessibility standards</li>
                <li><strong>WCAG 2.1:</strong> Level AA compliance</li>
                <li><strong>CVAA:</strong> Communications and Video Accessibility Act compliance</li>
                <li><strong>EN 301 549:</strong> European accessibility requirements</li>
              </ul>

              <p className="mb-4">
                We maintain detailed accessibility documentation and conduct regular compliance audits to ensure
                ongoing adherence to these standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

              <p className="mb-4">
                For accessibility-related questions, feedback, or support, please contact our accessibility team:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Accessibility Officer</h4>
                    <p className="text-sm">Sarah Martinez</p>
                    <p className="text-sm">accessibility@trionex.tech</p>
                    <p className="text-sm">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technical Support</h4>
                    <p className="text-sm">support@trionex.tech</p>
                    <p className="text-sm">Available 24/7</p>
                    <p className="text-sm">Live chat available on our website</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Mailing Address</h4>
                  <p className="text-sm">
                    Trionex Technologies<br />
                    Attn: Accessibility Team<br />
                    123 Innovation Drive<br />
                    Tech Valley, CA 94043<br />
                    United States
                  </p>
                </div>
              </div>
            </section>

            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Last Updated:</strong> {lastUpdated}<br />
                This accessibility statement is reviewed and updated quarterly to reflect our ongoing commitment to digital accessibility.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
