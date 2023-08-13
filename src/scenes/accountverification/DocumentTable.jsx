import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import pdficon from "../../assets/pdf.png";
import wordicon from "../../assets/wordicon.png";
import { Typography, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import noDocumentsImage from "../../assets/nodocuments.jpg";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f2f2f2",
    color: "#abb2bf",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: "#fff",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {},
}));

function createData(name, icon, calories, fat, carbs, protein, actions) {
  return { name, icon, calories, fat, carbs, protein, actions };
}

const rows = [
  // Your existing data rows
];

export default function DocumentTable({ documents }) {
  if (documents.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <img src={noDocumentsImage} alt="No Documents" />
        <Typography variant="subtitle1">No documents available</Typography>
      </div>
    );
  }

  return (
    <div style={{ height: "400px", overflowY: "scroll" }}>
      <TableContainer
        sx={{
          marginLeft: "21px",
          width: "95%",
          borderRadius: "10px",
          marginTop: "40px",
        }}
        component={Paper}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ width: "18%" }}>
                Document Name
              </StyledTableCell>
              <StyledTableCell align="right">Upload Date</StyledTableCell>
              <StyledTableCell align="right">Owner</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {row.icon}
                    <span style={{ marginLeft: "10px" }}>{row.name}</span>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.calories}
                </StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">
                  <Tooltip title="View">
                    <VisibilityIcon color="primary" />
                  </Tooltip>
                  <MoreHorizIcon color="primary" />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
