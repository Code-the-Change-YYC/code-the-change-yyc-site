import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import { SwiperSlide } from 'swiper/react';
import TextSection from './TextSection';
import Heading from './Heading';
import { fetchContent } from '../api/apiRoot';
import Image from 'next/image';

// const events = [
//   {
//     id: 1,
//     name: 'Event Name',
//     description: 'Our biggest event to date It saw students from all over Canada come up with innovative solutions',
//   },
//   {
//     id: 2,
//     name: 'Event Name',
//     description: 'Our biggest event to date It saw students from all over Canada come up with innovative solutions',
//   },
//   {
//     id: 3,
//     name: 'Event Name',
//     description:
//       'Our biggest event to date It saw students from all over Canada come up with innovative solution hfkjsdhfkajldfhla kfhewiuo akjlsfhakjdlf hsdklf hsadklf hsdakjl hasdk',
//   },
// ];

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

const EventCarousel = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchContent('upcomingEvents').then((data) => setEvents(data));
  }, []);

  return (
    // <div className={CAROUSEL_CONTAINER}>
    //   <Carousel>
    //     {events.map((values, index) => (
    //       <SwiperSlide key={index}>
    //         <EventTile {...values} />
    //       </SwiperSlide>
    //     ))}
    //   </Carousel>
    // </div>
    <div className={CAROUSEL_CONTAINER}>
      <Carousel>
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <EventTile {...event} />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default EventCarousel;
