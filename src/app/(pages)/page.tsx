import React from 'react'
import Image from 'next/image';
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
      image: "/images/taj-mahal.png",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5 lg:pl-20 rounded-4xl items-center justify-around lightGradientColor ">

            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-6xl xl:text-7xl font-bold leading-tight">
                Fuel Your <br /> Curiosity. Let the <span className="primary-blue">Journey Begin.</span>
              </h1>
              <p className="text-base md:text-lg max-w-md">
                With roam n learn, every trip's a new story full of epic sights, big laughs, and a vibe you can't fake.
                If you are ready to go beyond the usual, you are in the right place. Let's roam.
              </p>
              <button className="bg-primary-red text-white font-semibold px-10 py-3 rounded-full w-fit transition">
                LET’S GO
              </button>
            </div>

            {/* Right Column - Image with Background */}
            <div className="relative w-full h-full bg-[url('/images/layer.png')] bg-no-repeat bg-contain bg-center">
              <div className="flex justify-self-center">
                <Image
                  width={628}
                  height={684}
                  src="/images/home-banner.png"
                  alt="Travel Image 3"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* why choose Room and learn  */}
      <article>
        <div className="min-h-screen container py-10 lg:py-20 px-4">
          <div className="space-y-10 max-w-6xl m-auto text-center mb-10">
            <h2 className="text-3xl lg:text-[52px] font-bold mb-5">
              Why Choose <span className="primary-blue">Roam and Learn?</span>
            </h2>
            <p className="text-lg lg:text-2xl">
              With roam n learn, every trip's a new story full of epic sights, big laughs, and a vibe you can't fake. If you are ready to go beyond the usual, you are in the right place. Let's roam
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </article>
      {/* Feactured section  */}
      <article className="min-h-screen container py-20 px-4">
        <div className="md:grid grid-cols-2 gap-10">
          {/* Left Section: Promotional Message */}
          <div className="space-y-4 text-start">
            <h2 className="text-5xl font-bold">
              Top <span className="text-red-500">Destinations</span>
            </h2>
            <h4 className="text-2xl font-semibold">
              Score up to 15% off worldwide travel &apos;til May 31!
            </h4>
            <p className="text-lg text-gray-700">
              All month long, score 15% off select trips across the globe, with
              travel by July 31, 2025. And if you wanna travel a little later,
              score 10% off select adventures with travel between August 1 and
              September 30, 2025. Conquer Mt. Fuji in Japan. Island-hop your way
              through Thailand. Bask in that sweet, sweet Tuscan sun. You name
              the adventure, we&apos;ll show you the sale.
            </p>
            <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors">
              See All
            </button>
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
                  <CarouselItem key={destination.id} className="pl-6 md:basis-1.3/3 ">

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
                            <p className="text-sm mt-1">{destination.validity}</p>
                            <Link href={destination.itineraryLink} passHref>
                              <span className="mt-4 inline-flex items-center text-red-400 hover:text-red-300 transition-colors cursor-pointer">
                                View itinerary{" "}
                                <span className="ml-2">→</span>
                              </span>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-5 -bottom-15 -translate-y-1/2 primary-blue border-none hover:text-gray-800 shadow-none transition-colors" />
              <CarouselNext className="absolute left-15 -bottom-15 -translate-y-1/2 primary-red border-none hover:text-gray-800 shadow-none transition-colors" />
            </Carousel>
          </div>
        </div>
      </article>
      <article>
        <div className="container px-4 py-20 h-full relative ">
          <div className="h-full bg-no-repeat bg-center bg-cover yellowBackgroundGradientColor rounded-4xl px-8 pt-10 z-10 grid grid-cols-2 align-items-center gap-8">
            <div className="flex flex-col justify-center gap-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-6xl text-white font-bold">
                Now in the station your next adventure
              </h2>
              <button className="max-w-fit bg-primary-yellow text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all text-base md:text-lg ">
                Apply & Register Now
              </button>
            </div>
            <div className="">
              <Image
                width={600}
                height={600}
                src="/images/station-adventure.png"
                alt="Travel Image 3"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </article>
      {/* Why choose Us  */}
      <article className="mb-10">
        <div className="min-h-[100vh] bg-no-repeat bg-center bg-cover bg-[url('/images/why-choose-us-img.png')] relative">
          <div className="absolute inset-0 bg-cyan-900/50"></div>
          <div className="container py-20 px-4 h-full relative z-10">
            <h2 className="text-4xl text-center md:text-8xl font-bold text-white mb-20">
              Why Choose Us
            </h2>
            <div className="flex flex-col items-center gap-5">
              {/* First Row - 3 containers */}
              <div className="flex justify-center gap-32 flex-wrap">
                <div className="w-[360px] h-[360px] rounded-full bg-white p-8 flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-10 h-10 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Expert Guides
                  </h3>
                  <p className="text-gray-600">
                    Professional guides with years of experience in travel and
                    education
                  </p>
                </div>
                <div className="w-[360px] h-[360px] rounded-full bg-white p-8 flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-10 h-10 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Safe Travel
                  </h3>
                  <p className="text-gray-600">
                    Your safety is our top priority with 24/7 support
                  </p>
                </div>
                <div className="w-[360px] h-[360px] rounded-full bg-white p-8 flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-10 h-10 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Best Value
                  </h3>
                  <p className="text-gray-600">
                    Quality experiences at competitive prices
                  </p>
                </div>
              </div>

              {/* Second Row - 2 containers */}
              <div className="flex justify-center gap-32 flex-wrap">
                <div className="w-[360px] h-[360px] rounded-full bg-white p-8 flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-10 h-10 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Unique Experiences
                  </h3>
                  <p className="text-gray-600">
                    Discover hidden gems and local culture
                  </p>
                </div>
                <div className="w-[360px] h-[360px] rounded-full bg-white p-8 flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-10 h-10 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Flexible Plans
                  </h3>
                  <p className="text-gray-600">
                    Customizable itineraries to suit your needs
                  </p>
                </div>
              </div>

              {/* Third Row - 1 container */}
              <div className="flex justify-center">
                <div className="w-[360px] h-[360px] rounded-full bg-white p-8 flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-10 h-10 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Global Network
                  </h3>
                  <p className="text-gray-600">
                    Access to worldwide destinations and partners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      {/* Our licences  */}
      <article className="mb-10 w-full bg-yellow-500 relative">
        <div className="container py-20 px-4 h-full relative z-10">
          <div className="h-full space-y-10">
            <div className="space-y-6 text-center">
              <h2 className="text-6xl font-bold">Our licences</h2>
            </div>
            <div className="grid grid-cols-5">
              <div className="bg-cyan-500 h-36 w-2xs rounded-2xl"></div>
              <div className="bg-cyan-500 h-36 w-2xs rounded-2xl"></div>
              <div className="bg-cyan-500 h-36 w-2xs rounded-2xl"></div>
              <div className="bg-cyan-500 h-36 w-2xs rounded-2xl"></div>
              <div className="bg-cyan-500 h-36 w-2xs rounded-2xl"></div>
            </div>
          </div>
        </div>
      </article>
      {/* Promotionl videos  */}
      <article className="mb-20 w-full relative">
        <div className="container py-20 px-4 h-full relative z-10">
          <div className="h-full space-y-10">
            <div className="space-y-6 text-center">
              <h2 className="text-6xl font-bold">Promotionl videos</h2>
            </div>
            <div className="grid grid-cols-2 gap-x-10">
              <div className="bg-gray-300 h-96 rounded-2xl"></div>
              <div className="bg-gray-300 h-96 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
