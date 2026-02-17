import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Trionex Technologies',
  description: 'Trionex Technologies terms of service and usage agreement. Review our terms for using our enterprise software platform and services.',
  keywords: 'terms of service, terms and conditions, usage agreement, legal terms, service agreement',
};

export default function TermsOfServicePage() {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-24">
        <div className="container max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>

            <div className="bg-muted/50 p-4 rounded-lg mb-8">
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> {lastUpdated}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                These terms of service ("Terms") govern your use of Trionex Technologies' platform and services.
                By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>

              <p className="mb-4">
                By accessing and using Trionex Technologies ("we," "us," or "our") platform, services, and website
                (collectively, the "Services"), you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <p className="mb-4">
                These Terms apply to all visitors, users, and others who access or use the Services. You must be at
                least 18 years old to use our Services or, if you are under 18, have parental consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>

              <p className="mb-4">
                Trionex Technologies provides enterprise-grade software solutions including:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li>AI-powered analytics and business intelligence platforms</li>
                <li>Cloud-native application development and deployment services</li>
                <li>Cybersecurity solutions and compliance management</li>
                <li>Data integration and migration services</li>
                <li>Custom software development and system integration</li>
                <li>AI assistant and automation services</li>
                <li>Professional consulting and implementation services</li>
              </ul>

              <p className="mb-4">
                Our Services are designed for enterprise use and are subject to our Service Level Agreements (SLAs)
                and enterprise support commitments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts and Registration</h2>

              <h3 className="text-xl font-medium mb-3">Account Creation</h3>
              <p className="mb-4">
                To access certain features of our Services, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and account credentials</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Account Security</h3>
              <p className="mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all
                activities that occur under your account. We implement industry-standard security measures,
                but you must use strong passwords and enable multi-factor authentication where available.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use Policy</h2>

              <p className="mb-4">
                You agree to use our Services only for lawful purposes and in accordance with these Terms.
                You agree not to use the Services:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li>In any way that violates applicable federal, state, local, or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate Trionex Technologies, our employees, or other users</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services</li>
                <li>To use any manual or automated software, devices, or other processes to "crawl" or "spider" any page of our Services</li>
                <li>To attempt to gain unauthorized access to any portion of our Services or systems</li>
                <li>To use our Services to transmit any viruses, worms, or other malicious code</li>
                <li>To attempt to reverse engineer, decompile, or disassemble any part of our Services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>

              <h3 className="text-xl font-medium mb-3">Our Intellectual Property</h3>
              <p className="mb-4">
                The Services and their original content, features, and functionality are and will remain the exclusive
                property of Trionex Technologies and its licensors. The Services are protected by copyright, trademark,
                and other laws. Our trademarks and trade dress may not be used in connection with any product or
                service without our prior written consent.
              </p>

              <h3 className="text-xl font-medium mb-3">Your Content</h3>
              <p className="mb-4">
                You retain ownership of any data, content, or materials you upload or provide to our Services
                ("Your Content"). By providing Your Content, you grant us a worldwide, non-exclusive, royalty-free
                license to use, display, and distribute Your Content solely for the purpose of providing and
                improving our Services.
              </p>

              <h3 className="text-xl font-medium mb-3">Feedback</h3>
              <p className="mb-4">
                Any feedback, comments, or suggestions you provide regarding our Services shall be our exclusive
                property and we may use such feedback for any purpose without compensation to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Data Protection and Privacy</h2>

              <p className="mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our
                Privacy Policy, which is incorporated into these Terms by reference. By using our Services, you
                consent to the collection and use of information as outlined in our Privacy Policy.
              </p>

              <p className="mb-4">
                We implement industry-standard security measures to protect your data, including:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and penetration testing</li>
                <li>Multi-factor authentication for administrative access</li>
                <li>Role-based access controls</li>
                <li>Automated backup and disaster recovery procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Service Availability and Support</h2>

              <h3 className="text-xl font-medium mb-3">Service Level Agreements</h3>
              <p className="mb-4">
                Enterprise customers are subject to our Service Level Agreements (SLAs) which guarantee:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>99.99% uptime for critical services</li>
                <li>Response times within 1 hour for critical issues</li>
                <li>24/7 technical support availability</li>
                <li>Dedicated account management</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Maintenance and Updates</h3>
              <p className="mb-4">
                We may perform maintenance or updates to our Services with or without notice. We will make
                reasonable efforts to minimize service disruption and will notify enterprise customers in advance
                of scheduled maintenance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Payment and Billing</h2>

              <p className="mb-4">
                Payment terms for our Services are specified in your service agreement or order form. Unless otherwise
                specified, charges are billed in advance on a monthly or annual basis.
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li>All fees are non-refundable unless explicitly stated otherwise</li>
                <li>Late payments may result in service suspension or termination</li>
                <li>Price changes will be communicated 30 days in advance</li>
                <li>You are responsible for all applicable taxes</li>
                <li>Payment information is processed securely through PCI-compliant providers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>

              <h3 className="text-xl font-medium mb-3">Termination by You</h3>
              <p className="mb-4">
                You may terminate your account at any time by contacting our support team. Upon termination,
                your access to the Services will cease immediately, but we may retain your data as required
                by law or for legitimate business purposes.
              </p>

              <h3 className="text-xl font-medium mb-3">Termination by Us</h3>
              <p className="mb-4">
                We may terminate or suspend your account and access to the Services immediately, without prior
                notice or liability, for any reason, including breach of these Terms. Upon termination, your
                right to use the Services will cease immediately.
              </p>

              <h3 className="text-xl font-medium mb-3">Survival</h3>
              <p className="mb-4">
                Sections that by their nature should survive termination shall survive, including ownership
                provisions, warranty disclaimers, and limitations of liability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Warranties and Disclaimers</h2>

              <h3 className="text-xl font-medium mb-3">Service Warranties</h3>
              <p className="mb-4">
                We warrant that our Services will perform substantially in accordance with our published
                documentation and SLAs. Our sole obligation and your exclusive remedy for breach of this
                warranty shall be for us to use commercially reasonable efforts to correct the non-conformance.
              </p>

              <h3 className="text-xl font-medium mb-3">Disclaimer</h3>
              <p className="mb-4">
                EXCEPT AS EXPRESSLY PROVIDED ABOVE, THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE"
                WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
                IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>

              <p className="mb-4">
                WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE
                CORRECTED, OR THAT THE SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>

              <p className="mb-4">
                IN NO EVENT SHALL TRIONEX TECHNOLOGIES, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS,
                SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL,
                OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICES.
              </p>

              <p className="mb-4">
                OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR OUR
                SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICES IN THE TWELVE MONTHS
                PRECEDING THE CLAIM.
              </p>

              <p className="mb-4">
                Some jurisdictions do not allow the exclusion or limitation of liability for consequential
                or incidental damages, so the above limitation may not apply to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>

              <p className="mb-4">
                You agree to defend, indemnify, and hold harmless Trionex Technologies and its officers,
                directors, employees, and agents from and against any claims, damages, losses, costs,
                and expenses (including reasonable attorney's fees) arising out of or relating to:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li>Your use of or inability to use our Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Your violation of any applicable laws or regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. Governing Law and Dispute Resolution</h2>

              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of
                California, United States, without regard to its conflict of law provisions.
              </p>

              <p className="mb-4">
                Any disputes arising out of or relating to these Terms or the Services shall be resolved
                through binding arbitration in accordance with the Commercial Arbitration Rules of the
                American Arbitration Association. The arbitration shall take place in San Francisco, California.
              </p>

              <p className="mb-4">
                Notwithstanding the foregoing, we may seek injunctive or other equitable relief in any court
                of competent jurisdiction to protect our intellectual property rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">14. Compliance and Export Control</h2>

              <p className="mb-4">
                You agree to comply with all applicable export control laws and regulations. You shall not
                export, re-export, or transfer any technical data or products received from us in violation
                of such laws and regulations.
              </p>

              <p className="mb-4">
                Our Services may be subject to U.S. export control laws and regulations, including but not
                limited to the Export Administration Regulations (EAR) and International Traffic in Arms
                Regulations (ITAR).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">15. Force Majeure</h2>

              <p className="mb-4">
                Neither party shall be liable for any delay or failure in performance under these Terms
                resulting from causes beyond its reasonable control, including acts of God, war, terrorism,
                riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes,
                or shortages of transportation facilities, fuel, energy, labor, or materials.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">16. Severability and Waiver</h2>

              <p className="mb-4">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will
                be limited or eliminated to the minimum extent necessary so that the Terms will otherwise
                remain in full force and effect.
              </p>

              <p className="mb-4">
                Our failure to enforce any part of these Terms shall not constitute a waiver of our right
                to later enforce that or any other part of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">17. Changes to Terms</h2>

              <p className="mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of material
                changes via email or through our Services at least 30 days before the changes take effect.
              </p>

              <p className="mb-4">
                Your continued use of our Services after the effective date of changes constitutes acceptance
                of the modified Terms. If you do not agree to the modified Terms, you must stop using our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">18. Contact Information</h2>

              <p className="mb-4">
                If you have any questions about these Terms, please contact us:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Legal Department</h4>
                    <p className="text-sm">legal@trionex.tech</p>
                    <p className="text-sm">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">General Support</h4>
                    <p className="text-sm">support@trionex.tech</p>
                    <p className="text-sm">Available 24/7 for enterprise customers</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Mailing Address</h4>
                  <p className="text-sm">
                    Trionex Technologies<br />
                    Attn: Legal Department<br />
                    123 Innovation Drive<br />
                    Tech Valley, CA 94043<br />
                    United States
                  </p>
                </div>
              </div>
            </section>

            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                By using Trionex Technologies' Services, you acknowledge that you have read, understood,
                and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
