import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emerabyspr.com"),
  title: "Émera by SPR | A Gem of Quiet Luxury — Chennai",
  description:
    "Only twelve residences on Nelson Manickam Road, Chennai. Inspired by 19th-century Parisian architecture, Émera by SPR is a rare expression of serenity — where light, landscape, and proportion come together in quiet harmony.",
  keywords: [
    "Émera by SPR",
    "SPR Group Chennai",
    "luxury residences Chennai",
    "Nelson Manickam Road apartments",
    "Parisian architecture residences",
    "ultra luxury apartments Chennai",
  ],
  openGraph: {
    title: "Émera by SPR | A Gem of Quiet Luxury",
    description:
      "Only twelve residences in the heart of Chennai. A sanctuary shaped by light, landscape, and proportion.",
    url: "https://emerabyspr.com",
    siteName: "Émera by SPR",
    images: ["/images/hero-living-room.jpg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Émera by SPR | A Gem of Quiet Luxury",
    description:
      "Only twelve residences in the heart of Chennai — inspired by 19th-century Parisian architecture.",
    images: ["/images/hero-living-room.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-warmwhite text-charcoal">
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
