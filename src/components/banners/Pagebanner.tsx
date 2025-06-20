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
  id: string,
  title: string,
  breadcrumb: Array<{label: string, href: string}> | null,
  backgroundImage: string,
  description: string | string[] | null,
};

function Pagebanner({id, title, backgroundImage, description, breadcrumb}: PageBannerProps) {
  return (
    <Card 
      className={`container !pb-0 relative h-full bg-no-repeat bg-center bg-cover border-0 overflow-hidden !rounded-[2.5rem] pt-10 z-10 md:grid grid-cols-1 md:grid-cols-7 gap-x-8`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hidden lg:flex col-span-2 relative w-full 2xl:h-[400px]">
        <Image
          src="/images/bags.png"
          alt="Station Adventure"
          width={450}
          height={460}
          className="mr-auto object-cover"

        />
      </div>
      <CardContent className="col-span-3 flex flex-col justify-start md:gap-y-2 xl:gap-y-4 md:!px-0 2xl:px-16 2xl:py-12 text-center text-white self-center">
        <h2 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
          {title}
        </h2>
        {breadcrumb && (
          <Breadcrumb className="flex items-center justify-center">
            <BreadcrumbList>
              {breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={item.href.toString()} className="text-base lg:text-lg 2xl:!text-xl text-white">
                      {item.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {index < breadcrumb.length - 1 && <BreadcrumbSeparator className="text-white" />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )}
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl leading-normal">
          {Array.isArray(description) ? description.map((desc, index) => (
            <React.Fragment key={index}>
              {desc}
              {index < description.length - 1 && <br />}
            </React.Fragment>
          )) : description}
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
