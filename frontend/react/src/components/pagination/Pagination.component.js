import React, { useMemo } from "react";

import paginationStyles from "./Pagination.module.scss";

const PaginationComponent = ({totalCount, rows, changePage, page}) => {
  const totalPages = useMemo(() => {
    const totalPages = Math.ceil(totalCount / rows);

    return Array.from(Array(totalPages).keys()).map((page) => page + 1);
  }, [totalCount])

  return (
    <div className={paginationStyles.pagination}>
      {
        totalPages.map((item) => (
          <div key={item} onClick={() => changePage(item)} className={page === item ? `${paginationStyles.pagination_item} ${paginationStyles.selected}` : paginationStyles.pagination_item}>
            {item}
          </div>
        ))
      }
    </div>
  );
};

export default PaginationComponent;
