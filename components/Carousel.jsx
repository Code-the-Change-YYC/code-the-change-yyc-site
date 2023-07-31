import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination"

const SPACE_BETWEEN_ELEMENTS = 50;

const Carousel = (props) => {
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
      {props.children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
