import * as React from "react";
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

export default function EmployeeTable({
  employeeData,
  totalCount,
  handleChangePage,
  handleDecreasePage,
  page,
  rowsPerPage,
  showActions = false,
}) {
  const redirectToEmployee = useNavigate();
  const editEmployee = (id) => {
    redirectToEmployee(`/employees/id/${id}`);
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
                      onClick={() => alert("Are you sure?")}
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
    </Box>
  );
}
