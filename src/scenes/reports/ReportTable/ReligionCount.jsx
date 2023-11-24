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
} from "@mui/material";
import { Bar } from "react-chartjs-2";

const data = [
  {
    title: "Christian",
    maleCount: 100,
    femaleCount: 120,
    totalCount: 220,
  },
  {
    title: "Muslim",
    maleCount: 50,
    femaleCount: 70,
    totalCount: 120,
  },
  {
    title: "Hindu",
    maleCount: 20,
    femaleCount: 30,
    totalCount: 50,
  },
  {
    title: "Agnostic",
    maleCount: 30,
    femaleCount: 40,
    totalCount: 70,
  },
  {
    title: "Atheist",
    maleCount: 25,
    femaleCount: 35,
    totalCount: 60,
  },
  {
    title: "No Religion",
    maleCount: 40,
    femaleCount: 50,
    totalCount: 90,
  },
  {
    title: "None",
    maleCount: 15,
    femaleCount: 25,
    totalCount: 40,
  },
];

const ReligionCount = () => {
  const chartData = {
    labels: data.map((entry) => entry.title),
    datasets: [
      {
        label: "Male",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: data.map((entry) => entry.maleCount),
      },
      {
        label: "Female",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: data.map((entry) => entry.femaleCount),
      },
      {
        label: "Total",
        backgroundColor: "rgba(46, 204, 113, 0.5)", 
        borderColor: "rgba(46, 204, 113, 1)", 
        borderWidth: 1,
        data: data.map((entry) => entry.totalCount),
      },
    ],
  };

  return (
    <>
      <Typography variant="h3">Access to Counseling by Religion</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Religion</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>Female</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="subtitle1">{item.title}</Typography>
                </TableCell>
                <TableCell>{item.maleCount}</TableCell>
                <TableCell>{item.femaleCount}</TableCell>
                <TableCell>{item.totalCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ marginTop: "20px" }}>
        <Bar data={chartData} />
      </div>
    </>
  );
};

export default ReligionCount;
