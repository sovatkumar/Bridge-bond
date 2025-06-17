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
        <div className="container min-h-min max-w-8xl py-10 lg:py-20 lg:px-4 space-y-10">
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
        <div className="container min-h-min max-w-8xl py-10 lg:py-20 px-4">
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
                className="min-h-60 px-4 flex flex-col items-center justify-center !rounded-3xl"
              >
                <div className="p-2 bg-primary-blue rounded-xl">
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
          className={"container bg-[url('/images/home-banner-background.png')] bg-no-repeat bg-cover z-10 !my-20 lg:grid lg:grid-cols-2 items-center !rounded-3xl overflow-hidden gap-x-12 lg:p-10 border-0"}
        >

          {/* Text Content */}
          <div className="order-2 lg:order-1 w-full p-4 lg:p-10">
            <div className="space-y-4 lg:space-y-10 text-white">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                Trip Overview
              </h2>

              <div className="text-sm lg:text-xl space-y-2">
                <p>We’re a small but mighty crew of travel pros, safety experts, and youth leaders who care deeply about student experiences. We plan every detail, guide every step, and keep the energy high (and the fun even higher).</p>
                <p>We’re here to help you roam safely, confidently—and with a lot of stories to tell when you get back.</p>
              </div>
              <Button className="!rounded-3xl mt-6 px-8 py-4 primary-red bg-white shadow-md transition-colors">
                <Link href="#">READY TO ROAM?</Link>
              </Button>
            </div>
          </div>
          {/* Image contain  */}
          <div className="order-1 lg:order-2 ">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "/icons/destination-icon.png",
                  tourTimeLine: "Days:",
                  expiryDate: "6 Days",
                },
                {
                  icon: "/icons/calender-icon.png",
                  tourTimeLine: "Accommodation:",
                  expiryDate: "3 Hostels, 2 nights in Travel",
                },
                {
                  icon: "/icons/review-icon.png",
                  tourTimeLine: "Meals:",
                  expiryDate: "6 Breakfasts, 6 Dinners",
                },
                {
                  icon: "/icons/price-icon.png",
                  tourTimeLine: "Transport",
                  expiryDate: "Coach",
                },
                {
                  icon: "/icons/review-icon.png",
                  tourTimeLine: "Group Size",
                  expiryDate: "Average 20 students",
                },
                {
                  icon: "/icons/price-icon.png",
                  tourTimeLine: "Crew",
                  expiryDate: "Expert Trip Manager, Driver Team, Local Guides",
                }
              ].map(({ icon, tourTimeLine, expiryDate }, index) => (
                <Card
                  key={index}
                  className="min-h-60 px-4 flex flex-col items-center justify-center !rounded-3xl"
                >
                  <div className="p-2 bg-primary-red rounded-xl">
                    <Image
                      src={icon}
                      alt={icon}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h6 className="text-lg lg:text-xl">{tourTimeLine}</h6>
                    <p className="text-sm lg:text-lg text-gray-700">
                      {expiryDate}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>
      </article>

    </>
  );
}

export default Destionation;
