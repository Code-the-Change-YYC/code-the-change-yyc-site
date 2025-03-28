import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import Carousel from './Carousel';
import 'swiper/css';
import 'swiper/css/navigation';

const CAROUSEL_CONTAINER = 'text-white rounded-lg w-full h-[30rem] md:w-full swiper-button-white';
const NEWSLETTER_TILE =
  'bg-[#00BA95] w-full h-[30rem] md:h-[30rem] rounded-[1rem] items-center px-7 lg:px-5 md:w-full';
const NEWS_BODY = 'md:h-[28rem] h-[28rem] flex flex-col justify-evenly text-center md:px-5';

const NewsTile = (news) => {

  return (
    <div className={NEWSLETTER_TILE}>
      <div className={NEWS_BODY}>
        <h2 className="text-[2rem] md:text-[2rem] font-bold">{news.title}</h2>
        <div className='lg:h-2/3 h-[20rem] w-full overflow-hidden scrollbar-hide rounded-[1rem]'>
          <Image
            className='object-cover' 
            src={news.image} 
            alt="Newsletter Image" 
            width={500} 
            height={300} 
            layout="responsive"/>
        </div>
        <a href={news.link} className="text-[2rem] md:text-[2rem] font-semibold text-[#FF4D6F]" download={news.pdf_name}>{news.month}</a>
      </div>

    </div>
  );
};

const NewsCarousel = ({ news }) => {
  return (
    <div className={CAROUSEL_CONTAINER}>
      <Carousel key={news.title}>
        {news.map((news) => (
          <SwiperSlide key={news.title}>
            <NewsTile {...news} />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
