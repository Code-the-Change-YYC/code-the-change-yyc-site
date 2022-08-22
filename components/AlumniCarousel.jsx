/* eslint-disable @next/next/no-img-element */
import { ALUMNI } from "../data/alumni";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

const CAROUSEL_CONTAINER = "text-white rounded-lg w-[300px] h-[600px] shadow-2xl md:w-[80%]";
const ALUMNI_TILE =
  "bg-[#7055FD] w-[300px] h-[600px] rounded-lg pt-5 px-5 items-center flex flex-col shadow-2xl md:w-[100%] md:flex-row";
const ALUMNI_PROFILE = "flex flex-col items-center mx-auto";

const AlumniTile = ({ alumni }) => {
  return (
    <div className={ALUMNI_TILE}>
      <div className={ALUMNI_PROFILE}>
        <img src={`/profiles/${alumni.file}`} alt="" className="w-50 mb-3 mt-5 rounded-full md:w-64 mx-auto" />
        <h2 className="text-[2rem] font-bold">{alumni.name}</h2>
        <h2 className="text-[1.25rem] font-semibold text-[#BAFBE4]">{alumni.position}</h2>
        <h2 className="text-[1.25rem] font-medium mb-5">Previously: {alumni.prevRole}</h2>
      </div>
      <p className="text-[1.3rem] font-light italic leading-7 mx-auto md:mb-24 md:text-[1.5rem]">
        <span className="text-[2rem] font-extrabold">&quot;</span>
        {alumni.testimonial}
        <span className="text-[2rem] font-extrabold">&quot;</span>
      </p>
    </div>
  );
};

const AlumniCarousel = () => {
  return (
    <>
      <div className={CAROUSEL_CONTAINER}>
        <Swiper modules={[Navigation]} spaceBetween={50}>
          {ALUMNI.map((alumni) => (
            <SwiperSlide key={alumni.name}>
              <AlumniTile alumni={alumni} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default AlumniCarousel;
