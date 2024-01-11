import React, { useState } from "react";

const usePagination = (startingPage = 0, initialRowsPerPage = 5) => {
  const [page, setPage] = useState(startingPage);
  const [rowsPerPage, _setRowsPerPage] = useState(initialRowsPerPage);

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
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
