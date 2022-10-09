import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import Tile from "../components/Tile";
import TextSection from "./TextSection";
import Carousel from "../components/Carousel";
import Button from "../components/Button";
import { ROLE } from "../data/join";
import styles from "../components/RolesCarousel.module.css";
import "swiper/css/navigation";
const CAROUSEL_CONTAINER = styles.swiperContainer;
const TILE_CONTAINER = "flex flex-col md:flex-row rounded-[1.875rem] p-[1.875rem]";
const TILE_TEXT_CONTAINER = "basis-4/5 lg:basis-3/5 text-left md:py-10";
const TILE_TEXT_SPACING = "lg:space-y-24 py-2.5";
const ARROW_INIT = { left: "swiper-button-prev", right: "swiper-button-next" };
const LEFT_NAVIGATION_ARROW = styles.swiperButtonPrev;
const RIGHT_NAVIGATION_ARROW = styles.swiperButtonNext;

const ROLES_CONTAINER = "px-10 md:px-24 lg:px-48 py-20 bg-[#FF6B54]";
const ROLE_TILE_SIZE = 450;

const RolesTile = ({ role }) => (
  <Tile classes={TILE_CONTAINER}>
    <Image
      src={`/svgs/homepage/${role.name.toLowerCase()}.svg`}
      alt={role.name}
      width={ROLE_TILE_SIZE}
      height={ROLE_TILE_SIZE}
    />
    <div className={TILE_TEXT_CONTAINER}>
      <h2 className="text-2xl md:text-4xl xl:text-6xl font-medium italic">{role.name}</h2>
      <div className={TILE_TEXT_SPACING}>
        <p className="md:text-[1.2rem] xl:text-[1.8rem] font-[500] py-3">{role.description}</p>
        <center>
          <Button
            href={role.name == "Contact Us" ? "/contact" : "https://forms.gle/9xL859EbEwz1acPg6"}
            classes="max-w-[15.5rem] lg:max-w-[19rem] lg:min-h-[3rem] border-[#9981f4] p-[0.313rem] lg:p-[0.7rem]"
          >
            <p className="text-[0.99rem] md:text-xl xl:text-[1.6rem] font-semibold text-white">{role.name == "Contact Us" ? "Contact" : "Apply for this role"}</p>
          </Button>
        </center>
      </div>
    </div>
  </Tile>
);

const RolesCarousel = () => {
  return (
    <div className={ROLES_CONTAINER}>
      <h1 className="text-5xl font-semibold text-white">Roles</h1>
      <TextSection classes="text-white py-3">More in depth description of what the specific role involves</TextSection>
      <div className={CAROUSEL_CONTAINER}>
        <div className={`${ARROW_INIT.left} ${LEFT_NAVIGATION_ARROW}`}></div>
        <Carousel navigation={{ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next", clickable: true }}>
          {ROLE.map((role) => (
            <SwiperSlide key={role.name}>
              <RolesTile role={role} />
            </SwiperSlide>
          ))}
        </Carousel>
        <div className={`${ARROW_INIT.right} ${RIGHT_NAVIGATION_ARROW}`}></div>
      </div>
    </div>
  );
};

export default RolesCarousel;
