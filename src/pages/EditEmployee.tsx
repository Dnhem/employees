import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmployees } from "../api/employees";
import LoadingIndicator from "../components/Loading/LoadingIndicator";
import EmployeeForm from "../components/Form/EmployeeForm";
import { Box } from "@mui/material";

const EditEmployee = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const employeeId = id ? parseInt(id, 10) : 0;

  useEffect(() => {
    async function fetchEmployee() {
      try {
        await getEmployees(employeeId);
      } catch (err) {
        console.error("Error fetching employee", err);
      } finally {
        setLoading(false);
      }
    }
    fetchEmployee();
  }, [id]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center", fontWeight: 100 }}>Edit Employee</h1>
      {loading ? <LoadingIndicator /> : <EmployeeForm employeeId={id} />}
    </Box>
  );
};

export default EditEmployee;
