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

export const metadata: Metadata = {
  title: "The BeingStrong Fitness | Stay Strong and Fit | Vadodara",
  description:
    "The BeingStrong Fitness in Vadodara — a dedicated fitness centre focused on strength, fitness and consistent training.",
  keywords: [
    "gym",
    "fitness",
    "Vadodara",
    "strength training",
    "BeingStrong",
    "gym vadodara",
    "fitness centre vadodara",
    "workout",
    "personal training",
  ],
  openGraph: {
    title: "The BeingStrong Fitness | Stay Strong and Fit | Vadodara",
    description:
      "The BeingStrong Fitness in Vadodara — a dedicated fitness centre focused on strength, fitness and consistent training.",
    url: "https://www.thebeingstrongfitness.com",
    siteName: "The BeingStrong Fitness",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/the_beingstrong_logo.png",
        width: 1200,
        height: 630,
        alt: "The BeingStrong Fitness Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The BeingStrong Fitness | Stay Strong and Fit",
    description:
      "A dedicated fitness centre in Vadodara focused on strength, fitness and consistent training.",
    images: ["/images/the_beingstrong_logo.png"],
  },
  icons: {
    icon: "/images/the_beingstrong_logo.png",
    apple: "/images/the_beingstrong_logo.png",
  },
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
              image: "/images/the_beingstrong_logo.png",
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
              url: "https://www.thebeingstrongfitness.com",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                bestRating: "5",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${bebasNeue.variable} ${inter.variable} antialiased bg-brand-black text-brand-white`}
      >
        {children}
      </body>
    </html>
  );
}
