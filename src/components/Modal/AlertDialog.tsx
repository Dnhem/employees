import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { useNavigate } from "react-router-dom";
import { deleteEmployee } from "../../api/employees";
import { useAppDispatch } from "../../redux/hooks";
import { showAlertAndReset } from "../../utils/showAlertAndReset";

interface AlertDialogProps {
  openModal: string | null;
  closeModal: () => void;
  employeeName: string | null;
  employeeId: string | number | null;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  openModal,
  closeModal,
  employeeName,
  employeeId,
}) => {
  const dispatch = useAppDispatch();

  const redirectToFormerEmployees = useNavigate();

  const softDeleteEmployee = async (id: number) => {
    try {
      const response = await deleteEmployee(id);
      console.log("Employee successfully deleted:", response.data);
      showAlertAndReset(dispatch, "Employee Successfully Deleted", "error");
      redirectToFormerEmployees("/deleted");
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <Box>
      <Dialog
        open={!!openModal}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ textAlign: "center" }} id="alert-dialog-title">
          Delete Employee: {employeeName}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              textAlign: "center",
              fontSize: 14,
              display: "flex",
              justifyContent: "center",
              gap: 0.5,
            }}
            color="error"
            id="alert-dialog-description"
          >
            <ReportGmailerrorredIcon /> This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            gap: 12,
            paddingBottom: 18,
            justifyContent: "space-around",
          }}
        >
          <Button
            sx={{ width: "50px" }}
            variant="contained"
            color="error"
            onClick={closeModal}
          >
            <CancelIcon />
          </Button>
          <Button
            variant="contained"
            onClick={() => softDeleteEmployee(employeeId as number)}
            autoFocus
          >
            <CheckCircleIcon />
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AlertDialog;
