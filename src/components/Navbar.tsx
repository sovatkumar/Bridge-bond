import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="">
      <div className="container py-10 px-4 flex justify-between items-center">
        <div className="logo-container">
          <Image
            src="/images/roam-n-learn-logo.png"
            alt="Roam N Learn Logo"
            width={250}
            height={100}
            priority
          />
        </div>

        <div className="nav-links">
          <Link href="/" className="nav-link">
            HOME
          </Link>
          <Link href="/about-us" className="nav-link">
            ABOUT US
          </Link>
          <Link href="/destinations" className="nav-link">
            DESTINATIONS
          </Link>
          <Link href="/contact-us" className="nav-link active">
            CONTACT US
          </Link>

          {/* <div className="language-selector">
            <span>EN</span>
            <Image
              src="/arrow_drop_down.svg"
              alt="Language Selector"
              width={24}
              height={24}
              className="text-black"
            />
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
