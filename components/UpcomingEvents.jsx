import EventsCarousel from './EventsCarousel';
import EventsTiles from './EventsTiles';
import Heading from './Heading';
import { UnderlineTypes } from '../utils/underlineType';

const UpcomingEvents = ({ event }) => {
  return (
    <div className="flex flex-col items-center bg-orange z-0 pb-12 md:pb-16 lg:pb-20">
      <div className="flex items-baseline space-x-4 mb-4">
        <h1 className="text-white text-3xl font-medium">Upcoming</h1>
        <Heading classes="text-white text-[2.25rem]" underlineType={UnderlineTypes.PURPLE_SHORT_UNDERLINE}>
          Events
        </Heading>
      </div>
      <EventsCarousel event={event} />
      <EventsTiles event={event} />
    </div>
  );
};

export default UpcomingEvents;
