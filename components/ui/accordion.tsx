"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * shadcn-style Accordion wrapped around @radix-ui/react-accordion.
 * Visuals are intentionally minimal — a thin charcoal divider between
 * items, the question on the left, and a Plus icon on the right that
 * rotates 45deg (becoming an ×) when the item is open.
 */

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-charcoal/[0.08]", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-start gap-4 py-5 text-left",
        "text-[16px] sm:text-[17px] text-charcoal tracking-[-0.005em]",
        "transition-colors hover:text-accentDeep",
        "focus-visible:outline-none focus-visible:text-accentDeep",
        className,
      )}
      {...props}
    >
      <span className="flex-1 leading-snug">{children}</span>
      <span
        className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-paleBlue/0 group-data-[state=open]:bg-accent/10 transition-colors"
        aria-hidden
      >
        <Plus
          className="size-4 text-warmGray group-hover:text-accentDeep group-data-[state=open]:text-accentDeep transition-[transform,color] duration-300 group-data-[state=open]:rotate-45"
          strokeWidth={1.8}
        />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden",
      "data-[state=open]:animate-accordion-down",
      "data-[state=closed]:animate-accordion-up",
    )}
    {...props}
  >
    <div
      className={cn(
        "pb-6 pr-12 text-[15px] leading-relaxed text-warmGray",
        className,
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
