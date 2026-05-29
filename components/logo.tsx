import { cn } from "@/lib/utils";

/**
 * Horizon-line mark: a thin charcoal line with a small accent-blue sun
 * sitting just above center, slightly offset to the left.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 24"
      width="36"
      height="22"
      aria-hidden="true"
      className={cn("shrink-0 overflow-visible", className)}
    >
      <line
        x1="3"
        y1="15.5"
        x2="37"
        y2="15.5"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="logo-line"
      />
      <circle cx="14" cy="11" r="3.5" fill="#6B8CAE" className="logo-sun" />
    </svg>
  );
}

/**
 * The wordmark is "Daycraft Studio" — proper case. The capital D + S need
 * a touch less negative letter-spacing than the lowercase original would,
 * so we use `tracking-[-0.005em]` (effectively normal) and `font-medium`
 * to keep visual weight in balance with the icon.
 */
export function Logo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  return (
    <div
      className={cn(
        "logo-group inline-flex items-center gap-2.5",
        className,
      )}
    >
      <LogoMark className={size === "sm" ? "h-[18px] w-[30px]" : ""} />
      <span
        className={cn(
          "font-sans font-medium text-charcoal tracking-[-0.005em]",
          size === "sm" ? "text-[13px]" : "text-[15px]",
        )}
      >
        Daycraft Studio
      </span>
    </div>
  );
}
