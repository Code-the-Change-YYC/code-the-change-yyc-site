import Team from './Team';
import { fetchContent } from '../api/apiRoot';
import { useState, useEffect } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import Heading from './Heading';
import { UnderlineTypes } from '../utils/underlineType';

const positionToGroupMap = {
  'Jr VP Marketing': 'Marketing',
  'VP Marketing': 'Marketing',
  'Jr VP Events': 'Events',
  'VP Events': 'Events',
  'Co President': 'Presidents',
  'Jr VP Design': 'Design',
  'VP Design': 'Design',
  'Jr VP Tech': 'Tech',
  'VP Tech': 'Tech',
  'VP External': 'External',
  'Jr VP External': 'External',
};

const InternalTeam = () => {
  const [executives, setExecutives] = useState([]);
  const [groups, setGroups] = useState([]);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    fetchContent('adminTeamMember').then((data) => {
      const executivesWithGroups = data.map((exec) => ({
        ...exec,
        group: positionToGroupMap[exec.position] || 'Other',
      }));

      setExecutives(executivesWithGroups);

      const uniqueGroups = executivesWithGroups
        .map((exec) => exec.group)
        .filter((group, index, self) => self.indexOf(group) === index);

      setGroups(uniqueGroups);

      if (uniqueGroups.length > 0) {
        setActiveTab(uniqueGroups[0]);
      }
    });
  }, []);

  return (
    <>
      <div className="mb-12 flex justify-center gap-3">
        <Heading distanceFromTop={11} underlineType={UnderlineTypes.PURPLE_SHORT_UNDERLINE}>
          Internal{' '}
        </Heading>
        <span className="text-5xl font-semibold">Team</span>
      </div>
      <div>
        {groups.length > 0 && (
          <Tabs value={activeTab} onChange={(val) => setActiveTab(val)}>
            <TabsHeader className="flex flex-row justify-center">
              {groups.map((group) => (
                <Tab key={group} value={group}>
                  <div
                    className={`rounded-full p-2 px-4 font-medium hover:bg-[#7559fc] hover:text-white transition-all duration-300
                  ${activeTab === group ? 'bg-[#7559fc] text-white' : 'text-black'}
                  `}
                  >
                    {group}
                  </div>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {groups.map((group) => (
                <TabPanel key={group} value={group}>
                  <Team executives={executives.filter((exec) => exec.group === group)} />
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        )}
      </div>
    </>
  );
};

export default InternalTeam;
