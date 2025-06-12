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
    <Card className="container pb-0 relative h-full bg-no-repeat bg-center bg-cover border-0 overflow-hidden !rounded-[2.5rem] pinkBackGradientColor pt-10 z-10 grid grid-cols-1 md:grid-cols-7 gap-x-8">
      <div className="col-span-2 relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/bags.png"
          alt="Station Adventure"
          width={450}
          height={460}
          className="mr-auto object-cover"
      
        />
      </div>
      <CardContent className="col-span-3 flex flex-col justify-start gap-y-4 px-16 py-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          Destinations
        </h2>
        <Breadcrumb className="flex items-center justify-center">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="!text-xl">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components" className="!text-xl">
                Components
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="!text-2xl">Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <p className="text-sm lg:text-base">
          At Roam N Learn, each destination is more than just a place on the map
          — it’s a living classroom. Our carefully curated educational tours are
          designed to immerse learners in real-world experiences that connect
          culture, history, science, and personal growth.
        </p>
      </CardContent>
      <div className="col-span-2 relative w-full h-[300px] md:h-[400px]">
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
