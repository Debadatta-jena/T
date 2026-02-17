'use client';

import { motion } from 'framer-motion';
import { WebsiteAgeCounter } from '@/components/ui/WebsiteAgeCounter';

export function WebsiteAgeSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Starting Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Every great company starts somewhere. We're building our foundation with dedication and passion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">
              Platform Launch Date
            </h3>
            <p className="text-secondary-600">
              Beginning our journey to serve businesses worldwide
            </p>
          </div>
          
          <div className="bg-primary-50 rounded-xl p-6">
            <WebsiteAgeCounter variant="compact" className="justify-center" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-full"></div>
            </div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-2">Fresh Start</h4>
            <p className="text-secondary-600">
              New perspectives and innovative approaches to modern challenges
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-full"></div>
            </div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-2">Dedicated Focus</h4>
            <p className="text-secondary-600">
              Every client receives our full attention and commitment to success
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-full"></div>
            </div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-2">Growing Together</h4>
            <p className="text-secondary-600">
              Building relationships and learning with every project we undertake
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
