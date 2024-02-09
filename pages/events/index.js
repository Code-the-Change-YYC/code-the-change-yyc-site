import HackathonTimeline from '../../components/HackathonTimeline';

import EventsBanner from '../../components/EventsBanner';
import UpcomingEvents from '../../components/UpcomingEvents';
import { fetchContent } from '../../api/apiRoot';

export async function getStaticProps() {
  const event = await fetchContent('upcomingEvents');
  return { props: { event } };
}

const Events = ({ event }) => {
  // const placeholder = 'Events page';
  return (
    // <div className="flex flex-col w-full mt-5 md:mt-0 lg:mt-0">
    <div className="flex flex-col w-full mt-5 md:mt-0 lg:mt-0 ">
      {/* For each section here, try to do it as a component then just import here so it's easier to work on.
			Below are just sample names, if you think it should use a better name, feel free to change it
			
			<UpcomingEvents/>
			<HackathonTimeline/>
			<PastEvents/>
		
      <h1 className="m-auto text-3xl text-center">
        We`re currently building the <b>Events Page</b> so stay tuned! 👀
      </h1> */}
      <EventsBanner />
      <UpcomingEvents event={event} />
      <HackathonTimeline />
    </div>
  );
};

export default Events;
