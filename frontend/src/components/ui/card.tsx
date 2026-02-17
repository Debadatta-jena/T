import * as React from 'react';

export function Card({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="bg-white rounded-lg shadow-sm" {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="px-4 py-2 border-b" {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className="text-lg font-semibold" {...props}>
      {children}
    </h3>
  );
}

export function CardContent({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="p-4" {...props}>
      {children}
    </div>
  );
}

