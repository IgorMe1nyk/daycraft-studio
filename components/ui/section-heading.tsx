"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
  className?: string;
}

const easeOut = [0.22, 1, 0.36, 1] as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  center,
  className,
}: Props) {
  return (
    <div className={cn("max-w-2xl", center && "text-center mx-auto", className)}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="text-[11px] tracking-[0.18em] text-accent uppercase block"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.05, ease: easeOut }}
        className="mt-4 font-display font-medium text-h2 text-charcoal"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.12, ease: easeOut }}
          className="mt-4 text-warmGray text-[16px] leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
