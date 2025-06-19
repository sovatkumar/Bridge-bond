import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function CodeOfConduct() {
  return (
    <>
      <article>
        <div className="min-h-min container py-10 lg:pt-20">
          <div className="space-y-10 max-w-6xl m-auto text-center mb-10">
            <h2 className="text-3xl lg:text-5xl xl:text-[52px] font-bold mb-5">
              Roam and Learn{" "}
              <span className="primary-red">
                – Code <br /> of Conduct
              </span>
            </h2>
            <p className="text-lg lg:text-2xl">
              At Roam and Learn, we believe that exploration and learning go
              hand-in-hand with respect, responsibility, and a positive
              attitude. To ensure a safe, fun, and enriching experience for
              everyone, all participants must follow this Code of Conduct:
            </p>
          </div>
        </div>
      </article>
      <div className="space-y-16">
        {/* Respect Everyone */}
        <article>
          <Card
            className={`container lg:grid lg:grid-cols-2 items-center !rounded-3xl overflow-hidden gap-x-12 xl:p-10 border-0 !shadow-none`}
          >
            {/* Image contain  */}
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
            <div className=" w-full lg:p-10 p-4">
              <div className="space-y-5 xl:space-y-8">
                <h2 className={`text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold`}>
                  Respect <span className="primary-red">Everyone</span>
                </h2>

                <ul className={`space-y-5 xl:space-y-8 leading-relaxed`}>
                  <li className="flex gap-2 items-start md:items-center text-base lg:text-lg xl:text-xl">
                    <Image
                      width={28}
                      height={28}
                      src={"/icons/objects-red.png"}
                      alt="list-icon"
                      className="object-contain"
                    />
                    Treat fellow students, staff, locals, and cultures with
                    kindness and respect.
                  </li>
                  <li className="flex gap-2 items-start md:items-center text-base lg:text-lg xl:text-xl">
                    <Image
                      width={28}
                      height={28}
                      src={"/icons/objects-red.png"}
                      alt="list-icon"
                      className="object-contain"
                    />
                    Listen actively and be open to different viewpoints and
                    experiences.
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </article>
        {/* Be Responsible  */}
        <article>
          <Card
            className={`container redBackgroundGradientColor lg:grid lg:grid-cols-2 items-center !rounded-3xl overflow-hidden gap-x-12 xl:p-10 p-4 border-0`}
          >
            {/* Text Content */}
            <div className="order-2 lg:order-1 w-full md:p-10 text-white">
              <div className="space-y-5 xl:space-y-8">
                <h2
                  className={`text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white`}
                >
                  Be Responsible
                </h2>
                <ul className={`space-y-5 xl:space-y-8 leading-relaxed`}>
                  <li className="flex gap-2 items-start md:items-center text-base lg:text-lg xl:text-xl">
                    <Image
                      width={28}
                      height={28}
                      src={"/icons/objects-white.png"}
                      alt="list-icon"
                      className="object-contain"
                    />
                    Follow instructions from tour leaders and guides at all times.
                  </li>
                  <li className="flex gap-2 items-start md:items-center text-base lg:text-lg xl:text-xl">
                    <Image
                      width={28}
                      height={28}
                      src={"/icons/objects-white.png"}
                      alt="list-icon"
                      className="object-contain"
                    />
                    Keep track of your belongings and take care of shared spaces.
                  </li>
                  <li className="flex gap-2 items-start md:items-center text-base lg:text-lg xl:text-xl">
                    <Image
                      width={28}
                      height={28}
                      src={"/icons/objects-white.png"}
                      alt="list-icon"
                      className="object-contain"
                    />
                    Be punctual for all activities, meals, and group meetups.
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                width={558}
                height={300}
                src={`/images/be-responsible.png`}
                alt="Main Interaction"
                className="rounded-3xl w-full object-cover"
              />
            </div>
          </Card>
        </article>
        {/* Stay Safe */}
        <article>
          <Card
            className={`container lg:grid lg:grid-cols-2 items-center !rounded-3xl overflow-hidden gap-x-12 xl:p-10 border-0 !shadow-none`}
          >
            {/* Image contain  */}
            <div>
              <Image
                width={558}
                height={300}
                src={`/images/stay-safe.png`}
                alt="Main Interaction"
                className="rounded-3xl w-full object-cover"
              />
            </div>
            {/* Text Content */}
            <div className="w-full md:p-10">
              <div className="space-y-5 xl:space-y-8">
                <h2 className={`text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold`}>
                  Stay <span className="primary-red">Safe</span>
                </h2>

                <ul className={`space-y-5 xl:space-y-8 leading-relaxed`}>
                  <li className="flex gap-2 items-start md:items-center text-base lg:text-lg xl:text-xl">
                    <Image
                      width={28}
                      height={28}
                      src={"/icons/objects-red.png"}
                      alt="list-icon"
                      className="object-contain"
                    />
                    Never wander off alone or leave the group without permission.
                  </li>
                  <li className="flex gap-2 items-start md:items-center text-base lg:text-lg xl:text-xl">
                    <Image
                      width={28}
                      height={28}
                      src={"/icons/objects-red.png"}
                      alt="list-icon"
                      className="object-contain"
                    />
                    Follow all safety rules and local laws.
                  </li>
                  <li className="flex gap-2 items-start md:items-center text-base lg:text-lg xl:text-xl">
                    <Image
                      width={28}
                      height={28}
                      src={"/icons/objects-red.png"}
                      alt="list-icon"
                      className="object-contain"
                    />
                    Report any concerns or issues to your tour leader immediately.
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </article>
        {/* Represent Roam and Learn Positively  */}
        <article>
          <Card
            className={`container blueBackgroundGradientColor lg:grid lg:grid-cols-2 items-center !rounded-3xl overflow-hidden gap-x-12 xl:p-10 p-4 border-0`}
          >
            {/* Text Content */}
            <div className="order-2 lg:order-1 w-full md:p-10 text-white">
              <div className="space-y-5 xl:space-y-8">
                <h2
                  className={`text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white`}
                >
                  Represent Roam and Learn Positively
                </h2>

                <ul className={`space-y-5 xl:space-y-8 leading-relaxed`}>
                  <li className="flex gap-2 items-start md:items-center text-base lg:text-lg xl:text-xl">
                    <Image
                      width={28}
                      height={28}
                      src={"/icons/objects-white.png"}
                      alt="list-icon"
                      className="object-contain"
                    />
                    Maintain appropriate behavior in public and online.
                  </li>
                  <li className="flex gap-2 items-start md:items-center text-base lg:text-lg xl:text-xl">
                    <Image
                      width={28}
                      height={28}
                      src={"/icons/objects-white.png"}
                      alt="list-icon"
                      className="object-contain"
                    />
                    Dress appropriately based on the location and cultural
                    setting.
                  </li>
                  <li className="flex gap-2 items-start md:items-center text-base lg:text-lg xl:text-xl">
                    <Image
                      width={28}
                      height={28}
                      src={"/icons/objects-white.png"}
                      alt="list-icon"
                      className="object-contain"
                    />
                    Use social media respectfully and avoid posting anything
                    offensive.
                  </li>
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Image
                width={558}
                height={300}
                src={`/images/roam-group.png`}
                alt="Main Interaction"
                className="rounded-3xl w-full object-cover"
              />
            </div>
          </Card>
        </article>
        {/* zero-tolerance */}
        <article>
          <Card
            className={`container lg:grid lg:grid-cols-2 items-center !rounded-3xl overflow-hidden gap-x-12 xl:p-10 border-0 !shadow-none`}
          >
            {/* Image contain  */}
            <div>
              <Image
                width={558}
                height={300}
                src={`/images/zero-tolerance.png`}
                alt="Main Interaction"
                className="rounded-3xl w-full object-cover"
              />
            </div>
            {/* Text Content */}
            <div className="w-full md:p-10">
              <div className="space-y-5 xl:space-y-8">
                <h2 className={`text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold`}>
                  Zero Tolerance <span className="primary-red">Policy</span>
                </h2>
                <p className="text-base lg:text-lg xl:text-xl">We do not allow:</p>

                <ul className={`space-y-5 xl:space-y-8 leading-relaxed`}>
                  <li className="flex gap-2 items-start md:items-center text-base lg:text-lg xl:text-xl">
                    <Image
                      width={28}
                      height={28}
                      src={"/icons/objects-red.png"}
                      alt="list-icon"
                      className="object-contain"
                    />
                    Bullying, harassment, or discrimination of any kind.
                  </li>
                  <li className="flex gap-2 items-start md:items-center text-base lg:text-lg xl:text-xl">
                    <Image
                      width={28}
                      height={28}
                      src={"/icons/objects-red.png"}
                      alt="list-icon"
                      className="object-contain"
                    />
                    Possession or use of drugs, alcohol, or tobacco.
                  </li>
                  <li className="flex gap-2 items-start md:items-center text-base lg:text-lg xl:text-xl">
                    <Image
                      width={28}
                      height={28}
                      src={"/icons/objects-red.png"}
                      alt="list-icon"
                      className="object-contain"
                    />
                    Theft, vandalism, or any illegal activity.
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </article>

        <article>
          <div className="min-h-min container py-10">
            <div className="space-y-10 max-w-6xl m-auto text-center mb-10">
              <p className="text-lg lg:text-2xl">
                Violation of this code may result in disciplinary action,
                including being <br />sent home at the guardian’s expense.
              </p>
              <p className="text-lg lg:text-2xl">
                Let’s make every journey inspiring, respectful, and
                unforgettable—<br />for everyone.
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
