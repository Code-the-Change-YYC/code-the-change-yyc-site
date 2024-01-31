import Carousel from './Carousel';
import { SwiperSlide } from 'swiper/react';
import TextSection from './TextSection';
import Heading from './Heading';
import Image from 'next/image';

const CAROUSEL_CONTAINER = 'w-4/5 md:hidden';
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
      <TextSection classes="text-sm">{descriptionText}</TextSection>
    </div>
  );
};

const EventCarousel = ({ event }) => {
  return (
    <div className={CAROUSEL_CONTAINER}>
      <Carousel>
        {event.map((event) => (
          <SwiperSlide key={event.id}>
            <EventTile {...event} />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default EventCarousel;
