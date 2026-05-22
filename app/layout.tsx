import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { Instrument_Serif } from "next/font/google";
import CursorSun from "@/components/cursor-sun";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const SITE_URL = "https://daybreakstudio.studio";
const SITE_TITLE = "Daybreak Studio — Websites for small businesses in North Jersey";
const SITE_DESCRIPTION =
  "Clean, fast, professional websites for small businesses. Starting at $350. Based in North Jersey. Booking June–July 2026.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "web design",
    "web designer",
    "North Jersey",
    "New Jersey",
    "small business websites",
    "freelance web designer",
    "affordable websites",
    "Passaic",
    "Rowan University",
  ],
  authors: [{ name: "Igor Melnyk" }],
  creator: "Igor Melnyk — Daybreak Studio",
  publisher: "Daybreak Studio",
  openGraph: {
    title: "Daybreak Studio",
    description:
      "Modern web design for small businesses in North Jersey. From $350.",
    url: SITE_URL,
    siteName: "Daybreak Studio",
    type: "website",
    locale: "en_US",
    // TODO: Drop a 1200x630 OG image at /public/og-image.png. Until that file
    // exists, social shares fall back to no image (the link still works fine).
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daybreak Studio — modern web design for North Jersey small businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daybreak Studio",
    description:
      "Modern web design for small businesses in North Jersey. From $350.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    // apple-icon.svg lives at app/apple-icon.svg — Next.js serves it
    // automatically; explicit declaration not required.
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F3",
  width: "device-width",
  initialScale: 1,
};

/**
 * Structured data — tells Google this is a real professional service so
 * the site is eligible for richer search-result treatment. Update fields
 * here (areaServed, priceRange, email) if the business model shifts.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Daybreak Studio",
  description:
    "Web design studio for small businesses in North Jersey. Clean, fast, affordable websites delivered in days.",
  url: SITE_URL,
  email: "hello@daybreakstudio.studio",
  founder: {
    "@type": "Person",
    name: "Igor Melnyk",
  },
  areaServed: {
    "@type": "Place",
    name: "North Jersey, USA",
  },
  priceRange: "$350–$1,200+",
  knowsAbout: [
    "Web design",
    "Next.js",
    "Small business websites",
    "Mobile-first design",
  ],
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/favicon.svg`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${instrumentSerif.variable}`}
    >
      <body className="font-sans bg-cream text-charcoal antialiased relative">
        {/* Content sits above the grain overlay (z-1 in globals.css). */}
        <div className="relative z-10">{children}</div>

        {/* Easter egg: soft sun glow trailing the cursor on hover devices. */}
        <CursorSun />

        {/* Structured data for search engines. */}
        <Script
          id="ld-json-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Easter egg: a tiny hello to anyone who opens devtools. */}
        <Script id="console-hello" strategy="afterInteractive">
          {`
            try {
              console.log(
                "%cDaybreak Studio %c· crafted before the sun comes up\\n%cWant a site like this? hello@daybreakstudio.studio",
                "color:#1A1A1A;font-weight:600;font-size:14px;",
                "color:#6B8CAE;font-style:italic;font-size:13px;",
                "color:#666;font-size:12px;"
              );
            } catch (e) {}
          `}
        </Script>
      </body>
    </html>
  );
}
