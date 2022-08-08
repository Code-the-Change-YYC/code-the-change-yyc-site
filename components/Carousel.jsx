import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

const Carousel = ({ effect, grabCursor, modules, children }) => {
  return (
    <>
      <Swiper effect={effect} grabCursor={grabCursor} modules={modules} className="mySwiper">
        {children}
      </Swiper>
    </>
  );
};

export default Carousel;
