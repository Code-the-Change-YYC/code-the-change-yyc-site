import React from "react";
import Heading from "./Heading";
import { UnderlineTypes } from "../utils/underlineType";
import TextSection from "./TextSection";
import Carousel from "./Carousel";
import { EVENTS_IMAGES } from "../data/events";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

const EVENTS_CONTAINER = "flex flex-col items-center h-[65rem] bg-[#BAFBE4] pt-10 shadow-xl z-0";
const CONTENT_CONTAINER = "flex flex-col pt-14 p-5 md:px-32";
const EVENTS_HEADER = "flex flex-row";
const SPACE_BETWEEN_ELEMENTS = 50;

const Events = () => {
  const EventsCarousel = (
    <Carousel
      style={{
        "--swiper-navigation-color": "#FFF",
        "--swiper-navigation-size": "25px",
      }}
      modules={[Navigation]}
      navigation
      spaceBetween={SPACE_BETWEEN_ELEMENTS}
    >
      {EVENTS_IMAGES.map((image) => (
        <SwiperSlide key={image.key}>
          <Image src={image.file} alt={image.key} layout="fill" objectFit="contain" placeholder="blur" />
        </SwiperSlide>
      ))}
    </Carousel>
  );

  return (
    <div className={EVENTS_CONTAINER}>
      <div className={CONTENT_CONTAINER}>
        <div className={EVENTS_HEADER}>
          <Heading underlineType={UnderlineTypes.PURPLE_SHORT_UNDERLINE}>Events</Heading>
        </div>
        <TextSection classes="text-black pb-10 z-20">
          Looking to work with an energetic and enthusiastic group of postsecondary students on improving awareness
          around technology for social impact? We host a variety of workshops and hackathons every year, blending
          together ideas around software development and social good.
        </TextSection>
        <div className="scrollbar-hide overflow-x-auto">
          <EventsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Events;
