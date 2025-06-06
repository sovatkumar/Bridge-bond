import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-[#c41e3a]">
      <div className="container py-10 px-4 flex justify-between items-center">
        <div className="logo-container">
          <Image
            src="/images/roam-n-learn.png"
            alt="Roam N Learn Logo"
            width={200}
            height={60}
            priority
          />
        </div>

        <div className="nav-links">
          <a href="#" className="nav-link active">
            HOME
          </a>
          <a href="#about" className="nav-link">
            ABOUT US
          </a>
          <a href="#destinations" className="nav-link">
            DESTINATIONS
          </a>
          <a href="#contact" className="nav-link">
            CONTACT US
          </a>

          <div className="language-selector">
            <span>EN</span>
            <Image
              src="/arrow_drop_down.svg"
              alt="Language Selector"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
