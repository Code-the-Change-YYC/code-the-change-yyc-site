/* eslint-disable @next/next/no-img-element */
import { ALUMNI } from "../data/alumni";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

const CAROUSEL_CONTAINER = "text-white rounded-lg w-[20rem] h-[37.5rem] shadow-2xl md:w-4/5";
const ALUMNI_TILE =
  "bg-[#7055FD] w-[20rem] h-[37.5rem] rounded-lg items-center p-5 flex flex-col shadow-2xl md:w-full md:flex-row";
const ALUMNI_PROFILE = "flex flex-col items-center mx-auto";

const SPACE_BETWEEN_ELEMENTS = 50;

const AlumniTile = ({ name, file, position, prevRole, testimonial }) => {
  return (
    <div className={ALUMNI_TILE}>
      <div className={ALUMNI_PROFILE}>
        <img src={`/profiles/${file}`} alt="Profile Picture" className="w-50 mb-3 mt-5 rounded-full md:w-64 mx-auto" />
        <h2 className="text-[2rem] font-bold">{name}</h2>
        <h2 className="text-[1.25rem] font-semibold text-[#BAFBE4]">{position}</h2>
        <h2 className="text-[1.25rem] font-medium mb-5">Previously: {prevRole}</h2>
      </div>
      <p className="text-[1.3rem] font-light italic leading-7 mx-auto md:mb-24 md:text-[1.5rem]">
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
      <Swiper modules={[Navigation]} spaceBetween={SPACE_BETWEEN_ELEMENTS}>
        {ALUMNI.map((alumni) => (
          <SwiperSlide key={alumni.name}>
            <AlumniTile {...alumni} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AlumniCarousel;
