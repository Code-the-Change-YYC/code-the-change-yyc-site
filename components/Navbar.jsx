import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "./Dropdown";
import Fade from "./Fade";
import { FaBars } from "react-icons/fa";
import MobileNavbarDrawer from "./MobileNavbarDrawer";

const TEXT_CLASSES = "text-xl font-semibold text-[#FF4D6F]";
const OPTION_CLASSES = "text-xl font-semibold text-white p-2";
const OPTIONS_CLASSES = "absolute right-0 top-12 w-48 rounded-b-lg bg-[#FF4D6F] p-2";

const DropdownOptions = ({ options }) => {
  return (
    <Menu.Items as="div" className={`absolute right-0 mt-2 origin-top-right divide-y ${OPTIONS_CLASSES}`}>
      {options.map((option) => {
        const link = option.toLowerCase().split(" ").join("-");
        return (
          <Menu.Item key={option} className={`flex justify-center items-center ${OPTION_CLASSES}`}>
            <a href={`/${link}</Menu.Item>`}>{option}</a>
          </Menu.Item>
        );
      })}
    </Menu.Items>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col relative">
      <div className="rounded-b-2xl md:rounded-none flex justify-between items-center px-10 md:px-20 py-5 bg-white drop-shadow-lg z-10">
        <FaBars className="md:hidden text-[#A689FF] cursor-pointer" onClick={() => setOpen(!open)} />

        <Link href="/">
          <Image className="cursor-pointer" src="/logo.png" alt="logo" width={44} height={44} />
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-8">
          <Dropdown
            title="About"
            titleClasses={TEXT_CLASSES}
            optionsClasses={OPTIONS_CLASSES}
            optionClasses={OPTION_CLASSES}
          >
            <DropdownOptions options={["Who we are", "Projects"]} />
          </Dropdown>
          <Dropdown
            title="News"
            titleClasses={TEXT_CLASSES}
            optionsClasses={OPTIONS_CLASSES}
            optionClasses={OPTION_CLASSES}
          >
            <DropdownOptions options={["Announcements", "Blog"]} />
          </Dropdown>
          <Link href="/partnerships">
            <span className={TEXT_CLASSES}>Partnerships</span>
          </Link>
          <Link href="/contact">
            <span className={TEXT_CLASSES}>Contact</span>
          </Link>
          <Link href="/join">
            <span className={TEXT_CLASSES}>Join</span>
          </Link>
        </div>

        <div className="md:hidden"></div>
      </div>

      <Fade open={open}>
        <MobileNavbarDrawer />
      </Fade>
    </div>
  );
};

export default Navbar;
