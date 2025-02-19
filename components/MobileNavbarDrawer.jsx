import SocialMediaIcons from './SocialMediaIcons';

const TEXT_CLASSES = 'text-4xl font-semibold text-white';

const MobileNavbarDrawer = () => {
  return (
    <div className="flex flex-col bg-[#FF4D6F] rounded-b-2xl -mt-5 p-10 absolute top-full w-full items-center z-10">
      <div className="flex flex-col w-full space-y-4">
        <a className={TEXT_CLASSES} href="who-we-are">
          About
        </a>
        <a className={TEXT_CLASSES} href="our-team">
          Our Team
        </a>
        <a className={TEXT_CLASSES} href="newsletter">
          News
        </a>
        <a className={TEXT_CLASSES} href="events">
          Events
        </a>
        <a className={TEXT_CLASSES} href="projects">
          Projects
        </a>
        <a className={TEXT_CLASSES} href="contact">
          Contact
        </a>
        <a className={TEXT_CLASSES} href="join">
          Join
        </a>
      </div>

      <SocialMediaIcons classes="text-[#FFD2DC]" />
    </div>
  );
};

export default MobileNavbarDrawer;
