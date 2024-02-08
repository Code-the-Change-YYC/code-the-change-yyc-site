import { UnderlineTypes } from '../utils/underlineType';
import Heading from './Heading';
import TextSection from './TextSection';

const options = [
  { name: 'Upcoming', id: 'upcoming-events' },
  { name: 'Hackathon', id: 'hackathon-events' },
  { name: 'Past', id: 'past-events' },
];

const LIST_ITEM_STYLE = 'text-white text-3xl font-medium w-[70vw] py-4 hover:cursor-pointer';

const EventsBanner = () => {
  const handleClick = () => {};

  return (
    <div className="flex flex-col bg-lilac text-center items-center pb-12 md:py-12">
      <Heading classes="text-white text-4xl" underlineType={UnderlineTypes.BEIGE_SHORT_UNDERLINE}>
        Events
      </Heading>
      <ul className="md:hidden">
        {options.map((option, index) => (
          <li
            key={index}
            className={`${LIST_ITEM_STYLE} ${index < options.length - 1 ? 'border-b-2 border-white' : ''}`}
            onClick={() => handleClick(option.id)}
          >
            {option.name}
          </li>
        ))}
      </ul>
      <TextSection classes="text-sm  sm:text-base md:text-xl text-white w-3/4">
        Looking to work with an energetic and enthusiastic group of postsecondary students on improving awareness around
        technology for social impact? We host a variety of workshops and hackathons every year, blending together ideas
        around software development and social good.
      </TextSection>
    </div>
  );
};

export default EventsBanner;
