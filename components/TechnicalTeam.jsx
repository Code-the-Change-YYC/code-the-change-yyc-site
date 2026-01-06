import { useEffect, useState } from 'react';
import { TECHNICAL_MEMBERS } from '../data/technicalTeams';
import { PageIdentifiers } from '../utils/flags';
import { UnderlineTypes } from '../utils/underlineType';
import Heading from './Heading';
import Team from './Team';

const TechnicalTeam = () => {
  const [executives, setExecutives] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    setExecutives(TECHNICAL_MEMBERS);
    const uniqueProjects = TECHNICAL_MEMBERS.map((exec) => exec.project).filter(
      (pos, index, self) => self.indexOf(pos) === index
    );
    setProjects(uniqueProjects);

    if (uniqueProjects.length > 0) {
      setActiveTab(uniqueProjects[0]);
    }
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
              {projects.map((project) => (
                <button
                  key={project}
                  onClick={() => setActiveTab(project)}
                  className="cursor-pointer"
                >
                  <div
                    className={`rounded-full p-2 px-4 font-medium hover:bg-[#7559fc] hover:text-white transition-all duration-200
                  ${activeTab === project ? 'bg-[#7559fc] text-white' : 'text-black'}
                  `}
                  >
                    {project}
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div>
            {projects.map((project) => (
              <div key={project} className={activeTab === project ? 'block' : 'hidden'}>
                <Team
                  teamIdentifier={PageIdentifiers.EXECUTIVE_LEVEL_CONTAINER}
                  teamMembers={executives.filter((exec) => exec.project === project)}
                  section="technical"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TechnicalTeam;
