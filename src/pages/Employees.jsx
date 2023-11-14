import React from "react";
import { getEmployees } from "../api/employees";
import { useEffect, useState } from "react";
import { setEmployees } from "../redux/employeesSlice";
import { useDispatch, useSelector } from "react-redux";

const Employees = () => {
  const dispatch = useDispatch();
  const currentEmployees = useSelector(
    (state) => state.employee.currentEmployees
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const response = await getEmployees();
        dispatch(setEmployees(response.data.employees));
      } catch (err) {
        console.error("Error fetching employees", err);
      } finally {
        setLoading(false);
      }
    })();
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Employees</h1>
      <ul>
        {loading ? (
          <h1 style={{ textAlign: "center" }}>Loading</h1>
        ) : (
          currentEmployees.map((employee) => (
            <li key={employee._id} style={{ textAlign: "center" }}>
              {employee.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Employees;
