import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Carousel from './Carousel';
import 'swiper/css';
import 'swiper/css/navigation';
import Avatar from './Avatar';

const SWIPERS = 'swiper-button-white w-full h-full flex justify-center items-center relative';
const CAROUSEL_CONTAINER = 'president-carousel text-white rounded-lg w-full max-w-[90%] h-full md:w-4/5 flex justify-center items-center';
const PRESIDENT_TILE =
  'bg-[#A689FF] bg-opacity-50 w-full h-full rounded-lg items-center px-4 md:pb-8 pb-16 mb-10 md:w-4/5 flex flex-col md:flex-row mx:auto';
const TEXT = "my-10 md:pt-10 md:pb-6 pr-5 w-fit mx-auto text-center";
const QUOTES = "md:text-[1.3rem] text-[1.2rem] font-light font-medium italic text-[#4833B2]";
const QUOTATION_MARK = "text-[2rem] md:text-[2rem] font-extrabold";
const PRESIDENT_YEAR = 'text-[#000000] font-bold text-4xl absolute top-6 left:right';
const PRESIDENT_TILE_CONTAINER = 'bg-white md:rounded-3xl rounded-xl flex flex-col items-center md:px-2 px-8 py-20';

const President = [[{
  name: "Jane Doe",
  position: "Co-Pres",
  year: "2025",
  currRole: "current job",
  testimonial: "Wow I love this club",
  linkedin: "random link",
  pfp: {
    fields: {
      file: {
        url: "//t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
      }
    }
  },
  classes: "text-[#7055FD] president-avatar !mb-0",
},
{
  name: "John Doe",
  position: "Co-Pres",
  year: "2025",
  currRole: "current job",
  testimonial: "Vitae eget venenatis rhoncus aliquet curabitur mauris, sed turpis nulla. Neque molestie mi placerat ultrices sit in sit.",
  linkedin: "random link",
  pfp: {
    fields: {
      file: {
        url: "//t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
      }
    }
  },
  classes: "text-[#7055FD] president-avatar !mb-0",
}
],
[{
  name: "Jane Doe",
  position: "Co-Pres",
  year: "2025",
  currRole: "current job",
  testimonial: "Wow I love this club",
  linkedin: "random link",
  pfp: {
    fields: {
      file: {
        url: "//t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
      }
    }
  },
  classes: "text-[#7055FD] president-avatar !mb-0",
},
]];

const PresidentTile = ({ name, linkedin, pfp, classes, testimonial, position, currRole }) => {
  return (
    <div className={PRESIDENT_TILE}>
      <Avatar key={name} {...{name, linkedin, pfp, classes, position, currRole}}></Avatar>
      <div className={TEXT}>
        <p className={QUOTES}>
          <span className={QUOTATION_MARK}>&quot;  </span>
          {testimonial}
          <span className={QUOTATION_MARK}>  &quot;</span>
        </p>
      </div>
    </div>
  );
};

const CoPresident = () => {
  return (
    <div className={SWIPERS}>
      <div className={CAROUSEL_CONTAINER}>
        <Carousel className='president-carousel'>
          {President.map(([pres1, pres2], index) => (
            <SwiperSlide key={pres1.name + index}>
              <div className={PRESIDENT_TILE_CONTAINER}>
                <div className={PRESIDENT_YEAR}>{pres1.year}</div>
                <PresidentTile {...pres1} />
                {pres2 && <PresidentTile {...pres2} />}
              </div>
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CoPresident;

