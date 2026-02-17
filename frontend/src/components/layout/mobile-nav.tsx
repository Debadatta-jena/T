'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const routes = [
    {
      href: '/',
      label: 'Home',
      active: pathname === '/',
    },
    {
      href: '/services',
      label: 'Services',
      active: pathname.startsWith('/services'),
      submenu: [
        { href: '/services/web-development', label: 'Web Development' },
        { href: '/services/mobile-development', label: 'Mobile Development' },
        { href: '/services/cloud-solutions', label: 'Cloud Solutions' },
        { href: '/services/ai-solutions', label: 'AI Solutions' },
      ],
    },
    {
      href: '/portfolio',
      label: 'Portfolio',
      active: pathname.startsWith('/portfolio'),
    },
    {
      href: '/about',
      label: 'About Us',
      active: pathname.startsWith('/about'),
    },
    {
      href: '/blog',
      label: 'Blog',
      active: pathname.startsWith('/blog'),
    },
    {
      href: '/careers',
      label: 'Careers',
      active: pathname.startsWith('/careers'),
    },
    {
      href: '/contact',
      label: 'Contact',
      active: pathname.startsWith('/contact'),
    },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 hover:text-primary focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 p-4">
          <nav className="flex flex-col space-y-4">
            {routes.map((route) => (
              <div key={route.href} className="border-b border-gray-100 dark:border-gray-800 pb-2">
                <Link
                  href={route.href}
                  className={cn(
                    'block py-2 text-base font-medium',
                    route.active ? 'text-primary' : 'text-gray-700 dark:text-gray-300'
                  )}
                >
                  {route.label}
                </Link>
                
                {route.submenu && (
                  <div className="pl-4 mt-2 space-y-2">
                    {route.submenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;

