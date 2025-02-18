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

        <Link href="/" legacyBehavior>
          <Image className="cursor-pointer" src="/logo.png" alt="logo" width={IMAGE_SIZE} height={IMAGE_SIZE} />
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link href="/who-we-are" legacyBehavior>
            <span className={TEXT_CLASSES}>About</span>
          </Link>
          <Link href="/" legacyBehavior>
            <span className={TEXT_CLASSES}>News</span>
          </Link>
          <Link href="/events" legacyBehavior>
            <span className={TEXT_CLASSES}>Events</span>
          </Link>
          <Link href="/projects" legacyBehavior>
            <span className={TEXT_CLASSES}>Projects</span>
          </Link>
          <Link href="/contact" legacyBehavior>
            <span className={TEXT_CLASSES}>Contact</span>
          </Link>
          <Link href="/join" legacyBehavior>
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
