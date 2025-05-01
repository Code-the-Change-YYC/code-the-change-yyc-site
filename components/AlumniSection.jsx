import Team from './Team';
import { fetchContent } from '../api/apiRoot';
import { useState, useEffect } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import Heading from './Heading';
import { UnderlineTypes } from '../utils/underlineType';
import CoPresident from "./CoPresident";

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
];

const TechnicalTeam = () => {
  const [executives, setExecutives] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    fetchContent('technicalTeam').then((data) => {
      setExecutives(people);

      const uniqueProjects = data.map((exec) => exec.project).filter((pos, index, self) => self.indexOf(pos) === index);
      setProjects(["Presidents", "Events", "Finance", "Marketing", "Tech"]);

      if (uniqueProjects.length > 0) {
        setActiveTab(uniqueProjects[0]);
      }
    });
  }, []);

  return (
    <section className="bg-[#7055FD] p-12 h-screen">
      <div className="mb-9">
        <Heading underlineType={UnderlineTypes.GREEN_SHORT_UNDERLINE} classes={"text-white"}>Alumni</Heading>
      </div>
      <div>
        {projects.length > 0 && (
          <Tabs value={activeTab} onChange={(val) => setActiveTab(val)}>
            <TabsHeader className="flex flex-row justify-center">
              {projects.map((project) => (
                <Tab className="alumni-tab rounded-full p-1 font-medium" key={project} value={project}>
                  {project}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {projects.map((project) => (
                <TabPanel key={project} value={project}>
                  {project === "Presidents" ? (
                    <div className="text-white text-center text-xl font-semibold flex justify-center">
                      <CoPresident />
                    </div>) : (
                    <Team executives={executives.filter((exec) => exec.project === project)} />
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

export default TechnicalTeam;
