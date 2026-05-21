# Daybreak Studio

The portfolio site for **Daybreak Studio** — clean, fast, affordable websites
for small businesses in North Jersey. Built and run by **Igor Melnyk**.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**,
**Framer Motion**, and **Radix UI**. Deploy-ready for Vercel.

---

## 1. Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

Other scripts:

```bash
npm run build   # production build (type-checks + lints)
npm start       # run the production build
npm run lint    # lint only
```

---

## 2. Where to update content

Every spot you'll need to touch is marked with `TODO:` in the code. The big
ones:

| What                              | Where                                                              |
| --------------------------------- | ------------------------------------------------------------------ |
| Your photo                        | `components/about.tsx` — placeholder block has inline `<Image />` example |
| Portfolio projects                | `lib/projects.ts` — single source of truth (see file header for instructions) |
| Mobile preview screenshots        | `public/projects/<id>-mobile-preview.png` (referenced from `lib/projects.ts`) |
| Real testimonials                 | Rename `components/TestimonialsSection.tsx.bak` and follow its header comment |
| Email address                     | `components/contact.tsx`, `components/footer.tsx`                  |
| Instagram handle                  | `components/contact.tsx`, `components/footer.tsx`                  |
| Production domain (after deploy)  | `app/layout.tsx` — `metadataBase`                                  |
| Headline (alternates in comments) | `components/hero.tsx`                                              |

### Adding a portfolio project

All project data lives in **`lib/projects.ts`**. To add a new one:

1. Copy any existing `Project` object in the `projects` array.
2. Update `id`, `name`, `tag`, descriptions, `liveUrl`, `displayUrl`, features, etc.
3. Set `featured: true` for a large hero card at the top of Work, or
   `featured: false` to appear as a compact card in the grid below.
4. (Optional) Drop a mobile screenshot at
   `public/projects/<id>-mobile-preview.png` and reference it via `mobilePreview`.

The Work section's layout adapts automatically based on `featured` flags and
the total project count — no code changes needed.

### Adding your photo

1. Save the photo as `public/me.jpg` (recommend ~1000×1250, JPG).
2. Open `components/about.tsx` and follow the inline `<Image />` example in
   the `TODO` block to replace the placeholder gradient.

### Restoring Testimonials

1. Rename `components/TestimonialsSection.tsx.bak` to `components/testimonials.tsx`.
2. Follow the "HOW TO RE-ENABLE" comment at the top of that file (it lists
   exactly where to import + render it in `app/page.tsx`).

---

## 3. Wiring up the contact form

`components/contact.tsx` currently shows a "Got it" success state without
actually sending anything. Three options, all documented inline in the
`handleSubmit` `TODO` block:

- **Formspree** — zero backend, fastest.
- **Resend + Next.js API route** — more control, custom email templates.
- **`mailto:`** — opens the visitor's mail client. Lowest tech.

---

## 4. Deploy to Vercel

1. Push the repo to GitHub (already done if you're reading this on github.com).
2. Go to <https://vercel.com/new>, import the repo, click **Deploy**. No env
   vars needed — Vercel auto-detects Next.js.
3. After the first deploy succeeds, update `app/layout.tsx` →
   `metadataBase` to the real production URL so Open Graph tags resolve.
4. (Optional) Add a custom domain in the Vercel project dashboard
   (Settings → Domains).

### Iframe note for the Work section

The featured project card embeds the live wedding site via an iframe. If
that target site sets a strict `frame-ancestors` Content Security Policy,
the iframe will render blank. The fix on the **target** site (not this one):

```js
// next.config.mjs of the embedded site
async headers() {
  return [{
    source: "/(.*)",
    headers: [{
      key: "Content-Security-Policy",
      value: "frame-ancestors 'self' https://*.daybreakstudio.com https://*.vercel.app http://localhost:3000",
    }],
  }];
}
```

Alternative: drop a static screenshot at `/public/projects/<id>-desktop.png`
and swap the iframe in `components/browser-preview.tsx` for an `<Image />`.

---

## 5. File map

```
app/
  layout.tsx              Fonts, metadata, cursor-sun mount, console easter egg
  page.tsx                Section order — change here to reorder the page
  globals.css             Base styles, grain texture, logo hover, reduced-motion
components/
  nav.tsx                 Sticky header, mobile slide-in menu
  hero.tsx                Pill badge, hero-display headline, gradient orbs, scroll indicator
  services.tsx            Three tier cards with icons, Most Popular highlight
  work.tsx                Work section — featured + compact + pipeline note
  browser-preview.tsx     Mac-style window frame wrapping the iframe / mobile mockup
  case-study-modal.tsx    Project detail modal (uses Radix Dialog)
  process.tsx             Four-step row with connecting line + dot grid
  about.tsx               Two-column with photo block, principles + icons
  contact.tsx             Form + alt contacts (stubbed)
  footer.tsx              Logo, links, microcopy
  logo.tsx                Horizon-line SVG mark + wordmark
  cursor-sun.tsx          Easter-egg glow that lags the cursor (hover devices only)
  TestimonialsSection.tsx.bak   Paused — see "Restoring Testimonials" above
  ui/
    button.tsx            CVA variants
    dialog.tsx            shadcn-style wrapper around @radix-ui/react-dialog
    input.tsx
    textarea.tsx
    select.tsx
    label.tsx
    section-heading.tsx
lib/
  projects.ts             Project data (header comment explains how to add one)
  utils.ts                `cn()` class merger
public/
  favicon.svg             The horizon-line mark
  projects/               (Add screenshots here, referenced from lib/projects.ts)
tailwind.config.ts        Color palette, font variables, custom keyframes/animations
```

---

## 6. Design notes

- **Colors** in `tailwind.config.ts`: `cream`, `paleBlue`, `accent`,
  `accentDeep`, `coral`, `charcoal`, `warmGray`.
- **Type**: Geist Sans throughout, **Instrument Serif** as an italic accent
  in headlines, the about greeting, project titles, and small flourishes.
- **Animations** use Framer Motion's `whileInView` with a shared
  `[0.22, 1, 0.36, 1]` easing. Restrained on purpose — fades and short
  vertical translations only. `prefers-reduced-motion` short-circuits them
  in `globals.css`.
- **Grain**: fixed SVG noise overlay at ~3.5% opacity (`body::before`).
- **Easter eggs**:
  - Soft sun glow trails the cursor on hover devices (`components/cursor-sun.tsx`).
  - Open dev tools — there's a hello in the console.
  - The logo's sun nudges up when you hover it.
  - Footer microcopy: *"Crafted before the sun comes up."*

Enjoy.
