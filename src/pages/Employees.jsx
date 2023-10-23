import React from "react";
import { getEmployees } from "../api/employees";
import { useState, useEffect } from "react";

const Employees = () => {
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    try {
      async function fetchEmployees() {
        const response = await getEmployees();
        setEmployees(response.data.employees);
      }
      fetchEmployees();
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(employees);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Employees</h1>
      <ul>
        {employees ? (
          employees.map((e) => (
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
