import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { fetchContent } from '../api/apiRoot';
import { UnderlineTypes } from '../utils/underlineType';
import Heading from './Heading';

const HACKATHON_TIMELINE_CONTAINER = 'flex justify-center bg-white ';
const HACKATHON_TIMELINE_CONTENT = 'max-w-[500px] w-[80vw] md:max-w-[1100px]';
const HACKATHON_TIMELINE_HEADER = 'md:justify-start md:my-[60px] my-[30px] flex justify-center';

const HACKATHON_EVENT_INFO = 'flex text-center text-xl font-bold mb-[70px] md:items-center flex-col items-center';
const HACKATHON_TITLE_YEAR = 'text-5xl pb-[15px] italic md:text-4xl';
const HACKATHON_IMAGE =
  'object-cover w-[80vw] md:rounded-xl md:w-[450px] md:h-[250px] md:shadow-[15px_15px_0px_0px_#00D3A9]';
const HACKATHON_TEXT = 'flex-col md:w-[400px] md:mx-[40px] leading-[1] text-[20px]';
const HACKATHON_TOPIC_TEXT =
  'flex text-left my-[15px] text-[#FF4D6F] md:text-[#FF6B54] md:my-1 md:font-extrabold md:text-[25px]';

const HackathonSection = ({ hackathon, index }) => {
  let sectionInfoStyling = 'md:flex-row-reverse';
  let sectionTextStyling = 'md:text-right';
  let sectionTopicStyling = 'md:text-right md:justify-end';

  if (index % 2 == 0) {
    sectionInfoStyling = 'md:flex-row md:justify-start';
    sectionTextStyling = 'md:text-left';
    sectionTopicStyling = '';
  }

  const img = 'https:' + hackathon.image.fields.file.url;

  return (
    <div className={`${HACKATHON_EVENT_INFO} ${sectionInfoStyling}`}>
      <div>
        <h1 className={HACKATHON_TITLE_YEAR}>{hackathon.year}</h1>
        <Image className={HACKATHON_IMAGE} src={img} alt={hackathon.title} width={450} height={250} />
      </div>
      <div className={`${HACKATHON_TEXT} ${sectionTextStyling}`}>
        <div className={`${HACKATHON_TOPIC_TEXT} ${sectionTopicStyling}`}>
          <p className="md:hidden pr-[5px]">Topics:</p>
          <p>{hackathon.topic}</p>
        </div>
        <p className="font-medium md:text-[#00D3A9]">{hackathon.blurb}</p>
      </div>
    </div>
  );
};

const HackathonTimeline = () => {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    fetchContent('hackathon').then((data) => {
      const sortedHackathons = [...data].sort((a, b) => {
        const yearA = parseInt(a.year);
        const yearB = parseInt(b.year);
        return yearB - yearA;
      });
      setHackathons(sortedHackathons);
    });
  }, []);

  return (
    <div className={HACKATHON_TIMELINE_CONTAINER}>
      <div className={HACKATHON_TIMELINE_CONTENT}>
        <div className={HACKATHON_TIMELINE_HEADER}>
          <Heading underlineType={UnderlineTypes.GREEN_LONG_UNDERLINE}>Hack the Change</Heading>
        </div>
        {hackathons.map((hackathon, index) => (
          <HackathonSection hackathon={hackathon} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HackathonTimeline;
