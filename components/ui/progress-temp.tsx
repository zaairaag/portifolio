'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface ProgressProps {
  value?: number;
  className?: string;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ value = 0, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        className={cn(
          'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
          className
        )}
        {...props}
      >
        <div
          className="h-full w-full flex-1 bg-primary transition-all"
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </div>
    );
  }
);

Progress.displayName = 'Progress';

export { Progress };
