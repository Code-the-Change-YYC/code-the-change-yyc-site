import TextSection from './TextSection';
import Heading from './Heading';
import { UnderlineTypes } from '../utils/underlineType';
import { useRef } from 'react';
import InternalTeam from './InternalTeam';
import TechnicalTeam from './TechnicalTeam';
import AlumniSection from './AlumniSection';

const MEET_OUR_TEAM = 'flex flex-col bg-pink pt-10 z-0 w-full';
const CONTENT_CONTAINER = 'flex flex-col pt-5 p-5 md:px-32';
const MEET_OUR_AMAZING_TEAM_TITLE =
  'flex flex-wrap items-baseline gap-x-2 pt-5 justify-center w-fit mx-20 sm:mx-20 md:mx-auto lg:mx-auto';

const Button = ({ classes = '', children, targetRef }) => {
  return (
    <button
      onClick={() => {
        if (targetRef?.current) {
          const yOffset = -50;
          const y = targetRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }}
      className={`cursor-pointer rounded-full text-white border-white py-2 px-8 bg-brightPink border-4 text-3xl font-semibold w-48 ${classes}`}
    >
      {children}
    </button>
  );
};

const MeetOurAmazingTeam = () => {
  const internalRef = useRef(null);
  const technicalRef = useRef(null);
  const alumniRef = useRef(null);

  return (
    <div>
      <div className={MEET_OUR_TEAM}>
        <div className={MEET_OUR_AMAZING_TEAM_TITLE}>
          <h1 className="text-5xl font-semibold">Meet our</h1>
          <Heading
            distanceFromTop={13}
            classes="italic whitespace-nowrap"
            underlineType={UnderlineTypes.PINK_UNDERLINE}
          >
            Amazing
          </Heading>
          <h1 className="text-5xl font-semibold ml-2"> Team</h1>
        </div>
        <div className={CONTENT_CONTAINER}>
          <TextSection classes="text-black pb-10 w-fit justify-center text-center mx-10 sm:mx-20 md:mx-auto lg:mx-auto">
            We’re a passionate group of student developers, designers, and leaders dedicated to building impactful
            software solutions for nonprofits at the University of Calgary. As a student-led organization, our team is
            divided into different teams that handle software development and events. We’re also proud to highlight our
            Alumni, whose contributions helped shape the club and continue to inspire our mission beyond campus.
          </TextSection>
          <div className="pt-5 pb-12 flex justify-center gap-6 mx-auto flex-col sm:flex-row">
            <Button targetRef={internalRef} timeout={500}>
              Internal
            </Button>
            <Button targetRef={technicalRef} timeout={1000}>
              Technical
            </Button>
            <Button targetRef={alumniRef} timeout={1000}>
              Alumni
            </Button>
          </div>
        </div>
      </div>

      <section id="internal" ref={internalRef} className="min-h-screen p-12">
        <InternalTeam />
      </section>
      <section id="technical" ref={technicalRef} className="min-h-screen p-12 bg-[#bcfbe4]">
        <TechnicalTeam />
      </section>
      <section id="alumni" ref={alumniRef} className="min-h-screen p-12 bg-[#7055FD]">
        <AlumniSection />
      </section>
    </div>
  );
};

export default MeetOurAmazingTeam;
