import React from "react";
import Image from "next/image";
import {
  Card,
} from "@/components/ui/card"

function HomeBanner() {
  return (
    <>
      <Card className="2xl:min-h-[700px] grid grid-cols-1 md:grid-cols-2 gap-8 !rounded-[2.5rem] md:items-center justify-around bg-[url('/images/home-banner-background.png')] bg-no-repeat bg-cover border-0 !pb-0">
        {/* Left Column - Text Content */}
        <div className="space-y-6 lg:p-12 2xl:p-16 px-4 text-center text-white md:text-start">
          <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-7xl font-bold leading-tight">
            Fuel Your <br /> Curiosity. Let the
            Journey Begin.
          </h1>
          <p className="text-base md:text-lg xl:text-xl text-white">
            With roam n learn, every trip&apos;s a new story full of epic sights, big
            laughs, and a vibe you can&apos;t fake. If you are ready to go beyond the
            usual, you are in the right place. Let&apos;s roam.
          </p>
          <button className="bg-primary-red text-white font-semibold px-10 py-3 rounded-full w-fit transition">
            LET&apos;S GO
          </button>
        </div>

        {/* Right Column - Image with Background */}
        <div className="relative flex w-full h-full">
          <Image
            src="/images/home-banner.png"
            alt="Travel Image"
            width={800}
            height={900}
            className="md:absolute 2xl:h-[650px] h-full !z-10 right-20 2xl:right-10 !bottom-0 object-cover overflow-visible"
          />
        </div>
      </Card >
    </>
  );
}

export default HomeBanner;
