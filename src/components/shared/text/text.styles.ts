import { cva } from 'class-variance-authority';

export const textStyles = cva(["flex"], {
  variants: {
    color: {
      primary: "text-grey-dark dark:text-grey-light",
      secondary: "text-rose-gold dark:text-rose-gold",
      disabled: "text-charcoal-grey dark:text-charcoal-grey",
      accent: 'text-golden-text dark:text-golden-text',
    },
    variant: {
      "heading-1": [
        "text-h1",
        "tracking-heading",
        "font-display",
      ],
      "heading-2": [
        "text-h2",
        "tracking-heading",
        "font-display",
      ],
      "heading-3": [
        "text-h3",
        "tracking-heading",
        "font-display",
      ],
      "heading-4": [
        "text-h4",
        "tracking-heading",
        "font-display",
      ],
      "heading-5": [
        "text-h5",
        "tracking-heading",
        "font-display",
      ],
      "heading-6": [
        "text-h6",
        "tracking-heading",
        "font-display",
      ],
      "body": [
        "text-sm",
        "tracking-wide",
        "font-sans",
      ],

    },
  },
  defaultVariants: {
    variant: "body",
    color: "primary",
  },
});
