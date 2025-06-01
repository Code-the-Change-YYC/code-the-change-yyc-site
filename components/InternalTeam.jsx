import Team from './Team';
import { fetchContent } from '../api/apiRoot';
import { useState, useEffect } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import Heading from './Heading';
import { UnderlineTypes } from '../utils/underlineType';
import { PageIdentifiers } from '../utils/flags';

const TABS_STYLES = "flex flex-row text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] justify-center px-auto lg:px-10 md:px-16 gap-2 lg:pb-10 pb-5 overflow-auto scrollbar-webkit @support scrollbar-thin";

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
        <Heading distanceFromTop={11} underlineType={UnderlineTypes.GREEN_SHORT_UNDERLINE}>
          Internal{' '}
        </Heading>
        <span className="text-5xl font-semibold">Team</span>
      </div>
      {groups.length > 0 && (
        <Tabs value={activeTab}>
          <TabsHeader 
            className={TABS_STYLES}
            style={{
              "--scrollbar-thumb-colour": "rgb(0, 211, 169)",
              "--scrollbar-track-colour": "rgb(235, 235, 235)",
            }}
          >
            <div className="flex flex-row gap-2">
              {groups.map((group) => (
                <Tab className={`flex-1 min-w-max rounded-full lg:mx-4 px-4 py-2 font-medium hover:bg-[#00BA95] hover:text-white transition-all duration-200 ${
                  activeTab === group 
                    ? 'bg-[#00BA95] text-white' 
                    : 'text-black'
                }`} key={group} value={group} onClick={() => setActiveTab(group)}
                >
                  {group}
                </Tab>
              ))}
            </div>
          </TabsHeader>
          <TabsBody>
            {groups.map((group) => (
              <TabPanel key={group} value={group}>
                <Team
                  teamIdentifier={PageIdentifiers.INTERNAL_LEVEL_CONTAINER}
                  teamMembers={executives.filter((exec) => exec.group === group)}
                />
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      )}
    </>
  );
};

export default InternalTeam;
