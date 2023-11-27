import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmployees } from "../api/employees";
import LoadingIndicator from "../components/Loading/LoadingIndicator";
import EmployeeForm from "../components/Form/EmployeeForm";
import { Box } from "@mui/material";

const EditEmployee = () => {
  const [employee, setEmployee] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchEmployee() {
      try {
        const response = await getEmployees(id);
        setEmployee(response.data);
      } catch (err) {
        console.error("Error fetching employee", err);
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
      {!employee && <LoadingIndicator />}
      <EmployeeForm employeeId={id} />
    </Box>
  );
};

export default EditEmployee;
