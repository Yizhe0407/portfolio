import type { Metadata } from "next";
import "./globals.css";
import { Comic_Relief } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import DashedFrame from "@/components/layout/DashedFrame";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
};

const comicRelief = Comic_Relief({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comic-relief",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${comicRelief.className} ${comicRelief.variable} antialiased`}
      >
        <div className="relative min-h-screen">
          <DashedFrame />
          <div className="fixed left-0 top-8 z-50 w-full">
            <Navbar />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
