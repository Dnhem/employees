import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CachedIcon from "@mui/icons-material/Cached";
import { EmployeeInfo } from "../models/employeeInfo.model";
import { NavigateFunction } from "react-router-dom";

export const renderButtons = (
  employeeId: string | undefined,
  values: EmployeeInfo,
  isSubmitting: boolean,
  navigate: NavigateFunction,
  handleSubmit: () => void,
  updateEmployee: (employeeId: string, values: EmployeeInfo) => Promise<void>
) => {
  if (employeeId) {
    return (
      <div style={{ display: "flex", gap: 12 }}>
        <Button
          sx={{ width: "50px" }}
          variant="contained"
          color="error"
          onClick={() => navigate("/employees")}
        >
          <CancelIcon />
        </Button>
        <Button
          onClick={() => updateEmployee(employeeId, values)}
          type="submit"
          disabled={isSubmitting}
          variant="contained"
        >
          {isSubmitting ? <CachedIcon /> : <CheckCircleIcon />}
        </Button>
      </div>
    );
  } else {
    return (
      <Button
        onClick={handleSubmit}
        disabled={isSubmitting}
        type="submit"
        sx={{ width: "200px" }}
        variant="contained"
      >
        {isSubmitting ? <CachedIcon /> : "Submit"}
      </Button>
    );
  }
};
