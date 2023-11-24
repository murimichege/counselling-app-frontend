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
    title: "Undergraduate Students",
    maleCount: 100,
    femaleCount: 120,
    totalCount: 220,
  },
  {
    title: "Graduate Students",
    maleCount: 50,
    femaleCount: 70,
    totalCount: 120,
  },
  {
    title: "Doctoral",
    maleCount: 20,
    femaleCount: 30,
    totalCount: 50,
  },
 
];

const ServiceAccess = () => {
  // Table Data
  const tableData = data.map((item, index) => (
    <TableRow key={index}>
      <TableCell>
        <Typography variant="subtitle1">{item.title}</Typography>
      </TableCell>
      <TableCell>{item.maleCount}</TableCell>
      <TableCell>{item.femaleCount}</TableCell>
      <TableCell>{item.totalCount}</TableCell>
    </TableRow>
  ));

  // Custom colors for each bar
  const barColors = ["blue", "green", "orange"];

  // Chart Data
  const chartData = {
    labels: data.map((item) => item.title),
    datasets: [
      {
        label: "Male",
        data: data.map((item) => item.maleCount),
        backgroundColor: barColors,
      },
      {
        label: "Female",
        data: data.map((item) => item.femaleCount),
        backgroundColor: barColors,
      },
      {
        label: "Total",
        data: data.map((item) => item.totalCount),
        backgroundColor: barColors,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: "category",
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Typography variant="h4">Access to Counseling by Student Level</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Level</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>Female</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableData}</TableBody>
        </Table>
      </TableContainer>

      <Bar data={chartData} options={chartOptions} />
    </>
  );
};

export default ServiceAccess;
