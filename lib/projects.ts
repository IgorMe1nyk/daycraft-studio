import {
  CalendarClock,
  FileSignature,
  Gift,
  HelpCircle,
  Image as ImageIcon,
  ListChecks,
  MapPin,
  Search,
  Shirt,
  Smartphone,
  Timer,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

/* ───────────────────────────────────────────────────────────────────────────
   Projects data — single source of truth for the Work section.

   ── HOW TO ADD A NEW PROJECT ──────────────────────────────────────────────
   1. Copy any existing `Project` object below.
   2. Update every field: id, name, tag, descriptions, URLs, features, etc.
   3. Set `featured: true` if you want it shown in the large hero card at the
      top of the Work section. Set `featured: false` for it to appear as a
      smaller card in the grid below.
   4. Place a mobile screenshot at /public/projects/<id>-mobile-preview.png
      and update `mobilePreview` to point to it (or leave the placeholder).
   5. The Work component handles layout automatically:
        - 1 featured project   → large side-by-side hero
        - 2+ featured projects → each stacked vertically as hero cards
        - non-featured projects → 3-up grid below the featured area
   ─────────────────────────────────────────────────────────────────────── */

export type Tier = "Starter" | "Standard" | "Custom";

export interface ProjectFeature {
  label: string;
  Icon: LucideIcon;
}

export interface Project {
  /** Stable URL-safe id, used as React key and for asset paths. */
  id: string;
  /** Display name shown on the card and modal. */
  name: string;
  /** Short tag — appears above the title (e.g. "Wedding · RSVP Site"). */
  tag: string;
  /** One-line summary, shown on the featured card. */
  shortDesc: string;
  /** 1-3 sentence description shown in the case-study modal. */
  longDesc: string;
  /** Where the "Visit Live Site" button points (real URL). */
  liveUrl: string;
  /** Pretty URL shown in the fake browser frame (can be a future custom domain). */
  displayUrl: string;
  /** Path to a mobile-screen screenshot for small viewports. */
  mobilePreview: string;
  /** Which Daybreak Studio tier this project represents. */
  tier: Tier;
  /** Price label, e.g. "$350" or "From $1,200". */
  price: string;
  /** Build-time tagline, e.g. "Built in 1 day". */
  buildTime: string;
  /** Whether to show this in the large hero slot at the top of Work. */
  featured: boolean;
  /** 4-6 short feature pills shown directly on the card. */
  cardFeatures: ProjectFeature[];
  /** Full feature grid shown in the case-study modal. */
  features: ProjectFeature[];
  /** "The approach" — 2-3 paragraphs for the modal. */
  approach: string[];
  /** Tech stack pills shown in the modal. */
  tech: string[];
}

export const projects: Project[] = [
  {
    id: "emily-and-james",
    name: "Emily & James",
    tag: "Wedding · RSVP Site",
    shortDesc:
      "A romantic, fully-featured wedding website with custom RSVP flow, schedule, menu, registry, and travel info.",
    longDesc:
      "A custom wedding website built for a couple celebrating in the Hudson Valley. Designed with romantic elegance in mind — soft typography, hand-drawn botanical details, and a thoughtful multi-step RSVP flow that captures meal preferences, dietary needs, and song requests. The site includes a complete schedule, family-style menu, registry links, travel and accommodation info, dress code with color palette inspiration, photo sharing, and an FAQ — everything a guest needs in one elegant page.",
    // `liveUrl` is the URL the iframe actually loads and that the "Visit
    // live site" button opens. It must resolve. `displayUrl` is purely
    // cosmetic — it's the text shown in the fake browser frame's address
    // bar, so it can be the polished/future URL.
    //
    // TODO: Once the `emily-and-james` subdomain is configured in Vercel
    // (Settings → Domains on the wedding-site project), switch `liveUrl`
    // to "https://emily-and-james.daybreakstudio.studio" so visitors get
    // the polished URL on click too. Until then, keep it on the working
    // vercel.app host so the iframe and the button actually work.
    liveUrl: "https://emily-and-james-wedding.vercel.app",
    displayUrl: "emily-and-james.daybreakstudio.studio",
    // TODO: Drop a real screenshot at this path (recommend 750×1334 portrait).
    mobilePreview: "/projects/emily-james-mobile-preview.png",
    tier: "Starter",
    price: "$350",
    buildTime: "Built in 1 day",
    featured: true,
    cardFeatures: [
      { label: "Custom RSVP Flow", Icon: ListChecks },
      { label: "Schedule Timeline", Icon: CalendarClock },
      { label: "Menu", Icon: UtensilsCrossed },
      { label: "Registry", Icon: Gift },
      { label: "Travel Info", Icon: MapPin },
      { label: "FAQ", Icon: HelpCircle },
    ],
    features: [
      { label: "Custom Multi-Step RSVP Form", Icon: FileSignature },
      { label: "Live Countdown Timer", Icon: Timer },
      { label: "Schedule Timeline", Icon: CalendarClock },
      { label: "Menu Cards", Icon: UtensilsCrossed },
      { label: "Registry Integration", Icon: Gift },
      { label: "Travel & Hotels", Icon: MapPin },
      { label: "Dress Code Guide", Icon: Shirt },
      { label: "Photo Sharing", Icon: ImageIcon },
      { label: "FAQ Accordion", Icon: HelpCircle },
      { label: "Mobile-Responsive", Icon: Smartphone },
      { label: "SEO Optimized", Icon: Search },
    ],
    approach: [
      "The couple didn't want another Zola template — they wanted something that felt as warm and personal as the wedding itself. We started by talking about the day: a Hudson Valley ceremony, a family-style dinner, a guest list small enough that everyone would know each other by Sunday morning. The site had to match that intimacy.",
      "Typography did most of the heavy lifting. Cormorant Garamond for the headlines paired with a softer script for accents gives the page a quiet, romantic confidence. The palette is warm cream against muted blush and sage — no stock photo florals, just hand-drawn botanical SVGs tucked carefully into the layout so the design earns its softness instead of borrowing it.",
      "The RSVP is the part guests actually use, so it got the most attention. A multi-step flow walks them gently through meal choices, dietary needs, and a song request — phrased like questions, not form fields. Everything else (schedule, menu, registry, travel, dress code, FAQ, photo sharing) sits a single scroll away, so a guest can answer their RSVP and find their hotel without ever leaving the page.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
    ],
  },
];

/** Convenience selectors used by the Work component. */
export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
