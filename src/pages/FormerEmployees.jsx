import EmployeeTable from "../components/Table/EmployeeTable";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getDeletedEmployees } from "../api/employees";
import { setDeletedEmployees } from "../redux/employeesSlice";
import LoadingIndicator from "../components/Loading/LoadingIndicator";
import usePagination from "../hooks/usePagination";

const FormerEmployees = () => {
  const dispatch = useDispatch();
  const deletedEmployees = useSelector(
    (state) => state.employee.deletedEmployees
  );
  const [loading, setLoading] = useState(true);
  const { page, rowsPerPage, handleChangePage } = usePagination();

  useEffect(() => {
    async function fetchDeletedEmployees() {
      try {
        const response = await getDeletedEmployees();
        const deletedEmployeesData = response.data.employees.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        );
        dispatch(setDeletedEmployees(deletedEmployeesData));
      } catch (err) {
        console.error("Error fetching employees", err);
      } finally {
        setLoading(false);
      }
    }
    fetchDeletedEmployees();
  }, [dispatch]);

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
        />
      )}
    </div>
  );
};

export default FormerEmployees;
