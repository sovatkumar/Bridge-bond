import React from "react";
import Image from "next/image";
import { Card } from "../ui/card";

type DynamicCardProps = {
  heading: string;
  description: string[];
  paraHeading: string | null;
  img: string;
  img_1: string | null;
  img_2: string | null;
  img_3: string | null;
  list: string[];
  className: { [key: string]: string };
  icon: string;
};

export default function DynamicCard({
  heading,
  description,
  paraHeading,
  img,
  img_1,
  img_2,
  img_3,
  list,
  className,
  icon,
}: DynamicCardProps) {
  return (
    <Card
      className={`container ${className.mainCss} !my-20 grid lg:grid-cols-2 !rounded-3xl overflow-hidden items-center md:items-start gap-x-8 xl:gap-x-12 md:p-10 p-4 2xl:p-16 border-0`}
    >
      {/* Text Content */}
      <div className="order-2 lg:order-1 w-full flex flex-col gap-y-6 2xl:py-7 3xl:py-10">
        <div className="space-y-3 lg:space-x-5">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${className.heading}`}
          >
            {heading}
          </h2>
          {description && (
            <div>
              {description.map((description, index) => (
                <p
                  key={index}
                  className={`text-base md:text-lg xl:text-xl ${className.text} leading-normal`}
                >
                  {description}
                </p>
              ))}
            </div>
          )}
          {paraHeading && (
            <h4
              className={`text-2xl md:text-3xl xl:text-4xl font-bold ${className.paraHeading}`}
            >
              {paraHeading}
            </h4>
          )}

          {list && (
            <ul
              className={`text-base md:text-lg xl:text-xl ${className.text} space-y-3 md:space-y-5 leading-relaxed`}
            >
              {list?.map((item, index) => (
                <li key={index} className="flex gap-2 items-start">
                  <Image
                    width={28}
                    height={28}
                    src={`/icons/${icon}`}
                    alt="list-icon"
                    className="object-contain pt-2 md:pt-1"
                  />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {img && (
        <div className="">
          <Image
            width={558}
            height={374}
            src={`/images/${img}`}
            alt="Main Interaction"
            className="rounded-3xl w-full object-cover"
          />
        </div>
      )}

      {img_1 && img_2 && img_3 && (
        <div className="order-1 lg:order-2 h-full w-full grid grid-cols-2 grid-rows-2 gap-3 md:gap-5">
          {img_1 && (
            <div className="relative min-h-48 h-full w-full rounded-2xl overflow-hidden">
              <Image
                src={`/images/${img_1}`}
                alt="Main Interaction"
                fill
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {img_2 && (
            <div className="relative row-span-2 h-full rounded-2xl overflow-hidden">
              <Image
                src={`/images/${img_2}`}
                alt="Secondary Interaction"
                fill
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {img_3 && (
            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              <Image
                src={`/images/${img_3}`}
                alt="Tertiary Interaction"
                fill
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
