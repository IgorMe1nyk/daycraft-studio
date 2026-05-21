import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "block w-full rounded-lg border border-charcoal/15 bg-cream",
      "px-3.5 h-11 text-[15px] text-charcoal placeholder:text-warmGray/55",
      "focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15",
      "transition-all duration-150",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";
