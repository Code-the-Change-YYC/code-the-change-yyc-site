import { useEffect, useState } from 'react';
import { INTERNAL_MEMBERS } from '../data/internalTeam';
import { PageIdentifiers } from '../utils/flags';
import { UnderlineTypes } from '../utils/underlineType';
import Heading from './Heading';
import Team from './Team';

const InternalTeam = () => {
  const [executives, setExecutives] = useState([]);
  const [groups, setGroups] = useState([]);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    setExecutives(INTERNAL_MEMBERS);
    const uniqueGroups = INTERNAL_MEMBERS.map((exec) => exec.group).filter(
      (group, index, self) => self.indexOf(group) === index
    );
    setGroups(uniqueGroups);

    if (uniqueGroups.length > 0) {
      setActiveTab(uniqueGroups[0]);
    }
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
        <div>
          <div
            className="overflow-x-auto grid place-items-center scrollbar-webkit @support scrollbar-thin"
            style={{
              '--scrollbar-thumb-colour': '#00D3A9',
            }}
          >
            <div className="flex flex-row gap-2 pb-2 whitespace-nowrap">
              {groups.map((group) => (
                <button
                  key={group}
                  onClick={() => setActiveTab(group)}
                  className="cursor-pointer"
                >
                  <div
                    className={`rounded-full whitespace-nowrap px-4 py-2 font-medium hover:bg-[#00D3A9] hover:text-white transition-all duration-200
              ${activeTab === group ? 'bg-[#00D3A9] text-white' : 'text-black'}
              `}
                  >
                    {group}
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div>
            {groups.map((group) => (
              <div key={group} className={activeTab === group ? 'block' : 'hidden'}>
                <Team
                  teamIdentifier={PageIdentifiers.INTERNAL_LEVEL_CONTAINER}
                  teamMembers={executives.filter((exec) => exec.group === group)}
                  section="internal"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default InternalTeam;
