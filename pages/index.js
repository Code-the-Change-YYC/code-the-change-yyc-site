import Image from "next/image";
import { EffectCards } from "swiper";
import { SwiperSlide } from "swiper/react";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import Tile from "../components/Tile";

const ROLE_TILE_SIZE = 300;
const ROLES = ["Development", "Marketing", "Design"];

const RoleTile = ({ role }) => {
  return (
    <div className="flex flex-col">
      <Tile classes="flex flex-col items-center">
        <Image
          src={`/svgs/homepage/${role.toLowerCase()}.svg`}
          alt={role}
          width={ROLE_TILE_SIZE}
          height={ROLE_TILE_SIZE}
        />
        <h2 className="text-2xl font-medium italic">{role}</h2>
      </Tile>
    </div>
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
    <div className="flex flex-col">
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
    </div>
  );
}
