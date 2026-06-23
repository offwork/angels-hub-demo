import Topnavs from "@/components/layout/AHTopnavs";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import CookieConsent from "./_components/cookie/AHCookieConsent";
import ScrollSmootherComponent from "./_components/ScrollSmootherComponent";
import TransitionProvider from "./_components/TransitionProvider";
import { WebVitals } from "./_components/web-vitals";
import "./globals.css";

export const metadata: Metadata = {
  openGraph: {
    title: "Comprehensive iGaming Solutions",
    description:
      "Explore top-tier iGaming solutions including sportsbook, casino, crypto services, and more. Enhance your gaming business with AngelsHub.",
    url: "https://www.angelshub.com",
    siteName: "AngelsHub",
    type: "website",
    images: [
      {
        url: "https://www.angelshub.com/api/og",
        secureUrl:
          "https://www.angelshub.com/api/og",
        width: 800,
        height: 600,
        type: "image/png",
        alt: "iGaming Solutions",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = cookies();
  const cookieValue = cookieStore.get("__angels_cookie_consent_accept")?.value;

  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-PKG5SB9H" />
      <body
        className="font-sans relative overscroll-none block h-full bg-angel-blue w-full"
        suppressHydrationWarning
      >
        <WebVitals />
        <TransitionProvider>
          <Topnavs />
          <Toaster position="bottom-center" />
          <ScrollSmootherComponent>
            <div id="smooth-wrapper">
              <div id="smooth-content" className="main-scroller">
                {children}
              </div>
              <CookieConsent cookie={cookieValue} />
            </div>
          </ScrollSmootherComponent>
        </TransitionProvider>
        <GoogleAnalytics gaId="G-93NZW3KXV1" />
      </body>
    </html>
  );
}
