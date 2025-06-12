import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
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
      {/* Be Responsible  */}
      <article>
        <Card
          className={`container redBackgroundGradientColor !my-20 lg:grid lg:grid-cols-2 items-center !rounded-3xl overflow-hidden gap-x-12 lg:p-10 border-0`}
        >
          <div>
            <Image
              width={558}
              height={300}
              src={`/images/respect-everyone.png`}
              alt="Main Interaction"
              className="rounded-3xl w-full object-cover"
            />
          </div>
          {/* Text Content */}
          <div className="w-full p-4 lg:p-10 text-white">
            <div className="space-y-4 lg:space-y-10">
              <h2
                className={`text-3xl md:text-4xl lg:text-6xl font-bold text-white`}
              >
                Our Story
              </h2>
              <div className="text-white space-y-2 text-sm lg:text-xl">
                <p>
                  It all started with a simple idea: what if learning could be
                  fun—and happen anywhere in the world?
                </p>
                <p>
                  We’re a group of travel lovers, youth mentors, and adventure
                  seekers who believe the best kind of learning happens when
                  you're out there living it. That’s why we created Roam and
                  Learn—to give students the chance to travel, explore new
                  cultures, and learn through real-world experiences.
                </p>
                <p>
                  Every trip we plan is built from that same spark: travel with
                  purpose, led by passion.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </article>
      {/* Stay Safe */}
      <article>
        <Card
          className={`container !my-20 lg:grid lg:grid-cols-2 items-center !rounded-3xl overflow-hidden gap-x-12 lg:p-10 border-0`}
        >
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 w-full p-4 lg:p-10">
            <div className="space-y-4 lg:space-y-10">
              <h2 className={`text-3xl md:text-4xl lg:text-6xl font-bold`}>
              Meet <span className="primary-blue">The Team</span>
              </h2>

              <div className="text-sm lg:text-xl space-y-2">
                <p>We’re a small but mighty crew of travel pros, safety experts, and youth leaders who care deeply about student experiences. We plan every detail, guide every step, and keep the energy high (and the fun even higher).</p>
                <p>We’re here to help you roam safely, confidently—and with a lot of stories to tell when you get back.</p>
              </div>
              <h3 className="text-2xl primary-red">Ready to explore? Let’s go!</h3>
            </div>
          </div>
          {/* Image contain  */}
          <div className="order-1 lg:order-2 ">
            <Image
              width={558}
              height={300}
              src={`/images/respect-everyone.png`}
              alt="Main Interaction"
              className="rounded-3xl w-full object-cover"
            />
          </div>
        </Card>
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
    </>
  );
}

export default Destionation;
