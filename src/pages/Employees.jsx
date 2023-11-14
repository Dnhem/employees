import React from "react";
import { getEmployees } from "../api/employees";
import { useEffect } from "react";
import { setEmployees } from "../redux/employeesSlice";
import { useDispatch, useSelector } from "react-redux";

const Employees = () => {
  const dispatch = useDispatch();
  const currentEmployees = useSelector(
    (state) => state.employee.currentEmployees
  );

  useEffect(() => {
    (async function () {
      try {
        const response = await getEmployees();
        dispatch(setEmployees(response.data.employees));
      } catch (err) {
        console.error("Error fetching employees", err);
      }
    })();
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Employees</h1>
      <ul>
        {currentEmployees ? (
          currentEmployees.map((employee) => (
            <li key={employee._id} style={{ textAlign: "center" }}>
              {employee.name}
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
