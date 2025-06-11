import React from "react";
import Image from "next/image";
import {
  Card,
} from "@/components/ui/card"

function HomeBanner() {
  return (
    <>
      <Card className="min-h-[700px] grid grid-cols-1 md:grid-cols-2 gap-8 !rounded-[2.5rem] items-center justify-around lightGradientColor border-0">
        {/* Left Column - Text Content */}
        <div className="space-y-6 p-16">
          <h1 className="text-3xl md:text-6xl xl:text-7xl font-bold leading-tight">
            Fuel Your <br /> Curiosity. Let the{" "}
            <span className="primary-blue">Journey Begin.</span>
          </h1>
          <p className="text-base md:text-lg max-w-md">
            With roam n learn, every trip&apos;s a new story full of epic sights, big
            laughs, and a vibe you can&apos;t fake. If you are ready to go beyond the
            usual, you are in the right place. Let&apos;s roam.
          </p>
          <button className="bg-primary-red text-white font-semibold px-10 py-3 rounded-full w-fit transition">
            LET&apos;S GO
          </button>
        </div>

        {/* Right Column - Image with Background */}
        <div className="relative w-full h-full">
          <div className="absolute h-[684px] right-0 left-0 top-0 bottom-0 z-20 flex justify-center">
            <div className="relative w-full max-w-[628px] h-full">
              <Image
                src="/images/home-banner.png"
                alt="Travel Image"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="absolute !right-0 left-0 top-10 bottom-0 z-10 flex justify-center">
            <div className="relative h-[532px] min-w-[1332px]">
              <Image
                src="/images/layer.png"
                alt="Background Layer"
                fill
                className="h-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default HomeBanner;
