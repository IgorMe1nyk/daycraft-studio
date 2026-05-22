import { Instagram, Mail, type LucideProps } from "lucide-react";
import { TelegramIcon, WhatsAppIcon } from "@/components/icons/brand-icons";

/* ───────────────────────────────────────────────────────────────────────────
   Single source of truth for the four ways visitors can reach me.

   Each method is either `live` (a real link) or `soon` (placeholder that
   shows an alert until the account exists).

   ── HOW TO PROMOTE A "SOON" METHOD TO LIVE ────────────────────────────────

   WhatsApp:
     1. Get your Business account number (E.164 format, no +/spaces).
     2. Change the WhatsApp entry's `state` to "live", set
        `href: "https://wa.me/<number>"`, and set `display` to your number.
     3. Remove the `alert` field.

   Telegram:
     1. Set up your Telegram username.
     2. Change Telegram entry's `state` to "live", set
        `href: "https://t.me/<username>"`, and set `display` to "@<username>".
     3. Remove the `alert` field.

   ── HOW TO UPDATE INSTAGRAM HANDLE ────────────────────────────────────────
   If the handle changes, edit the Instagram entry's `display` and `href`.
   (Handle currently: daybreak.studio.nj)

   ──────────────────────────────────────────────────────────────────────── */

/** Accepts both lucide-react icons and our custom brand SVGs (which we
 *  type with `LucideProps` for compatibility). */
export type ContactMethodIcon = React.ComponentType<LucideProps>;

export type ContactMethodState = "live" | "soon";

export interface ContactMethod {
  /** Stable key used for React lists and aria-labels. */
  id: "email" | "instagram" | "whatsapp" | "telegram";
  label: string;
  state: ContactMethodState;
  /** Text shown to the visitor next to the icon. */
  display: string;
  /** Where the link opens when `state === "live"`. Required for live methods. */
  href?: string;
  /**
   * Alert message shown when a `soon` method is clicked.
   * Required when state === "soon".
   */
  alert?: string;
  Icon: ContactMethodIcon;
  /** For `mailto:` links etc., we want to stay in-page. Default true. */
  openInNewTab?: boolean;
}

export const contactMethods: ContactMethod[] = [
  {
    id: "email",
    label: "Email",
    state: "live",
    display: "hello@daybreakstudio.studio",
    href: "mailto:hello@daybreakstudio.studio",
    Icon: Mail,
    openInNewTab: false,
  },
  {
    id: "instagram",
    label: "Instagram",
    state: "live",
    // Instagram handle: daybreak.studio.nj — update here if the username changes
    display: "@daybreak.studio.nj",
    href: "https://instagram.com/daybreak.studio.nj",
    Icon: Instagram,
    openInNewTab: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    state: "soon",
    display: "Coming soon",
    alert:
      "WhatsApp Business launching in a few days — for now, please email hello@daybreakstudio.studio",
    // TODO: Once WhatsApp Business is set up, change to:
    //   state: "live",
    //   href: "https://wa.me/<number>",
    //   display: "<your business number>"
    //   (and remove the `alert` field).
    Icon: WhatsAppIcon,
  },
  {
    id: "telegram",
    label: "Telegram",
    state: "soon",
    display: "Coming soon",
    alert:
      "Telegram coming soon — for now, please email hello@daybreakstudio.studio",
    // TODO: Once Telegram is set up, change to:
    //   state: "live",
    //   href: "https://t.me/<username>",
    //   display: "@<username>"
    //   (and remove the `alert` field).
    Icon: TelegramIcon,
  },
];

/** Just the methods that are live — handy for the footer. */
export const liveContactMethods = contactMethods.filter(
  (m) => m.state === "live",
);
