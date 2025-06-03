import Avatar from './Avatar';

const Team = ({ teamMembers, teamIdentifier }) => {
  const TEAM_CONTAINER = 'flex flex-row flex-wrap justify-center w-full gap-6';

  // Separate leads/vps and others
  const topRowMembers = teamMembers.filter(
    (member) => member.position.toLowerCase().includes('team lead') || member.position.toLowerCase().includes('vp'));

  const members = teamMembers.filter(
    (member) => !(member.position.toLowerCase().includes('team lead') || member.position.toLowerCase().includes('vp'))
  );

  return (
    <div className="flex flex-col w-full gap-8">
      <div className={TEAM_CONTAINER}>
        {topRowMembers.map((member) => (
          <Avatar teamIdentifier={teamIdentifier} key={member.name} {...member} />
        ))}
      </div>

      <div className={TEAM_CONTAINER}>
        {members.map((member) => (
          <Avatar teamIdentifier={teamIdentifier} key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
