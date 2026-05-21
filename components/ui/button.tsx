import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 rounded-full font-medium",
    "transition-all duration-200 ease-out select-none whitespace-nowrap",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-charcoal text-cream hover:bg-charcoal/90 active:scale-[0.98] shadow-[0_1px_2px_rgba(0,0,0,0.06)]",
        accent:
          "bg-accent text-cream hover:bg-accentDeep active:scale-[0.98] shadow-[0_1px_2px_rgba(0,0,0,0.06)]",
        ghost:
          "text-charcoal hover:bg-charcoal/5 border border-transparent",
        outline:
          "border border-charcoal/15 text-charcoal hover:border-charcoal/30 hover:bg-charcoal/[0.03]",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-7 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";
