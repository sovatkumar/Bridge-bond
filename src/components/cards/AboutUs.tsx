import React from 'react'
import Image from 'next/image';


type AboutUsProps = {
    heading: string;
    description: string[];
    paraHeading: string,
    img: string;
    img_1: string;
    img_2: string;
    img_3: string;
    list: string[];
    className: { [key: string]: string };
    icon: string;

};

export default function AboutUs({ heading, description, paraHeading, img, img_1, img_2, img_3, list, className, icon }: AboutUsProps) {
    return (
        <div className={`container ${className.mainCss} md:flex py-20 px-4 items-center md:items-start gap-12`} >

            {/* Text Content */}
            <div className="md:w-1/2 w-full flex flex-col gap-y-6">
                <div className="space-y-5">
                    <h2 className={`text-3xl md:text-4xl lg:text-6xl font-bold ${className.heading}`}>
                        {heading}
                    </h2>
                    {description && (
                        <div>
                            {description.map((description, index) => (<p key={index}
                                className={`text-lg lg:text-2xl ${className.text} leading-relaxed`}>
                                {description}
                            </p>))}
                        </div>
                    )}

                    <h4 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${className.paraHeading}`}>
                        {paraHeading}
                    </h4>

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
                    </ul>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <div className='pl-10'>
                    {img && (
                        <Image
                            width={558}
                            height={374}
                            src={`/images/${img}`}
                            alt="Main Interaction"
                            className="rounded-3xl w-full object-cover"
                        />
                    )}
                </div>
                <div className=" flex gap-5 w-full">
                    <div className='flex flex-col gap-5'>
                        {img_1 && (
                            <Image
                                width={267}
                                height={254}
                                src={`/images/${img_1}`}
                                alt="Main Interaction"
                                className="rounded-3xl w-full object-cover"
                            />
                        )}
                        {/* Conditionally show img_2 */}
                        {img_2 && (
                            <Image
                                width={267}
                                height={254}
                                src={`/images/${img_2}`}
                                alt="Secondary Interaction"
                                className="rounded-3xl w-full object-cover"
                            />
                        )}
                    </div>
                    <div className='h-full'>
                        {img_3 && (
                            <Image
                                width={360}
                                height={531}
                                src={`/images/${img_3}`}
                                alt="Tertiary Interaction"
                                className="rounded-3xl w-full object-cover"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
