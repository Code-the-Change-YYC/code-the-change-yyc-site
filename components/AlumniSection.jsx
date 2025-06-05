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

const TITLE_HEADER =
  'flex flex-row text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] justify-center px-auto lg:px-10 md:px-16 gap-2 lg:pb-10 pb-5 overflow-auto scrollbar-webkit @support scrollbar-thin';

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
    <section className="bg-[#7055FD] lg:p-20 py-10 px-5 w-full min-h-screen">
      <div className="mb-8 flex flex-row justify-center">
        <Image src={GREEN_SIDE_LINES_DIR} width={30} height={30} alt="" className="pb-16" />
        <Heading underlineType={UnderlineTypes.GREEN_SHORT_UNDERLINE} classes={'text-white'}>
          Alumni
        </Heading>
      </div>
      <div className="px-5">
        {teams.length > 0 && (
          <Tabs className="flex flex-col justify-center items-center" value={activeTab}>
            <TabsHeader
              className={TITLE_HEADER}
              style={{
                '--scrollbar-thumb-colour': 'rgb(0, 211, 169)',
                '--scrollbar-track-colour': 'rgb(90, 68, 220)',
              }}
            >
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
            </TabsHeader>
            <TabsBody>
              {teams.map((project) => (
                <TabPanel key={project} value={project}>
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
