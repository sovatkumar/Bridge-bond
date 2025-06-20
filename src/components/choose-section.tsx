import React from "react";
import Image from "next/image";

export default function ChooseSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-24">
        Why Choose <span className="text-red-500">Us</span> ?
      </h2>

      {/* Mobile View */}
      <div className="block md:hidden space-y-8">
        {/* Safety Feature Mobile */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col items-center">
            <button className="bg-primary-red text-white p-4 rounded-full text-base h-16 flex items-center justify-center w-64 mb-4">
              Safety is Our 1st Priority
            </button>
            <div className="border-2 border-[rgba(37,37,37,0.32)] rounded-full p-1">
              <div className="flex items-center justify-center bg-primary-red p-3 rounded-full">
                <Image
                  src="/icons/safety-white.png"
                  alt="icon"
                  width={40}
                  height={40}
                  className="h-12 w-12 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="h-52 bg-white rounded-xl p-6 duration-300 bg-[url('/images/Vector-red-left.png')] bg-no-repeat bg-contain bg-center">
            <div className="h-full flex flex-col justify-center">
              <p className="text-sm md:text-base xl:text-lg text-center">
                All tours are carefully planned with safety protocols in place. We
                partner with trusted and licensed service providers and have 24/7
                emergency response teams.
              </p>
            </div>
          </div>
        </div>

        {/* Regular Updates Mobile */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col items-center">
            <button className="bg-primary-blue text-white p-4 rounded-full text-base h-16 flex items-center justify-center w-64 mb-4">
              Regular Parent Updates
            </button>
            <div className="border-2 border-[rgba(37,37,37,0.32)] rounded-full p-1">
              <div className="flex items-center justify-center bg-primary-red p-3 rounded-full">
                <Image
                  src="/icons/update.png"
                  alt="icon"
                  width={40}
                  height={40}
                  className="h-12 w-12 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="h-52 bg-white rounded-xl p-6 duration-300 bg-[url('/images/Vector_Raom.png')] bg-no-repeat bg-contain bg-center">
            <div className="h-full flex flex-col justify-center">
              <p className="text-sm md:text-base xl:text-lg text-center">
                We keep you informed throughout the trip with real-time updates,
                messages, and photos so you always know where your child is and
                what they're doing.
              </p>
            </div>
          </div>
        </div>

        {/* Health Support Mobile */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col items-center">
            <button className="bg-primary-red text-white p-4 rounded-full text-base h-16 flex items-center justify-center w-64 mb-4">
              Health & Medical Support
            </button>
            <div className="border-2 border-[rgba(37,37,37,0.32)] rounded-full p-1">
              <div className="flex items-center justify-center bg-primary-red p-3 rounded-full">
                <Image
                  src="/icons/health-support.png"
                  alt="icon"
                  width={40}
                  height={40}
                  className="h-12 w-12 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="h-52 bg-white rounded-xl p-6 duration-300 bg-[url('/images/Vector-red-left.png')] bg-no-repeat bg-contain bg-center">
            <div className="h-full flex flex-col justify-center">
              <p className="text-sm md:text-base xl:text-lg text-center">
                We're prepared for any health-related needs, with access to
                medical professionals, first aid, and immediate support if
                required.
              </p>
            </div>
          </div>
        </div>

        {/* Age Appropriate Mobile */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col items-center">
            <button className="bg-primary-blue text-white p-4 rounded-full text-base h-16 flex items-center justify-center w-64 mb-4">
              Curated, Age-Appropriate Itineraries
            </button>
            <div className="border-2 border-[rgba(37,37,37,0.32)] rounded-full p-1">
              <div className="flex items-center justify-center bg-primary-red p-3 rounded-full">
                <Image
                  src="/icons/age-appropriate-white.png"
                  alt="icon"
                  width={40}
                  height={40}
                  className="h-12 w-12 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="h-52 bg-white rounded-xl p-6 duration-300 bg-[url('/images/Vector-green-left.png')] bg-no-repeat bg-contain bg-center">
            <div className="h-full flex flex-col justify-center">
              <p className="text-sm md:text-base xl:text-lg text-center">
                Every destination and activity is chosen with careful attention to
                detail in mind engaging, enriching and DGCA age-appropriate.
              </p>
            </div>
          </div>
        </div>

        {/* Transparent Communication Mobile */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col items-center">
            <button className="bg-primary-red text-white p-4 rounded-full text-base h-16 flex items-center justify-center w-64 mb-4">
              Transparent Communication
            </button>
            <div className="border-2 border-[rgba(37,37,37,0.32)] rounded-full p-1">
              <div className="flex items-center justify-center bg-primary-red p-3 rounded-full">
                <Image
                  src="/icons/transparent-communication-white.png"
                  alt="icon"
                  width={40}
                  height={40}
                  className="h-12 w-12 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="h-52 bg-white rounded-xl p-6 duration-300 bg-[url('/images/vector_red.png')] bg-no-repeat bg-contain bg-center">
            <div className="h-full flex flex-col justify-center">
              <p className="text-sm md:text-base xl:text-lg text-center">
                No surprises! Parents receive complete tour plans, safety
                procedures, and emergency contact information well in advance.
              </p>
            </div>
          </div>
        </div>

        {/* Insurance Coverage Mobile */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col items-center">
            <button className="bg-primary-blue text-white p-4 rounded-full text-base h-16 flex items-center justify-center w-64 mb-4">
              Insurance Coverage
            </button>
            <div className="border-2 border-[rgba(37,37,37,0.32)] rounded-full p-1">
              <div className="flex items-center justify-center bg-primary-red p-3 rounded-full">
                <Image
                  src="/icons/insurance.png"
                  alt="icon"
                  width={40}
                  height={40}
                  className="h-12 w-12 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="h-52 bg-white rounded-xl p-6 duration-300 bg-[url('/images/Vector-green.png')] bg-no-repeat bg-contain bg-center">
            <div className="h-full flex flex-col justify-center">
              <p className="text-sm md:text-base xl:text-lg text-center">
                Each student is covered under a comprehensive travel insurance
                plan for added peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop/Laptop View - Keeping your original code exactly as is */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 py-10">
        {/* button */}
        <div className="flex flex-col items-center h-64">
          <button className="bg-primary-red text-white p-4 rounded-full text-base lg:text-lg xl:text-xl h-16 flex items-center justify-center w-64">
            Safety is Our 1st Priority
          </button>

          {/* Vertical line below the button */}
          <div className="w-px h-full bg-primary-red"></div>
          <div className="border-2 border-[rgba(37,37,37,0.32)] rounded-full p-1">
            <div className="flex items-center justify-center bg-primary-red p-3 rounded-full">
              <Image
                src="/icons/safety-white.png"
                alt="icon"
                width={40}
                height={40}
                className="h-12 w-12 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="transform -translate-y-1/2 flex flex-col justify-center items-center h-64">
          <button className="bg-primary-blue text-white p-4 rounded-full text-base lg:text-lg xl:text-xl  h-16 flex items-center justify-center w-64">
            Regular Parent Updates{" "}
          </button>
          {/* Vertical line below the button */}
          <div className="w-px h-full bg-primary-red"></div>
          <div className="border-2 border-[rgba(37,37,37,0.32)] rounded-full p-1">
            <div className="flex items-center justify-center bg-primary-red p-3 rounded-full">
              <Image
                src="/icons/update.png"
                alt="icon"
                width={40}
                height={40}
                priority
                className="h-12 w-12 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-64">
          <button className="bg-primary-red text-white p-4 rounded-full text-base lg:text-lg xl:text-xl  h-16 flex items-center justify-center w-64">
            Health & Medical Support{" "}
          </button>
          {/* Vertical line below the button */}
          <div className="w-px h-full bg-primary-red"></div>
          <div className="border-2 border-[rgba(37,37,37,0.32)] rounded-full p-1">
            <div className="flex items-center justify-center bg-primary-red p-3 rounded-full">
              <Image
                src="/icons/health-support.png"
                alt="icon"
                width={40}
                height={40}
                className="h-12 w-12 object-contain"
              />
            </div>
          </div>
        </div>

        {/* button-end */}

        {/* Safety Feature */}
        <div className="h-52 bg-white rounded-xl p-6 duration-300 bg-[url('/images/Vector-red-left.png')] bg-no-repeat bg-contain bg-center ">
          <div className="h-full flex flex-col justify-center">
            <p className="text-sm md:text-base xl:text-lg text-center flex items-center">
              All tours are carefully planned with safety protocols in place. We
              partner with trusted and licensed service providers and have 24/7
              emergency response teams.
            </p>
          </div>
        </div>

        {/* Regular Updates Feature */}
        <div
          className="h-52 bg-white rounded-xl p-6 duration-300 transform -translate-y-1/2
        bg-[url('/images/Vector_Raom.png')] bg-no-repeat bg-contain bg-center "
        >
          <div className="h-full flex flex-col justify-center">
            <p className="text-sm md:text-base xl:text-lg text-center flex items-center">
              We keep you informed throughout the trip with real-time updates,
              messages, and photos so you always know where your child is and
              what they're doing.
            </p>
          </div>
        </div>

        {/* Health Support Feature */}
        <div className="h-52 bg-white rounded-xl p-6 duration-300 bg-[url('/images/Vector-red-left.png')] bg-no-repeat bg-contain bg-center ">
          <div className="h-full flex flex-col justify-center">
            <p className="text-sm md:text-base xl:text-lg text-center flex items-center">
              We're prepared for any health-related needs, with access to
              medical professionals, first aid, and immediate support if
              required.
            </p>
          </div>
        </div>

        {/* Activities Feature */}
        <div className="h-52 bg-white rounded-xl p-6 duration-300 bg-[url('/images/Vector-green-left.png')] bg-no-repeat bg-contain bg-center ">
          <div className="h-full flex flex-col justify-center">
            <p className="text-sm md:text-base xl:text-lg text-center flex items-center">
              Every destination and activity is chosen with careful attention to
              detail in mind engaging, enriching and DGCA age-appropriate.
            </p>
          </div>
        </div>

        {/* Communication Feature */}
        <div
          className="h-52 bg-white rounded-xl p-6 duration-300 transform -translate-y-1/2
        bg-[url('/images/vector_red.png')] bg-no-repeat bg-contain bg-center "
        >
          <div className="h-full flex flex-col justify-center">
            <p className="text-sm md:text-base xl:text-lg text-center flex items-center">
              No surprises! Parents receive complete tour plans, safety
              procedures, and emergency contact information well in advance.
            </p>
          </div>
        </div>

        {/* Insurance Feature */}
        <div className="h-52 bg-white rounded-xl p-6 duration-300 bg-[url('/images/Vector-green.png')] bg-no-repeat bg-contain bg-center ">
          <div className="h-full flex flex-col justify-center">
            <p className="text-sm md:text-base xl:text-lg text-center flex items-center">
              Each student is covered under a comprehensive travel insurance
              plan for added peace of mind.
            </p>
          </div>
        </div>

        {/* button */}
        <div className="flex flex-col justify-center items-center h-64">
          <div className="border-2 border-[rgba(37,37,37,0.32)] rounded-full p-1">
            <div className="flex items-center justify-center bg-primary-red p-3 rounded-full">
              <Image
                src="/icons/age-appropriate-white.png"
                alt="icon"
                width={40}
                height={40}
                className="h-12 w-12 object-contain"
              />
            </div>
          </div>
          {/* Vertical line below the button */}
          <div className="w-px h-full bg-primary-red"></div>
          <button className="bg-primary-blue text-white p-4 rounded-full text-base lg:text-lg xl:text-xl  h-16 flex items-center justify-center w-64">
            Curated, Age-Appropriate Itineraries{" "}
          </button>
        </div>

        <div className="transform -translate-y-1/2 flex flex-col justify-center items-center h-64">
          <div className="border-2 border-[rgba(37,37,37,0.32)] rounded-full p-1">
            <div className="flex items-center justify-center bg-primary-red p-3 rounded-full">
              <Image
                src="/icons/transparent-communication-white.png"
                alt="icon"
                width={40}
                height={40}
                className="h-12 w-12 object-contain"
              />
            </div>
          </div>
          {/* Vertical line below the button */}
          <div className="w-px h-full bg-primary-red"></div>
          <button className="bg-primary-red text-white p-4 rounded-full text-base lg:text-lg xl:text-xl  h-16 flex items-center justify-center w-64">
            Transparent Communication{" "}
          </button>
        </div>

        <div className="flex flex-col justify-center items-center h-64 ">
          <div className="border-2 border-[rgba(37,37,37,0.32)] rounded-full p-1">
            <div className="flex items-center justify-center bg-primary-red p-3 rounded-full">
              <Image
                src="/icons/insurance.png"
                alt="insurance icon"
                width={40}
                height={40}
                priority
                className="h-12 w-12 object-contain"
              />
            </div>
          </div>
          {/* Vertical line below the button */}
          <div className="w-px h-full bg-primary-red"></div>
          <button className="bg-primary-blue text-white p-4 rounded-full text-base lg:text-lg xl:text-xl  h-16 flex items-center justify-center w-64">
            Insurance Coverage{" "}
          </button>
        </div>
        {/* button-end */}
      </div>
    </section>
  );
}
