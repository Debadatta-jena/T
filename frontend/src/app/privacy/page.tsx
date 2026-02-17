'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Your privacy is fundamental to our business. This policy outlines how we collect, 
              use, and protect your information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Database className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-secondary-900">Data Collection</h3>
                </div>
                <p className="text-secondary-600 mb-4">
                  We collect only the information necessary to provide our services:
                </p>
                <ul className="space-y-2 text-secondary-600">
                  <li>• Contact information for communication</li>
                  <li>• Usage data to improve our services</li>
                  <li>• Technical data for system optimization</li>
                  <li>• No personal data is sold or shared</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-secondary-900">Data Protection</h3>
                </div>
                <p className="text-secondary-600 mb-4">
                  We implement industry-standard security measures:
                </p>
                <ul className="space-y-2 text-secondary-600">
                  <li>• End-to-end encryption for all data</li>
                  <li>• Regular security audits and updates</li>
                  <li>• Limited access to sensitive information</li>
                  <li>• Secure backup and recovery systems</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-secondary-900">Your Rights</h3>
                </div>
                <p className="text-secondary-600 mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-2 text-secondary-600">
                  <li>• Access your personal data</li>
                  <li>• Request data deletion</li>
                  <li>• Opt-out of marketing communications</li>
                  <li>• Request data portability</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Lock className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-secondary-900">Data Retention</h3>
                </div>
                <p className="text-secondary-600 mb-4">
                  We retain data only as long as necessary:
                </p>
                <ul className="space-y-2 text-secondary-600">
                  <li>• Account data: Until account deletion</li>
                  <li>• Transaction data: 7 years for compliance</li>
                  <li>• Analytics data: 24 months</li>
                  <li>• Support tickets: 3 years</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl mb-20"
          >
            <h2 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
              Contact Us About Privacy
            </h2>
            <div className="text-center">
              <p className="text-secondary-600 mb-4">
                If you have questions about this privacy policy or want to exercise your rights, 
                please contact us at:
              </p>
              <div className="bg-primary-50 rounded-lg p-4 inline-block">
                <p className="text-primary-800 font-medium">privacy@trionex.tech</p>
              </div>
              <p className="text-secondary-600 text-sm mt-4">
                We respond to all privacy inquiries within 30 days.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
