import Team from './Team';
import { fetchContent } from '../api/apiRoot';
import { useState, useEffect } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import Heading from './Heading';
import { UnderlineTypes } from '../utils/underlineType';

const TechnicalTeam = () => {
  const [executives, setExecutives] = useState([]);
  const [positions, setPositions] = useState([]);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    fetchContent('adminTeamMember').then((data) => {
      setExecutives(data);

      const uniquePositions = [...new Set(data.map((exec) => exec.position))];
      setPositions(uniquePositions);

      if (uniquePositions.length > 0) {
        setActiveTab(uniquePositions[0]);
      }
    });
  }, []);

  return (
    <section className="technical-section py-8">
      <div>
        <Heading underlineType={UnderlineTypes.PURPLE_SHORT_UNDERLINE}>Technical Team</Heading>
      </div>
      <div>
        {positions.length > 0 && (
          <Tabs value={activeTab} onChange={(val) => setActiveTab(val)}>
            <TabsHeader className="flex justify-items-center">
              {positions.map((position) => (
                <Tab className="team-tab rounded-full p-1 font-medium" key={position} value={position}>
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
    </section>
  );
};

export default TechnicalTeam;
