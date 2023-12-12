import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Fade from './Fade';
import { FaBars } from 'react-icons/fa';
import MobileNavbarDrawer from './MobileNavbarDrawer';

const TEXT_CLASSES = 'text-xl font-semibold text-[#FF4D6F] cursor-pointer';
const IMAGE_SIZE = 44;

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
          <Link href="/about">
            <span className={TEXT_CLASSES}>About</span>
          </Link>
          <Link href="/events">
            <span className={TEXT_CLASSES}>Events</span>
          </Link>
          <Link href="/projects">
            <span className={TEXT_CLASSES}>Project</span>
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
