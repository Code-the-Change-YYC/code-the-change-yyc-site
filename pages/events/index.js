import HackathonTimeline from '../../components/HackathonTimeline';
import PastEventsCarousel from '../../components/PastEventsCarousel';
import EventsBanner from '../../components/EventsBanner';
import UpcomingEvents from '../../components/UpcomingEvents';
import { fetchContent } from '../../api/apiRoot';

export async function getStaticProps() {
  const event = await fetchContent('upcomingEvents');
  const pastEvent = await fetchContent('pastEvents');
  console.log(event);
  return { props: { event, pastEvent } };
}

const Events = ({ event, pastEvent }) => {
  return (
    <div className="flex flex-col w-full mt-5 md:mt-0 lg:mt-0 ">
      <EventsBanner />
      <UpcomingEvents event={event} />
      <HackathonTimeline />
      <PastEventsCarousel pastEvent={pastEvent} />
    </div>
  );
};

export default Events;
