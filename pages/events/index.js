<<<<<<< HEAD
import EventsPlaceholder from '../../components/EventsPlaceholder';
=======
import EventsBanner from '../../components/EventsBanner';
import UpcomingEvents from '../../components/UpcomingEvents';
>>>>>>> 15202da (add events banner section)

const Events = () => {
  const placeholder = 'Events page';
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <>
      <EventsPlaceholder placeholder={placeholder} />
    </>
=======
    <div className="flex flex-col w-full h-screen mt-5 md:mt-0 lg:mt-0">
=======
    <div className="flex flex-col w-full mt-5 md:mt-0 lg:mt-0">
>>>>>>> 622fb4c (wip)
=======
    // <div className="flex flex-col w-full mt-5 md:mt-0 lg:mt-0">
    <div className="flex flex-col w-full mt-5 md:mt-0 lg:mt-0 ">
>>>>>>> ace249f (Add large screen responsiveness to upcoming events)
      {/* For each section here, try to do it as a component then just import here so it's easier to work on.
			Below are just sample names, if you think it should use a better name, feel free to change it
			
			<UpcomingEvents/>
			<HackathonTimeline/>
			<PastEvents/>
		
      <h1 className="m-auto text-3xl text-center">
        We`re currently building the <b>Events Page</b> so stay tuned! 👀
      </h1> */}
      <EventsBanner />
      <UpcomingEvents />
    </div>
>>>>>>> 15202da (add events banner section)
  );
};

export default Events;
