import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const siteUrl = "https://emera-by-spr.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Émera by SPR | A Gem of Quiet Luxury — Chennai",
    template: "%s | Émera by SPR",
  },
  description:
    "Émera by SPR is a private collection of only twelve residences on Nelson Manickam Road, Chennai — inspired by 19th-century Parisian architecture. A sanctuary of quiet luxury within the city.",
  keywords: [
    "Emera by SPR",
    "SPR Luxury Collection",
    "luxury residences Chennai",
    "Nelson Manickam Road apartments",
    "Haussmannian architecture Chennai",
    "SPR Group",
  ],
  openGraph: {
    title: "Émera by SPR | A Gem of Quiet Luxury",
    description:
      "A private collection of only twelve residences in the heart of Chennai. Inspired by the enduring charm of 19th-century Parisian architecture.",
    url: siteUrl,
    siteName: "Émera by SPR",
    images: ["/images/exterior-hero-dusk.jpg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Émera by SPR | A Gem of Quiet Luxury",
    description:
      "A private collection of only twelve residences in the heart of Chennai.",
    images: ["/images/exterior-hero-dusk.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
