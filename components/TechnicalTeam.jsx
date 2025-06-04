import Team from './Team';
import { fetchContent } from '../api/apiRoot';
import { useState, useEffect } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import Heading from './Heading';
import { UnderlineTypes } from '../utils/underlineType';
import { PageIdentifiers } from '../utils/flags';

const TABS_STYLES = "flex flex-row text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] justify-center px-auto lg:px-10 md:px-16 gap-2 lg:pb-10 pb-5 overflow-auto scrollbar-webkit @support scrollbar-thin";

const TechnicalTeam = () => {
  const [executives, setExecutives] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    fetchContent('technicalTeam').then((data) => {
      setExecutives(data);

      const uniqueProjects = data.map((exec) => exec.project).filter((pos, index, self) => self.indexOf(pos) === index);
      setProjects(uniqueProjects);

      if (uniqueProjects.length > 0) {
        setActiveTab(uniqueProjects[0]);
      }
    });
  }, []);

  return (
    <>
      <div className="mb-12 flex justify-center gap-3">
        <Heading distanceFromTop={11} underlineType={UnderlineTypes.PURPLE_SHORT_UNDERLINE}>
          Technical{' '}
        </Heading>
        <span className="text-5xl font-semibold">Team</span>
      </div>
      {projects.length > 0 && (
        <Tabs value={activeTab}>
          <TabsHeader 
            className={TABS_STYLES}
            style={{
              "--scrollbar-thumb-colour": "#7559fc",
              "--scrollbar-track-colour": "#9FDEC8",
            }}
          >
            <div className="flex flex-row gap-2 whitespace-nowrap">
              {projects.map((position) => (
                <Tab className={`rounded-full lg:mx-4 max-w-[12rem] hover:bg-[#7559fc] hover:text-white py-2 px-4 lg:mx-4 font-medium text-black transition-all duration-200 ${
                  activeTab === position
                    ? 'bg-[#7559fc] text-white'
                    : 'text-black'
                }`} key={position} value={position} onClick={() => setActiveTab(position)}>
                  {position}
                </Tab>
              ))}
            </div>
          </TabsHeader>
          <TabsBody>
            {projects.map((position) => (
              <TabPanel key={position} value={position}>
                <Team
                  teamIdentifier={PageIdentifiers.EXECUTIVE_LEVEL_CONTAINER}
                  teamMembers={executives.filter((exec) => exec.position === position)}
                />
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      )}
    </>
  );
};

export default TechnicalTeam;
