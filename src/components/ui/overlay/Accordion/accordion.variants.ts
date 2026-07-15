import { cva, type VariantProps } from 'class-variance-authority';

export const accordionItemVariants = cva(
  'border-b border-border',
  {
    variants: {
      variant: {
        default: '',
        card: 'border rounded-lg mb-2 last:mb-0 px-4',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const accordionTriggerVariants = cva(
  [
    'flex w-full items-center justify-between py-4 text-left',
    // #551: clickable accordion triggers carry the brand foreground.
    'font-medium text-brand-700 dark:text-brand-400',
    'transition-colors hover:text-brand-800 dark:hover:text-brand-300',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:rounded-sm',
  ],
  {
    variants: {
      size: {
        sm: 'text-sm py-3',
        md: 'text-sm py-4',
        lg: 'text-base py-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type AccordionVariants = VariantProps<typeof accordionItemVariants>;
export type AccordionTriggerVariants = VariantProps<typeof accordionTriggerVariants>;
