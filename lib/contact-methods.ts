import { Instagram, Mail, Phone, type LucideProps } from "lucide-react";

/* ───────────────────────────────────────────────────────────────────────────
   Single source of truth for the three ways visitors can reach me.

   ── HOW TO UPDATE ─────────────────────────────────────────────────────────

   Phone number:
     Update `display` (the formatted human-readable number) and `href`
     (the tel: link, with no spaces or punctuation) on the Phone entry.

   Instagram handle:
     If the handle ever changes from daybreak.studio.nj, edit the Instagram
     entry's `display` and `href`.

   Adding more methods later (WhatsApp, Telegram, etc.):
     Add a new ContactMethod to the array. For brand SVGs not in lucide,
     drop a small icon component in components/icons/ and import it here.

   ──────────────────────────────────────────────────────────────────────── */

/** Accepts lucide-react icons or any component that matches LucideProps. */
export type ContactMethodIcon = React.ComponentType<LucideProps>;

export interface ContactMethod {
  /** Stable key used for React lists and aria-labels. */
  id: "email" | "phone" | "instagram";
  label: string;
  /** Text shown to the visitor next to the icon. */
  display: string;
  /** Where the link opens. */
  href: string;
  Icon: ContactMethodIcon;
  /** For `mailto:`/`tel:` links we want to stay in-page. Default true. */
  openInNewTab?: boolean;
}

export const contactMethods: ContactMethod[] = [
  {
    id: "email",
    label: "Email",
    display: "hello@daybreakstudio.studio",
    href: "mailto:hello@daybreakstudio.studio",
    Icon: Mail,
    openInNewTab: false,
  },
  {
    id: "phone",
    label: "Phone",
    display: "(201) 771-0092",
    href: "tel:+12017710092",
    Icon: Phone,
    openInNewTab: false,
  },
  {
    id: "instagram",
    label: "Instagram",
    // Instagram handle: daybreak.studio.nj — update here if the username changes
    display: "@daybreak.studio.nj",
    href: "https://instagram.com/daybreak.studio.nj",
    Icon: Instagram,
    openInNewTab: true,
  },
];
