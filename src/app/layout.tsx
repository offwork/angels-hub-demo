import "./globals.css";
import Topnavs from "@/components/ah-topnavs";
import AHSmoothScrollbar from "@/components/ui/smooth-scollbar";
// import Footer from "@/components/Layout/ah-footer";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans relative bg-angel-blue w-full" suppressHydrationWarning>
        <Topnavs />
        <AHSmoothScrollbar>
          {children}
        </AHSmoothScrollbar>
      </body>
    </html>
  );
}
