import * as React from "react";
import { cn } from "@/lib/utils";

// Custom-styled native select. Native works best on mobile.
export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "block w-full rounded-lg border border-charcoal/15 bg-cream",
      "px-3.5 h-11 pr-10 text-[15px] text-charcoal appearance-none cursor-pointer",
      "focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15",
      "transition-all duration-150",
      "bg-no-repeat bg-[right_0.85rem_center] bg-[length:0.7em]",
      "bg-[url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'><path d='M1 1l4 4 4-4' stroke='%231A1A1A' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/></svg>\")]",
      className,
    )}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";
