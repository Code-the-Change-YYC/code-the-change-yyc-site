import TextSection from '/components/TextSection.jsx';
import Heading from '/components/Heading';
import { UnderlineTypes } from '../../utils/underlineType';

const MEET_OUR_TEAM = 'flex flex-col h-[95rem] bg-[#FFD2DC] pt-10 z-0';
const CONTENT_CONTAINER = 'flex flex-col pt-14 p-5 md:px-32';


const OurTeam = () => {
  return (
    <div>
      <div className={MEET_OUR_TEAM}>
        <Heading underlineType={UnderlineTypes.PINK_UNDERLINE}>Meet Our <i>Amazing</i> Team</Heading>
        <div className={CONTENT_CONTAINER}>
          <TextSection classes="text-black pb-10 z-20">
          insert text
          </TextSection>
        </div>
      </div>
    </div>
    
  );
};

export default OurTeam;
