import React from 'react'
import Link from "next/link";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiLinkedinFill } from "react-icons/ri";

export default function AuthFooter() {
    return (
        <footer className="relative w-full bg-black">
            <div className="container md:flex py-4 px-4 md:px-0 items-center justify-between">
                <p className="text-gray-100 text-sm md:text-xl text-center">
                    © Roam n Learn 2025. All rights reserved.
                </p>
                <div className="flex space-x-5 mt-5 justify-self-center">
                    <Link
                        href="/youtube"
                        className="text-gray-100 h-9 w-9 md:h-10 md:w-10 flex items-center rounded-full p-2 hover:text-white text-sm transition-colors bg-primary-red justify-center"
                    >
                        <FaYoutube className="size-5 md:size-7" />
                    </Link>
                    <Link
                        href="/terms"
                        className="text-gray-100 h-9 w-9 md:h-10 md:w-10 flex items-center rounded-full p-2 hover:text-white text-sm transition-colors bg-primary-red justify-center"
                    >
                        <FaFacebookF className="size-5 md:size-7" />
                    </Link>
                    <Link
                        href="/cookies"
                        className="text-gray-100 h-9 w-9 md:h-10 md:w-10 flex items-center rounded-full p-2 hover:text-white text-sm transition-colors bg-primary-red justify-center"
                    >
                        <PiInstagramLogoFill className="size-5 md:size-7" />
                    </Link>
                    <Link
                        href="/cookies"
                        className="text-gray-100 h-9 w-9 md:h-10 md:w-10 flex items-center rounded-full p-2 hover:text-white text-sm transition-colors bg-primary-red justify-center"
                    >
                        <RiLinkedinFill className="size-5 md:size-7" />
                    </Link>
                </div>
            </div>
        </footer >
    )
}
