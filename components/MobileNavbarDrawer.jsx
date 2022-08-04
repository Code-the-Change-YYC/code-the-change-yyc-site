import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const TEXT_CLASSES = "text-4xl font-semibold text-white";
const ICON_SIZE = 30;
const ABOUT = "about";
const NEWS = "news";

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
          className={`cursor-pointer ${TEXT_CLASSES} ${selectedLink === "about" ? "underline" : ""}`}
          onClick={() => handleClick(ABOUT)}
        >
          About
        </h1>
        {selectedLink === ABOUT && <NestedLinks options={["Who we are", "Projects"]} />}
        <h1
          className={`cursor-pointer ${TEXT_CLASSES} ${selectedLink === ABOUT ? "underline" : ""}`}
          onClick={() => handleClick(NEWS)}
        >
          News
        </h1>
        {selectedLink === NEWS && <NestedLinks options={["Announcements", "Blog"]} />}
        <a className={TEXT_CLASSES} href="partnerships">
          Partnerships
        </a>
        <a className={TEXT_CLASSES} href="contact">
          Contact
        </a>
        <a className={TEXT_CLASSES} href="join">
          Join
        </a>
      </div>

      <div className="flex items-start pt-5 text-[#FFD2DC] space-x-6">
        <Link href="https://www.facebook.com/CodeTheChangeYYC/">
          <FaFacebook size={ICON_SIZE} />
        </Link>
        <Link href="https://www.instagram.com/codethechangeyyc/">
          <FaInstagram size={ICON_SIZE} />
        </Link>
        <Link href="https://www.linkedin.com/company/code-the-change-yyc/">
          <FaLinkedin size={ICON_SIZE} />
        </Link>
        <Link href="https://www.youtube.com/channel/UC4wZt-bCL31HjxUF-zc5U_g">
          <FaYoutube size={ICON_SIZE} />
        </Link>
        <Link href="https://github.com/Code-the-Change-YYC">
          <FaGithub size={ICON_SIZE} />
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbarDrawer;
