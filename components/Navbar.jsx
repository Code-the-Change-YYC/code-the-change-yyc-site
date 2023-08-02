import { Menu } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Dropdown from './Dropdown';
import Fade from './Fade';
import { FaBars } from 'react-icons/fa';
import MobileNavbarDrawer from './MobileNavbarDrawer';

const TEXT_CLASSES = 'text-xl font-semibold text-[#FF4D6F] cursor-pointer';
const OPTION_CLASSES = 'text-xl font-semibold text-white p-2';
const OPTIONS_CLASSES = 'top-14 w-48 rounded-b-lg bg-[#FF4D6F] p-2';
const IMAGE_SIZE = 44;

const NavbarDropdownOptions = ({ options }) => {
  return (
    <Menu.Items as="div" className={`absolute right-0 origin-top-right divide-y ${OPTIONS_CLASSES}`}>
      {options.map((option) => {
        const link = option.toLowerCase().split(' ').join('-');
        return (
          <Menu.Item key={option} className={`flex justify-center items-center ${OPTION_CLASSES}`}>
            <a href={`/${link}`}>{option}</a>
          </Menu.Item>
        );
      })}
    </Menu.Items>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col fixed top-0 w-full z-50">
      <div className="rounded-b-2xl md:rounded-none flex justify-between items-center px-10 md:px-20 py-5 bg-white drop-shadow-lg z-30">
        <FaBars className="md:hidden text-[#A689FF] cursor-pointer" onClick={() => setOpen(!open)} />

        <Link href="/">
          <Image className="cursor-pointer" src="/logo.png" alt="logo" width={IMAGE_SIZE} height={IMAGE_SIZE} />
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-8">
          <Dropdown
            title="About"
            titleClasses={TEXT_CLASSES}
            optionsClasses={OPTIONS_CLASSES}
            optionClasses={OPTION_CLASSES}
          >
            <NavbarDropdownOptions options={['Who we are', 'Events', 'Projects']} />
          </Dropdown>
          {/* <Dropdown
            title="News"
            titleClasses={TEXT_CLASSES}
            optionsClasses={OPTIONS_CLASSES}
            optionClasses={OPTION_CLASSES}
          >
            <NavbarDropdownOptions options={["Announcements", "Blog"]} />
          </Dropdown> */}
          {/* <Link href="/partnerships">
            <span className={TEXT_CLASSES}>Partnerships</span>
          </Link> */}
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
