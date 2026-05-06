'use client';

import { cn } from '@/lib/utils';
import { VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button, buttonVariants } from '../button';

interface PrimaryButtonProps
  extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  animateFill?: boolean;
}

export default function PrimaryButton({
  children,
  className,
  animateFill = false,
  ...props
}: PrimaryButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!animateFill || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  if (!animateFill) {
    return (
      <Button {...props} className={cn('btn rounded-sm p-5', className)}>
        {children}
      </Button>
    );
  }

  return (
    <Button
      {...props}
      ref={buttonRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={cn(
        'group relative overflow-hidden rounded-sm p-5 transition-colors duration-300',
        className,
      )}
    >
      <span className="relative z-10">{children}</span>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-white whitespace-nowrap text-black"
        initial={false}
        animate={{
          clipPath: isHovered
            ? `circle(150% at ${coords.x}px ${coords.y}px)`
            : `circle(0% at ${coords.x}px ${coords.y}px)`,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <span className="font-medium capitalize">{children}</span>
      </motion.div>
    </Button>
  );
}
