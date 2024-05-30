import Topnavs from "@/components/layout/AHTopnavs";
import { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans relative bg-angel-blue w-full" suppressHydrationWarning>
        <Topnavs />
        <main className="main-scroller">{children}</main>
      </body>
    </html>
  );
}
