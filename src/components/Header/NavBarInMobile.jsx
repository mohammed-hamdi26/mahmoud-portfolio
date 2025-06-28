import React, { useState } from "react";
import NavBarMobileItem from "./NavBarMobileItem";
import { IoHomeOutline } from "react-icons/io5";
import { FaInfo, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaVideo } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function NavBarInMobile({ isMenuOpen, setIsMenuOpen }) {
  const [url, setUrl] = useState(window.location.hash || "#home");
  return (
    <>
      <nav
        className={`fixed sm:hidden py-4 top-0 ${
          isMenuOpen ? "left-0" : "-left-full"
        } w-3/5 h-full bg-white z-20 transition-all duration-700`}
      >
        <button className="w-full flex justify-end px-4">
          <IoMdClose
            className=" top-4 right-4 text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        </button>
        <ul>
          <NavBarMobileItem
            title="Home"
            href="#home"
            icon={<IoHomeOutline />}
            url={url}
            onClick={() => {
              setUrl("#home");
              setIsMenuOpen(false);
            }}
          />
          <NavBarMobileItem
            title="About"
            href="#about"
            url={url}
            onClick={() => {
              setUrl("#about");
              setIsMenuOpen(false);
            }}
            icon={<FaInfo />}
          />
          <NavBarMobileItem
            title="Projects"
            href="#projects"
            icon={<GrProjects />}
            url={url}
            onClick={() => {
              setUrl("#projects");
              setIsMenuOpen(false);
            }}
          />
          <NavBarMobileItem
            title="Videos"
            href="#videos"
            url={url}
            onClick={() => {
              setUrl("#videos");
              setIsMenuOpen(false);
            }}
            icon={<FaVideo />}
          />
          <NavBarMobileItem
            title="whatsapp"
            href="https://wa.me/201068365035"
            icon={<FaWhatsapp />}
            onClick={() => {
              setIsMenuOpen(false);
            }}
            target="_blank"
          />
          <NavBarMobileItem
            title="linkedin"
            href="https://www.linkedin.com/in/mahmoud-ahmed-891337270/"
            icon={<FaLinkedinIn />}
            onClick={() => {
              setIsMenuOpen(false);
            }}
            target="_blank"
          />
        </ul>
      </nav>
    </>
  );
}
