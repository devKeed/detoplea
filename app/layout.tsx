import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
// import "./fonts.css"; // Commented out - using Google Fonts from CDN instead
import { Providers } from "./providers";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: {
    default: "Detoplea Marketing - Digital Marketing Solutions for Modern Businesses",
    template: "%s | Detoplea Marketing",
  },
  description:
    "Detoplea Marketing, the leading digital marketing agency for startups, talents and SMEs, helps businesses grow with bold, ROI-driven strategies that turn visibility into revenue.",
  keywords: [
    "digital marketing agency",
    "SEO services",
    "social media marketing",
    "web design",
    "brand strategy",
    "content marketing",
    "online marketing",
    "business growth",
    "marketing solutions",
    "digital transformation",
  ],
  authors: [{ name: "Detoplea Marketing" }],
  creator: "Detoplea Marketing",
  publisher: "Detoplea Marketing",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://detoplea.com/",
    siteName: "Detoplea Marketing",
    title: "Detoplea Marketing - Digital Marketing Solutions for Modern Businesses",
    description:
      "Transform your business with Detoplea Marketing's comprehensive digital marketing services. We specialize in SEO, social media marketing, web design, and brand strategy.",
    images: [
      {
        url: "https://detoplea.com/images/logo2.png",
        width: 1200,
        height: 630,
        alt: "Detoplea Marketing Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Detoplea Marketing - Digital Marketing Solutions for Modern Businesses",
    description:
      "Transform your business with Detoplea Marketing's comprehensive digital marketing services. We specialize in SEO, social media marketing, web design, and brand strategy.",
    images: ["https://detoplea.com/images/logo2.png"],
  },
  icons: {
    icon: "/images/logo2.png",
    apple: "/images/logo2.png",
  },
  metadataBase: new URL("https://detoplea.com"),
  alternates: {
    canonical: "/",
  },
  other: {
    "revisit-after": "7 days",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/uber-move-2"
          rel="stylesheet"
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CH2WWT6NB3"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CH2WWT6NB3');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Detoplea Marketing",
              url: "https://detoplea.com",
              logo: "https://detoplea.com/images/logo2.png",
              description:
                "Digital marketing agency specializing in SEO, social media marketing, web design, and brand strategy",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              sameAs: [
                "https://instagram.com/detoplea",
                "https://linkedin.com/company/detoplea",
                "https://pinterest.com/detoplea",
                "https://tiktok.com/@detoplea",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                url: "https://detoplea.com/contact",
              },
              service: [
                {
                  "@type": "Service",
                  name: "SEO Services",
                  description:
                    "Search Engine Optimization to improve your website's visibility",
                },
                {
                  "@type": "Service",
                  name: "Social Media Marketing",
                  description:
                    "Comprehensive social media management and advertising",
                },
                {
                  "@type": "Service",
                  name: "Web Design",
                  description: "Professional website design and development",
                },
                {
                  "@type": "Service",
                  name: "Brand Strategy",
                  description: "Strategic brand development and positioning",
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
