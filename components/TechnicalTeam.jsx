import Team from './Team';
import { fetchContent } from '../api/apiRoot';
import { useState, useEffect } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import Heading from './Heading';
import { UnderlineTypes } from '../utils/underlineType';
import { PageIdentifiers } from '../utils/flags';

const TechnicalTeam = () => {
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
    <>
      <div className="mb-12 flex justify-center gap-3">
        <Heading distanceFromTop={11} underlineType={UnderlineTypes.PURPLE_SHORT_UNDERLINE}>
          Technical{' '}
        </Heading>
        <span className="text-5xl font-semibold">Team</span>
      </div>
      {positions.length > 0 && (
        <Tabs value={activeTab}>
          <TabsHeader className="overflow-x-auto grid place-items-center">
            <div className="flex flex-row gap-2 whitespace-nowrap">
              {positions.map((position) => (
                <Tab key={position} value={position} onClick={() => setActiveTab(position)}>
                  <div
                    className={`rounded-full p-2 px-4 font-medium hover:bg-[#7559fc] hover:text-white transition-all duration-200
                  ${activeTab === position ? 'bg-[#7559fc] text-white' : 'text-black'}
                  `}
                  >
                    {position}
                  </div>
                </Tab>
              ))}
            </div>
          </TabsHeader>
          <TabsBody>
            {positions.map((position) => (
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
