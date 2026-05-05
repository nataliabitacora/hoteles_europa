import type { ReactNode } from 'react';

type BadgeVariant = 'yellow' | 'pink' | 'blue' | 'green' | 'purple' | 'orange';

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  yellow: 'bg-secondary text-black',
  pink: 'bg-accent-pink text-black',
  blue: 'bg-accent-blue text-black',
  green: 'bg-accent-green text-black',
  purple: 'bg-accent-purple text-black',
  orange: 'bg-accent-orange text-black'
};

export function Badge({ variant = 'yellow', children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-4 py-2 border-4 border-black rounded-lg font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
