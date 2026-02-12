import TextSection from './TextSection';
import Heading from './Heading';
import { EventTileImage } from './EventTileImage';

const EVENTS_TILES_CONTAINER = 'w-4/5 mx-auto flex flex-wrap md:flex hidden';
const EVENT_TILE = 'flex flex-col size-full bg-white rounded-3xl items-center px-4 pt-4 pb-2 justify-evenly';

const EventTile = ({ eventName, description, image }) => {
  const descriptionText = description.content[0].content[0].value;
  return (
    <div className={EVENT_TILE}>
      <Heading classes="" underlineType="None">
        {eventName}
      </Heading>
      <EventTileImage image={image} />
      <TextSection classes=" md:text-md p-10">{descriptionText}</TextSection>
    </div>
  );
};

const EventsTiles = ({ upcomingEvent }) => {
  return (
    <div className={EVENTS_TILES_CONTAINER}>
      {/* First Column (One Large Row) */}
      <div className="w-full lg:w-1/2 p-4">
        <div className={`${EVENT_TILE} h-full`}>
          {upcomingEvent.slice(0, 1).map((upcomingEvent) => (
            <EventTile key={upcomingEvent.id} {...upcomingEvent} />
          ))}
        </div>
      </div>
      {/* Second Column (Two Smaller Rows) */}
      <div className="w-full lg:w-1/2 flex flex-wrap">
        {upcomingEvent.slice(1, 3).map((upcomingEvent) => (
          <div key={upcomingEvent.id} className="w-full lg:h-1/2 p-4">
            <div className={`${EVENT_TILE} `}>
              <EventTile {...upcomingEvent} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsTiles;
