import Team from './Team';
import { fetchContent } from '../api/apiRoot';
import { useState, useEffect } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import Heading from './Heading';
import { UnderlineTypes } from '../utils/underlineType';
import CoPresident from "./CoPresident";
import Image from 'next/image';
const GREEN_SIDE_LINES_DIR = '/svgs/green_side_lines.svg';

// Dummy values to be replaced with contentful
export const people  = [{
  name: "John Doe",
  linkedin: "randomlink.com",
  position: "Dev",
  project: "Events",
  pfp: {
    fields: {
      file: {
        url: "//t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
      }
    }
  },
  classes: "text-white",
},
{
  name: "John Doe",
  linkedin: "randomlink.com",
  position: "Dev",
  project: "Events",
  pfp: {
    fields: {
      file: {
        url: "//t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
      }
    }
  },
  classes: "text-white",
},
{
  name: "John Doe",
  linkedin: "randomlink.com",
  position: "Dev",
  project: "Events",
  pfp: {
    fields: {
      file: {
        url: "//t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
      }
    }
  },
  classes: "text-white",
},
{
  name: "John Doe",
  linkedin: "randomlink.com",
  position: "Dev",
  project: "Events",
  pfp: {
    fields: {
      file: {
        url: "//t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
      }
    }
  },
  classes: "text-white",
},

{
  name: "John Doe",
  linkedin: "randomlink.com",
  position: "Dev",
  project: "Events",
  pfp: {
    fields: {
      file: {
        url: "//t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
      }
    }
  },
  classes: "text-white",
},
{
  name: "John Doe",
  linkedin: "randomlink.com",
  position: "Dev",
  project: "Events",
  pfp: {
    fields: {
      file: {
        url: "//t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
      }
    }
  },
  classes: "text-white",
},
{
  name: "John Doe",
  linkedin: "randomlink.com",
  position: "Dev",
  project: "Events",
  pfp: {
    fields: {
      file: {
        url: "//t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
      }
    }
  },
  classes: "text-white",
},
{
  name: "John Doe",
  linkedin: "randomlink.com",
  position: "Dev",
  project: "Finance",
  pfp: {
    fields: {
      file: {
        url: "//t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
      }
    }
  },
  classes: "text-white",
},
{
  name: "John Doe",
  linkedin: "randomlink.com",
  position: "Dev",
  project: "Marketing",
  pfp: {
    fields: {
      file: {
        url: "//t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
      }
    }
  },
  classes: "text-white",
},
{
  name: "John Doe",
  linkedin: "randomlink.com",
  position: "Dev",
  project: "Tech",
  pfp: {
    fields: {
      file: {
        url: "//t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
      }
    }
  },
  classes: "text-white",
},
];

const AlumniSection = () => {
  const [executives, setExecutives] = useState([]);
  const [teams, setTeams] = useState([]);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    // Put Contenful stuff here
    fetchContent('technicalTeam').then(() => {
      setExecutives(people);

      setTeams(["Presidents", "Events", "Finance", "Marketing", "Tech"]);

      setActiveTab("Presidents");
    });
  }, []);

  return (
    <section className="bg-[#7055FD] p-20 md:min-h-screen h-full">
      <div className="mb-20 flex flex-row justify-center">
        <Image src={GREEN_SIDE_LINES_DIR} width={30} height={30} alt="" className='pb-16'/>
        <Heading underlineType={UnderlineTypes.GREEN_SHORT_UNDERLINE} classes={"text-white"}>Alumni</Heading>
      </div>
      <div>
        {teams.length > 0 && (
          <Tabs 
            value={activeTab}>
            <TabsHeader className="flex flex-row justify-center gap-4 pb-20">
              {teams.map((project) => (
                <Tab className={`alumni-tab rounded-full p-2 font-medium text-white ${
                  activeTab === project
                    ? 'bg-[#00D3A9]'
                    : ''
                }`} key={project} value={project} onClick={() => setActiveTab(project)}>
                  {project}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {teams.map((project) => (
                <TabPanel key={project} value={project}>
                  {project === "Presidents" ? (
                    <div className="text-white text-center text-xl font-semibold flex justify-center">
                      <CoPresident />
                    </div>) : (
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
