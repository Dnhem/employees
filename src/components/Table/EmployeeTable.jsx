import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TablePagination from "@mui/material/TablePagination";
import { Box } from "@mui/material";

export default function EmployeeTable({
  employeeData,
  handleChangePage,
  page,
  rowsPerPage,
  showActions = false,
}) {
  return (
    <Box>
      <TableContainer
        sx={{ maxWidth: 1000, margin: "5% 0 0 20%" }}
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
                    <ModeEditIcon color="primary" />{" "}
                    <DeleteForeverIcon color="error" sx={{ marginLeft: 2 }} />
                  </TableCell>
                ) : null}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={employeeData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage=""
          rowsPerPageOptions={[]}
        />
      </TableContainer>
    </Box>
  );
}
