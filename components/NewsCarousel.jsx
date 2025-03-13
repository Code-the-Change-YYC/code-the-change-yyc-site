import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import Carousel from './Carousel';
import 'swiper/css';
import 'swiper/css/navigation';
import { rgbDataURL } from '../utils/blurImage';
const CAROUSEL_CONTAINER = 'text-white rounded-lg w-[10rem] h-[30rem] md:w-full swiper-button-white';
const ALUMNI_TILE =
  'bg-[#00BA95] w-[10rem] h-[35rem] md:h-[30rem] rounded-lg items-center p-7 lg:p-5 flex flex-col md:w-full';
const ALUMNI_PROFILE = 'flex flex-col items-center mx-auto text-center md:p-5';

const AlumniTile = (alumni) => {
  return (
    <div className={ALUMNI_TILE}>
      <div className={ALUMNI_PROFILE}>
        <div className="mx-auto rounded-full overflow-hidden">
          {/*
          <Image
            src={`https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg`}
            alt="Profile Picture"
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            blurDataURL={rgbDataURL(112, 85, 175)}
          />
          */}
        </div>
        <h2 className="text-[2rem] md:text-[2rem] font-bold">{alumni.title}</h2>
        <div className='h-1/2 w-full object-scale-down overflow-hidden'>
          <img className="rounded-lg" src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"></img>
        </div>
        <h2 className="text-[1rem] md:text-[2rem] font-semibold text-[#FF4D6F]">{alumni.month}</h2>
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
