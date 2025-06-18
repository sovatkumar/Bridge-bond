import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RegisterCard from "@/components/cards/RegisterCard";

function Destionation() {
  return (
    <>
      {/*  Promotional videos */}
      <article>
        <div className="container min-h-min 2xl:max-w-8xl py-10 lg:py-20 space-y-10">
          <div className="space-y-10 max-w-6xl m-auto text-center mb-10">
            <h2 className="text-3xl lg:text-5xl xl:text-52 font-bold mb-5">
              Top <span className="primary-red">Destinations</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                imgUrl: "/destinations/img1.png",
                tourTimeLine: "6 DAY TOUR",
                title: "Bharat Darshan",
                expiryDate: "Valid on Jun 12, 2025",
              },
              {
                imgUrl: "/destinations/img2.png",
                tourTimeLine: "6 DAY TOUR",
                title: "Bharat Darshan",
                expiryDate: "Valid on Jun 12, 2025",
              },
              {
                imgUrl: "/destinations/img3.png",
                tourTimeLine: "6 DAY TOUR",
                title: "Bharat Darshan",
                expiryDate: "Valid on Jun 12, 2025",
              },
              {
                imgUrl: "/destinations/img4.png",
                tourTimeLine: "6 DAY TOUR",
                title: "Bharat Darshan",
                expiryDate: "Valid on Jun 12, 2025",
              },
              {
                imgUrl: "/destinations/img5.png",
                tourTimeLine: "6 DAY TOUR",
                title: "Bharat Darshan",
                expiryDate: "Valid on Jun 12, 2025",
              },
              {
                imgUrl: "/destinations/img6.png",
                tourTimeLine: "6 DAY TOUR",
                title: "Bharat Darshan",
                expiryDate: "Valid on Jun 12, 2025",
              },
              {
                imgUrl: "/destinations/img7.png",
                tourTimeLine: "6 DAY TOUR",
                title: "Bharat Darshan",
                expiryDate: "Valid on Jun 12, 2025",
              },
              {
                imgUrl: "/destinations/img8.png",
                tourTimeLine: "6 DAY TOUR",
                title: "Bharat Darshan",
                expiryDate: "Valid on Jun 12, 2025",
              },
              {
                imgUrl: "/destinations/img9.png",
                tourTimeLine: "6 DAY TOUR",
                title: "Bharat Darshan",
                expiryDate: "Valid on Jun 12, 2025",
              },
            ].map(({ imgUrl, tourTimeLine, title, expiryDate }, index) => (
              <Link key={index} href={`/destinations/${index + 1}`}>
                <Card

                  className="min-h-80 px-12 flex flex-col items-center justify-end !rounded-3xl"
                  style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}>
                  <div className="text-center text-white">
                    <h6 className="text-lg">{tourTimeLine}</h6>
                    <h5 className="text-3xl font-semibold">{title}</h5>
                    <p>{expiryDate}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Button size={"lg"} className="px-6 !py-4 !rounded-3xl m-auto bg-primary-red text-white ">See more</Button>
          </div>
        </div>
      </article>
      <article className="py-10 lg:py-20 ">
        <RegisterCard />
      </article>
    </>
  );
}

export default Destionation;
