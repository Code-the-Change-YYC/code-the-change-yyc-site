import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Carousel from './Carousel';
import 'swiper/css';
import 'swiper/css/navigation';
import Avatar from './Avatar';
const CAROUSEL_CONTAINER = 'text-white rounded-lg w-[20rem] h-[30rem] shadow-2xl md:w-4/5 swiper-button-white';
const ALUMNI_TILE =
  'bg-[#A689FF] bg-opacity-50 w-[20rem] h-[70rem] md:h-[30rem] rounded-lg items-center p-14 lg:p-10 flex flex-col shadow-2xl md:w-full md:flex-row';

const President = [{
  name: "Nathan Pham",
  position: "Co-Pres",
  previousRole: "Events team",
  testimonial: "Wow I love this club",
  linkedin: "random link",
  pfp: {
    fields: {
      file: {
        url: "//t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
      }
    }
  },
  classes: "text-[#7055FD]",
}];

const AlumniTile = ({ name, linkedin, pfp, classes, testimonial }) => {
  return (
    <div className={ALUMNI_TILE}>
      <Avatar key={name} {...{name, linkedin, pfp, classes}}></Avatar>
      <p className="text-[1.1rem] font-light italic leading-7 mx-auto md:ml-14 md:mb-24 md:text-[1.3rem] lg:text-[1.5rem] md:p-10 text-[#000000]">
        <span className="text-[2rem] font-extrabold">&quot;</span>
        {testimonial}
        <span className="text-[2rem] font-extrabold">&quot;</span>
      </p>
    </div>
  );
};

const CoPresident = () => {
  return (
    <div className='bg-white w-full h-[40rem] flex justify-center items-center'>
      <div className={CAROUSEL_CONTAINER}>
        <Carousel>
          {President.map((president) => (
            <SwiperSlide key={president.name}>
              <AlumniTile {...president} />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default CoPresident;

