import Team from './Team';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import Heading from './Heading';
import { UnderlineTypes } from '../utils/underlineType';
import { PageIdentifiers } from '../utils/flags';
import { apiRoot } from '../api/apiRoot';

const TechnicalTeam = () => {
  const [executives, setExecutives] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let technicalTeam;
        let allProjects;
        
        try {
          technicalTeam = await apiRoot.getEntries({ content_type: 'technicalTeam', include: 2 });
        } catch (error) {
          console.error('Error fetching technical team data:', error);
        }

        const transformedMembers = technicalTeam.items
          .map((entry) => {
            const member = entry.fields;
            
            return {
              name: member.name,
              pfp: member.pfp,
              projectId: member.project.sys.id,
              project: member.project, 
              position: member.position,
              linkedin: member.linkedin,
              isTeamLead: member.isTeamLead || false,
              order: member.order || 0,
            };
          });

        setExecutives(transformedMembers);

        try {
          allProjects = await apiRoot.getEntries({ content_type: 'project' });
        } catch (error) {
          console.error('Error fetching projects data:', error);
        }

        const transformedProjects = allProjects.items
          .map((entry) => {
            const project = entry.fields;
            
            return {
              name: project.name,
              projectId: entry.sys.id,
            };
          });

        setProjects(transformedProjects);

        if (transformedProjects.length > 0) {
          setActiveTab(transformedProjects[0].projectId);
        }
      } catch (error) {
        console.error('Error fetching technical team data:', error);
      }
    };

    fetchData();
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
        <div>
          <div
            className="overflow-x-auto grid place-items-center scrollbar-webkit @support scrollbar-thin"
            style={{
              '--scrollbar-thumb-colour': '#7559fc',
            }}
          >
            <div className="flex flex-row gap-2 pb-2 whitespace-nowrap">
              {projects.map((project) => {
                return (
                  <Tab key={project.projectId} value={project.projectId} onClick={() => setActiveTab(project.projectId)}>
                    <div
                      className={`rounded-full p-2 px-4 font-medium hover:bg-[#7559fc] hover:text-white transition-all duration-200
                    ${activeTab === project.projectId ? 'bg-[#7559fc] text-white' : 'text-black'}
                    `}
                    >
                      {project.name}
                    </div>
                  </Tab>
                );
              })}
            </div>
          </TabsHeader>
          <TabsBody>
            {projects.map((project) => {
              return (
                <TabPanel key={project.projectId} value={project.projectId}>
                  <Team
                    teamIdentifier={PageIdentifiers.EXECUTIVE_LEVEL_CONTAINER}
                    teamMembers={executives.filter((exec) => exec.projectId === project.projectId)}
                    section="technical"
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

export default TechnicalTeam;
