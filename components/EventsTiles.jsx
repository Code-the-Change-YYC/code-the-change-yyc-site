import TextSection from './TextSection';
import Heading from './Heading';

const events = [
  {
    id: 1,
    name: 'Event Name',
    description: 'Our biggest event to date It saw students from all over Canada come up with innovative solutions',
  },
  {
    id: 2,
    name: 'Event Name',
    description: 'Our biggest event to date It saw students from all over Canada come up with innovative solutions',
  },
  {
    id: 3,
    name: 'Event Name',
    description:
      'Our biggest event to date It saw students from all over Canada come up with innovative solution hfkjsdhfkajldfhla kfhewiuo akjlsfhakjdlf hsdklf hsadklf hsdakjl hasdk',
  },
];

const EVENTS_TILES_CONTAINER = 'w-4/5 mx-auto flex flex-wrap hidden md:flex';
const EVENT_TILE = 'flex flex-col h-96 bg-white rounded-3xl items-center px-4 justify-evenly';

const EventTile = ({ name, description }) => {
  return (
    <div className={EVENT_TILE}>
      <Heading classes="text-3xl font-medium" underlineType="None">
        {name}
      </Heading>
      <div className="bg-lilac h-24 w-24"></div>
      <TextSection classes="text-sm">{description}</TextSection>
    </div>
  );
};

const EventsTiles = () => {
  return (
    <div className={EVENTS_TILES_CONTAINER}>
      {events.map((values, index) => (
        <div key={index} className="w-full md:w-1/3 p-4">
          <EventTile {...values} />
        </div>
      ))}
    </div>
  );
};

export default EventsTiles;
