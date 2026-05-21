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

export const metadata: Metadata = {
  metadataBase: new URL("https://daybreakstudio.studio"),
  title: "Daybreak Studio — Websites for small businesses in North Jersey",
  description:
    "Daybreak Studio builds clean, fast, affordable websites for small businesses in North Jersey. Delivered in days, not months.",
  keywords: [
    "web design",
    "web designer",
    "North Jersey",
    "New Jersey",
    "small business websites",
    "freelance web designer",
    "affordable websites",
  ],
  authors: [{ name: "Igor Melnyk" }],
  creator: "Igor Melnyk — Daybreak Studio",
  publisher: "Daybreak Studio",
  openGraph: {
    title: "Daybreak Studio — Websites for small businesses in North Jersey",
    description:
      "Clean, fast, affordable websites for North Jersey small businesses. Delivered in days, not months.",
    url: "https://daybreakstudio.studio",
    siteName: "Daybreak Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daybreak Studio",
    description: "Websites for small businesses in North Jersey.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F3",
  width: "device-width",
  initialScale: 1,
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

        {/* Easter egg: a tiny hello to anyone who opens devtools. */}
        <Script id="console-hello" strategy="afterInteractive">
          {`
            try {
              console.log(
                "%cDaybreak Studio %c· crafted before the sun comes up\\n%cWant a site like this? hello@daybreakstudio.com",
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
