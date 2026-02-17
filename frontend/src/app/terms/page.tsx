'use client';

import { motion } from 'framer-motion';
import { FileText, Shield, AlertCircle, Users } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function Terms() {
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
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              These terms govern your use of Trionex Technologies' services and products.
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
                  <FileText className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-secondary-900">Service Agreement</h3>
                </div>
                <p className="text-secondary-600 mb-4">
                  By using our services, you agree to:
                </p>
                <ul className="space-y-2 text-secondary-600">
                  <li>• Provide accurate information</li>
                  <li>• Use services for lawful purposes</li>
                  <li>• Maintain account security</li>
                  <li>• Comply with applicable laws</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-secondary-900">Service Availability</h3>
                </div>
                <p className="text-secondary-600 mb-4">
                  We strive to provide reliable service:
                </p>
                <ul className="space-y-2 text-secondary-600">
                  <li>• 99.5% uptime target</li>
                  <li>• Scheduled maintenance notifications</li>
                  <li>• Service level agreements for enterprise</li>
                  <li>• No guarantee of uninterrupted service</li>
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
                  <AlertCircle className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-secondary-900">Limitations</h3>
                </div>
                <p className="text-secondary-600 mb-4">
                  Our liability is limited as follows:
                </p>
                <ul className="space-y-2 text-secondary-600">
                  <li>• Services provided "as is"</li>
                  <li>• No warranties beyond stated terms</li>
                  <li>• Limited to service fees paid</li>
                  <li>• Not liable for indirect damages</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-secondary-900">Account Terms</h3>
                </div>
                <p className="text-secondary-600 mb-4">
                  Account responsibilities include:
                </p>
                <ul className="space-y-2 text-secondary-600">
                  <li>• One account per person/business</li>
                  <li>• Immediate security breach reporting</li>
                  <li>• No account sharing without permission</li>
                  <li>• Right to suspend for violations</li>
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
              Terms Updates
            </h2>
            <div className="text-center">
              <p className="text-secondary-600 mb-4">
                We may update these terms periodically. Changes will be:
              </p>
              <ul className="space-y-2 text-secondary-600 max-w-2xl mx-auto">
                <li>• Posted on this page with effective date</li>
                <li>• Emailed to registered users</li>
                <li>• Effective 30 days after notification</li>
                <li>• Continued use constitutes acceptance</li>
              </ul>
              <div className="mt-6">
                <p className="text-secondary-600">
                  Last updated: February 2024
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
