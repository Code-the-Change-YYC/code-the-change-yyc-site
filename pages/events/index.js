import EventsPlaceholder from '../../components/EventsPlaceholder';
import HackathonTimeline from '../../components/HackathonTimeline';

const Events = () => {
  const placeholder = 'Events page';
  return (
    <>
      <HackathonTimeline />
      <EventsPlaceholder placeholder={placeholder} />
    </>
  );
};

export default Events;
