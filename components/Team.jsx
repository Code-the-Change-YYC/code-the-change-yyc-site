import { useState } from 'react';
import Avatar from './Avatar';

const EXECUTIVE_LEVEL_CONTAINER = 'flex flex-row flex-wrap justify-center w-full';
const ITEMS_PER_PAGE = 4;

const Team = ({ teamMembers, teamIdentifier }) => {
  const TEAM_CONTAINER = 'flex flex-row flex-wrap justify-center w-full';
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(teamMembers.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentExecutives = teamMembers.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className={EXECUTIVE_LEVEL_CONTAINER}>
        {currentExecutives.map((exec) => (
          <Avatar key={exec.name} {...exec} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-4">
          <nav className="inline-flex rounded-md" aria-label="Pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => goToPage(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 font-semibold  ${
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
    </>
  );
};

export default Team;
