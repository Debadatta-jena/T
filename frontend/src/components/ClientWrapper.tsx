'use client';

import { Toaster } from 'react-hot-toast';
import { Chatbot } from '@/components/chatbot';
import { SplashScreenManager } from '@/components/ui/SplashScreenManager';

export function ClientWrapper() {
  return (
    <>
      <Toaster position="top-right" />
      <Chatbot autoOpen={false} openDelay={5000} />
      <SplashScreenManager />
    </>
  );
}
