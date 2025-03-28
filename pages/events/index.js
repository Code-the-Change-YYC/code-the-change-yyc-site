import HackathonTimeline from '../../components/HackathonTimeline';
import PastEventsCarousel from '../../components/PastEventsCarousel';
import EventsBanner from '../../components/EventsBanner';
import UpcomingEvents from '../../components/UpcomingEvents';
import { fetchContent } from '../../api/apiRoot';
import HackathonLink from '../../components/HackathonLink';



export async function getStaticProps() {
  const upcomingEvent = await fetchContent('upcomingEvents');
  const pastEvent = await fetchContent('pastEvents');
  console.log(upcomingEvent);
  return { props: { upcomingEvent, pastEvent } };
}

const Events = ({ upcomingEvent, pastEvent }) => {
  return (
    <div className="flex flex-col w-full mt-5 md:mt-0 lg:mt-0 ">
      <EventsBanner />
      <UpcomingEvents upcomingEvent={upcomingEvent} />
      <HackathonTimeline />
      <HackathonLink />
      <PastEventsCarousel pastEvent={pastEvent} />
    </div>
  );
};

export default Events;
