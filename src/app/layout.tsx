"use client";

import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import {
  Big_Shoulders_Display,
  Big_Shoulders_Stencil_Text,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";

const stencil = Big_Shoulders_Stencil_Text({
  subsets: ["latin"],
  variable: "--font-stencil",
});

const display = Big_Shoulders_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="..\favicon\favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="any"
          type="image/png"
          href="../favicon/apple-icon.png"
        />
      </head>
      <body className={`${stencil.variable} ${display.variable}`}>
        <Header />
        <div className="bg-eerie min-h-screen">{children}</div>
        <Footer />
      </body>
      {
        //Google tag (gtag.js)
      }
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="ga-Script" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
    </html>
  );
}
