import { useState } from 'react';
import Avatar from './Avatar';

const TEAM_CONTAINER = 'flex flex-row flex-wrap justify-center w-full gap-6';
const ITEMS_PER_PAGE = 4;

const Team = ({ teamMembers, teamIdentifier }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Separate leads/vps and others
  const topRowMembers = teamMembers.filter(
    (member) =>
      member.position.toLowerCase().includes('team lead') ||
      member.position.toLowerCase().includes('vp')
  );

  const paginatedMembers = teamMembers.filter(
    (member) =>
      !member.position.toLowerCase().includes('team lead') &&
      !member.position.toLowerCase().includes('vp')
  );

  const totalPages = Math.ceil(paginatedMembers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentExecutives = paginatedMembers.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col w-full gap-8">
      {/* Always-visible top row (VPs and Leads) */}
      {topRowMembers.length > 0 && (
        <div className={TEAM_CONTAINER}>
          {topRowMembers.map((member) => (
            <Avatar teamIdentifier={teamIdentifier} key={member.name} {...member} />
          ))}
        </div>
      )}

      {/* Paginated rest of the members */}
      <div className={TEAM_CONTAINER}>
        {currentExecutives.map((member) => (
          <Avatar teamIdentifier={teamIdentifier} key={member.name} {...member} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-4">
          <nav className="inline-flex rounded-md" aria-label="Pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => goToPage(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 font-semibold ${
                  currentPage === index + 1
                    ? 'z-10 text-[#7055FD] text-base bg-white border rounded-full'
                    : 'text-white hover:text-lg'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Team;
