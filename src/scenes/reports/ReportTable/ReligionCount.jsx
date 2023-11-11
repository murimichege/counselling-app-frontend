import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TextField,
} from "@mui/material";

const data = [
    {
      title: "Christian Students",
      maleCount: 100,
      femaleCount: 120,
      totalCount: 220,
    },
    {
      title: "Muslim Students",
      maleCount: 50,
      femaleCount: 70,
      totalCount: 120,
    },
    {
      title: "Hindu Students",
      maleCount: 20,
      femaleCount: 30,
      totalCount: 50,
    },
    {
      title: "Agnostic Students",
      maleCount: 30,
      femaleCount: 40,
      totalCount: 70,
    },
    {
      title: "Atheist Students",
      maleCount: 25,
      femaleCount: 35,
      totalCount: 60,
    },
    {
      title: "No Religion Students",
      maleCount: 40,
      femaleCount: 50,
      totalCount: 90,
    },
    {
      title: "None Students",
      maleCount: 15,
      femaleCount: 25,
      totalCount: 40,
    },
  ];
  
const ReligionCount = () => {
  return (
    <>
    <Typography variant="h3">Access to Counseling by Religion</Typography>

    <TableContainer component={Paper}>

      <Table>

        <TableHead>

          <TableRow>
          <TableCell>Student Level</TableCell>

            <TableCell>Male</TableCell>
            <TableCell>Female </TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Typography variant="subtitle1">{item.title}</Typography>
              </TableCell>
              <TableCell>
              {item.maleCount}
              </TableCell>
              <TableCell>
              {item.femaleCount}
              </TableCell>
              <TableCell>
              {item.totalCount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default ReligionCount;
