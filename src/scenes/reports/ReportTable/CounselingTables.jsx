import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const data = [
  { category: "Online Counseling", male: 10, female: 15, total: 25 },
  { category: "Email Counseling", male: 8, female: 12, total: 20 },
  { category: "Telephone Counseling", male: 6, female: 9, total: 15 },

];
const CounselingTables = () => {


  return (
    <>
      <Typography variant="h4">Medium of Counseling
  </Typography>
  <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>Female</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <Typography variant="subtitle1">{row.category}</Typography>
              </TableCell>
              <TableCell>{row.male}</TableCell>
              <TableCell>{row.female}</TableCell>
              <TableCell>{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>

  );
};

export default CounselingTables;
