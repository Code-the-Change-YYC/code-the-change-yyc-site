import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const textClasses = "text-4xl font-semibold text-white";
const iconSize = 30;

const NestedLinks = ({ options }) => {
  return (
    <div className="ml-5 flex flex-col font-normal text-white">
      {options.map((option) => {
        const link = option.toLowerCase().split(" ").join("-");
        return (
          <a key={option} href={`/${link}`} className="text-xl py-1">
            / {option}
          </a>
        );
      })}
    </div>
  );
};

const MobileNavbarDrawer = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleClick = (link) => {
    if (selectedLink === link) {
      setSelectedLink(null);
    } else {
      setSelectedLink(link);
    }
  };

  return (
    <div className="flex flex-col bg-[#FF4D6F] rounded-b-2xl z-5 -mt-5 p-10 absolute top-full w-full items-center">
      <div className="flex flex-col w-full space-y-4">
        <h1
          className={`cursor-pointer ${textClasses} ${selectedLink === "about" ? "underline" : ""}`}
          onClick={() => handleClick("about")}
        >
          About
        </h1>
        {selectedLink === "about" && <NestedLinks options={["Who we are", "Projects"]} />}
        <h1
          className={`cursor-pointer ${textClasses} ${selectedLink === "news" ? "underline" : ""}`}
          onClick={() => handleClick("news")}
        >
          News
        </h1>
        {selectedLink === "news" && <NestedLinks options={["Announcements", "Blog"]} />}
        <a className={textClasses} href="partnerships">
          Partnerships
        </a>
        <a className={textClasses} href="contact">
          Contact
        </a>
        <a className={textClasses} href="join">
          Join
        </a>
      </div>

      <div className="flex items-start pt-5 text-[#FFD2DC] space-x-6">
        <Link href="https://www.facebook.com/CodeTheChangeYYC/">
          <FaFacebook size={iconSize} />
        </Link>
        <Link href="https://www.instagram.com/codethechangeyyc/">
          <FaInstagram size={iconSize} />
        </Link>
        <Link href="https://www.linkedin.com/company/code-the-change-yyc/">
          <FaLinkedin size={iconSize} />
        </Link>
        <Link href="https://www.youtube.com/channel/UC4wZt-bCL31HjxUF-zc5U_g">
          <FaYoutube size={iconSize} />
        </Link>
        <Link href="https://github.com/Code-the-Change-YYC">
          <FaGithub size={iconSize} />
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbarDrawer;
