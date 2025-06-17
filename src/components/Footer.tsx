import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiLinkedinFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="relative w-full  bg-[url('/images/footer-background.png')] bg-no-repeat bg-cover bg-center z-10">
      <div className="container mx-auto px-4 pt-16 pb-5 relative z-10">
        <div className="grid grid-cols-1 gap-3 lg:justify-self-center">
          {/* Company Info */}
          <div className="space-y-6 lg:text-center">
            <div className="flex lg:justify-self-center">
              <Link href="/">
                <Image
                  className=""
                  src="/images/roam-footer-logo.png"
                  alt="Roam N Learn Logo"
                  width={253}
                  height={42}
                  priority
                />
              </Link>
            </div>
            <p className="text-white text-base md:text-lg">
              Crafting Unforgettable Journeys With <br />Purpose and Passion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="">
            <ul className="flex flex-col lg:flex-row md:gap-3 gap-y-1 text-sm md:text-xl">
              <li>
                <Link
                  href="/about-us"
                  className="text-white text-base lg:text-lg transition-colors"
                >
                  About Us
                </Link>
              </li>
              <span className="md:border-r-2"></span>
              <li>
                <Link
                  href="/news-letter"
                  className="text-white text-base lg:text-lg transition-colors"
                >
                  News Letters
                </Link>
              </li>
              <span className="border-r-2"></span>
              <li>
                <Link
                  href="/contact-us"
                  className="text-white text-base lg:text-lg transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <span className="border-r-2"></span>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-white text-base lg:text-lg transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <span className="border-r-2"></span>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white text-base lg:text-lg transition-colors"
                >
                  Privacy & Policies
                </Link>
              </li>
              <span className="border-r-2"></span>
              <li>
                <Link
                  href="/code-of-conduct"
                  className="text-white text-base lg:text-lg transition-colors"
                >
                  Code Of Conduct
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex space-x-5 mt-5 lg:justify-self-center">
            <Link
              href="/youtube"
              className="text-gray-100 h-10 w-10 flex items-center rounded-full p-2 hover:text-white text-sm transition-colors bg-primary-red justify-center"
            >
              <FaYoutube className="size-5 md:size-7" />
            </Link>
            <Link
              href="/terms"
              className="text-gray-100 h-10 w-10 flex items-center rounded-full p-2 hover:text-white text-sm transition-colors bg-primary-red justify-center"
            >
              <FaFacebookF className="size-5 md:size-7" />
            </Link>
            <Link
              href="/cookies"
              className="text-gray-100 h-10 w-10 flex items-center rounded-full p-2 hover:text-white text-sm transition-colors bg-primary-red justify-center"
            >
              <PiInstagramLogoFill className="size-5 md:size-7" />
            </Link>
            <Link
              href="/cookies"
              className="text-gray-100 h-10 w-10 flex items-center rounded-full p-2 hover:text-white text-sm transition-colors bg-primary-red justify-center"
            >
              <RiLinkedinFill className="size-5 md:size-7" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-100 text-sm md:text-xl text-center">
            © Roam n Learn 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer >
  );
}
