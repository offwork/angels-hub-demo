import "./globals.css";
import Topnavs from "@/components/ah-topnavs";
// import Footer from "@/components/Layout/ah-footer";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* overflow-x-hidden overflow-y-scroll */}
      <body className="font-sans relative bg-angel-blue w-full" suppressHydrationWarning>
        <Topnavs />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
