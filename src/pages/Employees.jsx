import React from "react";
import { getEmployees } from "../api/employees";
import { useEffect } from "react";
import { setEmployees } from "../features/employee/employeeSlice";
import { useDispatch, useSelector } from "react-redux";

const Employees = () => {
  const dispatch = useDispatch();
  const currentEmployees = useSelector(
    (state) => state.employee.currentEmployees
  );

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await getEmployees();
        dispatch(setEmployees(response.data.employees));
      } catch (err) {
        console.error("Error fetching employees", err);
      }
    }
    fetchEmployees();
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Employees</h1>
      <ul>
        {currentEmployees ? (
          currentEmployees.map((e) => (
            <li key={e._id} style={{ textAlign: "center" }}>
              {e.name}
            </li>
          ))
        ) : (
          <h1 style={{ textAlign: "center" }}>Loading</h1>
        )}
      </ul>
    </div>
  );
};

export default Employees;
