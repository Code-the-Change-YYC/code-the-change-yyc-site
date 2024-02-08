import Carousel from '../components/Carousel';
import { SwiperSlide } from 'swiper/react';
import styles from '../components/RolesCarousel.module.css';
import 'swiper/css/navigation';
import TextSection from './TextSection';
import Heading from './Heading';
import Image from 'next/image';

const CAROUSEL_CONTAINER = 'w-4/5 md:hidden swiper-button swiperContainer relative';
const ARROW_INIT = { left: 'swiper-button-prev', right: 'swiper-button-next' };
const LEFT_NAVIGATION_ARROW = styles.swiperButtonPrev;
const RIGHT_NAVIGATION_ARROW = styles.swiperButtonNext;

const EVENT_TILE = 'flex flex-col h-96 bg-white rounded-3xl items-center px-4 justify-evenly';
const EVENT_SVG = '/svgs/homepage/events.svg';

const EventTile = ({ eventName, description }) => {
  const descriptionText = description.content[0].content[0].value || 'Invalid description';

  return (
    <div className={EVENT_TILE}>
      <Heading classes="text-3xl font-medium" underlineType="None">
        {eventName}
      </Heading>
      <Image src={EVENT_SVG} alt="event image" width={180} height={180} objectFit="cover" />
      <TextSection classes="text-sm pb-10">{descriptionText}</TextSection>
    </div>
  );
};

const EventCarousel = ({ event }) => {
  return (
    <div className={CAROUSEL_CONTAINER}>
      <div className={`${ARROW_INIT.left} ${LEFT_NAVIGATION_ARROW}`}></div>
      <Carousel navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next', clickable: true }}>
        {event.map((event) => (
          <SwiperSlide key={event.id}>
            <EventTile {...event} />
          </SwiperSlide>
        ))}
      </Carousel>
      <div className={`${ARROW_INIT.right} ${RIGHT_NAVIGATION_ARROW}`}></div>
    </div>
  );
};

export default EventCarousel;
