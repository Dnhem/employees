import React from "react";
import EmployeeForm from "../components/Form/EmployeeForm";
import { Box } from "@mui/material";

const AddEmployee = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center", fontWeight: 100 }}>Add Employee</h1>
      <EmployeeForm />
    </Box>
  );
};

export default AddEmployee;
