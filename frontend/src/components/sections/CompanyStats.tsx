'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

// Initial stats - user count will be fetched from backend
const initialStats: Stat[] = [
  {
    value: 0,
    suffix: '',
    label: 'Registered Users',
    description: 'Users who have joined our platform'
  },
  {
    value: 15,
    suffix: '+',
    label: 'Projects Developed',
    description: 'Technical projects successfully delivered'
  },
  {
    value: 6,
    suffix: '',
    label: 'Core Services Offered',
    description: 'Comprehensive technology solutions'
  },
  {
    value: 100,
    suffix: '%',
    label: 'Commitment to Quality',
    description: 'Dedication to client success'
  }
];

export function CompanyStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [userCount, setUserCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // Fetch user count from backend
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/v1/users/count`)
      .then(res => res.json())
      .then(data => {
        if (data.count !== undefined) {
          setUserCount(data.count);
        }
      })
      .catch(err => console.log('Could not fetch user count'));
  }, []);

  // Update stats with dynamic user count
  const stats: Stat[] = [
    {
      value: userCount,
      suffix: '',
      label: 'Registered Users',
      description: 'Users who have joined our platform'
    },
    {
      value: 15,
      suffix: '+',
      label: 'Projects Developed',
      description: 'Technical projects successfully delivered'
    },
    {
      value: 6,
      suffix: '',
      label: 'Core Services Offered',
      description: 'Comprehensive technology solutions'
    },
    {
      value: 100,
      suffix: '%',
      label: 'Commitment to Quality',
      description: 'Dedication to client success'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, isVisible]);

    return (
      <span className="text-4xl md:text-5xl font-bold text-primary-600">
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Our <span className="text-gradient">Engineering & Capability Metrics</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Demonstrating our expertise through measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <Counter value={stat.value} suffix={stat.suffix} />
                <h3 className="text-xl font-semibold text-secondary-900 mt-4 mb-2">
                  {stat.label}
                </h3>
                <p className="text-secondary-600 text-sm">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">Growing</div>
              <div className="text-primary-100">Client Partnerships</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">AI & Cloud</div>
              <div className="text-primary-100">Architecture Focus</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-primary-100">Security & Quality</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
