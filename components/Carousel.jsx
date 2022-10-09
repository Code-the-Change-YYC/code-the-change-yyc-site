import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

const SPACE_BETWEEN_ELEMENTS = 50;

const Carousel = (props) => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#FFF",
        "--swiper-navigation-size": "25px",
      }}
      modules={[Navigation]}
      navigation
      spaceBetween={SPACE_BETWEEN_ELEMENTS}
      className="mySwiper"
      {...props}
    >
      {props.children}
    </Swiper>
  );
};

export default Carousel;
