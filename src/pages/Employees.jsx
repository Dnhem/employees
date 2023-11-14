import React from "react";
import { getEmployees } from "../api/employees";
import { useState, useEffect } from "react";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

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

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Employees</h1>
      <ul>
        {employees.map((e) => (
          <li key={e._id} style={{ textAlign: "center" }}>
            {e.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
