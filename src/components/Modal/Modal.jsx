import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { deleteEmployee } from "../../api/employees";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
};

export default function BasicModal({
  openModal,
  handleCloseModal,
  employeeId,
  employeeName,
}) {
  const navigate = useNavigate();
  const softDeleteEmployee = async (id) => {
    try {
      navigate("/deleted");
      const response = await deleteEmployee(id);
      console.log("Employee successfully deleted:", response.data);
    } catch (err) {
      console.err("Error deleting employee:", err``);
    }
  };

  return (
    <Box>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            id="modal-modal-description"
            sx={{ mb: 6, alignSelf: "center" }}
          >
            Delete employee: {employeeName}
          </Typography>
          <Box
            style={{ display: "flex", gap: 12, justifyContent: "space-evenly" }}
          >
            <Button
              sx={{ width: "50px" }}
              variant="contained"
              color="error"
              onClick={handleCloseModal}
            >
              <CancelIcon />
            </Button>
            <Button
              variant="contained"
              onClick={() => softDeleteEmployee(employeeId)}
            >
              <CheckCircleIcon />
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
