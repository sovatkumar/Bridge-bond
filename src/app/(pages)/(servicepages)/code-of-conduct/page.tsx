import DynamicCard from "@/components/cards/DynamicCard";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function CodeOfConduct() {
  const data = [
    {
      heading: "Roam and Learn – Code of Conduct",
      description: [
        "At Roam and Learn, we believe that exploration and learning go hand-in-hand with respect, responsibility, and a positive attitude. To ensure a safe, fun, and enriching experience for everyone, all participants must follow this Code of Conduct:",
      ],
      img: "code-of-conduct.png",
      list: [],
      backgroundColor: "",
      className: {
        mainCss: "",
        heading: "primary-blue",
        text: "text-black",
      },
      icon: "",
    },
    {
      heading: "Respect Everyone",
      description: [""],
      img: "respect-everyone.png",
      list: [
        "Treat fellow students, staff, locals, and cultures with kindness and respect.",
        "Listen actively and be open to different viewpoints and experiences.",
      ],
      backgroundColor: "redBackgroundGradientColor",
      className: {
        mainCss: "flex-row-reverse",
        heading: "text-white",
        text: "text-white",
      },
      icon: "lists-icon.png",
    },
    {
      heading: "Be Responsible",
      description: [""],
      img: "stay-safe.png",
      list: [
        "Follow instructions from tour leaders and guides at all times.",
        "Keep track of your belongings and take care of shared spaces.",
        "Be punctual for all activities, meals, and group meetups.",
      ],
      backgroundColor: "",
      className: {
        mainCss: "",
        heading: "text-[#F14144]",
        text: "text-black",
      },
      icon: "list-green-icon.png",
    },
    {
      heading: "Stay Safe",
      description: [""],
      img: "respect-everyone.png",
      list: [
        "Never wander off alone or leave the group without permission.",
        "Follow all safety rules and local laws.",
        "Report any concerns or issues to your tour leader immediately.",
      ],
      backgroundColor: "blueBackgroundGradientColor",
      className: {
        mainCss: "flex-row-reverse",
        heading: "text-white",
        text: "text-white",
      },
      icon: "list-green-icon.png",
    },
    {
      heading: "Represent Roam and Learn Positively",
      description: [""],
      img: "stay-safe.png",
      list: [
        "Maintain appropriate behavior in public and online.",
        "Dress appropriately based on the location and cultural setting.",
        "Use social media respectfully and avoid posting anything offensive.",
      ],
      backgroundColor: "",
      className: {
        mainCss: "",
        heading: "text-[#FFC809]",
        text: "text-black",
      },
      icon: "lists-icon.png",
    },
    {
      heading: "Zero Tolerance Policy",
      description: ["We do not allow:"],
      img: "zero-tolerance.png",
      list: [
        "Bullying, harassment, or discrimination of any kind.",
        "Possession or use of drugs, alcohol, or tobacco.",
        "Theft, vandalism, or any illegal activity.",
      ],
      backgroundColor: "yellowBackgroundGradientColor",
      className: {
        mainCss: "flex-row-reverse",
        heading: "text-white",
        text: "text-white",
      },
      icon: "lists-icon.png",
    },
  ];
  return (
    <>
      <article>
        <Card
          className={`container !my-20 lg:grid lg:grid-cols-2 items-center !rounded-3xl overflow-hidden md:items-start gap-x-12 p-10 border-0`}
        >
          {/* Image contain  */}
          <div className="order-1 lg:order-2">
            <Image
              width={558}
              height={300}
              src={`/images/code-of-conduct.png`}
              alt="Main Interaction"
              className="rounded-3xl w-full object-cover"
            />
          </div>
          {/* Text Content */}
          <div className="roder-2 lg:order-1 w-full flex flex-col items-center gap-y-6 p-10">
            <div className="space-y-5">
              <h2 className={`text-3xl md:text-4xl lg:text-6xl font-bold`}>
                Respect <span className="primary-red">Everyone</span>
              </h2>

              <ul className={`text-lg lg:text-xl space-y-5 leading-relaxed`}>
                <li className="flex gap-2 items-start">
                  <Image
                    width={28}
                    height={28}
                    src={"/icons/lists-icon.png"}
                    alt="list-icon"
                    className="object-contain pt-2 md:pt-1"
                  />
                  Treat fellow students, staff, locals, and cultures with
                  kindness and respect.
                </li>
                <li className="flex gap-2 items-start">
                  <Image
                    width={28}
                    height={28}
                    src={"/icons/lists-icon.png"}
                    alt="list-icon"
                    className="object-contain pt-2 md:pt-1"
                  />
                  Listen actively and be open to different viewpoints and
                  experiences.
                </li>
              </ul>
            </div>
          </div>
          
        </Card>
      </article>
      <article>
        <Card
          className={`container !my-20 lg:grid lg:grid-cols-2 items-center !rounded-3xl overflow-hidden md:items-start gap-x-12 p-10 border-0`}
        >
          {/* Text Content */}
          <div className="roder-2 lg:order-1 w-full flex flex-col items-center gap-y-6 p-10">
            <div className="space-y-5">
              <h2 className={`text-3xl md:text-4xl lg:text-6xl font-bold`}>
                Respect <span className="primary-red">Everyone</span>
              </h2>

              <ul className={`text-lg lg:text-xl space-y-5 leading-relaxed`}>
                <li className="flex gap-2 items-start">
                  <Image
                    width={28}
                    height={28}
                    src={"/icons/lists-icon.png"}
                    alt="list-icon"
                    className="object-contain pt-2 md:pt-1"
                  />
                  Treat fellow students, staff, locals, and cultures with
                  kindness and respect.
                </li>
                <li className="flex gap-2 items-start">
                  <Image
                    width={28}
                    height={28}
                    src={"/icons/lists-icon.png"}
                    alt="list-icon"
                    className="object-contain pt-2 md:pt-1"
                  />
                  Listen actively and be open to different viewpoints and
                  experiences.
                </li>
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Image
              width={558}
              height={300}
              src={`/images/code-of-conduct.png`}
              alt="Main Interaction"
              className="rounded-3xl w-full object-cover"
            />
          </div>
        </Card>
      </article>
    </>
  );
}
