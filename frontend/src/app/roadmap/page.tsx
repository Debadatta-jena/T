'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, Target, Rocket } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const roadmapItems = [
  {
    quarter: 'Q1 2024',
    status: 'completed',
    items: [
      'Core platform architecture',
      'Security framework implementation',
      'Healthcare compliance module',
      'Early access program launch'
    ]
  },
  {
    quarter: 'Q2 2024',
    status: 'in-progress',
    items: [
      'Financial compliance features',
      'Manufacturing IoT integration',
      'Advanced analytics dashboard',
      'Mobile application development'
    ]
  },
  {
    quarter: 'Q3 2024',
    status: 'upcoming',
    items: [
      'AI-powered automation tools',
      'Multi-tenant architecture',
      'Advanced reporting system',
      'API marketplace launch'
    ]
  },
  {
    quarter: 'Q4 2024',
    status: 'planned',
    items: [
      'Enterprise-grade scalability',
      'Advanced security features',
      'Global compliance standards',
      'Public platform launch'
    ]
  }
];

export default function Roadmap() {
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
              Product <span className="text-gradient">Roadmap</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our transparent development journey shows our commitment to building a robust enterprise platform 
              that addresses real business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
            {roadmapItems.map((quarter, index) => (
              <motion.div
                key={quarter.quarter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-secondary-900">{quarter.quarter}</h3>
                  {quarter.status === 'completed' && (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  )}
                  {quarter.status === 'in-progress' && (
                    <Clock className="w-6 h-6 text-blue-500" />
                  )}
                  {quarter.status === 'upcoming' && (
                    <Target className="w-6 h-6 text-orange-500" />
                  )}
                  {quarter.status === 'planned' && (
                    <Rocket className="w-6 h-6 text-gray-400" />
                  )}
                </div>
                <div className="space-y-3">
                  {quarter.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-2">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        quarter.status === 'completed' ? 'bg-green-500' :
                        quarter.status === 'in-progress' ? 'bg-blue-500' :
                        quarter.status === 'upcoming' ? 'bg-orange-500' : 'bg-gray-400'
                      }`} />
                      <p className="text-secondary-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-xl mb-20"
          >
            <h2 className="text-2xl font-bold text-secondary-900 mb-4 text-center">
              Development Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Security First</h3>
                <p className="text-secondary-600">
                  Every feature is built with security as the foundation, not an afterthought.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Industry Focus</h3>
                <p className="text-secondary-600">
                  Solutions tailored to specific industry challenges and compliance requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Scalable Architecture</h3>
                <p className="text-secondary-600">
                  Built to grow with your business from startup to enterprise scale.
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
