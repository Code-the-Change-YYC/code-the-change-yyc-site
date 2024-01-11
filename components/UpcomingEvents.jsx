import { UnderlineTypes } from '../utils/underlineType';
import Heading from './Heading';
import EventsCarousel from './EventsCarousel';
import EventsTiles from './EventsTiles';

const UpcomingEvents = () => {
  return (
    <div className="flex flex-col items-center bg-orange h-[80vh] md:h-[200vh] lg:h-[135vh] z-0">
      <div className="flex items-baseline space-x-4">
        <h1 className="text-white text-3xl font-medium">Upcoming</h1>
        <Heading classes="text-white text-[2.25rem]" underlineType={UnderlineTypes.PURPLE_SHORT_UNDERLINE}>
          Events
        </Heading>
      </div>
      <EventsCarousel />
      <EventsTiles />
    </div>
  );
};

export default UpcomingEvents;
