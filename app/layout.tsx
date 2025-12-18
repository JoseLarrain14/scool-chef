import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const displayFont = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://www.scoolchef.cl";
const siteName = "Scool Chef";
const siteDescription =
  "Desde 2009, Scool Chef ofrece servicios de catering de alta calidad para colegios en Santiago. Más de 8,200 estudiantes confían en nosotros para sus comidas diarias. Menús nutritivos, personal profesional e integración con TAPIN.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Scool Chef | Alimentación de calidad para instituciones educativas",
    template: "%s | Scool Chef",
  },
  description: siteDescription,
  keywords: [
    "catering escolar",
    "alimentación escolar",
    "comedor escolar",
    "cafetería escolar",
    "Santiago",
    "Chile",
    "nutrición escolar",
    "menús escolares",
    "TAPIN",
    "billetera digital escolar",
    "Matías Bouey",
    "catering institucional",
    "comida saludable colegios",
  ],
  authors: [{ name: "Scool Chef", url: siteUrl }],
  creator: "Scool Chef",
  publisher: "Scool Chef",
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
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: siteName,
    title: "Scool Chef | Alimentación de calidad para instituciones educativas",
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Scool Chef - Catering de calidad para colegios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scool Chef | Alimentación de calidad para instituciones educativas",
    description: siteDescription,
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@scoolchef",
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "google-site-verification-code", // TODO: Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "@id": siteUrl,
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    telephone: "+56-9-XXXX-XXXX",
    email: "contacto@scoolchef.cl",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santiago",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.4489,
      longitude: -70.6693,
    },
    servesCuisine: "Catering Escolar",
    priceRange: "$$",
    foundingDate: "2009",
    founder: {
      "@type": "Person",
      name: "Matías Bouey Blanco",
    },
    areaServed: {
      "@type": "City",
      name: "Santiago",
    },
    sameAs: [
      "https://www.instagram.com/scoolchef",
      "https://www.linkedin.com/company/scoolchef",
    ],
  };

  return (
    <html lang="es" className={`${inter.variable} ${displayFont.variable}`}>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

