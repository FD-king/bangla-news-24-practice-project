import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Suspense } from "react";
import NavBar from "./components/NevBar";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";
import { Skeleton } from "@heroui/react";

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
          <Suspense
            fallback={
              <div>
                <div>
                  <div className="w-full bg-white">
                    {/* Header Section */}
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
                      {/* Logo and Website Name */}
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-12 w-12 rounded-lg" />

                        <div className="space-y-2">
                          <Skeleton className="h-7 w-60 rounded-md" />
                          <Skeleton className="h-3 w-44 rounded-md" />
                        </div>
                      </div>

                      {/* Authentication Buttons */}
                      <div className="flex items-center gap-5">
                        <Skeleton className="h-5 w-14 rounded-md" />
                        <Skeleton className="h-9 w-20 rounded-full" />
                      </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center justify-center gap-7 px-4 py-5">
                      {Array.from({ length: 8 }).map((_, index) => (
                        <Skeleton key={index} className="h-5 w-12 rounded-md" />
                      ))}
                    </div>

                    {/* Breaking News Ticker */}
                    <div className="mx-8 flex h-9 items-center gap-4 overflow-hidden rounded-md bg-red-600 px-3">
                      <Skeleton className="h-4 w-12 shrink-0 rounded-md bg-white/30" />

                      <div className="flex flex-1 items-center gap-5 overflow-hidden">
                        {Array.from({ length: 4 }).map((_, index) => (
                          <Skeleton
                            key={index}
                            className="h-4 w-64 shrink-0 rounded-md bg-white/30"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <Header />
            <NavBar />
            <Marquee />
          </Suspense>
        </div>

        {children}
        <Suspense
          fallback={
            <div>
              {" "}
              <div className="w-full border-t border-gray-200 bg-white">
                <div className="mx-auto flex min-h-[125px] max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
                  {/* Logo */}
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-12 w-12 rounded-lg" />
                    <Skeleton className="h-6 w-40 rounded-md" />
                  </div>

                  {/* Footer Navigation */}
                  <div className="flex items-center gap-7">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <Skeleton key={index} className="h-4 w-16 rounded-md" />
                    ))}
                  </div>

                  {/* Copyright */}
                  <Skeleton className="h-4 w-52 rounded-md" />
                </div>
              </div>{" "}
            </div>
          }
        >
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
