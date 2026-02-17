'use client';

import { useState, useEffect } from 'react';

interface TimeUnits {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface WebsiteAgeCounterProps {
  launchDate?: Date;
  variant?: 'full' | 'compact';
  className?: string;
}

const DEFAULT_LAUNCH_DATE = new Date('2026-02-16T00:00:00Z'); // Start from 0 - update this to your actual launch date

export function WebsiteAgeCounter({ 
  launchDate = DEFAULT_LAUNCH_DATE, 
  variant = 'full',
  className = ''
}: WebsiteAgeCounterProps) {
  const [timeUnits, setTimeUnits] = useState<TimeUnits>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeUnits = (): TimeUnits => {
      const now = new Date();
      const diff = now.getTime() - launchDate.getTime();
      
      // Prevent negative values
      if (diff < 0) {
        return {
          years: 0,
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      
      // Calculate years and months more accurately
      const launchYear = launchDate.getUTCFullYear();
      const launchMonth = launchDate.getUTCMonth();
      const currentYear = now.getUTCFullYear();
      const currentMonth = now.getUTCMonth();
      
      let years = currentYear - launchYear;
      let months = currentMonth - launchMonth;
      
      if (months < 0) {
        years--;
        months += 12;
      }
      
      // Calculate remaining days after accounting for years and months
      const tempDate = new Date(launchDate);
      tempDate.setUTCFullYear(launchYear + years);
      tempDate.setUTCMonth(launchMonth + months);
      const remainingDays = Math.floor((now.getTime() - tempDate.getTime()) / (1000 * 60 * 60 * 24));
      
      const remainingHours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const remainingMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const remainingSeconds = Math.floor((diff % (1000 * 60)) / 1000);

      return {
        years,
        months,
        days: remainingDays,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds
      };
    };

    const updateCounter = () => {
      setTimeUnits(calculateTimeUnits());
    };

    // Initial calculation
    updateCounter();

    // Set up interval - update every second for both variants
    const interval = setInterval(updateCounter, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [launchDate, variant]);

  if (variant === 'compact') {
    return (
      <div className={`website-age-counter-compact ${className}`}>
        <div className="flex items-center justify-center space-x-2 sm:space-x-3">
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-primary-600 transition-all duration-300">
              {String(timeUnits.years).padStart(2, '0')}
            </div>
            <div className="text-[10px] text-secondary-500 uppercase tracking-wider">Years</div>
          </div>
          <div className="text-primary-400">:</div>
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-primary-600 transition-all duration-300">
              {String(timeUnits.months).padStart(2, '0')}
            </div>
            <div className="text-[10px] text-secondary-500 uppercase tracking-wider">Months</div>
          </div>
          <div className="text-primary-400">:</div>
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-primary-600 transition-all duration-300">
              {String(timeUnits.days).padStart(2, '0')}
            </div>
            <div className="text-[10px] text-secondary-500 uppercase tracking-wider">Days</div>
          </div>
          <div className="text-primary-400">:</div>
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-primary-600 transition-all duration-300">
              {String(timeUnits.hours).padStart(2, '0')}
            </div>
            <div className="text-[10px] text-secondary-500 uppercase tracking-wider">Hours</div>
          </div>
          <div className="text-primary-400">:</div>
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-primary-600 transition-all duration-300">
              {String(timeUnits.minutes).padStart(2, '0')}
            </div>
            <div className="text-[10px] text-secondary-500 uppercase tracking-wider">Mins</div>
          </div>
          <div className="text-primary-400">:</div>
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-primary-600 transition-all duration-300">
              {String(timeUnits.seconds).padStart(2, '0')}
            </div>
            <div className="text-[10px] text-secondary-500 uppercase tracking-wider">Secs</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`website-age-counter ${className}`}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-primary-600 transition-all duration-300">
            {timeUnits.years}
          </div>
          <div className="text-xs text-secondary-500 uppercase tracking-wider">Years</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-primary-600 transition-all duration-300">
            {timeUnits.months}
          </div>
          <div className="text-xs text-secondary-500 uppercase tracking-wider">Months</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-primary-600 transition-all duration-300">
            {timeUnits.days}
          </div>
          <div className="text-xs text-secondary-500 uppercase tracking-wider">Days</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-primary-600 transition-all duration-300">
            {timeUnits.hours}
          </div>
          <div className="text-xs text-secondary-500 uppercase tracking-wider">Hours</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-primary-600 transition-all duration-300">
            {timeUnits.minutes}
          </div>
          <div className="text-xs text-secondary-500 uppercase tracking-wider">Minutes</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-primary-600 transition-all duration-300">
            {timeUnits.seconds}
          </div>
          <div className="text-xs text-secondary-500 uppercase tracking-wider">Seconds</div>
        </div>
      </div>
    </div>
  );
}
