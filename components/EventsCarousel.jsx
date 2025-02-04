import Carousel from '../components/Carousel';
import { SwiperSlide } from 'swiper/react';
import styles from '../components/RolesCarousel.module.css';
import 'swiper/css/navigation';
import TextSection from './TextSection';
import Heading from './Heading';
import { EventTileImage } from './EventTileImage';

const CAROUSEL_CONTAINER = 'w-4/5  md:hidden swiper-button swiperContainer relative';
const ARROW_INIT = { left: 'swiper-button-prev', right: 'swiper-button-next' };
const LEFT_NAVIGATION_ARROW = styles.swiperButtonPrev;
const RIGHT_NAVIGATION_ARROW = styles.swiperButtonNext;

const EVENT_TILE = 'flex flex-col h-96 bg-white rounded-3xl items-center px-4 justify-evenly';
const TILE_IMAGE_CONTAINER = 'flex flex-row justify-center md:flex-row md:justify-around lg:justify-center relative';

const EventTile = ({ eventName, description, image }) => {
  const descriptionText = description.content[0].content[0].value || 'Invalid description';

  return (
    <div className={EVENT_TILE}>
      <Heading classes="p-0 text-lg font-medium" underlineType="None">
        {eventName}
      </Heading>
      <div className={TILE_IMAGE_CONTAINER}>
        <div>
          <EventTileImage image={image} />
        </div>
      </div>
      <TextSection classes="text-xs sm:py-2 ">{descriptionText}</TextSection>
    </div>
  );
};

const EventCarousel = ({ upcomingEvent }) => {
  return (
    <div className={CAROUSEL_CONTAINER}>
      <div className={`${ARROW_INIT.left} ${LEFT_NAVIGATION_ARROW}`}></div>
      <Carousel navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next', clickable: true }}>
        {upcomingEvent.map((upcomingEvent) => (
          <SwiperSlide key={upcomingEvent.id}>
            <EventTile {...upcomingEvent} />
          </SwiperSlide>
        ))}
      </Carousel>
      <div className={`${ARROW_INIT.right} ${RIGHT_NAVIGATION_ARROW}`}></div>
    </div>
  );
};

export default EventCarousel;
