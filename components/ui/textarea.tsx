import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "block w-full rounded-lg border border-charcoal/15 bg-cream",
      "px-3.5 py-3 text-[15px] text-charcoal placeholder:text-warmGray/55 resize-y",
      "focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15",
      "transition-all duration-150",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
