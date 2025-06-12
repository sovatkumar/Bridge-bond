import React from "react";
import { Card } from "@/components/ui/card";
import Image
 from "next/image";
import { Button } from "@/components/ui/button";
function Destionation() {
  return (
    <>
      {/*  Promotional videos */}
      <article>
        <div className="container min-h-min max-w-8xl py-10 lg:py-20 px-4 space-y-10">
          <div className=" max-w-6xl m-auto text-center">
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
              
            ].map(({ imgUrl, tourTimeLine, title, expiryDate }, index) => (
              <Card
                key={index}
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
            ))}
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
                className="min-h-60 px-4 flex flex-col items-center justify-center !rounded-3xl">
                <div className="p-2 bg-primary-red rounded-xl">
                  <Image src={icon} alt={icon} width={50} height={50} className="object-contain"/>
                </div>
                <div className="text-center">
                  <h6 className="text-lg lg:text-2xl">{tourTimeLine}</h6>
                  <p className="text-sm lg:text-xl xl:text-2xl text-gray-700">{expiryDate}</p>
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
