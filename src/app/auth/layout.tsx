import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import AuthFooter from "@/components/AuthFooter";
import Pagebanner from "@/components/banners/Pagebanner";
import Image from "next/image";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-[80vh] !px-4 lg:!px-0">
          <Pagebanner title="Code of Conduct" />
          <div className="container py-10 md:py-20 lg:py-30 xl:px-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div> {children}</div>
            <div className="hidden md:block">
              <Image
                src="/images/register-image.png"
                alt="iamge"
                width={558}
                height={726}
                className="m-auto object-cover"

              />
            </div>
          </div>
        </main>
        <AuthFooter />
      </body>
    </html>
  );
}
