import Team from './Team';
import { fetchContent } from '../api/apiRoot';
import { useState, useEffect } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import Heading from './Heading';
import { UnderlineTypes } from '../utils/underlineType';
import CoPresident from './CoPresident';
import Image from 'next/image';
const GREEN_SIDE_LINES_DIR = '/svgs/green_side_lines.svg';

// Dummy values to be replaced with contentful
const alumni = [];

const AlumniSection = () => {
  const [executives, setExecutives] = useState([]);
  const [activeTab, setActiveTab] = useState('Presidents');

  const teams = ['Presidents', 'Events', 'Finance', 'Marketing', 'Tech'];

  useEffect(() => {
    // Put Contenful stuff here
    fetchContent('technicalTeam').then(() => {
      setExecutives(alumni);
    });
  }, []);

  return (
    <section className="py-10 px-5 w-full h-full">
      <div className="mb-8 flex flex-row justify-center">
        <Image src={GREEN_SIDE_LINES_DIR} width={30} height={30} alt="" className="pb-16" />
        <Heading underlineType={UnderlineTypes.GREEN_SHORT_UNDERLINE} classes={'text-white'}>
          Alumni
        </Heading>
      </div>
      <div className="px-5 h-full">
        {teams.length > 0 && (
          <Tabs value={activeTab}>
            <TabsHeader
              className="overflow-x-auto grid place-items-center scrollbar-webkit @support scrollbar-thin"
              style={{
                '--scrollbar-thumb-colour': 'rgb(0, 211, 169)',
              }}
            >
              <div className="flex flex-row gap-2 pb-2 whitespace-nowrap">
                {teams.map((project) => (
                  <Tab
                    className={`hover:bg-[#00BA95] hover:text-white rounded-full py-2 px-8 lg:mx-4 font-medium text-white transition-all duration-200 ${
                      activeTab === project ? 'bg-[#00BA95]' : ''
                    }`}
                    key={project}
                    value={project}
                    onClick={() => setActiveTab(project)}
                  >
                    {project}
                  </Tab>
                ))}
              </div>
            </TabsHeader>
            <TabsBody>
              {teams.map((project) => (
                <TabPanel key={project} value={project} className="w-full h-full">
                  {project === 'Presidents' ? (
                    <div className="text-white text-center text-xl font-semibold flex justify-center">
                      <CoPresident />
                    </div>
                  ) : (
                    <Team teamMembers={executives.filter((exec) => exec.project === project)} />
                  )}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        )}
      </div>
    </section>
  );
};

export default AlumniSection;
