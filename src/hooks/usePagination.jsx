import { useState } from "react";

const usePagination = (initialPage = 0, initialRowsPerPage = 5) => {
  const [page, setPage] = useState(initialPage);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return {
    page,
    rowsPerPage,
    handleChangePage,
  };
};

export default usePagination;
