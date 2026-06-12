import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
// Script import removed since standard HTML script tags are used for static export
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-content",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-headline",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skyhitmedia.com"),
  title: "Skyhit Media | Top Digital Marketing Agency in Hyderabad",
  description:
    "Skyhit Media is the top digital marketing agency and web design company in Hyderabad. Boost your business with expert services and innovative solutions.",
  keywords: ["Digital Marketing Agency Hyderabad", "SEO services", "Web Design Company", "PPC Advertising", "Skyhit Media"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Skyhit Media | Top Digital Marketing Agency in Hyderabad",
    description: "Skyhit Media is the top digital marketing agency and web design company in Hyderabad. Boost your business with expert services and innovative solutions.",
    siteName: "Skyhit Media",
    images: [
      {
        url: "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "Skyhit Media - Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyhit Media | Top Digital Marketing Agency in Hyderabad",
    description: "Skyhit Media is the top digital marketing agency and web design company in Hyderabad. Boost your business with expert services and innovative solutions.",
    images: ["https://skyhitmedia.com/images/Digital-Marketing-og-.png"],
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
  verification: {
    google: "E_tvrjnqI1HYmX6b5m1euw9VNPhAsGZ4PqdiGC4CcWY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://platform.linkedin.com" />

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1LN33RP1RK"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1LN33RP1RK');
          `
        }} />

        {/* Meta Pixel Code */}
        <script dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2247581162679381');
            fbq('track', 'PageView');
          `
        }} />

        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WM5722BB');
          `
        }} />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WM5722BB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2247581162679381&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
