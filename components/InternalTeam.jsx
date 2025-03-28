
import Heading from '/components/Heading';
import { UnderlineTypes } from '../utils/underlineType';
import Image from 'next/image';
import EventsTeam from './EventsTeam';

// internal team
// page drop down add our team mini
// bottom padding
const INTERNAL_TEAM = 'flex flex-col pt-10 pb-20';
const GREEN_SIDE_LINES_DIR = '/svgs/our-team/green_lines.svg';
const INTERNAL_TITLE = "flex flex-wrap items-center items-baseline gap-x-2 mb-4 pt-5 mx-5 justify-center text-center";


const InternalTeam = () => {
  const [executives, setExecutives] = useState([]);
  const [positions, setPositions] = useState([]);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    fetchContent('adminTeamMember').then((data) => {
      setExecutives(data);

      const uniquePositions = data
        .map((exec) => exec.position)
        .filter((pos, index, self) => self.indexOf(pos) === index);
      setPositions(uniquePositions);

      if (uniquePositions.length > 0) {
        setActiveTab(uniquePositions[0]);
      }
    });
  }, []);
  
  return (
    <div id="internal" className={INTERNAL_TEAM}>
      <div className={INTERNAL_TITLE}>
        <div className='flex gap-x-3 items-baseline justify-center'>
          <Image src={GREEN_SIDE_LINES_DIR} alt="" width="30" height="25" className="pb-4" />
          <Heading underlineType={UnderlineTypes.GREEN_SHORT_UNDERLINE}>Internal</Heading>
        </div>
        <h1 className='text-5xl font-semibold'>Team</h1>
      </div>
      <EventsTeam/>
    </div>

  );
};


export default InternalTeam;
