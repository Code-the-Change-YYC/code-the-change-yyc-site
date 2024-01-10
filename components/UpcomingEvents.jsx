import { UnderlineTypes } from '../utils/underlineType';
import Heading from './Heading';
import EventCarousel from './EventsCarousel';

const UpcomingEvents = () => {
  return (
    <div className="flex flex-col items-center bg-orange h-[80vh] z-0">
      <div className="flex items-baseline space-x-4">
        <h1 className="text-white text-3xl font-medium">Upcoming</h1>
        <Heading classes="text-white text-[2.25rem]" underlineType={UnderlineTypes.PURPLE_SHORT_UNDERLINE}>
          Events
        </Heading>
      </div>
      <EventCarousel />
    </div>
  );
};

export default UpcomingEvents;
