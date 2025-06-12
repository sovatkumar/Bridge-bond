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
import { MoveRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export default function Home() {
  const destinations = [
    {
      id: 1,
      image: "/images/taj-mahal.png",
      alt: "Taj Mahal",
      tourType: "6 Day Tour",
      name: "Bharat Darshan",
      validity: "Valid on Jun 12, 2025",
      itineraryLink: "#",
    },
    {
      id: 2,
      image: "/images/waterdestination.png",
      alt: "Maldives",
      tourType: "6 Day Tour",
      name: "Bharat Darshan",
      validity: "Valid on Jun 12, 2025",
      itineraryLink: "#",
    },
    {
      id: 3,
      image: "/images/taj-mahal.png",
      alt: "Hawa Mahal",
      tourType: "6 Day Tour",
      name: "Bharat Darshan",
      validity: "Valid on Jun 12, 2025",
      itineraryLink: "#",
    },
    {
      id: 4,
      image: "/images/taj-mahal.png",
      alt: "Taj Mahal",
      tourType: "6 Day Tour",
      name: "Bharat Darshan",
      validity: "Valid on Jun 12, 2025",
      itineraryLink: "#",
    },
    {
      id: 5,
      image: "/images/taj-mahal.png",
      alt: "Maldives",
      tourType: "6 Day Tour",
      name: "Bharat Darshan",
      validity: "Valid on Jun 12, 2025",
      itineraryLink: "#",
    },
  ];

  return (
    <>
      <article>
        <div className="container mx-auto px-4">
          <Homebanner />
        </div>
      </article>

      {/* why choose Room and learn  */}
      <article>
        <div className="min-h-screen container py-10 lg:py-20 px-4">
          <div className="space-y-10 max-w-6xl m-auto text-center mb-10">
            <h2 className="text-3xl lg:text-5xl xl:text-[52px] font-bold mb-5">
              Why Choose <span className="primary-blue">Roam and Learn?</span>
            </h2>
            <p className="text-lg lg:text-2xl">
              With roam n learn, every trip&apos;s a new story full of epic sights,
              big laughs, and a vibe you can&apos;t fake. If you are ready to go
              beyond the usual, you are in the right place. Let&apos;s roam
            </p>
          </div>

          <Card className="min-h-[700px] grid grid-cols-1 md:grid-cols-2 gap-8 !rounded-[2.5rem] items-center justify-around lightGradientColor border-0"></Card>
        </div>
      </article>

      {/* Feactured section  */}
      <article className="min-h-min container py-20 px-4">
        <div className="md:grid grid-cols-2 gap-10">
          {/* Left Section: Promotional Message */}
          <div className="space-y-4 text-start">
            <h2 className="text-4xl lg:text-5xl xl:text-52 font-bold">
              Top <span className="text-red-500">Destinations</span>
            </h2>
            <h4 className="text-2xl font-semibold">
              Score up to 15% off worldwide travel 'til May 31!
            </h4>
            <p className="text-lg text-gray-700">
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
          <div className="relative ">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-6">
                {destinations.map((destination) => (
                  <CarouselItem
                    key={destination.id}
                    className="pl-6 md:basis-1.3/3 "
                  >
                    <div className="p-1">
                      <Card className="w-80 h-96 rounded-lg shadow-lg overflow-hidden relative group">
                        <CardContent className="p-0 flex items-center justify-center h-full w-full">
                          <Image
                            src={destination.image}
                            alt={destination.alt}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute w-full inset-0 p-6 flex flex-col justify-end text-white">
                            <p className="text-sm">{destination.tourType}</p>
                            <h3 className="text-2xl font-bold mt-1">
                              {destination.name}
                            </h3>
                            <p className="text-sm mt-1">
                              {destination.validity}
                            </p>
                            <Link href={destination.itineraryLink} passHref>
                              <span className="mt-4 inline-flex items-center text-red-400 hover:text-red-300 transition-colors cursor-pointer">
                                View itinerary <span className="ml-2">→</span>
                              </span>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-5 -bottom-15 -translate-y-1/2 primary-blue border-none " />
              <CarouselNext className="absolute left-20 -bottom-15 -translate-y-1/2 primary-red border-none " />
            </Carousel>
          </div>
        </div>
      </article>

      {/* Now in the station your next adventure */}
      <article>
        <RegisterCard />
      </article>

      {/* why choose Us */}
      <article>
        <div className="container min-h-min max-w-8xl py-10 lg:py-20 px-4">
          <div className="space-y-10 max-w-6xl m-auto text-center mb-10">
            <h2 className="text-3xl lg:text-5xl xl:text-52 font-bold mb-5">
              Why Choose <span className="primary-blue">Us?</span>
            </h2>
            <p>We&apos;re committed to providing the best experience for your child.</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {
              [
                {
                  icon: "/icons/safety.png",
                  title: "Safety is Our 1st Priority",
                  description: "All tours are carefully planned with safety protocols in place. We partner only with licensed, insured service providers and have 24/7 emergency response teams."
                },
                {
                  icon: "/icons/cell-phone.png",
                  title: "Regular Parent Updates",
                  description: "We keep you informed throughout the trip with real-time updates, messages, and photos so you always know where your child is and what they're doing."
                },
                {
                  icon: "/icons/health-medical-support.png",
                  title: "Health & Medical Support",
                  description: "We're prepared for any health-related needs, with access to medical professionals, first aid, and immediate support if required"
                },
                {
                  icon: "/icons/age-appropriate.png",
                  title: "Curated, Age-Appropriate Itineraries",
                  description: "Every destination and activity is chosen with student interests and safety in mind—engaging, enriching, and 100% age-appropriate."
                },
                {
                  icon: "/icons/transparent-communication.png",
                  title: "Transparent Communication",
                  description: "No surprises. Parents receive complete tour plans, safety procedures, and emergency contact information well in advance."
                },
                {
                  icon: "/icons/insurance-coverage.png",
                  title: "Insurance Coverage",
                  description: "Each student is covered under a comprehensive travel insurance plan for added peace of mind."
                },
              ].map(({ icon, title, description }, index) => (
                <Card key={index} className="px-12 flex flex-row items-start gap-x-4 !rounded-3xl">
                  <div className="flex-shrink-0"><Image src={icon} alt={title} height={60} width={60} className="object-cover" /></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-2xl">{title}</h4>
                    <p className="text-lg">{description}</p>
                  </div>
                </Card>
              ))
            }

          </div>


        </div>
      </article>

      {/*  Our Licenses */}
      <article>
        <div className="container min-h-min max-w-8xl py-10 lg:py-20 px-4">
          <div className="space-y-10 max-w-6xl m-auto text-center mb-10">
            <h2 className="text-3xl lg:text-5xl xl:text-52 font-bold mb-5">
              Our <span className="primary-blue">Licenses</span>
            </h2>

          </div>
          <div className="grid grid-cols-3 gap-8">
            {
              [
                {
                  icon: "/icons/education-travel.png",
                  title: "Educational Travel Operations",
                  description: "Licensed to organize and facilitate structured learning experiences through travel, recognized by educational institutions and governing bodies."
                },
                {
                  icon: "/icons/tour-transportation.png",
                  title: "Tour and Transportation Services",
                  description: "Fully certified to provide domestic and international group travel logistics, ensuring safe and regulated transport across destinations."
                },
                {
                  icon: "/icons/culture.png",
                  title: "Cultural Exchange & Study Programs",
                  description: "Approved to conduct cultural immersion, language learning, and field-study programs with verified partner institutions and guides."
                },
              ].map(({ icon, title, description }, index) => (
                <Card key={index} className="px-12 flex items-center gap-y-4 gap-x-4 !rounded-3xl">
                  <div className="flex-shrink-0"><Image src={icon} alt={title} height={80} width={80} /></div>
                  <div className="flex-1 text-center space-y-4">
                    <h4 className="font-medium text-2xl">{title}</h4>
                    <p className="text-lg">{description}</p>
                  </div>
                  <Link href={"/"} className="text-2xl primary-red text-center flex items-center gap-x-2"><MoveRight /> View itinerary</Link>
                </Card>
              ))
            }

          </div>


        </div>
      </article>

      {/*  faqs */}
      <article>
        <div className="container min-h-min max-w-8xl py-10 lg:py-20 px-4">
          <div className="space-y-10 max-w-6xl m-auto text-center mb-10">
            <h2 className="text-3xl lg:text-5xl xl:text-52 font-bold mb-5">
              Got Questions? We've <br /><span className="primary-red">Got
                Answers.</span>
            </h2>

          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            {
              [
                {
                  icon: "/icons/education-travel.png",
                  title: "What is Roam N Learn?",
                  description: "Roam N Learn offers curated travel experiences that combine exploration with skill-building, cultural immersion, and learning opportunities. It's where adventure meets personal growth."
                },
                {
                  icon: "/icons/tour-transportation.png",
                  title: "Do you offer international trips?",
                  description: "Fully certified to provide domestic and international group travel logistics, ensuring safe and regulated transport across destinations."
                },
                {
                  icon: "/icons/education-travel.png",
                  title: "Who can join the programs?",
                  description: "Licensed to organize and facilitate structured learning experiences through travel, recognized by educational institutions and governing bodies."
                },
                {
                  icon: "/icons/tour-transportation.png",
                  title: "How can I book a trip?",
                  description: "Fully certified to provide domestic and international group travel logistics, ensuring safe and regulated transport across destinations."
                },
                {
                  icon: "/icons/education-travel.png",
                  title: "What kind of learning experiences do you offer?",
                  description: "Licensed to organize and facilitate structured learning experiences through travel, recognized by educational institutions and governing bodies."
                },
                {
                  icon: "/icons/tour-transportation.png",
                  title: "What’s included in the trip package?",
                  description: "Fully certified to provide domestic and international group travel logistics, ensuring safe and regulated transport across destinations."
                },
                {
                  icon: "/icons/education-travel.png",
                  title: "Are the trips guided?",
                  description: "Licensed to organize and facilitate structured learning experiences through travel, recognized by educational institutions and governing bodies."
                },
                {
                  icon: "/icons/tour-transportation.png",
                  title: "Is it safe to travel with Roam N Learn?",
                  description: "Fully certified to provide domestic and international group travel logistics, ensuring safe and regulated transport across destinations."
                },
              ].map(({ icon, title, description }, index) => (

                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue="item-1"
                >
                  <AccordionItem value="item-2" key={index} className="mb-4 shadow-md rounded-2xl border border-red-300 transition-shadow redBoxShadow">
                    <AccordionTrigger className="px-3 md:px-5 text-lg md:text-xl xl:text-2xl hover:no-underline">
                      {title}

                    </AccordionTrigger>

                    <AccordionContent className="text-base md:text-lg text-gray-800 px-5 pb-8">
                      {description}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

              ))
            }

          </div>

        </div>
      </article>

      {/*  Promotional videos */}
      <article>
        <div className="container min-h-min max-w-8xl py-10 lg:py-20 px-4">
          <div className="space-y-10 max-w-6xl m-auto text-center mb-10">
            <h2 className="text-3xl lg:text-5xl xl:text-52 font-bold mb-5">
              Promotional <span className="primary-blue">videos</span>
            </h2>

          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {
              [
                {
                  icon: "/icons/education-travel.png",
                  title: "Educational Travel Operations",
                  description: "Licensed to organize and facilitate structured learning experiences through travel, recognized by educational institutions and governing bodies."
                },
                {
                  icon: "/icons/tour-transportation.png",
                  title: "Tour and Transportation Services",
                  description: "Fully certified to provide domestic and international group travel logistics, ensuring safe and regulated transport across destinations."
                }
              ].map(({ icon, title, description }, index) => (
                <Card key={index} className="min-h-96 px-12 flex items-center gap-y-4 gap-x-4 !rounded-3xl">

                </Card>
              ))
            }

          </div>


        </div>
      </article>
    </>
  );
}
