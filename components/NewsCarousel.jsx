import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import Carousel from './Carousel';
import 'swiper/css';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const CAROUSEL_CONTAINER = 'text-white rounded-lg w-full h-[30rem] md:w-full swiper-button-white';
const NEWSLETTER_TILE = 'bg-green w-full h-[30rem] md:h-[30rem] rounded-[1rem] items-center px-7 lg:px-5 md:w-full';
const NEWS_BODY = 'md:h-[28rem] h-[28rem] flex flex-col justify-evenly text-center md:px-5';

const NewsTile = (news) => {
  return (
    <a
      href={news.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${NEWSLETTER_TILE} block cursor-pointer`}
    >
      <div className={NEWS_BODY}>
        <h2 className="text-[2rem] md:text-[2rem] font-bold">{news.title}</h2>
        <div className="lg:h-2/3 h-[20rem] w-full overflow-hidden scrollbar-hide rounded-[1rem]">
          <Image
            className="object-cover"
            src={news.image}
            alt="Newsletter Image"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
        <p className="text-[2rem] md:text-[2rem] font-semibold text-pink">
          {news.month}
        </p>
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(news.link, '_blank');
          }}
          className="bg-white text-green rounded-full px-6 py-3 font-semibold hover:bg-lilac hover:text-white transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-2 w-full mx-auto"
        >
          <FontAwesomeIcon icon={faDownload} /> Download Newsletter
        </div>
      </div>
    </a>
  );
};

const NewsCarousel = ({ news }) => {
  return (
    <div className={CAROUSEL_CONTAINER}>
      <Carousel key={news.title}>
        {news.map((item) => (
          <SwiperSlide key={item.title}>
            <NewsTile {...item} />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default NewsCarousel;