import React from 'react';

const Pagination = ({
  currentPage,
  goPrev,
  goNext,
  totalItems,
  itemsPerPage,
}) => {
  const isPrevPageAvailable = currentPage === 1 ? false : true;
  const isNextPageAvailable =
    currentPage == Math.ceil(totalItems / itemsPerPage) ? true : false;

  return (
    <div className="pagination">
      <button
        className="btn"
        diasabled={(!isPrevPageAvailable).toString()}
        onClick={goPrev}
      >
        {isPrevPageAvailable && `←`}
      </button>

      <span className="pagination__page">{currentPage}</span>

      <button
        className="btn"
        diasabled={isNextPageAvailable.toString()}
        onClick={goNext}
      >
        {isNextPageAvailable && `→`}
      </button>
    </div>
  );
};

export default Pagination;
