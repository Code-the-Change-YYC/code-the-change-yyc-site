import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import Tile from '../components/Tile';
import TextSection from './TextSection';
import Carousel from '../components/Carousel';
import { PAST_EVENTS } from '../data/events';
import styles from '../components/RolesCarousel.module.css';
import Heading from "./Heading";
import { UnderlineTypes } from "../utils/underlineType";
import Link from "next/link";
import 'swiper/css/navigation';

const CAROUSEL_CONTAINER = styles.swiperContainer;
const TILE_CONTAINER = 'flex flex-col lg:h-[650px] md:flex-column rounded-[1.875rem] p-[1.875rem]';
const TILE_TEXT_CONTAINER = 'basis-3/5 md:basis-3/5 lg:basis-3/5 text-center md:py-10 ';
const TILE_TEXT_SPACING = 'lg:space-y-48 py-5';
const ARROW_INIT = { left: 'swiper-button-prev', right: 'swiper-button-next' };
const LEFT_NAVIGATION_ARROW = styles.swiperButtonPrev;
const RIGHT_NAVIGATION_ARROW = styles.swiperButtonNext;

const PAST_EVENTS_CONTAINER = 'bg-[#00D3A9] pb-10';
const PAST_EVENTS_CONTENT = 'px-10 md:px-24 lg:px-48 py-20';
const PAST_EVENTS_HEADER = "flex flex-row";

const LONG_SQUIGGLY_LINE_SVG = "/svgs/events/long_events_squiggly_line.svg";


const TILE_IMAGE_CONTAINER = "flex flex-row justify-center md:flex-row md:justify-around lg:justify-center relative";


const PastEventsTile = ({ event }) => (
  <Tile classes={TILE_CONTAINER}>
    <div className={TILE_IMAGE_CONTAINER}>
      <div >
        <Image 
          className="w-50 h-50 p-2 md:w-60 md:h-60 lg:w-62 lg:h-62 mx-1 lg:mx-3 rounded-3xl drop-shadow-md relative "
          src={event.img1} 
          alt={event.name} 
        />
      </div>
      <div className="hidden md:block lg:block">
        <Image 
          className="w-40 h-40 p-2 md:w-60 md:h-60 lg:w-62 lg:h-62 mx-1 lg:mx-3 rounded-3xl drop-shadow-md relative"
          src={event.img2} 
          alt={event.name} 
        />
      </div>
      <div className="hidden md:hidden lg:block">
        <Image 
          className="w-40 h-40 p-2 md:w-60 md:h-60 lg:w-92 lg:h-92 mx-1 lg:mx-3 rounded-3xl drop-shadow-md relative"
          src={event.img3} 
          alt={event.name} 
        />
      </div>
    </div>
    <div className={TILE_TEXT_CONTAINER}>
      <h2 className="text-4xl md:text-6xl xl:text-6xl font-medium italic">{event.name}</h2>
      <div className={TILE_TEXT_SPACING}>
        <p className="text-[1.5em] md:text-[2rem] xl:text-[2rem] font-[500] py-3">{event.blurb}</p>
      </div>
    </div>
  </Tile>
);

const PastEventsCarousel = () => {
  return (
    <div className={PAST_EVENTS_CONTAINER}>
      <div className={PAST_EVENTS_CONTENT}>
        <div className={PAST_EVENTS_HEADER}>
          <Heading classes="text-white" underlineType={UnderlineTypes.PURPLE_SHORT_UNDERLINE}>Past Events</Heading>
        </div>
        <TextSection classes="text-white">Here is an archive of some of the cool events we have held in the past! Whether you are interested in joining our team or attending one of our events,{" "}
          <Link href="/contact" className="text-[#7055FD]">please feel free to reach out to us!</Link>
        </TextSection>
        <div className={CAROUSEL_CONTAINER}>
          <div className={`${ARROW_INIT.left} ${LEFT_NAVIGATION_ARROW}`}></div>
          <Carousel navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next', clickable: true }}>
            {PAST_EVENTS.map((event) => (
              <SwiperSlide key={event.name}>
                <PastEventsTile event={event} />
              </SwiperSlide>
            ))}
          </Carousel>
          <div className={`${ARROW_INIT.right} ${RIGHT_NAVIGATION_ARROW}`}></div>
        </div>
      </div>
      <div className="my-10 w-full h-32 xl:h-64 relative">
        <Image src={LONG_SQUIGGLY_LINE_SVG} alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};


export default PastEventsCarousel;
