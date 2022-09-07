/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { EffectCards } from "swiper";
import { SwiperSlide } from "swiper/react";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import Tile from "../components/Tile";
import Heading from "../components/Heading";
import TextSection from "../components/TextSection";
import Sponsors from "../components/Sponsors";
import { UnderlineTypes } from "../utils/underlineType";
import HomePageBackgroundImage from "../public/images/homepage/homepage_background.png";

const LOGO_SVG_TOP = "/svgs/homepage/with_logo_top.svg";
const LOGO_SVG_BOTTOM = "/svgs/homepage/with_logo_bottom.svg";
const COMMUNITY_SVG = "/svgs/homepage/coding_community.svg";
const ROLE_TILE_SIZE = 300;
const ROLES = ["Development", "Marketing", "Design"];
const STANDOUT_TEXT_CLASSES = "font-bold text-[#7055FD]";

const RoleTile = ({ role }) => {
  return (
    <Tile classes="flex flex-col items-center">
      <Image
        src={`/svgs/homepage/${role.toLowerCase()}.svg`}
        alt={role}
        width={ROLE_TILE_SIZE}
        height={ROLE_TILE_SIZE}
      />
      <h2 className="text-2xl font-medium italic">{role}</h2>
    </Tile>
  );
};

const RolesMobileCardCarousel = () => {
  return (
    <Carousel effect={"cards"} grabCursor={true} modules={[EffectCards]}>
      {ROLES.map((role) => (
        <SwiperSlide key={role}>
          <RoleTile role={role} key={role} />
        </SwiperSlide>
      ))}
    </Carousel>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col -mt-5">
      <div className="relative flex h-screen justify-center items-center">
        <div className="absolute w-full h-full">
          <Image
            src={HomePageBackgroundImage}
            alt={HomePageBackgroundImage}
            layout="fill"
            placeholder="blur"
            objectFit="cover"
          />
        </div>
        <h1 className="text-stroke-outside text-7xl -mt-20 md:m-0 md:text-9xl font-black w-3/4 md:text-center text-[#7055FD] stroke-white drop-shadow-lg">
          Coding a better world together.
        </h1>
      </div>

      <div className="relative flex -mt-5 justify-between bg-[#7055FD] py-52 px-10 md:px-24 lg:px-48 rounded-2xl drop-shadow-lg md:drop-shadow-none">
        <img
          src={LOGO_SVG_TOP}
          alt="logo_svg"
          className="md:hidden absolute top-0 mx-auto left-0 right-0 pt-20 object-fill w-[400px]"
        />
        <img
          src={LOGO_SVG_BOTTOM}
          alt="logo_svg"
          className="md:hidden absolute -bottom-36 mx-auto left-0 right-0 pt-20 object-fill w-[400px]"
        />
        <TextSection classes="text-white">
          <strong className="text-4xl">code the change yyc</strong> is a Calgary-based initiative where students with a
          passion for technology volunteer their time to work on projects for non-profit causes as a way to grow their
          skills, gain experience, attain mentorship, and give back to the community.
        </TextSection>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between pt-40 md:py-40 md:px-24 lg:px-48 md:divide-x-4 md:divide-[#A689FF] bg-white">
        <div className="flex flex-col md:w-1/2 md:pr-32 md:mt-0 px-5 md:px-0 items-center">
          <Heading>Coding</Heading>
          <TextSection>
            We seek to partner with <span className={STANDOUT_TEXT_CLASSES}>nonprofit impact causes</span> that have
            projects on the go that need{" "}
            <span className={STANDOUT_TEXT_CLASSES}>additional programming and software development support</span>. We
            work with project managers, product designers, and analysts to turn project visions to quality software.
          </TextSection>
        </div>

        <img src={COMMUNITY_SVG} alt={COMMUNITY_SVG} className="md:hidden object-fill w-[400px]" />

        <div className="flex flex-col md:w-1/2 md:pl-32 px-5 md:px-0 items-center py-10 md:py-0">
          <Heading underlineType={UnderlineTypes.GREEN_LONG_UNDERLINE}>Community</Heading>
          <TextSection>
            Whether it’s through{" "}
            <span className={STANDOUT_TEXT_CLASSES}>code, workshops, donations, or volunteering</span>, we’re always
            looking to do something for our local communities! Every year, we donate to charities across Calgary and
            around the world. We also dedicate time volunteering at local organizations and host technical workshops
            with a hint of social impact ideologies!
          </TextSection>
        </div>
      </div>

      <div className="px-10 md:px-24 lg:px-48 py-20 bg-[#FF6B54]">
        <h1 className="text-5xl font-semibold text-white">Ready to join the change?</h1>
        <p className="text-xl text-white py-10 font-medium">
          Explore our roles here and follow us on our socials to know when we’re recruiting! :)
        </p>
        <div className="hidden md:flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-2">
          {ROLES.map((role) => (
            <RoleTile role={role} key={role} />
          ))}
        </div>
        <div className="md:hidden px-10">
          <RolesMobileCardCarousel />
        </div>
        <div className="py-12 flex justify-center">
          <Button href="/join">Join Us!</Button>
        </div>
      </div>

      <Sponsors />
    </div>
  );
}
