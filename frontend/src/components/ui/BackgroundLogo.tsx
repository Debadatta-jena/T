'use client';

// Subtle background - clean professional look
export function BackgroundLogo({ opacity = 0.02 }: { opacity?: number }) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Clean subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
    </div>
  );
}
