import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type PageBannerProps = {
  title: String;
};

function Pagebanner({ title }: PageBannerProps) {
  return (
    <Card className="container !pb-0 relative h-full bg-no-repeat bg-center bg-cover border-0 overflow-hidden !rounded-[2.5rem] bg-[url('/images/home-banner-background.png')] bg-no-repeat bg-cover pt-10 z-10 md:grid grid-cols-1 md:grid-cols-7 gap-x-8">
      <div className="hidden lg:flex col-span-2 relative w-full 2xl:h-[400px]">
        <Image
          src="/images/bags.png"
          alt="Station Adventure"
          width={450}
          height={460}
          className="mr-auto object-cover"

        />
      </div>
      <CardContent className="col-span-3 flex flex-col justify-start md:gap-y-2 xl:gap-y-4 md:!px-0 2xl:px-16 2xl:py-12 text-center text-white">
        <h2 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
          Destinations
        </h2>
        <Breadcrumb className="flex items-center justify-center">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-base lg:text-lg 2xl:!text-xl text-white">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components" className="text-base lg:text-lg 2xl:!text-xl text-white">
                Components
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-lg md:!text-xl 2xl:text-2xl text-white">Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl leading-normal">
          At Roam N Learn, each destination is more than just a place on the map
          — it’s a living classroom. Our carefully curated educational tours are
          designed to immerse learners in real-world experiences that connect
          culture, history, science, and personal growth.
        </p>
      </CardContent>
      <div className="col-span-2 relative w-full 2xl:h-[400px]">
        <Image
          src="/images/girl-with-bag.png"
          alt="Station Adventure"
          width={380}
          height={420}
          className="ml-auto object-cover"

        />
      </div>
    </Card>
  );
}

export default Pagebanner;
