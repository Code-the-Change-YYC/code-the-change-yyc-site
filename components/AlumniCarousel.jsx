import Image from "next/image";
import { ALUMNI } from "../data/alumni";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Carousel from "./Carousel";
import FontAwesomeLink from "./FontAwesomeLink";
import "swiper/css";
import "swiper/css/navigation";

const CAROUSEL_CONTAINER = "text-white rounded-lg w-[20rem] h-[44rem] shadow-2xl md:w-4/5 swiper-button-white";
const ALUMNI_TILE =
  "bg-[#7055FD] w-[20rem] h-[44rem] rounded-lg items-center p-14 lg:p-10 flex flex-col shadow-2xl md:w-full md:flex-row";
const ALUMNI_PROFILE = "flex flex-col items-center mx-auto text-center";

const SPACE_BETWEEN_ELEMENTS = 50;

const AlumniTile = ({ name, file, position, prevRole, testimonial, linkedin }) => {
  return (
    <div className={ALUMNI_TILE}>
      <div className={ALUMNI_PROFILE}>
        <div className="w-40 h-40 mb-3 mt-5 md:w-60 md:h-60 mx-auto relative rounded-full overflow-hidden">
          <Image src={file} alt="Profile Picture" layout="fill" objectFit="contain" placeholder="blur" />
        </div>
        <h2 className="text-[2rem] md:text-[2.5rem] font-bold">{name}</h2>
        <h2 className="text-[1.25rem] md:text-[1.5rem] font-semibold text-[#BAFBE4]">{position}</h2>
        <h2 className="text-[1.25rem] md:text-[1.5rem] font-medium mb-2">Previously: {prevRole}</h2>
        <FontAwesomeLink
          username={linkedin}
          icon={faLinkedin}
          classes="h-6 w-6 md:h-10 md:w-10 text-white cursor-pointer mb-5"
        />
      </div>
      <p className="text-[1.3rem] font-light italic leading-7 mx-auto md:ml-14 md:mb-24 md:text-[1.5rem]">
        <span className="text-[2rem] font-extrabold">&quot;</span>
        {testimonial}
        <span className="text-[2rem] font-extrabold">&quot;</span>
      </p>
    </div>
  );
};

const AlumniCarousel = () => {
  return (
    <div className={CAROUSEL_CONTAINER}>
      <Carousel
        style={{
          "--swiper-navigation-color": "#FFF",
          "--swiper-navigation-size": "25px",
        }}
        modules={[Navigation]}
        navigation
        spaceBetween={SPACE_BETWEEN_ELEMENTS}
      >
        {ALUMNI.map((alumni) => (
          <SwiperSlide key={alumni.name}>
            <AlumniTile {...alumni} />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default AlumniCarousel;
