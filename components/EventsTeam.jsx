
import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import { fetchContent } from '../api/apiRoot';


const PROFILES_CONTAINER = 'bg-white flex flex-col items-center pt-5';
const EXECUTIVE_LEVEL_CONTAINER = 'flex flex-row flex-wrap justify-center w-full sm:w-8/12 mb-5';
const DUMMY_PFP ="//i.pinimg.com/736x/dd/8b/a9/dd8ba98ba0b06489ac96f76b74fe7fc6.jpg";

const EventsTeam = () => {

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
            <Avatar classes="text-[#00D3A9]" key={exec.name} {...exec} />
          ))}
        </div>
      </div>
      <div className={PROFILES_CONTAINER}>
        <div className={EXECUTIVE_LEVEL_CONTAINER}>
          {eventsTeamMembers.map((exec) => (
            <Avatar key={exec.name}{...exec} classes="text-[#00D3A9]" />
          ))}
        </div>
      </div>
    </div>


  );
};


export default EventsTeam;
