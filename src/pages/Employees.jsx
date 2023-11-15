import React from "react";
import { getEmployees, getTotalEmployeeCount } from "../api/employees";
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
  const [totalCount, setTotalCount] = useState(0);

  const { page, offset, rowsPerPage, handleChangePage } = usePagination();

  useEffect(() => {
    (async function () {
      try {
        const employeeCount = await getTotalEmployeeCount();
        const totalEmployeeCount = employeeCount.data.employees.length;
        setTotalCount(totalEmployeeCount);
        const response = await getEmployees(offset, rowsPerPage);
        const employeesData = response.data.employees;
        dispatch(setEmployees(employeesData));
      } catch (err) {
        console.error("Error fetching employees", err);
      } finally {
        setLoading(false);
      }
    })();
  }, [dispatch, offset, page, rowsPerPage]);

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
          totalCount={totalCount}
          showActions={true}
        />
      )}
    </div>
  );
};

export default Employees;
