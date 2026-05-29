import {
  CalendarClock,
  Clock,
  Coffee,
  Croissant,
  FileSignature,
  Gift,
  Hammer,
  HelpCircle,
  Image as ImageIcon,
  Images,
  Instagram,
  Leaf,
  ListChecks,
  MapPin,
  Scissors,
  Search,
  ShieldCheck,
  Shirt,
  Smartphone,
  Star,
  Timer,
  UtensilsCrossed,
  Users,
  type LucideIcon,
} from "lucide-react";

/* ───────────────────────────────────────────────────────────────────────────
   Projects data — single source of truth for the Work section, the /work
   index page, and the /work/[slug] case-study pages.

   ── KINDS ──────────────────────────────────────────────────────────────────
   • kind: "real"    → a commissioned/sample build with a live URL (the card
                        preview loads a live iframe).
   • kind: "concept" → a self-directed design exercise. Labeled "Concept"
                        everywhere. The card preview renders a palette-driven
                        mockup (no live site, no fake "visit live" link).

   ── HOW TO ADD A NEW PROJECT ───────────────────────────────────────────────
   1. Copy any object below and change every field.
   2. `id` becomes the case-study URL: /work/<id>.
   3. `palette` drives the concept mockup hero (its own colors — that's the
      point: concepts show range, not Daycraft's brand palette).
   4. Fill `caseStudy` (brief / approach / build / result). For concepts,
      frame the result honestly as a concept outcome.
   5. The Work section + /work index pick everything up automatically.
   ─────────────────────────────────────────────────────────────────────── */

export type Tier = "Starter" | "Standard" | "Custom";
export type ProjectKind = "real" | "concept";

export interface ProjectFeature {
  label: string;
  Icon: LucideIcon;
}

/** Palette that drives a concept's mockup hero. Each concept gets its own. */
export interface ProjectPalette {
  /** Human description shown in the case study, e.g. "Terracotta & espresso". */
  name: string;
  /** Page background. */
  bg: string;
  /** Primary text / ink. */
  ink: string;
  /** Secondary / muted text. */
  muted: string;
  /** Primary accent. */
  accent: string;
  /** Secondary accent / surface tint. */
  accent2: string;
}

/** Content rendered inside the fake browser-frame mockup for concepts. */
export interface ProjectMockup {
  eyebrow: string;
  headline: string;
  sub: string;
  nav: string[];
  cta: string;
}

export interface Project {
  /** Stable URL-safe id; becomes /work/<id>. */
  id: string;
  kind: ProjectKind;
  name: string;
  /** Vertical, also used by the /work filter, e.g. "Café". */
  vertical: string;
  /** Tag shown above the title, e.g. "Wedding · RSVP Site" / "Concept · Café". */
  tag: string;
  shortDesc: string;
  longDesc: string;
  tier: Tier;
  price: string;
  buildTime: string;
  /** Real projects only — the iframe source + "Visit live site" target. */
  liveUrl?: string;
  /** Pretty URL shown in the fake browser frame's address bar. */
  displayUrl: string;
  /** Show in the homepage featured grid (all current projects do). */
  featured: boolean;
  palette: ProjectPalette;
  /** 4-6 short feature pills shown on the card. */
  cardFeatures: ProjectFeature[];
  /** Full feature grid shown on the case-study page. */
  features: ProjectFeature[];
  tech: string[];
  /** Long-form case study, four movements. */
  caseStudy: {
    brief: string[];
    approach: string[];
    build: string[];
    result: string[];
  };
  /** Concept mockup hero content (also used to flavor real-project frames). */
  mockup: ProjectMockup;
  /** Three licensed stock images shown in the concept mockup's gallery strip
   *  (concepts only — real projects render a live iframe instead). */
  mockupImages?: { src: string; alt: string }[];
  /** Concepts: acknowledge stock/placeholder imagery honestly. */
  stockNote?: boolean;
}

