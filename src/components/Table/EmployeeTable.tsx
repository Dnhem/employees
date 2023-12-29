import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TablePagination from "@mui/material/TablePagination";
import { Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AlertDialogue from "../Modal/AlertDialog";
import React, { useState } from "react";
import { EmployeeSchemaModel } from "../../models/employeeSchema.model";

interface EmployeeTableProps {
  employeeData: EmployeeSchemaModel[];
  totalCount: number;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  handleDecreasePage: () => void;
  page: number;
  rowsPerPage: number;
  showActions?: boolean;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({
  employeeData,
  totalCount,
  handleChangePage,
  handleDecreasePage,
  page,
  rowsPerPage,
  showActions = false,
}) => {
  interface EmployeeDataType {
    employeeId: string;
    employeeName: string;
  }

  const [employeeInfo, setEmployeeInfo] = useState<EmployeeDataType | null>(
    null
  );

  const redirectToEmployee = useNavigate();

  const editEmployee = (id: string) => {
    redirectToEmployee(`/employees/id/${id}`);
  };

  const openModal = (employeeId: string, employeeName: string) => {
    setEmployeeInfo({
      employeeId,
      employeeName,
    });
  };

  const closeModal = () => {
    setEmployeeInfo(null);
  };

  return (
    <Box>
      <TableContainer
        sx={{ maxWidth: 1100, margin: "5% 0 0 20%" }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">DOB</TableCell>
              <TableCell align="left">DOH</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell align="left">Phone</TableCell>
              {showActions && <TableCell align="center">Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeData.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.dateOfBirth}</TableCell>
                <TableCell align="left">{row.dateOfEmployment}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{`${row.homeAddress.addressLine1}, ${row.homeAddress.city} ${row.homeAddress.ZIPCode}`}</TableCell>
                <TableCell align="left">{row.phoneNumber}</TableCell>
                {showActions ? (
                  <TableCell align="left">
                    <ModeEditIcon
                      onClick={() => editEmployee(row._id)}
                      color="primary"
                      sx={{ cursor: "pointer" }}
                    />{" "}
                    <DeleteForeverIcon
                      onClick={() => openModal(row._id, row.name)}
                      color="error"
                      sx={{ cursor: "pointer", marginLeft: 2 }}
                    />
                  </TableCell>
                ) : null}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={totalCount}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage=""
          rowsPerPageOptions={[]}
          backIconButtonProps={{
            onClick: handleDecreasePage,
          }}
        />
      </TableContainer>
      {employeeInfo && (
        <AlertDialogue
          closeModal={closeModal}
          employeeName={employeeInfo.employeeName}
          employeeId={employeeInfo.employeeId}
        />
      )}
    </Box>
  );
};

export default EmployeeTable;
