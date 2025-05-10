import Avatar from './Avatar';

const Team = ({ teamMembers, teamIdentifier }) => {
  const TEAM_CONTAINER = 'flex flex-row flex-wrap justify-center w-full';

  return (
    <div className={TEAM_CONTAINER}>
      {teamMembers.map((member) => (
        <Avatar teamIdentifier={teamIdentifier} key={member.name} {...member} />
      ))}
    </div>
  );
};

export default Team;
