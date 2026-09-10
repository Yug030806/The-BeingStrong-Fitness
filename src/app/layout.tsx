import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.thebeingstrongfitness.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "The BeingStrong Fitness | Gym in Vadodara",
    template: "%s | The BeingStrong Fitness",
  },

  description:
    "The BeingStrong Fitness is a premium gym in Vadodara offering strength training, functional training, personal training, and fitness programs for serious results.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  keywords: [
    "gym in Vadodara",
    "best gym in Vadodara",
    "fitness center in Vadodara",
    "gym Vadodara",
    "personal training Vadodara",
    "strength training Vadodara",
    "functional training Vadodara",
    "fitness centre Vadodara",
    "The BeingStrong Fitness",
  ],

  verification: {
    google: "XWK6Lw4aj6LG4jDaTo1DMwElJyWsSuTWpXETif3q20",
  },

  openGraph: {
    title: "The BeingStrong Fitness | Gym in Vadodara",
    description:
      "Premium fitness training in Vadodara focused on strength, functional training, personal training, and consistent results.",
    url: siteUrl,
    siteName: "The BeingStrong Fitness",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/the_beingstrong_logo.png",
        width: 1200,
        height: 630,
        alt: "The BeingStrong Fitness - Gym in Vadodara",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The BeingStrong Fitness | Gym in Vadodara",
    description:
      "Premium gym in Vadodara focused on strength, functional training, personal training, and fitness.",
    images: ["/images/the_beingstrong_logo.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      {
        url: "/images/the_beingstrong_logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/favicon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "The BeingStrong Fitness",
              image: `${siteUrl}/images/the_beingstrong_logo.png`,
              telephone: "+919724073707",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "3rd, 4th, 5th, & 6th Floor, RADHE A-10 Udaynagar Housing Society, Mahavir Hall, Ajwa Road",
                addressLocality: "Vadodara",
                addressRegion: "Gujarat",
                postalCode: "390019",
                addressCountry: "IN",
              },
              url: siteUrl,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                bestRating: "5",
                ratingCount: "62",
              },
            }),
          }}
        />
      </head>
      <body className={`${bebasNeue.variable} ${inter.variable} antialiased bg-brand-black text-brand-white`}>
        {children}
      </body>
    </html>
  );
}
