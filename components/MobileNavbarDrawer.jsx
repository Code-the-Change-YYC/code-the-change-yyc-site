import Link from 'next/link';
import SocialMediaIcons from './SocialMediaIcons';

const TEXT_CLASSES = 'text-4xl font-semibold text-white cursor-pointer';

const MobileNavbarDrawer = ({ onClose }) => {
  return (
    <div className="flex flex-col bg-[#FF4D6F] rounded-b-2xl -mt-5 p-10 absolute top-full w-full items-center z-10">
      <div className="flex flex-col w-full space-y-4">
        <Link href="/who-we-are">
          <span className={TEXT_CLASSES} onClick={onClose}>About</span>
        </Link>
        <Link href="/our-team">
          <span className={TEXT_CLASSES} onClick={onClose}>Our Team</span>
        </Link>
        <Link href="/newsletter">
          <span className={TEXT_CLASSES} onClick={onClose}>News</span>
        </Link>
        <Link href="/events">
          <span className={TEXT_CLASSES} onClick={onClose}>Events</span>
        </Link>
        <Link href="/projects">
          <span className={TEXT_CLASSES} onClick={onClose}>Projects</span>
        </Link>
        <Link href="/contact">
          <span className={TEXT_CLASSES} onClick={onClose}>Contact</span>
        </Link>
        <Link href="/join">
          <span className={TEXT_CLASSES} onClick={onClose}>Join</span>
        </Link>
      </div>

      <SocialMediaIcons classes="text-[#FFD2DC]" />
    </div>
  );
};

export default MobileNavbarDrawer;
