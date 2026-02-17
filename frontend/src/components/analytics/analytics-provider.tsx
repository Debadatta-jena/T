'use client';

import { createContext, useContext, useEffect, ReactNode, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { usePlausible } from 'next-plausible';

interface AnalyticsContextType {
  trackEvent: (eventName: string, props?: Record<string, any>) => void;
  trackPageview: (url?: string) => void;
  trackConversion: (conversionType: string, value?: number) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
}

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const plausible = usePlausible();
  
  // Use refs to store functions to avoid dependency issues
  const trackEventRef = useRef<typeof trackEventImpl>(null as unknown as typeof trackEventImpl);
  const trackPageviewRef = useRef<typeof trackPageviewImpl>(null as unknown as typeof trackPageviewImpl);

  function trackEventImpl(eventName: string, props?: Record<string, any>) {
    try {
      plausible(eventName, {
        props: {
          ...props,
          url: typeof window !== 'undefined' ? window.location.href : '',
          referrer: typeof document !== 'undefined' ? document.referrer : '',
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
          timestamp: new Date().toISOString(),
        },
      });

      // Also track to Google Analytics if configured
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, {
          custom_map: { dimension1: 'page_url' },
          page_url: window.location.href,
          ...props,
        });
      }

      // Log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', eventName, props);
      }
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }

  function trackPageviewImpl(url?: string) {
    try {
      // next-plausible automatically tracks pageviews, but we can trigger custom ones
      if (url && typeof window !== 'undefined') {
        plausible('pageview', {
          props: {
            url: url,
            referrer: document.referrer,
          },
        });
      }

      // Log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Pageview:', url || (typeof window !== 'undefined' ? window.location.href : ''));
      }
    } catch (error) {
      console.error('Pageview tracking error:', error);
    }
  }

  function trackConversionImpl(conversionType: string, value?: number) {
    try {
      plausible('Conversion', {
        props: {
          type: conversionType,
          value,
          revenue: value,
          url: typeof window !== 'undefined' ? window.location.href : '',
          timestamp: new Date().toISOString(),
        },
      });

      // Track to Google Ads if configured
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID,
          value: value || 0,
          currency: 'USD',
        });
      }
    } catch (error) {
      console.error('Conversion tracking error:', error);
    }
  }

  // Update refs after render
  trackEventRef.current = trackEventImpl;
  trackPageviewRef.current = trackPageviewImpl;

  // Track page views
  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    trackPageviewRef.current(url);
  }, [pathname, searchParams]);

  // Track user interactions
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href) {
        // Track outbound links
        if (link.hostname !== window.location.hostname) {
          trackEventRef.current('Outbound Link Click', {
            href: link.href,
            text: link.textContent?.trim(),
          });
        }

        // Track internal navigation
        if (link.hostname === window.location.hostname && link.pathname !== pathname) {
          trackEventRef.current('Internal Navigation', {
            from: pathname,
            to: link.pathname,
            text: link.textContent?.trim(),
          });
        }
      }

      // Track button clicks
      const button = target.closest('button');
      if (button && !button.closest('a')) {
        const buttonText = button.textContent?.trim() || button.getAttribute('aria-label');
        if (buttonText) {
          trackEventRef.current('Button Click', {
            text: buttonText,
            className: button.className,
          });
        }
      }
    };

    const handleFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const formName = form.getAttribute('data-form-name') || form.id || 'unknown-form';

      trackEventRef.current('Form Submit', {
        formName,
        formAction: form.action,
      });
    };

    // Add event listeners
    document.addEventListener('click', handleClick);
    document.addEventListener('submit', handleFormSubmit);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('submit', handleFormSubmit);
    };
  }, [pathname]);

  // Track scroll depth
  useEffect(() => {
    let maxScrollDepth = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent > maxScrollDepth && scrollPercent >= 25) {
        maxScrollDepth = Math.floor(scrollPercent / 25) * 25;
        trackEventRef.current('Scroll Depth', {
          depth: maxScrollDepth,
          page: pathname,
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Track time spent on page
  useEffect(() => {
    const startTime = Date.now();
    let timeSpent = 0;

    const trackTimeSpent = () => {
      timeSpent = Math.floor((Date.now() - startTime) / 1000);
    };

    const interval = setInterval(trackTimeSpent, 5000);

    const handleBeforeUnload = () => {
      trackTimeSpent();
      trackEventRef.current('Time Spent', {
        duration: timeSpent,
        page: pathname,
      });
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        trackTimeSpent();
        trackEventRef.current('Page Hidden', {
          timeSpent,
          page: pathname,
        });
      } else {
        trackEventRef.current('Page Visible', {
          timeSpent,
          page: pathname,
        });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      trackTimeSpent();
      trackEventRef.current('Page Leave', {
        timeSpent,
        page: pathname,
      });
    };
  }, [pathname]);

  const value: AnalyticsContextType = {
    trackEvent: trackEventImpl,
    trackPageview: trackPageviewImpl,
    trackConversion: trackConversionImpl,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
}
