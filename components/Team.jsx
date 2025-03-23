import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';

const Team = ({ executives }) => {
  const EXECUTIVES_CONTAINER = 'bg-white flex flex-col items-center pt-5';
  const EXECUTIVE_LEVEL_CONTAINER = 'flex flex-row flex-wrap justify-center w-full';

  return (
    <div className={EXECUTIVE_LEVEL_CONTAINER}>
      {executives.map((exec) => (
        <Avatar key={exec.name} {...exec} />
      ))}
    </div>
  );
};

export default Team;
