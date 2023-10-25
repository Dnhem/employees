import React from "react";
import { getEmployees } from "../api/employees";
import { useEffect, useState } from "react";
import { setEmployees } from "../features/employee/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import EmployeeTable from "../components/Table/EmployeeTable";
import LoadingIndicator from "../components/Loading/LoadingIndicator";

const Employees = () => {
  const dispatch = useDispatch();
  const currentEmployees = useSelector(
    (state) => state.employee.currentEmployees
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await getEmployees();
        dispatch(setEmployees(response.data.employees));
      } catch (err) {
        console.error("Error fetching employees", err);
      } finally {
        setLoading(false);
      }
    }
    fetchEmployees();
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: 100 }}>Employees</h1>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <EmployeeTable employeeData={currentEmployees} />
      )}
    </div>
  );
};

export default Employees;
