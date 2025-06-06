import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface PageBannerProps {
  title: string;
}

function PageBanner({ title }: PageBannerProps) {
  return (
    <div className="relative">
      {/* Main Banner */}
      <div className="relative h-[80vh] w-full">
        <div className="absolute inset-0 bg-[url('/images/code-conduct-img.png')] bg-cover bg-center"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-yellow-500/70 via-yellow-500/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-end justify-center pb-20">
          <h1 className="text-5xl md:text-9xl font-bold text-white text-center drop-shadow-lg">
            {title}
          </h1>
        </div>
      </div>

      {/* Navigation Strip */}
      <div className="bg-yellow-500 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 ">
            <Link
              href="/"
              className="flex items-center hover:text-yellow-200 transition-colors"
            >
              <span className="ml-2">Home</span>
            </Link>
            <ChevronRight className="w-5 h-5" />
            <span className="font-semibold">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
