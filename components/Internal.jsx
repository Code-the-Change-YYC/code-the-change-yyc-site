
import Heading from '/components/Heading';
import { UnderlineTypes } from '../utils/underlineType';
import Image from 'next/image';
import EventsTeam from './EventsTeam';


const INTERNAL_TEAM = 'flex flex-col pt-20 pb-50';
const GREEN_SIDE_LINES_DIR = '/svgs/our-team/green_lines.svg';
const INTERNAL_TITLE = "flex items-baseline space-x-4 mb-4 py-5 justify-center";


const Internal = () => {
  return (
    <div id="internal" className={INTERNAL_TEAM}>
      <div className={INTERNAL_TITLE}>
        <Image src={GREEN_SIDE_LINES_DIR} alt="" width="30" height="25" className="pb-4" />
        <Heading underlineType={UnderlineTypes.GREEN_SHORT_UNDERLINE}>Internal</Heading>
        <h1 className='text-5xl font-semibold'>Team</h1>
      </div>
      <EventsTeam/>
    </div>

  );
};


export default Internal;
