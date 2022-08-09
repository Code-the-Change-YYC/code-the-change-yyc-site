import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

const Carousel = (props) => {
  return (
    <Swiper className="mySwiper" {...props}>
      {props.children}
    </Swiper>
  );
};

export default Carousel;
