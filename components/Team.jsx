import Avatar from './Avatar';

const Team = ({ executives }) => {
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
