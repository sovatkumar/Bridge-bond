import React from 'react'
import Image from 'next/image';


type AboutUsProps = {
    heading: string;
    description: string[];
    paraHeading: string,
    img: string;
    list: string[];
    className: { [key: string]: string };
    icon: string;

};

export default function AboutUs({ heading, description, paraHeading, img, list, className, icon }: AboutUsProps) {
    return (
        <div className={` container ${className.mainCss} flex py-16 items-center md:items-start gap-14`} >

            {/* Text Content */}
            <div className=" md:w-1/2 w-full flex flex-col gap-y-6">
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
            <div className="md:w-1/2 w-full">
                <Image
                    width={660}
                    height={500}
                    src={`/images/${img}`}
                    alt="Group Interaction"
                    className="rounded-3xl shadow-lg w-full object-cover"
                />
            </div>
        </div>
    );
}
