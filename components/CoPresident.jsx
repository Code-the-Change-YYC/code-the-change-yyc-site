import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Carousel from './Carousel';
import 'swiper/css';
import 'swiper/css/navigation';
import Avatar from './Avatar';
const CAROUSEL_CONTAINER = 'president-carousel text-white rounded-lg w-[20rem] h-full md:w-4/5 swiper-button-white flex justify-center items-center';
const PRESIDENT_TILE =
  'bg-[#A689FF] bg-opacity-50 w-[20rem] h-[70rem] md:h-[20rem] rounded-lg items-center p-14 lg:p-10 flex flex-col md:w-4/5 md:flex-row';



const President = [[{
  name: "Jane Doe",
  position: "Co-Pres",
  year: "2025",
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
},
{
  name: "John Doe",
  position: "Co-Pres",
  year: "2025",
  previousRole: "Events team",
  testimonial: "Vitae eget venenatis rhoncus aliquet curabitur mauris, sed turpis nulla. Neque molestie mi placerat ultrices sit in sit.",
  linkedin: "random link",
  pfp: {
    fields: {
      file: {
        url: "//t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
      }
    }
  },
  classes: "text-[#7055FD]",
}
],
[{
  name: "Jane Doe",
  position: "Co-Pres",
  year: "2025",
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
},
{
  name: "John Doe",
  position: "Co-Pres",
  year: "2025",
  previousRole: "Events team",
  testimonial: "Vitae eget venenatis rhoncus aliquet curabitur mauris, sed turpis nulla. Neque molestie mi placerat ultrices sit in sit.",
  linkedin: "random link",
  pfp: {
    fields: {
      file: {
        url: "//t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
      }
    }
  },
  classes: "text-[#7055FD]",
}
]];

const PresidentTile = ({ name, linkedin, pfp, classes, testimonial, position }) => {
  return (
    <div className={PRESIDENT_TILE}>
      <Avatar key={name} {...{name, linkedin, pfp, classes, position}}></Avatar>
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
    <div className={CAROUSEL_CONTAINER}>
      <Carousel>
        {President.map((president) => (
          <SwiperSlide key={president[0].name}>
            <div className='bg-white w-full rounded-3xl h-full flex flex-col justify-center items-center gap-10 py-20'>
              <div className='text-[#000000] text-4xl absolute top-5 left-32'>{president[0].year}</div>
              <PresidentTile {...president[0]} />
              <PresidentTile {...president[1]} />
            </div>
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};
export default CoPresident;
