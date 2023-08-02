const Events = () => {
  return (
    <div className="flex flex-col w-full h-screen mt-5 md:mt-0 lg:mt-0 items-center">
      {/* 
			For each section here, try to do it as a component then just import here so it's easier to work on.
			Below are just sample names, if you think it should use a better name, feel free to change it
			
			<UpcomingEvents/>
			<HackathonTimeline/>
			<PastEvents/>
		*/}
      <h1 className="m-auto text-3xl text-center">
        We're currently building the <b>Events Page</b> so stay tuned! 👀
      </h1>
    </div>
  );
};

export default Events;
