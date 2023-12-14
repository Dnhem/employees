import EmployeeTable from "../components/Table/EmployeeTable";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useEffect, useState } from "react";
import { getDeletedEmployees } from "../api/employees";
import { setDeletedEmployees } from "../redux/employeesSlice";
import LoadingIndicator from "../components/Loading/LoadingIndicator";
import usePagination from "../hooks/usePagination";

const FormerEmployees = () => {
  const dispatch = useAppDispatch();
  const deletedEmployees = useAppSelector(
    (state) => state.employee.deletedEmployees
  );
  const [loading, setLoading] = useState(true);
  const [deletedEmployeeCount, setDeletedEmployeeCount] = useState(0);
  const { page, rowsPerPage, handleChangePage, handleDecreasePage } =
    usePagination();

  useEffect(() => {
    async function fetchDeletedEmployees() {
      try {
        const response = await getDeletedEmployees(page + 1, rowsPerPage);
        setDeletedEmployeeCount(response.data.count);
        const deletedEmployeesData = response.data.employees;
        dispatch(setDeletedEmployees(deletedEmployeesData));
      } catch (err) {
        console.error("Error fetching employees", err);
      } finally {
        setLoading(false);
      }
    }
    fetchDeletedEmployees();
  }, [dispatch, page, rowsPerPage]);

  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: 100 }}>Former Employees</h1>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <EmployeeTable
          employeeData={deletedEmployees}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleDecreasePage={handleDecreasePage}
          totalCount={deletedEmployeeCount}
        />
      )}
    </div>
  );
};

export default FormerEmployees;
