import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import Carousel from './Carousel';
import 'swiper/css';
import 'swiper/css/navigation';

import { rgbDataURL } from '../utils/blurImage';
const CAROUSEL_CONTAINER = 'text-white rounded-lg w-[10rem] h-[30rem] md:w-full swiper-button-white';
const ALUMNI_TILE = 'bg-[#00BA95] w-[10rem] h-[35rem] md:h-[30rem] rounded-[1rem] items-center px-7 lg:px-5 md:w-full';
const ALUMNI_PROFILE = 'h-[450px] flex flex-col justify-evenly text-center md:px-5';

const AlumniTile = (alumni) => {
  return (
    <div className={ALUMNI_TILE}>
      <div className={ALUMNI_PROFILE}>
        <h2 className="text-[2rem] md:text-[2rem] font-bold">{alumni.title}</h2>
        <div className="lg:h-2/3 h-full w-full overflow-hidden scrollbar-hide rounded-[1rem]">
          <img className="" src={alumni.image} alt="" />
          {/*<Image
            src={alumni.image}
            alt="newsletter image"
            layout="fill"
            objectFit="cover"
          />*/}
        </div>
        <a href={alumni.link} className="text-[1rem] md:text-[2rem] font-semibold text-[#FF4D6F]">
          {alumni.month}
        </a>
      </div>
    </div>
  );
};

const NewsCarousel = ({ alumni }) => {
  return (
    <div className={CAROUSEL_CONTAINER}>
      <Carousel>
        {alumni.map((alumni) => (
          <SwiperSlide key={alumni.prompt}>
            <AlumniTile {...alumni} />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
