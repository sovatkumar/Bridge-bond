import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Destionation() {
  return (
    <>
      {/*  Promotional videos */}
      <article>
        <div className="container min-h-min 2xl:max-w-8xl py-10 lg:py-20 space-y-10">
          <div className=" max-w-6xl m-auto text-center mb-10">
            <h2 className="text-3xl lg:text-5xl xl:text-52 font-bold mb-5">
              Top <span className="primary-red">Destinations</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card
              className="min-h-80 px-12 flex flex-col items-center justify-end !rounded-3xl"
              style={{
                backgroundImage: `url('/destinations/img6.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Card>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card
                className="min-h-80 px-12 !rounded-3xl"
                style={{
                  backgroundImage: `url('/destinations/img6.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Card>
              <Card
                className="min-h-80 px-12 !rounded-3xl"
                style={{
                  backgroundImage: `url('/destinations/img6.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Card>
              <Card
                className="lg:col-span-2 min-h-80 px-12 flex flex-col items-center lg:items-end justify-end !rounded-3xl"
                style={{
                  backgroundImage: `url('/destinations/img6.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Button
                  size={"lg"}
                  className="text-center text-white bg-primary-yellow !rounded-3xl"
                >
                  See more
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </article>
      {/*  Promotional videos */}
      <article>
        <div className="container min-h-min 2xl:max-w-8xl py-10 lg:py-20">
          <div className="space-y-10 max-w-6xl m-auto text-center mb-10">
            <h2 className="text-3xl lg:text-5xl xl:text-52 font-bold mb-5">
              Trip Details
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "/icons/destination-icon.png",
                tourTimeLine: "Destination:",
                expiryDate: "Bharat Darshan",
              },
              {
                icon: "/icons/calender-icon.png",
                tourTimeLine: "Travel Dates:",
                expiryDate: "10 July to 16 July",
              },
              {
                icon: "/icons/review-icon.png",
                tourTimeLine: "Reviews:",
                expiryDate: "Valid on Jun 12, 2025",
              },
              {
                icon: "/icons/price-icon.png",
                tourTimeLine: "Price:",
                expiryDate: "From ₹599",
              },
            ].map(({ icon, tourTimeLine, expiryDate }, index) => (
              <Card
                key={index}
                className="min-h-60 flex flex-col items-center justify-center !rounded-3xl"
              >
                <div className="p-3 h-16 w-16 bg-primary-blue rounded-2xl content-center">
                  <Image
                    src={icon}
                    alt={icon}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h6 className="text-lg lg:text-2xl">{tourTimeLine}</h6>
                  <p className="text-sm lg:text-xl xl:text-2xl text-gray-700">
                    {expiryDate}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </article>
      {/* Stay Safe */}
      <article>
        <Card
          className={"container bg-[url('/images/home-banner-background.png')] bg-no-repeat bg-cover z-10 !my-20 lg:grid lg:grid-cols-2 items-center !rounded-3xl overflow-hidden gap-x-8 p-4 xl:p-10 border-0"}
        >

          {/* Text Content */}
          <div className="order-2 lg:order-1 w-full p-4 xl:p-10">
            <div className="space-y-4 lg:space-y-8 2xl:space-y-10 text-white">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                Trip Overview
              </h2>

              <div className="text-sm lg:text-lg xl:text-xl space-y-2">
                <p>We’re a small but mighty crew of travel pros, safety experts, and youth leaders who care deeply about student experiences. We plan every detail, guide every step, and keep the energy high (and the fun even higher).</p>
                <p>We’re here to help you roam safely, confidently—and with a lot of stories to tell when you get back.</p>
              </div>
              <Button className="!rounded-3xl mt-6 px-8 py-6 primary-red bg-white shadow-md transition-colors">
                <Link href="#">READY TO ROAM?</Link>
              </Button>
            </div>
          </div>
          {/* Image contain  */}
          <div className="order-1 lg:order-2 ">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {[
                {
                  icon: "/icons/days-icon.png",
                  heading: "Days:",
                  para: "6 Days",
                },
                {
                  icon: "/icons/accommodation-icon.png",
                  heading: "Accommodation:",
                  para: "3 Hostels, 2 nights in Travel",
                },
                {
                  icon: "/icons/meals-icon.png",
                  heading: "Meals:",
                  para: "6 Breakfasts, 6 Dinners",
                },
                {
                  icon: "/icons/transport-icon.png",
                  heading: "Transport",
                  para: "Coach",
                },
                {
                  icon: "/icons/group-icon.png",
                  heading: "Group Size",
                  para: "Average 20 students",
                },
                {
                  icon: "/icons/crew-icon.png",
                  heading: "Crew",
                  para: "Expert Trip Manager, Driver Team, Local Guides",
                }
              ].map(({ icon, heading, para }, index) => (
                <Card
                  key={index}
                  className="flex flex-col items-center justify-center !rounded-3xl !gap-5"
                >
                  <div className="p-3 h-16 w-16 content-center bg-primary-red rounded-xl">
                    <Image
                      src={icon}
                      alt={icon}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h6 className="text-lg xl:text-xl">{heading}</h6>
                    <p className="text-base 2xl:text-lg text-gray-700">
                      {para}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>
      </article>
      <article>
        <div className="container py-10 md:py-20">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Map &{" "}
            <span className="primary-red">Itinerary</span>
          </h1>

          {/* Grid: Left Itinerary + Right Map */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Itinerary Timeline */}
            <div className="container relative space-y-6 before:absolute before:top-0 before:-left-8 before:bottom-0 before:border-l-2 before:border-dashed before:border-[#00aea5]">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="relative">
                  {/* Circle */}
                  <span className={`absolute -left-11 w-6 h-6 rounded-full bg-primary-teal border-4 border-[#00aea5] z-10 ${index === 0 ? "-top-1 bg-[#00aea5]" : "top-1 bg-white"}`}></span>

                  {/* Text Content */}
                  <div>
                    <h3 className="font-semibold text-lg xl:text-[26px] text-primary-dark">
                      Day: {index + 1}
                    </h3>
                    <p className="text-gray-700 text-lg xl:text-2xl">
                      Vikram Sarabhai Space Centre (ISRO)
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Map Image */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/map-example.png"
                alt="Map"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Destionation;
