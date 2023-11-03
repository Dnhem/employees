import EmployeeTable from "../components/Table/EmployeeTable";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getDeletedEmployees } from "../api/employees";
import { setDeletedEmployees } from "../features/employee/employeeSlice";
import LoadingIndicator from "../components/Loading/LoadingIndicator";

const FormerEmployees = () => {
  const dispatch = useDispatch();
  const deletedEmployees = useSelector(
    (state) => state.employee.deletedEmployees
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDeletedEmployees() {
      try {
        const response = await getDeletedEmployees();
        dispatch(setDeletedEmployees(response.data.employees));
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
        <EmployeeTable employeeData={deletedEmployees} isDeleted={true} />
      )}
    </div>
  );
};

export default FormerEmployees;
