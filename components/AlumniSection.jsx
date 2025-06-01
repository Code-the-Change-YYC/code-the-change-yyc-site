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
const people  = [{
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

const TITLE_HEADER = "flex flex-row text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] justify-center px-auto lg:px-10 md:px-16 gap-2 lg:pb-10 pb-5 overflow-auto scrollbar-webkit @support scrollbar-thin";

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
    <section className="bg-[#7055FD] lg:p-20 py-10 px-5 w-full h-full">
      <div className="mb-8 flex flex-row justify-center">
        <Image src={GREEN_SIDE_LINES_DIR} width={30} height={30} alt="" className='pb-16'/>
        <Heading underlineType={UnderlineTypes.GREEN_SHORT_UNDERLINE} classes={"text-white"}>Alumni</Heading>
      </div>
      <div className='px-5'>
        {teams.length > 0 && (
          <Tabs 
            value={activeTab}>
            <TabsHeader 
              className={TITLE_HEADER}
              style={{
                "--scrollbar-thumb-colour": "rgb(0, 211, 169)",
                "--scrollbar-track-colour": "rgb(90, 68, 220)",
              }}
            >
              {teams.map((project) => (
                <Tab className={`hover:bg-[#00BA95] hover:text-white rounded-full py-2 px-4 lg:mx-4 font-medium text-white transition-all duration-200 ${
                  activeTab === project
                    ? 'bg-[#00BA95]'
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
