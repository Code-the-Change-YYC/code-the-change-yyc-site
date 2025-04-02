
// import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
// import { fetchContent } from '../api/apiRoot';


const PROFILES_CONTAINER = 'bg-white flex flex-col items-center pt-5';
const EXECUTIVE_LEVEL_CONTAINER = 'flex flex-wrap justify-center w-full gap-x-10 sm:gap-x-20 px-10';
const DUMMY_PFP ="//i.pinimg.com/736x/dd/8b/a9/dd8ba98ba0b06489ac96f76b74fe7fc6.jpg";

const EventsTeam = () => {
// use this when we use api for real
  //   const [eventsTeam, setEventsTeam] = useState([]);
  //   useEffect(() => {
  //     fetchContent('eventsTeamMember').then((data) => setEventsTeam(data));
  //   }, []);
  const eventsTeamLeads = [
    {
      name: 'Alice Johnson',
      position: 'Marketing Lead',
      prevRole: 'Social Media Manager',
      linkedin: 'alicejohnson',
      pfp: { fields: { file: { url: DUMMY_PFP } } },
    },
    {
      name: 'Bob Smith',
      position: 'Brand Strategist',
      linkedin: 'bobsmith',
      pfp: { fields: { file: { url: DUMMY_PFP } } },
    },
  ];
  const eventsTeamMembers = [
    {
      name: 'Alice Johnson',
      position: 'Marketing Lead',
      linkedin: 'alicejohnson',
      pfp: { fields: { file: { url: DUMMY_PFP } } },
    },
    {
      name: 'Bob Smith',
      position: 'Brand Strategist',
      linkedin: 'bobsmith',
      pfp: { fields: { file: { url: DUMMY_PFP } } },
    },
    {
      name: 'Charlie Brown',
      position: 'SEO Specialist',
      linkedin: 'charliebrown',
      pfp: { fields: { file: { url: DUMMY_PFP } } },
    },
  ];

  return (
    <div>
      <div className={PROFILES_CONTAINER}>
        <div className={EXECUTIVE_LEVEL_CONTAINER}>
          {eventsTeamLeads.map((exec) => (
            <Avatar classes="!text-[#00D3A9]" profileContainerClasses='!mx-0 !flex-wrap' key={exec.name} {...exec} />
          ))}
        </div>
      </div>
      <div className={PROFILES_CONTAINER}>
        <div className={EXECUTIVE_LEVEL_CONTAINER}>
          {eventsTeamMembers.map((exec) => (
            <Avatar key={exec.name}{...exec} profileContainerClasses='!mx-0 !flex-wrap' classes="!text-[#00D3A9]" />
          ))}
        </div>
      </div>
    </div>
  );
};


export default EventsTeam;
