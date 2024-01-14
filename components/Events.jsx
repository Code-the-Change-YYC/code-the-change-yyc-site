import React from "react";
import Heading from "./Heading";
import { UnderlineTypes } from "../utils/underlineType";
import TextSection from "./TextSection";
import Carousel from "./Carousel";
import { EVENTS_IMAGES } from "../data/events";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const EVENTS_CONTAINER = "flex flex-col h-[95rem] bg-[#BAFBE4] pt-10 z-0";
const CONTENT_CONTAINER = "flex flex-col pt-14 p-5 md:px-32";
const CAROUSEL_CONTAINER = "text-white rounded-lg h-[40rem] shadow-2xl";
const EVENTS_HEADER = "flex flex-row";

const LONG_SQUIGGLY_LINE_SVG = "/svgs/events/long_events_squiggly_line.svg";

const Events = () => {
  const EventsCarousel = () => (
    <div className={CAROUSEL_CONTAINER}>
      <Carousel>
        {EVENTS_IMAGES.map((image) => (
          <SwiperSlide key={image.key}>
            <div className="h-[40rem] relative rounded-lg overflow-hidden">
              <Image src={image.file} alt={image.key} layout="fill" objectFit="cover" placeholder="blur" />
            </div>
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );

  return (
    <div className={EVENTS_CONTAINER}>
      <div className={CONTENT_CONTAINER}>
        <div className={EVENTS_HEADER}>
          <Heading underlineType={UnderlineTypes.PURPLE_SHORT_UNDERLINE}>Events</Heading>
        </div>
        <TextSection classes="text-black pb-10 z-20">
          Looking to work with an energetic and enthusiastic group of undergraduate students and industry mentors on
          improving awareness around technology for social impact? We host a variety of workshops and hackathons every
          year, blending together ideas around software development and social good.
        </TextSection>
        <EventsCarousel />
        <TextSection classes="text-black z-20 pt-10">
          Whether you are interested in joining our team or attending one of our events,{" "}
          <Link href="/contact" className="text-[#7055FD]">please feel free to reach out to us!</Link>
        </TextSection>
      </div>
      <div className="my-10 w-full h-56 xl:h-96 relative">
        <Image src={LONG_SQUIGGLY_LINE_SVG} alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Events;
