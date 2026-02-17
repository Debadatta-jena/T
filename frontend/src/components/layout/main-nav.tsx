import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const MainNav = () => {
  const pathname = usePathname();

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
    <nav className="hidden md:flex items-center space-x-6">
      {routes.map((route) => (
        <div key={route.href} className="relative group">
          <Link
            href={route.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              route.active ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            {route.label}
          </Link>
          
          {route.submenu && (
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {route.submenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default MainNav;

