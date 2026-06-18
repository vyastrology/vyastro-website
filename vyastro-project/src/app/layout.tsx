import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LangProvider } from "@/lib/lang-context";

export const metadata: Metadata = {
  metadataBase: new URL("https://vyastro.com"),
  title: {
    default: "VyAstro — Vastu, Yantra & Astrology",
    template: "%s | VyAstro",
  },
  description:
    "The world's first intelligent platform combining Vastu, Yantra & Astrology with modern AI-powered guidance. Personalized insights for your life, home, and purpose.",
  keywords: [
    "vastu shastra", "astrology", "yantra", "vedic astrology", "kundli",
    "AI astrology", "vastu consultant", "yantra store", "jyotish", "horoscope",
    "birth chart", "kundli analysis", "vastu tips", "sacred geometry",
  ],
  authors: [{ name: "VyAstro" }],
  creator: "VyAstro",
  publisher: "VyAstro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vyastro.com",
    title: "VyAstro — Vastu, Yantra & Astrology",
    description:
      "Discover personalized Vastu recommendations, astrology insights, AI-powered guidance, and Yantra suggestions — all in one intelligent platform.",
    siteName: "VyAstro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VyAstro — Ancient Wisdom, Modern Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VyAstro — Vastu, Yantra & Astrology",
    description:
      "The world's first intelligent platform combining Vastu, Yantra & Astrology with AI-powered guidance.",
    images: ["/og-image.jpg"],
    creator: "@vyastro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VyAstro",
              url: "https://vyastro.com",
              logo: "https://vyastro.com/logo.png",
              description:
                "The world's first intelligent platform combining Vastu, Yantra & Astrology with AI-powered guidance.",
              sameAs: [
                "https://twitter.com/vyastro",
                "https://instagram.com/vyastro",
              ],
            }),
          }}
        />
      </head>
      <body>
        <LangProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
