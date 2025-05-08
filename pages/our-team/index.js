import UnderConstruction from '../../components/UnderConstruction';
import { underConstruction } from '../../utils/flags';
import MeetOurTeam from '../../components/MeetOurTeam';

const OurTeam = () => {
  return <div>{underConstruction ? <UnderConstruction /> : <MeetOurTeam />}</div>;
};

export default OurTeam;
