import Image from 'next/image';
import React from 'react';

type CodeOfConductProps = {
  heading: string;
  description: string;
  img: string;
  list: string[];
  className: { [key: string]: string };
  backgroundColor: string;
  icon: string;

};

export default function CodeOfConduct({ heading, description, img, list, className, backgroundColor, icon }: CodeOfConductProps) {
  return (
    <div className={` ${backgroundColor} `} >
      <div className={`container px-4 py-16  flex ${className.mainCss} items-center md:items-start gap-14 `}>
        {/* Image Section */}
        <div className="md:w-1/2 w-full">
          <Image
            width={660}
            height={500}
            src={`/images/${img}`}
            alt="Group Interaction"
            className="rounded-3xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 w-full flex flex-col self-center gap-y-6">
          <div className="w-3/4 space-y-5">
            <h2 className={`text-3xl md:text-4xl lg:text-6xl font-bold ${className.heading}`}>
              {heading}
            </h2>
            {
              description && (<p className={`text-lg lg:text-2xl ${className.text} leading-relaxed`}>
                {description}
              </p>)
            }
            {
              list && (
                <ul className={`text-lg lg:text-2xl ${className.text} space-y-2 leading-relaxed`}>
                  {list.map((item, index) => (
                    <li key={index}
                      className='flex gap-2 items-start'>
                      <Image
                        width={30}
                        height={30}
                        src={`/icons/${icon}`}
                        alt="list-icon"
                        className="object-contain pt-2"
                      />{item}</li>
                  ))}
                </ul>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}
