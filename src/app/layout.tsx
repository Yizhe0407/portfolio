import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { comicRelief, openHuninn } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import DashedFrame from "@/components/layout/DashedFrame";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";

// viewport-fit=cover 讓 env(safe-area-inset-*) 在 iOS 取得實際值（瀏海/Home indicator）
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <Script
        defer
        src="https://umami.yizhe.dev/script.js"
        data-website-id="f87d10ef-0c48-4adb-ba3c-7f9e432933ef"
        strategy="afterInteractive"
      />
      <body
        className={`${comicRelief.className} ${comicRelief.variable} ${openHuninn.variable} antialiased`}
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
