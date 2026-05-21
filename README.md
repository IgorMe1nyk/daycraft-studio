# Daybreak Studio

A single-page portfolio site for **Daybreak Studio** — clean, fast, affordable
websites for small businesses in North Jersey.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and
**Framer Motion**. Deploy-ready for Vercel.

---

## 1. Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

Other scripts:

```bash
npm run build   # production build
npm start       # run the production build
npm run lint    # lint
```

---

## 2. Where to update placeholder content

Every spot you need to touch is marked with `TODO:` in the code. Search the
repo for `TODO:` to see all of them at once. The big ones:

| What                                | File                                       |
| ----------------------------------- | ------------------------------------------ |
| Your first name in the headline     | `components/about.tsx` — search `[Your Name]` |
| Your photo                          | `components/about.tsx` — image placeholder block |
| Portfolio projects (3 cards)        | `components/portfolio.tsx` — `projects` array + image placeholder |
| Real testimonials                   | `components/testimonials.tsx` — `testimonials` array |
| Email address                       | `components/contact.tsx`, `components/footer.tsx` |
| Instagram handle                    | `components/contact.tsx`, `components/footer.tsx` |
| Domain (after deploy)               | `app/layout.tsx` — `metadataBase` |
| Headline (alternates in comments)   | `components/hero.tsx` |

### Adding your photo

1. Save your photo as `public/me.jpg` (recommend ~1000×1250, JPG).
2. Open `components/about.tsx` and follow the inline instructions in the
   `TODO` block to swap the placeholder gradient for `<Image />`.

### Adding portfolio projects

1. Save each screenshot to `public/projects/<name>.jpg` (recommend
   ~1200×1500).
2. Open `components/portfolio.tsx`:
   - Update the `projects` array (`name`, `tag`, `href`, add an `image` field).
   - Replace the placeholder gradient block with the `<Image />` snippet shown
     in the comment at the top of the file.

### Adding testimonials

1. Open `components/testimonials.tsx`.
2. Replace each placeholder entry (`{ placeholder: true }`) with a real one
   matching the sample on the left (`quote`, `name`, `business`, optional
   `photo`).
3. For optional client photos, save to `public/clients/<name>.jpg` and follow
   the inline comment in the file.

---

## 3. Wiring up the contact form

The contact form (`components/contact.tsx`) currently shows a "Got it" success
state without actually sending anything. Pick one of three options — full
instructions are inline in the file's `TODO` block at the top of `handleSubmit`.

**Quickest (no backend):** [Formspree](https://formspree.io). Create a form,
copy your form ID, and on the `<form>` tag set:

```tsx
action="https://formspree.io/f/YOUR_FORM_ID"
method="POST"
```

…then remove the `onSubmit` handler. Done.

**More control:** [Resend](https://resend.com) + a Next.js API route at
`app/api/contact/route.ts` that emails you. See the inline instructions and
<https://resend.com/docs/send-with-nextjs>.

**Lowest tech:** `mailto:` form action — opens the user's email client.

---

## 4. Deploy to Vercel

1. Push the repo to GitHub.
2. Go to <https://vercel.com/new>, import the repo, and click Deploy. No
   environment variables needed for the starter setup.
3. After deploy, update `app/layout.tsx` → `metadataBase` to your real
   production URL so OG tags resolve correctly.
4. (Optional) Add a custom domain in the Vercel dashboard.

---

## 5. File map

```
app/
  layout.tsx           Fonts, metadata, console easter egg
  page.tsx             Section order — change here to reorder the page
  globals.css          Base styles, grain texture, logo hover, reduced-motion
components/
  nav.tsx              Sticky header, mobile slide-in menu
  hero.tsx             Big headline, dual CTAs, gradient orbs
  services.tsx         Three tier cards
  portfolio.tsx        Three work placeholders
  about.tsx            Two-column with principles
  process.tsx          Four-step row
  testimonials.tsx     One sample, two placeholders
  contact.tsx          Form + alt contacts
  footer.tsx           Logo, links, microcopy
  logo.tsx             Horizon-line SVG mark
  ui/
    button.tsx         CVA variants
    input.tsx
    textarea.tsx
    select.tsx
    label.tsx
    section-heading.tsx
lib/
  utils.ts             `cn()` class merger
public/
  favicon.svg          The horizon-line mark
tailwind.config.ts     Color palette & font variables
```

---

## 6. Design notes

- **Colors** are defined in `tailwind.config.ts`: `cream`, `paleBlue`,
  `accent`, `accentDeep`, `coral`, `charcoal`, `warmGray`.
- **Type** is Geist Sans for everything, with **Instrument Serif** used as
  an italic accent in headlines and small flourishes.
- **Animations** lean on Framer Motion's `whileInView` with a shared
  `[0.22, 1, 0.36, 1]` easing. They are intentionally restrained — fades and
  short vertical translations only. Users with `prefers-reduced-motion`
  short-circuit them via `globals.css`.
- **Grain** is a fixed SVG noise overlay at 3.5% opacity (`body::before`).
- **Easter egg:** open the browser dev console — there's a hello waiting.
  And the logo's sun nudges up on hover.

Enjoy.
