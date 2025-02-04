import TextSection from './TextSection';
import Heading from './Heading';
import Image from 'next/image';
import { EventTileImage } from './EventTileImage';

const EVENTS_IMAGE =
  'w-65 h-65 md:w-60 md:h-60 md:mx-4 lg:w-92 lg:h-92 lg:w-1/3 lg:mx-1 object-cover rounded-3xl drop-shadow-md relative';

const EVENTS_TILES_CONTAINER = 'w-4/5 mx-auto flex flex-wrap md:flex hidden';
const EVENT_TILE = 'flex flex-col h-96 bg-white rounded-3xl items-center px-4 justify-evenly';

const EventTile = ({ eventName, description, image }) => {
  const descriptionText = description.content[0].content[0].value;
  return (
    <div className={EVENT_TILE}>
      <Heading classes="text-3xl font-medium" underlineType="None">
        {eventName}
      </Heading>
      <EventTileImage image={image} />
      <TextSection classes="text-sm">{descriptionText}</TextSection>
    </div>
  );
};

const EventsTiles = ({ event }) => {
  return (
    <div className={EVENTS_TILES_CONTAINER}>
      {/* First Column (One Large Row) */}
      <div className="w-full lg:w-1/2 p-4">
        <div className={`${EVENT_TILE} h-full`}>
          {event.slice(0, 1).map((event) => (
            <EventTile key={event.id} {...event} />
          ))}
        </div>
      </div>
      {/* Second Column (Two Smaller Rows) */}
      <div className="w-full lg:w-1/2 flex flex-wrap">
        {event.slice(1, 3).map((event) => (
          <div key={event.id} className="w-full lg:h-1/2 p-4">
            <div className={`${EVENT_TILE} `}>
              <EventTile {...event} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsTiles;
