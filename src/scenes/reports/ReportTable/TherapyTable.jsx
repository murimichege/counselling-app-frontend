import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";


const familydata = [
  {
    title: "Family Therapy",
    total: 30,
  },
  {
    title: "Marital Therapy",
    total: 20,
  },

]

const TherapyTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {familydata.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TherapyTable;
