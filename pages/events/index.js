import EventsPlaceholder from '../../components/EventsPlaceholder';
import PastEventsCarousel from '../../components/PastEventsCarousel';

const Events = () => {
  const placeholder = 'Events page';
  return (
    <>
      <EventsPlaceholder placeholder={placeholder} />
      <PastEventsCarousel />
    </>
  );
};

export default Events;
