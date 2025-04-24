import Team from './Team';
import { fetchContent } from '../api/apiRoot';
import { useState, useEffect } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import Heading from './Heading';
import { UnderlineTypes } from '../utils/underlineType';

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
    <section className="technical-section p-12">
      <div className="mb-9">
        <Heading underlineType={UnderlineTypes.PURPLE_SHORT_UNDERLINE}>Technical Team</Heading>
      </div>
      <div>
        {projects.length > 0 && (
          <Tabs value={activeTab} onChange={(val) => setActiveTab(val)}>
            <TabsHeader className="flex flex-row justify-center">
              {projects.map((project) => (
                <Tab className="team-tab rounded-full p-1 font-medium" key={project} value={project}>
                  {project}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {projects.map((project) => (
                <TabPanel key={project} value={project}>
                  <Team executives={executives.filter((exec) => exec.project === project)} />
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
