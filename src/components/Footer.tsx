import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiLinkedinFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="relative w-full footerGradientColor bg-cover bg-center">
      <div className="absolute inset-0"></div>
      <div className="container mx-auto md:px-4 pt-16 pb-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6 lg:border-r-1 lg:w-[90%]">
            <div>
              <Link href="/">
                <Image
                  className=""
                  src="/images/roam-footer-logo.png"
                  alt="Roam N Learn Logo"
                  width={118}
                  height={121}
                  priority
                />
              </Link>
            </div>
            <p className="text-white text-base md:text-lg">
              Crafting Unforgettable Journeys With Purpose and Passion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:border-r-1">
            <ul className="space-y-4 text-lg md:text-xl">
              <li>
                <Link
                  href="/about"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  About Roam n Learn
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/news-letter"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  News Letters
                </Link>
              </li>
              <li>
                <Link
                  href="/code-of-conduct"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Code Of Conduct
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 lg:border-r-1">
            <ul className="space-y-4 text-lg md:text-xl">
              <li>
                <Link
                  href="/help"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Privacy & Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <ul className="space-y-4 text-lg md:text-xl">
              <li>
                <Link
                  href="/resources"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/download-brochure"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Download Brochure
                </Link>
              </li>

            </ul>
            {/* <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="w-full px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-100 text-lg md:text-xl">
              © Roam n Learn 2025. All rights reserved.
            </p>
            <div className="flex space-x-5">
              <Link
                href="/youtube"
                className="text-gray-100 border h-10 w-10 flex items-center rounded-full p-2 hover:text-white text-sm transition-colors"
              >
                <FaYoutube className="size-7" />
              </Link>
              <Link
                href="/terms"
                className="text-gray-100 border h-10 w-10 flex items-center rounded-full p-2 hover:text-white text-sm transition-colors"
              >
                <FaFacebookF className="size-7" />
              </Link>
              <Link
                href="/cookies"
                className="text-gray-100 border h-10 w-10 flex items-center rounded-full p-2 hover:text-white text-sm transition-colors"
              >
                <PiInstagramLogoFill className="size-7" />
              </Link>
              <Link
                href="/cookies"
                className="text-gray-100 border h-10 w-10 flex items-center rounded-full p-2 hover:text-white text-sm transition-colors"
              >
                <RiLinkedinFill className="size-7" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}
