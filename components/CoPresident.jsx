import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Carousel from './Carousel';
import 'swiper/css';
import 'swiper/css/navigation';
import Avatar from './Avatar';
import { ImQuotesLeft } from 'react-icons/im';

const CAROUSEL_CONTAINER =
  'president-carousel text-white rounded-lg w-[20rem] h-full md:w-4/5 swiper-button-white flex justify-center items-center';
const PRESIDENT_TILE =
  'bg-[#A689FF] bg-opacity-50 w-[20rem] rounded-lg items-center p-14 lg:p-10 flex flex-col md:w-4/5 xl:flex-row';

const President = [
  [
    {
      name: 'Topan Budiman',
      linkedin: 'topanb',
      currRole: 'SDE @ Amazon',
      project: 'Presidents',
      pfp: '/profiles/TopanBudiman.jpg',
      testimonial: `
      Being a part of Code the Change YYC was one of the major highlights of my undergrad! During my time at CTC, 
      I met lots of super talented and cool people - some of whom became lifelong friends. In today’s competitive tech market, 
      it’s important to upskill and CTC gave me plenty of opportunities to grow my software development and leadership skills. 
      I wouldn’t be the person I am today without the countless memories and experiences  I had with this club.`,
      classes: 'text-[#7055FD] president-avatar !mb-0',
      year: 2025,
    },
  ],
];

const PresidentTile = ({ name, linkedin, pfp, classes, testimonial, position, currRole }) => {
  return (
    <div className={PRESIDENT_TILE}>
      <Avatar key={name} {...{ name, linkedin, pfp, classes, position, currRole }}></Avatar>
      <div className="flex flex-col justify-center items-center text-center mt-5 md:mt-0 xl:ml-10 italic">
        <ImQuotesLeft className="text-[#000000] size-4 sm:size-6 mb-4 md:size-8 lg:mb-0 lg:size-10" />
        <p className="text-[1.1rem] font-light italic leading-7 mx-auto md:text-lg lg:text-2xl md:p-10 text-[#000000]">
          {testimonial}
        </p>
      </div>
    </div>
  );
};

const CoPresident = () => {
  return (
    <div className={CAROUSEL_CONTAINER}>
      <Carousel className="president-carousel">
        {President.map((president) => (
          <SwiperSlide key={president[0].name}>
            <div className="bg-white w-full rounded-3xl h-full flex flex-col justify-center items-center gap-10 py-20">
              <div className="text-[#000000] text-4xl absolute font-bold top-5 left-32">{president[0].year}</div>
              <PresidentTile {...president[0]} />
              {president[1] && <PresidentTile {...president[1]} />}
            </div>
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default CoPresident;
