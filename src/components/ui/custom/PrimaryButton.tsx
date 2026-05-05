import { cn } from '@/lib/utils';
import { VariantProps } from 'class-variance-authority';
import { Button, buttonVariants } from '../button';

export default function PrimaryButton({
  children,
  className,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  return (
    <Button {...props} className={cn('btn rounded-sm p-5', className)}>
      {children}
    </Button>
  );
}
