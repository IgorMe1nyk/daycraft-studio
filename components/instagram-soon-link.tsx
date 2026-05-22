"use client";

import { Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Placeholder Instagram link — shows an alert instead of navigating until
 * the @daybreakstudio account exists. Looks and feels like a real link.
 *
 * TODO: Once @daybreakstudio Instagram exists, restore the real href in
 * `instagram-soon-link.tsx` (set `href` to the profile URL, drop the
 * onClick, restore target/rel).
 */
export function InstagramSoonLink({
  className,
  showIcon = false,
}: {
  className?: string;
  showIcon?: boolean;
}) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        // eslint-disable-next-line no-alert
        alert("Instagram launching soon — follow on launch!");
      }}
      className={cn(
        "inline-flex items-center gap-2 transition-colors",
        className,
      )}
    >
      {showIcon && <Instagram className="size-4" aria-hidden />}
      @daybreakstudio
    </a>
  );
}
