import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { useRef } from "react";

const SPACE_BETWEEN_ELEMENTS = 50;

const Carousel = ({ children, className='', ...props }) => {
  const isPresidentCarousel = String(className).includes("president-carousel");
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (isPresidentCarousel) {
    return (
      <div className="relative w-full flex items-center justify-center">
        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute z-10 left-[-2rem] md:left-[-4rem] top-1/2 -translate-y-1/2"
        >
          <div className="swiper-button-prev"></div>
        </button>
        <button
          ref={nextRef}
          className="absolute z-10 right-[-2rem] md:right-[-4rem] top-1/2 -translate-y-1/2"
        >
          <div className="swiper-button-next"></div>
        </button>

        <Swiper
          style={{
            "--swiper-navigation-color": "#FFF",
            "--swiper-navigation-size": "25px",
            "--swiper-pagination-color": "#FFF",
          }}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{ clickable: true }}
          spaceBetween={SPACE_BETWEEN_ELEMENTS}
          className={`mySwiper ${className}`}
          {...props}
        >
          {children.map((child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#FFF",
        "--swiper-navigation-size": "25px",
        "--swiper-pagination-color": "#FFF",
      }}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={SPACE_BETWEEN_ELEMENTS}
      className="mySwiper"
      {...props}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
