import CodeOfConduct from "@/app/components/cards/CodeOfConduct";
import PageBanner from "@/app/components/PageBanner";
import { Heading } from "lucide-react";
import { text } from "stream/consumers";

export default function Policy() {
  const data = [{
    heading: "Roam and Learn – Code of Conduct",
    description: "At Roam and Learn, we believe that exploration and learning go hand-in-hand with respect, responsibility, and a positive attitude. To ensure a safe, fun, and enriching experience for everyone, all participants must follow this Code of Conduct:",
    img: "code-of-conduct.png",
    list: [],
    backgroundColor: "",
    className: {
      mainCss: "",
      heading: "text-[#00AEA5]",
      text: "text-black"
    },
    icon: ""
  },
  {
    heading: "Respect Everyone",
    description: "",
    img: "respect-everyone.png",
    list: ["Treat fellow students, staff, locals, and cultures with kindness and respect.",
      "Listen actively and be open to different viewpoints and experiences."
    ],
    backgroundColor: "redBackgroundGradientColor",
    className: {
      mainCss: "flex-row-reverse",
      heading: "text-white",
      text: "text-white"
    },
    icon: "lists-icon.png"
  },
  {
    heading: "Be Responsible",
    description: "",
    img: "stay-safe.png",
    list: ["Follow instructions from tour leaders and guides at all times.",
      "Keep track of your belongings and take care of shared spaces.",
      "Be punctual for all activities, meals, and group meetups."],
    backgroundColor: "",
    className: {
      mainCss: "",
      heading: "text-[#F14144]",
      text: "text-black"
    },
    icon: "list-green-icon.png"
  },
  {
    heading: "Stay Safe",
    description: "",
    img: "respect-everyone.png",
    list: ["Never wander off alone or leave the group without permission.",
      "Follow all safety rules and local laws.",
      "Report any concerns or issues to your tour leader immediately."],
    backgroundColor: "blueBackgroundGradientColor",
    className: {
      mainCss: "flex-row-reverse",
      heading: "text-white",
      text: "text-white"
    },
    icon: "list-green-icon.png"
  },
  {
    heading: "Represent Roam and Learn Positively",
    description: "",
    img: "stay-safe.png",
    list: ["Maintain appropriate behavior in public and online.",
      "Dress appropriately based on the location and cultural setting.",
      "Use social media respectfully and avoid posting anything offensive."],
    backgroundColor: "",
    className: {
      mainCss: "",
      heading: "text-[#FFC809]",
      text: "text-black"
    },
    icon: "lists-icon.png"
  },
  {
    heading: "Zero Tolerance Policy",
    description: "We do not allow:",
    img: "zero-tolerance.png",
    list: ["Bullying, harassment, or discrimination of any kind.",
      "Possession or use of drugs, alcohol, or tobacco.",
      "Theft, vandalism, or any illegal activity."],
    backgroundColor: "yellowBackgroundGradientColor",
    className: {
      mainCss: "flex-row-reverse",
      heading: "text-white",
      text: "text-white"
    },
    icon: "lists-icon.png"
  }]
  return (
    <>
      {data.map((item, index) => (
        <article key={index} >
          <CodeOfConduct
            img={item.img}
            heading={item.heading}
            description={item.description}
            list={item.list}
            backgroundColor={item.backgroundColor}
            className={item.className}
            icon={item.icon}
          />
        </article>
      ))}
      <article>
        <div className="w-full py-20 px-4 bg-white text-center relative">
          <div className="container mx-auto md:20 xl:px-96">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-regular text-black mb-6 leading-[100%]">
              Violation of this code may result in disciplinary action, including being sent home at the guardian’s expense.
            </h3>
            <p className="inline-block text-base md:text-lg lg:text-4xl font-regular  px-6 py-2 rounded">
              Let’s make every journey inspiring, respectful, and unforgettable—for everyone.
            </p>
          </div>

          <img src="/images/top-left-dash.png" alt="" className="absolute top-16 left-0 w-24 md:w-48 xl:w-60" />
          <img src="/images/top-right-dash.png" alt="" className="absolute top-16 right-0 w-24 md:w-48 xl:w-60" />
        </div>

      </article>
    </>
  );
}
