import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Pagebanner from "@/components/banners/Pagebanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roam N Learn - Educational Travel Experiences",
  description:
    "Transformative educational travel experiences for students of all ages.",
};

export default function ServicePagesRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Pagebanner title="Code of Conduct" />
        {children}
      </body>
    </html>
  );
}
