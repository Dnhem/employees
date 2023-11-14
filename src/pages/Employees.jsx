import React from "react";
import { getEmployees } from "../api/employees";
import { useEffect, useState } from "react";
import { setEmployees } from "../redux/employeesSlice";
import { useDispatch, useSelector } from "react-redux";
import EmployeeTable from "../components/Table/EmployeeTable";
import LoadingIndicator from "../components/Loading/LoadingIndicator";
import usePagination from "../hooks/usePagination";

const Employees = () => {
  const dispatch = useDispatch();
  const currentEmployees = useSelector(
    (state) => state.employee.currentEmployees
  );
  const [loading, setLoading] = useState(true);
  const { page, rowsPerPage, handleChangePage } = usePagination();

  useEffect(() => {
    (async function () {
      try {
        const response = await getEmployees();
        const employeesData = response.data.employees.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        );
        dispatch(setEmployees(employeesData));
      } catch (err) {
        console.error("Error fetching employees", err);
      } finally {
        setLoading(false);
      }
    })();
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: 100 }}>Employees</h1>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <EmployeeTable
          employeeData={currentEmployees}
          handleChangePage={handleChangePage}
          page={page}
          rowsPerPage={rowsPerPage}
          showActions={true}
        />
      )}
    </div>
  );
};

export default Employees;
