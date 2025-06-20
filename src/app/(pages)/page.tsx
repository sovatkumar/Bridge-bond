import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Homebanner from "../../components/banners/Homebanner";
import RegisterCard from "@/components/cards/RegisterCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ChooseSection from "@/components/choose-section";

export default function Home() {
  const feedback = [
    {
      id: 1,
      image: "/icons/Stars.png",
      alt: "stars",
      para: "Roam N Learn turned our school trip into something truly unforgettable.The itinerary was packed with engaging educational activities, and the cultural exposure was invaluable for our students.It was seamless from start to finish!",
      name: "— Priya Deshmukh",
      designation: "Educator, Pune",
    },
    {
      id: 2,
      image: "/icons/Stars.png",
      alt: "stars",
      para: "Roam N Learn turned our school trip into something truly unforgettable.The itinerary was packed with engaging educational activities, and the cultural exposure was invaluable for our students.It was seamless from start to finish!",
      name: "— Priya Deshmukh",
      designation: "Educator, Pune",
    },
    {
      id: 3,
      image: "/icons/Stars.png",
      alt: "stars",
      para: "Roam N Learn turned our school trip into something truly unforgettable.The itinerary was packed with engaging educational activities, and the cultural exposure was invaluable for our students.It was seamless from start to finish!",
      name: "— Priya Deshmukh",
      designation: "Educator, Pune",
    },
  ];

  return (
    <>
      <article>
        <div className="container mx-auto">
          <Homebanner />
        </div>
      </article>

      {/* why choose Room and learn  */}
      <article>
        <div className="min-h-screen container py-10 lg:py-20">
          <div className="space-y-10 max-w-6xl m-auto text-center mb-10">
            <h2 className="text-3xl lg:text-5xl xl:text-[52px] font-bold mb-5">
              Why Choose <span className="primary-red">Roam and Learn?</span>
            </h2>
            <p className="text-base md:text-lg lg:text-2xl">
              At Roam and Learn, we believe that some lessons are best
              experienced in the real world. Our free student tours take you
              beyond the classroom to explore new places, cultures, and
              perspectives. It&apos;s a chance to grow, connect, and discover —
              all while having the time of your life.
            </p>
          </div>
          <Card className="min-h-[500px] xl:min-h-[700px] grid grid-cols-1 md:grid-cols-2 gap-8 !rounded-[2.5rem] items-center justify-around lightGradientColor border-0"></Card>
        </div>
      </article>

      {/* Feactured section  */}
      <article className="min-h-min container py-10 lg:py-20">
        <div className="md:grid grid-cols-2 gap-10">
          {/* Left Section: Promotional Message */}
          <div className="space-y-4 text-center md:text-start">
            <h2 className="text-4xl lg:text-5xl xl:text-[52px] font-bold">
              Top <span className="text-red-500">Destinations</span>
            </h2>
            <h4 className="text-xl lg:text-2xl font-semibold">
              Score up to 15% off worldwide travel 'til May 31!
            </h4>
            <p className="text-base lg:text-lg xl:text-xl text-gray-700">
              All month long, score 15% off select trips across the globe, with
              travel by July 31, 2025. And if you wanna travel a little later,
              score 10% off select adventures with travel between August 1 and
              September 30, 2025. Conquer Mt. Fuji in Japan. Island-hop your way
              through Thailand. Bask in that sweet, sweet Tuscan sun. You name
              the adventure, we'll show you the sale.
            </p>
            <Button className="!rounded-3xl mt-6 px-8 py-4 bg-red-500 text-white shadow-md hover:bg-red-600 transition-colors">
              <Link href="/destinations"> See All</Link>
            </Button>
          </div>

          {/* Right Section: Destination Cards Slider */}
          <div className="relative mt-6 md:mt-0">
            <div className="p-1">
              <Card className="h-[445px] rounded-lg shadow-lg overflow-hidden relative group">
                <CardContent className="p-0 flex items-center justify-center h-full w-full">
                  <Image
                    src="/images/home-taj.png"
                    alt="taj-mahal"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute w-full inset-0 p-6 flex flex-col justify-end text-white">
                    <p className="text-base lg:text-xl">6 Day Tour</p>
                    <h3 className="text-2xl lg:text-3xl font-bold mt-1">
                      Bharat Darshan
                    </h3>
                    <div className="md:flex justify-between space-y-2">
                      <p className="text-base lg:text-xl mt-1">
                        Valid on Jun 12, 2025
                      </p>
                      <Link href="#">
                        <span className="inline-flex items-center primary-yellow text-base md:text-xl lg:text-2xl transition-colors cursor-pointer">
                          View itinerary <span className="ml-2">→</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </article>

      {/* Now in the station your next adventure */}
      <article className="py-10 lg:py-20">
        <RegisterCard />
      </article>

      {/* why choose Us */}
      <article>
        <ChooseSection />
      </article>

      {/*  Our Licenses */}
      <article>
        <div className="container min-h-min 2xl:max-w-8xl py-10 lg:py-20">
          <div className="space-y-10 max-w-6xl m-auto text-center mb-10">
            <h2 className="text-3xl lg:text-5xl xl:text-[52px] font-bold mb-5">
              Our <span className="primary-red">Licenses</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "/icons/education-travel.png",
                title: "Educational Travel Operations",
                description:
                  "Licensed to organize and facilitate structured learning experiences through travel, recognized by educational institutions and governing bodies.",
              },
              {
                icon: "/icons/tour-transportation.png",
                title: "Tour and Transportation Services",
                description:
                  "Fully certified to provide domestic and international group travel logistics, ensuring safe and regulated transport across destinations.",
              },
              {
                icon: "/icons/culture.png",
                title: "Cultural Exchange & Study Programs",
                description:
                  "Approved to conduct cultural immersion, language learning, and field-study programs with verified partner institutions and guides.",
              },
            ].map(({ icon, title, description }, index) => (
              <Card
                key={index}
                className="lg:px-12 md:px-8 px-4 flex items-center gap-y-4 gap-x-4 !rounded-3xl border-none"
              >
                <div className="flex-shrink-0">
                  <Image src={icon} alt={title} height={80} width={80} />
                </div>
                <div className="flex-1 text-center space-y-4">
                  <h4 className="font-medium text-lg md:text-xl xl:text-2xl">
                    {title}
                  </h4>
                  <p className="text-sm lg:text-base xl:text-lg leading-normal">
                    {description}
                  </p>
                </div>
                {/* <Link href={"/"} className="text-lg md:text-xl xl:text-2xl primary-red text-center flex items-center gap-x-2"><MoveRight /> View itinerary</Link> */}
              </Card>
            ))}
          </div>
        </div>
      </article>

      {/* feedback */}
      <article className="container py-10 lg:py-20">
        <Card className="relative h-full bg-no-repeat bg-center bg-cover rounded-4xl bg-[url('/images/red-yellow-background.png')] py-10 px-4 lg:!p-16 z-10 md:grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* Left Section: Promotional Message */}
          <div className="space-y-4 text-start col-span-1">
            <h2 className="text-4xl lg:text-5xl xl:text-[52px] 2xl:text-[60px] font-bold text-white">
              Feedback from Our Learners
            </h2>
            <p className="text-base lg:text-lg 2xl:text-xl text-white">
              Don't Just Take Our Word For It—Here's <br />
              What Real Travelers Had To Say <br />
              After Roaming With Us:
            </p>
            <Button className="!rounded-3xl mt-6 px-8 py-4 bg-primary-blue text-white shadow-md transition-colors">
              <Link href="/destinations"> See All</Link>
            </Button>
          </div>

          {/* Right Section: Destination Cards Slider */}
          <div className="relative col-span-2">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 md:-ml-6 w-full">
                {feedback.map((feedback) => (
                  <CarouselItem
                    key={feedback.id}
                    className="pl-6 w-full lg:w-1/2"
                  >
                    <div className="h-full">
                      <Card className="h-full shadow-lg overflow-hidden rounded-2xl bg-white !py-0">
                        <div className="w-full p-6 flex flex-col justify-between h-full gap-y-4 text-center">
                          <Image
                            src={feedback.image}
                            alt={feedback.alt}
                            width={120}
                            height={28}
                            className="mx-auto"
                          />
                          <p className="text-sm md:text-base 2xl:text-lg text-gray-800">
                            {feedback.para}
                          </p>
                          <h3 className="text-sm md:text-base 2xl:text-lg font-bold mt-1 text-[#F04042]">
                            {feedback.name},{" "}
                            <span className="font-normal text-black">
                              {" "}
                              {feedback.designation}
                            </span>
                          </h3>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-5 -bottom-12 md:-bottom-15 -translate-y-1/2 border-none !bg-transparent text-white hover:text-white" />
              <CarouselNext className="absolute left-20 -bottom-12 md:-bottom-15 -translate-y-1/2 border-none !bg-transparent text-white hover:text-white" />
            </Carousel>
          </div>
        </Card>
      </article>

      {/*faqs */}
      <article>
        <div className="container min-h-min max-w-8xl py-10 lg:py-20">
          <div className="space-y-10 max-w-6xl m-auto text-center mb-10">
            <h2 className="text-3xl lg:text-5xl font-bold mb-5">
              Got Questions? We've <br />
              <span className="primary-red">Got Answers.</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-3 md:gap-5">
            {[
              {
                title: "What is Roam N Learn?",
                description:
                  "Roam N Learn offers curated travel experiences that combine exploration with skill-building, cultural immersion, and learning opportunities. It's where adventure meets personal growth.",
              },
              {
                title: "Do you offer international trips?",
                description:
                  "Fully certified to provide domestic and international group travel logistics, ensuring safe and regulated transport across destinations.",
              },
              {
                title: "Who can join the programs?",
                description:
                  "Licensed to organize and facilitate structured learning experiences through travel, recognized by educational institutions and governing bodies.",
              },
              {
                title: "How can I book a trip?",
                description:
                  "Fully certified to provide domestic and international group travel logistics, ensuring safe and regulated transport across destinations.",
              },
              {
                title: "What kind of learning experiences do you offer?",
                description:
                  "Licensed to organize and facilitate structured learning experiences through travel, recognized by educational institutions and governing bodies.",
              },
              {
                title: "What’s included in the trip package?",
                description:
                  "Fully certified to provide domestic and international group travel logistics, ensuring safe and regulated transport across destinations.",
              },
              {
                title: "Are the trips guided?",
                description:
                  "Licensed to organize and facilitate structured learning experiences through travel, recognized by educational institutions and governing bodies.",
              },
              {
                title: "Is it safe to travel with Roam N Learn?",
                description:
                  "Fully certified to provide domestic and international group travel logistics, ensuring safe and regulated transport across destinations.",
              },
            ].map(({ title, description }, index) => (
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem
                  value="item-2"
                  key={index}
                  className="mb-4 shadow-md rounded-2xl border border-red-300 transition-shadow redBoxShadow"
                >
                  <AccordionTrigger className="flex justify-between px-3 md:px-5 text-lg md:text-xl 2xl:text-2xl hover:no-underline">
                    {title}

                  </AccordionTrigger>

                  <AccordionContent className="text-base md:text-lg text-gray-800 px-3 md:px-5 pb-8">
                    {description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </article>

      {/*  Promotional videos */}
      <article>
        <div className="container min-h-min max-w-8xl py-10 lg:py-20">
          <div className="space-y-10 max-w-6xl m-auto text-center mb-10">
            <h2 className="text-3xl lg:text-5xl xl:text-52 font-bold mb-5">
              Promotional <span className="primary-blue">videos</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                icon: "/icons/education-travel.png",
                title: "Educational Travel Operations",
                description:
                  "Licensed to organize and facilitate structured learning experiences through travel, recognized by educational institutions and governing bodies.",
              },
              {
                icon: "/icons/tour-transportation.png",
                title: "Tour and Transportation Services",
                description:
                  "Fully certified to provide domestic and international group travel logistics, ensuring safe and regulated transport across destinations.",
              },
            ].map(({ icon, title, description }, index) => (
              <Card
                key={index}
                className="min-h-96 px-12 flex items-center gap-y-4 gap-x-4 !rounded-3xl"
              ></Card>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
