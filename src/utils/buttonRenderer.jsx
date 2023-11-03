import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const renderButtons = (
  employeeId,
  values,
  isSubmitting,
  navigate,
  handleSubmit,
  updateEmployee
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
          <CheckCircleIcon />
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
        Submit
      </Button>
    );
  }
};
