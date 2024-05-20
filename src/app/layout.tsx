import "./globals.css";
import Topnavs from "@/components/ah-topnavs";
import { ReactNode } from "react";

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
