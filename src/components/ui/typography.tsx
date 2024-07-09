import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
  italic?: boolean;
  variant?: Variant;
}

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p'
  | 'blockquote'
  | 'large'
  | 'small'
  | 'extraSmall';

const Typography = ({
  variant = 'p',
  italic,
  muted,
  children,
  className,
  ...props
}: React.HTMLAttributes<
  HTMLParagraphElement | HTMLHeadingElement | HTMLQuoteElement | HTMLSpanElement
> &
  TypographyProps) => {
  const Component = Typs[variant];
  return (
    <Component
      className={cn(
        className,
        muted && 'text-muted-foreground',
        italic && 'italic',
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

const Typs = {
  h1: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement> & {
    children: React.ReactNode;
    className?: string;
  }) => (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  ),

  h2: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement> & {
    children: React.ReactNode;
    className?: string;
  }) => (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement> & {
    children: React.ReactNode;
    className?: string;
  }) => (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement> & {
    children: React.ReactNode;
    className?: string;
  }) => (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement> & {
    children: React.ReactNode;
    className?: string;
  }) => (
    <h4
      className={cn(
        'scroll-m-20 text-lg font-semibold tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  ),
  p: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLParagraphElement> & {
    children: React.ReactNode;
    className?: string;
  }) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    >
      {children}
    </p>
  ),

  blockquote: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement> & {
    children: React.ReactNode;
    className?: string;
  }) => (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    >
      {children}
    </blockquote>
  ),

  large: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLParagraphElement> & {
    children: React.ReactNode;
    className?: string;
  }) => (
    <p className={cn('text-lg font-semibold', className)} {...props}>
      {children}
    </p>
  ),

  small: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLSpanElement> & {
    children: React.ReactNode;
    className?: string;
  }) => (
    <p className={cn('text-sm font-medium leading-none', className)} {...props}>
      {children}
    </p>
  ),

  extraSmall: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLSpanElement> & {
    children: React.ReactNode;
    className?: string;
  }) => (
    <p className={cn('text-xs font-medium leading-none', className)} {...props}>
      {children}
    </p>
  ),
};

export default Typography;
