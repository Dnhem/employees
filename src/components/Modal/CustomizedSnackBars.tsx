import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface CustomizedSnackBarsProps {
  alertType: "error" | "info" | "success" | "";
  alertMessage: string;
}

const CustomizedSnackbars: React.FC<CustomizedSnackBarsProps> = ({
  alertType,
  alertMessage,
}) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const mappedSeverity = alertType === "" ? undefined : alertType;
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={mappedSeverity}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default CustomizedSnackbars;