export const projects: Project[] = [
  // ─── REAL ────────────────────────────────────────────────────────────────
  {
    id: "emily-and-james",
    kind: "real",
    name: "Emily & James",
    vertical: "Wedding",
    tag: "Wedding · RSVP Site",
    shortDesc:
      "A romantic, fully-featured wedding site with a custom RSVP flow, schedule, menu, registry, and travel info.",
    longDesc:
      "A custom wedding website built for a couple celebrating in the Hudson Valley — soft typography, hand-drawn botanical details, and a thoughtful multi-step RSVP flow that captures meal preferences, dietary needs, and song requests. Everything a guest needs lives on one elegant page.",
    liveUrl: "https://emily-and-james-wedding.vercel.app",
    displayUrl: "emily-and-james.daycraftstudio.com",
    tier: "Starter",
    price: "$350",
    buildTime: "Built in 1 day",
    featured: true,
    palette: {
      name: "Cream, blush & sage",
      bg: "#F7F2EC",
      ink: "#3A3330",
      muted: "#8A7F76",
      accent: "#C98B86",
      accent2: "#9CAE92",
    },
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
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hook Form"],
    caseStudy: {
      brief: [
        "A couple getting married in the Hudson Valley needed one place that held everything — the schedule, the menu, the registry, the hotel block, and the RSVP. They didn't want another Zola template that looked like everyone else's wedding. They wanted something that felt as warm and personal as the day itself.",
        "The guest list was small enough that everyone would know each other by Sunday morning. The site had to match that intimacy, not fight it.",
      ],
      approach: [
        "Typography did most of the heavy lifting. Cormorant Garamond for the headlines, paired with a softer script for accents, gives the page a quiet, romantic confidence.",
        "The palette is warm cream against muted blush and sage — no stock-photo florals, just hand-drawn botanical SVGs tucked carefully into the layout so the design earns its softness instead of borrowing it.",
        "The RSVP is the part guests actually use, so it got the most attention: a multi-step flow that walks them gently through meal choices, dietary needs, and a song request — phrased like questions, not form fields.",
      ],
      build: [
        "Built as a single rich page so a guest can answer their RSVP and find their hotel without ever leaving it. Schedule, family-style menu, registry links, travel and accommodation info, dress code with color inspiration, photo sharing, and an FAQ all sit one scroll apart.",
        "A live countdown timer anchors the hero. Everything is mobile-first — most guests opened it on their phones the evening the invitations went out.",
      ],
      result: [
        "Built in a single day and live the same evening. RSVPs started arriving within the hour.",
        "It's a Starter-tier build ($350) that proves a one-page site can carry an entire event without feeling crowded.",
      ],
    },
    mockup: {
      eyebrow: "WE'RE GETTING MARRIED",
      headline: "Emily & James",
      sub: "September 19, 2026 · Hudson Valley, New York",
      nav: ["Our Story", "Schedule", "RSVP", "Travel"],
      cta: "RSVP",
    },
  },

  // ─── CONCEPTS ──────────────────────────────────────────────────────────────
  {
    id: "sunrise-cafe",
    kind: "concept",
    name: "Sunrise Café",
    vertical: "Café",
    tag: "Concept · Café",
    shortDesc:
      "A warm, photo-forward concept for a neighborhood café — menu, story, hours, and a visit-us flow on one page.",
    longDesc:
      "A self-directed concept exploring how a small North Jersey café could present its menu and story online without looking like a chain. Warm, unhurried, and built around the feeling of a slow morning.",
    displayUrl: "sunrisecafe.com",
    tier: "Standard",
    price: "$650",
    buildTime: "Concept build",
    featured: true,
    stockNote: true,
    palette: {
      name: "Terracotta, cream & espresso",
      bg: "#F3E9DD",
      ink: "#3B2A21",
      muted: "#8C7461",
      accent: "#C2603C",
      accent2: "#7A8B5E",
    },
    cardFeatures: [
      { label: "Menu Highlights", Icon: Coffee },
      { label: "Our Story", Icon: Croissant },
      { label: "Hours & Map", Icon: Clock },
      { label: "Gallery", Icon: ImageIcon },
      { label: "Instagram Feed", Icon: Instagram },
    ],
    features: [
      { label: "Photo-forward hero", Icon: ImageIcon },
      { label: "Menu highlights", Icon: Coffee },
      { label: "Our story section", Icon: Croissant },
      { label: "Hours & location map", Icon: MapPin },
      { label: "Instagram-style gallery", Icon: Instagram },
      { label: "Visit-us / contact flow", Icon: Clock },
      { label: "Mobile-first layout", Icon: Smartphone },
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    caseStudy: {
      brief: [
        "Most neighborhood cafés either have no website or one stitched together from a generic builder — a stock latte photo, a PDF menu, and hours that may or may not be current. The concept asks a simple question: what would it look like if a small café's site felt as warm as the room it represents?",
        "The goal wasn't a digital ordering platform. It was a place a first-time visitor could land on, feel the vibe in two seconds, find the hours and the address, and decide to walk in.",
      ],
      approach: [
        "The palette leans into the product itself — terracotta and espresso against a soft cream, the colors of a morning counter. It is deliberately nothing like Daycraft's own blue-and-cream brand; a café should look like a café.",
        "Typography pairs a confident display serif for the name with a clean sans for the menu, so prices stay scannable while the brand still feels handmade.",
        "Structure follows how someone actually decides where to get coffee: hero and feeling first, a few signature items, the story, then the practical stuff — hours, map, and a reason to follow on Instagram.",
      ],
      build: [
        "A single scrolling page: photo-forward hero, menu highlights as cards, an 'our story' band, an Instagram-style gallery grid, and a hours-and-map footer with a clear 'visit us' call.",
        "Designed mobile-first — café discovery happens on phones, usually while someone is already walking around the neighborhood.",
      ],
      result: [
        "A concept that shows how a Standard-tier ($650) café site can feel premium and personal without a single line of stock copy.",
        "It maps directly onto Daycraft's food-and-lifestyle vertical and doubles as an outreach piece for local cafés and bakeries.",
      ],
    },
    mockup: {
      eyebrow: "EST. 2021 · CLIFTON, NJ",
      headline: "Slow mornings, done right.",
      sub: "Small-batch coffee, fresh pastry, and a corner table with your name on it.",
      nav: ["Menu", "Our Story", "Visit"],
      cta: "See the menu",
    },
    mockupImages: [
      { src: "/concepts/cafe-1.jpg", alt: "Latte art in two cups on a wood table" },
      { src: "/concepts/cafe-2.jpg", alt: "Fresh croissants dusted with sugar" },
      { src: "/concepts/cafe-3.jpg", alt: "A warm, plant-filled café interior" },
    ],
  },
  {
    id: "greenline-landscaping",
    kind: "concept",
    name: "Greenline Landscaping",
    vertical: "Home Services",
    tag: "Concept · Home Services",
    shortDesc:
      "A trust-building concept for a landscaping crew — services, before/after work, service area, and a quote request.",
    longDesc:
      "A self-directed concept for a home-services business. The pattern here — trust signals, a clear service list, real work, and a frictionless quote request — serves landscapers, plumbers, electricians, and roofers alike. The volume play for small studios in North Jersey.",
    displayUrl: "greenlinelandscaping.com",
    tier: "Standard",
    price: "$650",
    buildTime: "Concept build",
    featured: true,
    stockNote: true,
    palette: {
      name: "Forest green, slate & sand",
      bg: "#EDEFE8",
      ink: "#23302A",
      muted: "#6E7A70",
      accent: "#2F6B45",
      accent2: "#B9A47E",
    },
    cardFeatures: [
      { label: "Services Grid", Icon: Leaf },
      { label: "Before / After", Icon: Images },
      { label: "Trust Signals", Icon: ShieldCheck },
      { label: "Service Area", Icon: MapPin },
      { label: "Get a Quote", Icon: Hammer },
    ],
    features: [
      { label: "Value-prop hero", Icon: Leaf },
      { label: "Services grid", Icon: Hammer },
      { label: "Before / after gallery", Icon: Images },
      { label: "Why-choose-us trust signals", Icon: ShieldCheck },
      { label: "Service-area map", Icon: MapPin },
      { label: "Get-a-quote form", Icon: FileSignature },
      { label: "Mobile-first layout", Icon: Smartphone },
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    caseStudy: {
      brief: [
        "A homeowner with an overgrown yard isn't browsing for fun — they have a problem and twenty minutes to find someone trustworthy. Most local trade businesses lose that visitor to a slow, dated site or no site at all, and the job goes to whoever showed up first on Google with a clean page.",
        "The concept tackles the highest-volume, lowest-served market a North Jersey studio can sell into: home services. The brief was a site that converts an anxious homeowner into a quote request in under a minute.",
      ],
      approach: [
        "Trust is the entire job. The palette is grounded — forest green, slate, and sand — colors that read established and outdoorsy rather than flashy.",
        "Every section answers a homeowner's silent question: Can you do my kind of work? (services grid). Have you done it before? (before/after). Are you legit? (licensed/insured trust band). Do you cover my town? (service-area map). The quote form is short on purpose — name, address, and what you need.",
        "The design avoids the two traps trade sites fall into: clip-art truck graphics and walls of text. Real work and plain language carry it.",
      ],
      build: [
        "A single conversion-focused page: a value-prop hero with the quote CTA repeated top and bottom, a services grid, a before/after band, a why-choose-us trust row, a service-area map, and the quote form.",
        "Built mobile-first — most of these searches happen on a phone, standing in the yard.",
      ],
      result: [
        "A concept that shows how a Standard-tier ($650) build turns a trade business's site into a lead engine rather than a digital business card.",
        "Strategically Daycraft's most important concept: trades are the realistic volume market, and a polished example here is a direct sales tool.",
      ],
    },
    mockup: {
      eyebrow: "LICENSED & INSURED · NORTH JERSEY",
      headline: "A yard you're proud to come home to.",
      sub: "Design, cleanups, and weekly maintenance — done on schedule, done right.",
      nav: ["Services", "Our Work", "Areas"],
      cta: "Get a free quote",
    },
    mockupImages: [
      { src: "/concepts/landscaping-1.jpg", alt: "A flowering garden path with trimmed hedges" },
      { src: "/concepts/landscaping-2.jpg", alt: "A crisp, freshly cut green lawn" },
      { src: "/concepts/landscaping-3.jpg", alt: "A tidy raised garden bed" },
    ],
  },
  {
    id: "fade-and-co",
    kind: "concept",
    name: "Fade & Co.",
    vertical: "Barbershop",
    tag: "Concept · Barbershop",
    shortDesc:
      "A bold, booking-focused concept for a barbershop — services and pricing, the team, gallery, and a book-now flow.",
    longDesc:
      "A self-directed concept for a booking-driven grooming business. Confident, modern, and built so the 'book now' button is never more than a thumb-reach away — the design language a barbershop or salon needs to look as sharp as the work.",
    displayUrl: "fadeandco.com",
    tier: "Standard",
    price: "$650",
    buildTime: "Concept build",
    featured: true,
    stockNote: true,
    palette: {
      name: "Charcoal, off-white & amber",
      bg: "#1C1B19",
      ink: "#F3EFE7",
      muted: "#A39C8E",
      accent: "#D9912F",
      accent2: "#6F4A2A",
    },
    cardFeatures: [
      { label: "Services & Pricing", Icon: Scissors },
      { label: "Meet the Barbers", Icon: Users },
      { label: "Gallery", Icon: ImageIcon },
      { label: "Book Now", Icon: CalendarClock },
      { label: "Hours & Location", Icon: Clock },
    ],
    features: [
      { label: "Bold confident hero", Icon: Star },
      { label: "Services + pricing menu", Icon: Scissors },
      { label: "Meet-the-barbers profiles", Icon: Users },
      { label: "Cuts gallery", Icon: ImageIcon },
      { label: "Book-now flow", Icon: CalendarClock },
      { label: "Hours & location", Icon: MapPin },
      { label: "Mobile-first layout", Icon: Smartphone },
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    caseStudy: {
      brief: [
        "A barbershop lives and dies by its chair being full. The website has exactly one job: turn someone who heard about the shop into a booked appointment before they get distracted. Most shop sites bury the booking link under a hero slideshow and a wall of social icons.",
        "The concept strips it back to the decision a customer is actually making — who's cutting, how much, and how fast can I book — and makes that the entire spine of the page.",
      ],
      approach: [
        "The palette goes the opposite direction from a café: charcoal and off-white with a single sharp amber accent. It reads premium, masculine, and current — the look a younger clientele expects.",
        "'Book now' is treated as the primary action everywhere: sticky in the nav, repeated after services, anchored in the hero. Services double as a price list so there are no surprises at the chair.",
        "Barber profiles add the human layer — people book a person, not a building — and a tight gallery proves the work without a slideshow.",
      ],
      build: [
        "A single bold page: a high-contrast hero with the book CTA, a services-and-pricing menu, meet-the-barbers cards, a cuts gallery, and an hours-and-location footer. The book action points to a placeholder booking flow that a real build would wire to Square, Booksy, or a custom system.",
        "Designed mobile-first and thumb-first — bookings happen on phones, often between other things.",
      ],
      result: [
        "A concept that shows how a Standard-tier ($650) build, nodding toward Custom once real booking is wired in, can make a grooming business look as sharp as its work.",
        "It closes the loop on a vertical Daycraft was already approached about, and proves the studio can flex from soft-and-warm to bold-and-dark on demand.",
      ],
    },
    mockup: {
      eyebrow: "WALK-INS & BOOKINGS · PASSAIC",
      headline: "Sharp cuts. No waiting.",
      sub: "Classic fades, beard work, and hot-towel finishes from barbers who give a damn.",
      nav: ["Services", "Barbers", "Gallery"],
      cta: "Book now",
    },
    mockupImages: [
      { src: "/concepts/barber-1.jpg", alt: "A modern barbershop interior with vintage chairs" },
      { src: "/concepts/barber-2.jpg", alt: "A sharp fade being cut with a comb" },
      { src: "/concepts/barber-3.jpg", alt: "A beard trim in progress" },
    ],
  },
];

/** Lookup by slug for /work/[slug]. */
export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

/** Convenience selectors used by the Work section + /work index. */
export const featuredProjects = projects.filter((p) => p.featured);
export const realProjects = projects.filter((p) => p.kind === "real");
export const conceptProjects = projects.filter((p) => p.kind === "concept");
