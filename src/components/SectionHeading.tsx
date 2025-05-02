
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, center = false, className }: SectionHeadingProps) {
  return (
    <div className={cn(
      'mb-12',
      center && 'text-center',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg text-gray-600 max-w-3xl", center && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
