# Daybreak Studio

The portfolio site for **Daybreak Studio** — clean, fast, affordable websites
for small businesses in North Jersey. Built and run by **Igor Melnyk**.

Live: <https://daybreakstudio.studio>

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

Everything you'll need to touch is marked with `TODO:` in the code. Quick map:

| What                              | Where                                                              |
| --------------------------------- | ------------------------------------------------------------------ |
| Your photo                        | `components/about.tsx` — placeholder block has inline `<Image />` example |
| Portfolio projects                | `lib/projects.ts` — header comment lists every step |
| Mobile preview screenshots        | `/public/projects/<id>-mobile-preview.png` (referenced from `lib/projects.ts`) |
| Real testimonials                 | Rename `components/TestimonialsSection.tsx.bak` and follow its header comment |
| **Email / Instagram / WhatsApp / Telegram** | **`lib/contact-methods.ts`** — see section 3 below |
| Formspree endpoint (contact form) | `components/contact.tsx` — `FORMSPREE_ENDPOINT` constant. See section 3.1 below |
| Production domain (after deploy)  | `app/layout.tsx` — `SITE_URL` constant                             |
| Headline (alternates in comments) | `components/hero.tsx`                                              |
| OG/social-share image             | Drop a 1200×630 PNG at `/public/og-image.png` (already referenced) |

### Adding a portfolio project

All project data lives in **`lib/projects.ts`**. Copy any existing `Project`
object, change every field, set `featured: true/false`, optionally drop a
mobile screenshot at `/public/projects/<id>-mobile-preview.png`. The Work
section's layout adapts automatically based on the array.

### Adding your photo

1. Save the photo as `public/igor-photo.jpg` (recommend ~1000×1250, JPG).
2. Open `components/about.tsx` and follow the inline `<Image />` example in
   the `TODO` block to replace the placeholder.

### Restoring Testimonials

1. Rename `components/TestimonialsSection.tsx.bak` →
   `components/testimonials.tsx`.
2. Follow the "HOW TO RE-ENABLE" comment at the top of that file.

---

## 3. Contact methods + form

### 3.1 Set up the contact form (Formspree)

Right now the contact form posts to a placeholder Formspree endpoint. Until
this is replaced with a real ID, submissions will fail and visitors will see
the inline error fallback (which still includes a `mailto:` link, so nobody
gets lost).

To activate the form:

1. Go to <https://formspree.io> and sign up using `hello@daybreakstudio.studio`.
2. Click **"+ New form"** → name it "Daybreak Studio Contact".
3. Copy the form endpoint URL (looks like `https://formspree.io/f/xxxxxxxx`).
4. Open `components/contact.tsx` and replace the value of the
   `FORMSPREE_ENDPOINT` constant near the top of the file with your real
   endpoint.
5. Verify the confirmation email Formspree sends.
6. Done — submissions arrive at `hello@daybreakstudio.studio` within seconds.

Anti-spam: there's an invisible honeypot field named `website` in the form.
Bots fill it; humans don't. We silently drop any submission where it's filled.

### 3.2 Update or add contact methods

All four contact methods (Email, Instagram, WhatsApp, Telegram) live in
**`lib/contact-methods.ts`**. That file has a header comment with the exact
steps to:

- **Promote WhatsApp from "Coming soon" → live** once Business is set up.
- **Promote Telegram from "Coming soon" → live** once the account exists.
- **Update the Instagram handle** if `@daybreak.studio.nj` ever changes.

Footer also references the Instagram URL directly in `components/footer.tsx`
— if you change the handle, update both files (the comment in `footer.tsx`
points at this).

---

## 4. Deploy to Vercel

The site is already deployed and aliased to `daybreakstudio.studio`. Every
`git push` to `main` is one `vercel --prod` away from going live (or, if you
connect the repo in Vercel Settings → Git, it'll auto-deploy on push).

Manual deploy from this repo:

```bash
npx vercel --prod
```

### Iframe note for the Work section

The featured project card embeds a live site via iframe. If a target site
sets a strict `frame-ancestors` CSP, the iframe renders blank. The fix on
the **target** site (not this one):

```js
// next.config.mjs of the embedded site
async headers() {
  return [{
    source: "/(.*)",
    headers: [{
      key: "Content-Security-Policy",
      value: "frame-ancestors 'self' https://*.daybreakstudio.studio https://*.vercel.app http://localhost:3000",
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
  layout.tsx               Fonts, metadata, JSON-LD, cursor-sun mount, console egg
  page.tsx                 Section order — change here to reorder the page
  globals.css              Base styles, grain texture, logo hover, reduced-motion
  apple-icon.svg           High-res app icon used by iOS / macOS link previews
  how-it-works/page.tsx    "/how-it-works" route — full process walkthrough

components/
  nav.tsx                  Sticky header, mobile slide-in menu
  hero.tsx                 Pill badge, hero-display headline, gradient orbs
  services.tsx             Three tier cards with icons, Most Popular highlight
  work.tsx                 Work section — featured + compact + pipeline note
  browser-preview.tsx      Mac-style window frame wrapping iframe / mobile mockup
  case-study-modal.tsx     Project detail modal (uses Radix Dialog)
  process.tsx              Four-step row with primary + secondary lines
  about.tsx                Two-column with photo block + principles + icons
  faq.tsx                  Common-questions accordion (uses Radix Accordion)
  contact.tsx              Form (Formspree) + 4-method grid + honeypot
  footer.tsx               Logo, nav links, microcopy
  logo.tsx                 Horizon-line SVG mark + wordmark
  cursor-sun.tsx           Easter-egg glow trailing the cursor (hover devices only)
  how-it-works-content.tsx Body content for /how-it-works
  icons/
    brand-icons.tsx        WhatsApp + Telegram SVGs (not in lucide)
  ui/
    button.tsx             CVA variants
    dialog.tsx             shadcn-style wrapper around @radix-ui/react-dialog
    accordion.tsx          shadcn-style wrapper around @radix-ui/react-accordion
    input.tsx / textarea.tsx / select.tsx / label.tsx / section-heading.tsx
  TestimonialsSection.tsx.bak  Paused — see "Restoring Testimonials"

lib/
  projects.ts              Project data (header comment explains how to add one)
  contact-methods.ts       Email / Instagram / WhatsApp / Telegram (live + soon states)
  utils.ts                 `cn()` class merger

public/
  favicon.svg              The horizon-line mark (16/32/SVG-aware tabs)
  projects/                Add screenshots here, referenced from lib/projects.ts
  og-image.png             TODO: drop a 1200×630 social-share image here

tailwind.config.ts         Color palette, font variables, custom keyframes
```

---

## 6. Design notes

- **Colors** in `tailwind.config.ts`: `cream`, `paleBlue`, `accent`,
  `accentDeep`, `coral`, `charcoal`, `warmGray`.
- **Type**: Geist Sans throughout, **Instrument Serif** as an italic accent
  in headlines and small flourishes.
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
