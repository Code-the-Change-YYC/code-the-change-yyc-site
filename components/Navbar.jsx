import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { FaBars } from "react-icons/fa";
import MobileNavbarDrawer from "./MobileNavbarDrawer";

const textClasses = "text-xl font-semibold text-[#FF4D6F]";
const optionClasses = "text-xl font-semibold text-white p-2";
const optionsClasses = "absolute right-0 top-12 w-44 rounded-b-lg bg-[#FF4D6F] p-2";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col relative">
      <div className="rounded-b-2xl md:rounded-none flex justify-between items-center px-10 md:px-20 py-5 bg-white drop-shadow-lg z-10">
        <FaBars className="md:hidden text-[#A689FF] cursor-pointer" onClick={() => setOpen(!open)} />

        <Image src="/logo.png" alt="logo" width={44} height={44} />

        <div className="hidden md:flex md:items-center md:space-x-8">
          <Dropdown
            title="About"
            titleClasses={textClasses}
            optionsClasses={optionsClasses}
            optionClasses={optionClasses}
          >
            <Menu.Items as="div" className={`absolute right-0 mt-2 w-36 origin-top-right divide-y ${optionsClasses}`}>
              <Menu.Item className={`flex justify-center items-center ${optionClasses}`}>
                <a href="/who-we-are">Who we are</a>
              </Menu.Item>
              <Menu.Item className={`flex justify-center items-center ${optionClasses}`}>
                <a href="/projects">Projects</a>
              </Menu.Item>
            </Menu.Items>
          </Dropdown>
          <Dropdown
            title="News"
            titleClasses={textClasses}
            optionsClasses={optionsClasses}
            optionClasses={optionClasses}
          >
            <Menu.Items as="div" className={`absolute right-0 mt-2 w-36 origin-top-right divide-y ${optionsClasses}`}>
              <Menu.Item className={`flex justify-center items-center ${optionClasses}`}>
                <a href="/announcements">Announcements</a>
              </Menu.Item>
              <Menu.Item className={`flex justify-center items-center ${optionClasses}`}>
                <a href="/blog">Blog</a>
              </Menu.Item>
            </Menu.Items>
          </Dropdown>
          <Link href="/partnerships">
            <span className={textClasses}>Partnerships</span>
          </Link>
          <Link href="/contact">
            <span className={textClasses}>Contact</span>
          </Link>
          <Link href="/join">
            <span className={textClasses}>Join</span>
          </Link>
        </div>

        <div className="md:hidden"></div>
      </div>

      {open && <MobileNavbarDrawer />}
    </div>
  );
};

export default Navbar;
