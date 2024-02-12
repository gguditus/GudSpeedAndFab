"use client";

import Footer from "@/app/_components/footer";
import {
  Big_Shoulders_Display,
  Big_Shoulders_Stencil_Text,
} from "next/font/google";
import Head from "next/head";
import Script from "next/script";

import Header from "@/app/_components/header";
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
      <Head>
        <meta
          name="description"
          content="Guditus Speed and Fabrication is a website created to document the progress around the Guditus Garage. Follow along on the Blog or the Build Gallery."
          key="desc"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gudspeedandfab.com/" />
        <meta
          property="og:description"
          content="Guditus Speed and Fabrication is a website created to document the progress around the Guditus Garage. Follow along on the Blog or the Build Gallery."
        />
        <meta property="og:image" content="./favicon/opengraph-image.jpg" />
        <meta property="og:image:alt" content="Guditus Speed and Fabrication" />
        <meta property="og:image:type" content="image/jpg" />
        <link rel="icon" href=".\favicon\favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="any"
          type="image/png"
          href="./favicon/apple-touch-icon.png"
        />
      </Head>
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
