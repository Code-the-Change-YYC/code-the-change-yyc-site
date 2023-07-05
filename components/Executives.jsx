import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import Avatar from './Avatar';
import { UnderlineTypes } from '../utils/underlineType';
import { fetchContent } from '../secret';

const EXECUTIVES_CONTAINER = 'bg-white flex flex-col items-center pt-5';
const EXECUTIVE_LEVEL_CONTAINER = 'flex flex-row flex-wrap justify-center w-full sm:w-8/12 mb-5';

const Executives = () => {
  const [executives, setExecutives] = useState([]);

  useEffect(() => {
    fetchContent('adminTeamMember').then((data) => setExecutives(data));
  }, []);

  return (
    <div className={EXECUTIVES_CONTAINER}>
      <Heading underlineType={UnderlineTypes.GREEN_LONG_UNDERLINE}>Executives</Heading>
      <div className={EXECUTIVE_LEVEL_CONTAINER}>
        {executives.map((exec) => (
          <Avatar key={exec.name} {...exec} />
        ))}
      </div>
    </div>
  );
};

export default Executives;
