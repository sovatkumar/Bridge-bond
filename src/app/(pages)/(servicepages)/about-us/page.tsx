import React from "react";
import AboutUs from "@/components/cards/AboutUs";
export default function aboutus() {
  const data = [
    {
      heading: "About Us",
      description: [
        "Roam and Learn is where travel meets adventure—and learning just happens along the way. We plan awesome trips just for students who want to see the world, make new friends, and experience life outside the classroom. Think cool cities, amazing sights, and unforgettable moments—all packed into one exciting journey.",
        "No boring lectures. No heavy textbooks. Just real experiences, new cultures, and stories you'll never forget. Our team takes care of everything—from planning the perfect route to making sure you're safe, comfy, and having the time of your life. We’ve got your back every step of the way.",
      ],
      paraHeading: "Why travel with us?",
      img: "",
      img_1: "mountain.png",
      img_2: "about-travel.png",
      img_3: "about-us.png",
      list: [
        "Trips made just for students (yes, just you!)",
        "Safe, fun, and super well-organized",
        "A chance to grow, explore, and see the world your way",
      ],
      className: {
        mainCss: "",
        heading: "primary-red",
        text: "text-black",
        paraHeading: "text-black",
      },
      icon: "Objects.png",
    },
    {
      heading: "Our Story",
      description: [
        "It all started with a simple idea: what if learning could be fun—and happen anywhere in the world?",
        "We’re a group of travel lovers, youth mentors, and adventure seekers who believe the best kind of learning happens when you're out there living it. That’s why we created Roam and Learn—to give students the chance to travel, explore new cultures, and learn through real-world experiences.",
        "Every trip we plan is built from that same spark: travel with purpose, led by passion.",
      ],
      paraHeading: "",
      img: "our-story.png",
      img_1: "",
      img_2: "",
      img_3: "",
      list: [],
      className: {
        mainCss:
          "flex-row-reverse blueBackgroundGradientColor rounded-4xl px-4",
        heading: "text-white pt-5",
        text: "text-white lg:w-[85%]",
        paraHeading: "",
      },
      icon: "",
    },
    {
      heading: "Meet The team",
      description: [
        "We’re a small but mighty crew of travel pros, safety experts, and youth leaders who care deeply about student experiences. We plan every detail, guide every step, and keep the energy high (and the fun even higher).",
        "We’re here to help you roam safely, confidently—and with a lot of stories to tell when you get back.",
      ],
      paraHeading: "Ready to explore? Let’s go!",
      img: "meetteam.png",
      img_1: "",
      img_2: "",
      img_3: "",
      list: [],
      className: {
        mainCss: "",
        heading: "",
        text: "text-black",
        paraHeading: "text-[#F14144]",
      },
      icon: "",
    },
  ];
  return (
    <>
      {data.map((item, index) => (
        <article key={index}>
          <AboutUs
            img={item.img}
            img_1={item.img_1}
            img_2={item.img_2}
            img_3={item.img_3}
            heading={item.heading}
            description={item.description}
            paraHeading={item.paraHeading}
            list={item.list}
            className={item.className}
            icon={item.icon}
          />
        </article>
      ))}
    </>
  );
}
