import { useEffect, useState } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import { PageIdentifiers } from '../utils/flags';
import { UnderlineTypes } from '../utils/underlineType';
import Heading from './Heading';
import Team from './Team';
import { apiRoot } from '../api/apiRoot';

const InternalTeam = () => {
  const [executives, setExecutives] = useState([]);
  const [teams, setTeams] = useState([]);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const executives = await apiRoot.getEntries({ content_type: 'adminTeamMember', include: 2 });

        const transformedMembers = executives.items.map((entry) => {
          const member = entry.fields;
          
          return {
            name: member.name,
            pfp: member.pfp,
            team: member.team,
            position: member.position,
            linkedin: member.linkedin,
            isTeamLead: member.isTeamLead || false,
          };
        });

        setExecutives(transformedMembers);
        
        const uniqueteams = transformedMembers.map((exec) => exec.team).filter(
          (team, index, self) => self.indexOf(team) === index
        );
        
        setTeams(uniqueteams);

        if (uniqueteams.length > 0) {
          setActiveTab(uniqueteams[0]);
        }
      } catch (error) {
        console.error('Error fetching executive data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="mb-12 flex justify-center gap-3">
        <Heading distanceFromTop={11} underlineType={UnderlineTypes.GREEN_SHORT_UNDERLINE}>
          Internal{' '}
        </Heading>
        <span className="text-5xl font-semibold">Team</span>
      </div>
      {teams.length > 0 && (
        <Tabs value={activeTab}>
          <div
            className="overflow-x-auto grid place-items-center scrollbar-webkit @support scrollbar-thin"
            style={{
              '--scrollbar-thumb-colour': '#00D3A9',
            }}
          >
            <TabsHeader className="flex flex-row gap-2 pb-2 whitespace-nowrap">
              {teams.map((team) => {
                return (
                  <Tab key={team} value={team} onClick={() => setActiveTab(team)}>
                    <div
                      className={`rounded-full whitespace-nowrap px-4 py-2 font-medium hover:bg-[#00D3A9] hover:text-white transition-all duration-200
                    ${activeTab === team ? 'bg-[#00D3A9] text-white' : 'text-black'}
                    `}
                    >
                      {team}
                    </div>
                  </Tab>
                );
              })}
            </TabsHeader>
          </div>
          <TabsBody>
            {teams.map((team) => {
              return (
                <TabPanel key={team} value={team}>
                  <Team
                    teamIdentifier={PageIdentifiers.INTERNAL_LEVEL_CONTAINER}
                    teamMembers={executives.filter((exec) => exec.team === team)}
                    section="internal"
                  />
                </TabPanel>
              );
            })}
          </TabsBody>
        </Tabs>
      )}
    </>
  );
};

export default InternalTeam;
