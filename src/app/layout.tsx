import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Suspense } from "react";
import NavBar from "./components/NevBar";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";

const NotoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "Bangla News 24",
  description: "Personal Project test",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${NotoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div>
          <Suspense>
            <Header />
            <NavBar />
            <Marquee />
          </Suspense>
        </div>
        {children}
        <Suspense>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
