import { useState } from "react";

const usePagination = (startingPage = 0, initialRowsPerPage = 5) => {
  const [page, setPage] = useState(startingPage);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleDecreasePage = () => {
    const newPage = Math.max(0, page - 1);
    setPage(newPage);
  };

  return {
    page,
    rowsPerPage,
    handleChangePage,
    handleDecreasePage,
  };
};

export default usePagination;
