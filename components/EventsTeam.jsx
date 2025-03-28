
import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import { fetchContent } from '../api/apiRoot';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import Team from './Team';

const PROFILES_CONTAINER = 'bg-white flex flex-col items-center pt-5';
const EXECUTIVE_LEVEL_CONTAINER = 'flex flex-wrap justify-center w-full gap-x-10 sm:gap-x-20 px-10';
const DUMMY_PFP ="//i.pinimg.com/736x/dd/8b/a9/dd8ba98ba0b06489ac96f76b74fe7fc6.jpg";

const EventsTeam = () => {
// use this when we use api for real
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

  // dummy data, delete later
  // const eventsTeamLeads = [
  //   {
  //     name: 'Alice Johnson',
  //     position: 'Marketing Lead',
  //     prevRole: 'Social Media Manager',
  //     linkedin: 'alicejohnson',
  //     pfp: { fields: { file: { url: DUMMY_PFP } } },
  //   },
  //   {
  //     name: 'Bob Smith',
  //     position: 'Brand Strategist',
  //     linkedin: 'bobsmith',
  //     pfp: { fields: { file: { url: DUMMY_PFP } } },
  //   },
  // ];
  // const eventsTeamMembers = [
  //   {
  //     name: 'Alice Johnson',
  //     position: 'Marketing Lead',
  //     linkedin: 'alicejohnson',
  //     pfp: { fields: { file: { url: DUMMY_PFP } } },
  //   },
  //   {
  //     name: 'Bob Smith',
  //     position: 'Brand Strategist',
  //     linkedin: 'bobsmith',
  //     pfp: { fields: { file: { url: DUMMY_PFP } } },
  //   },
  //   {
  //     name: 'Charlie Brown',
  //     position: 'SEO Specialist',
  //     linkedin: 'charliebrown',
  //     pfp: { fields: { file: { url: DUMMY_PFP } } },
  //   },
  // ];

  return (
    <div>
      <div>
        {positions.length > 0 && (
          <Tabs value={activeTab} onChange={(val) => setActiveTab(val)}>
            <TabsHeader className="flex flex-row justify-items-center px-60">
              {positions.map((position) => (
                <Tab className="team-tab rounded-full p-1 font-medium !hover:bg-green-100" key={position} value={position}>
                  {position}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {positions.map((position) => (
                <TabPanel key={position} value={position}>
                  <Team executives={executives.filter((exec) => exec.position === position)} />
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        )}
      </div>
      {/* <div className={PROFILES_CONTAINER}>
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
      </div> */}
    </div>
  );
};


export default EventsTeam;
