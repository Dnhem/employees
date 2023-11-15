import { useState } from "react";

const usePagination = (
  startingPage = 0,
  initialOffset = 1,
  initialRowsPerPage = 5
) => {
  const [page, setPage] = useState(startingPage);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);
  const [offset, setOffset] = useState(initialOffset);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setOffset((prevOffset) => (prevOffset += 1));
  };

  return {
    page,
    offset,
    initialOffset,
    rowsPerPage,
    handleChangePage,
  };
};

export default usePagination;
