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
import { Line } from "react-chartjs-2";

const data = [
  {
    title: "Kenyan Students",
    maleCount: 100,
    femaleCount: 120,
    totalCount: 220,
  },
  {
    title: "Tanzanian Students",
    maleCount: 50,
    femaleCount: 70,
    totalCount: 120,
  },
  {
    title: "Ugandan Students",
    maleCount: 20,
    femaleCount: 30,
    totalCount: 50,
  },
  {
    title: "Rwandan Students",
    maleCount: 30,
    femaleCount: 40,
    totalCount: 70,
  },
  {
    title: "Burundian Students",
    maleCount: 25,
    femaleCount: 35,
    totalCount: 60,
  },
  {
    title: "Ethiopian Students",
    maleCount: 40,
    femaleCount: 50,
    totalCount: 90,
  },
  {
    title: "Somali Students",
    maleCount: 15,
    femaleCount: 25,
    totalCount: 40,
  },
  {
    title: "Sudanese Students",
    maleCount: 35,
    femaleCount: 45,
    totalCount: 80,
  },
  {
    title: "South Sudanese Students",
    maleCount: 10,
    femaleCount: 15,
    totalCount: 25,
  },
  {
    title: "Djiboutian Students",
    maleCount: 5,
    femaleCount: 10,
    totalCount: 15,
  },
];

const NationalityCount = () => {
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

  // Chart Data
  const chartData = {
    labels: data.map((item) => item.title),
    datasets: [
      {
        label: "Male",
        data: data.map((item) => item.maleCount),
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Female",
        data: data.map((item) => item.femaleCount),
        borderColor: "pink",
        fill: false,
      },
      {
        label: "Total",
        data: data.map((item) => item.totalCount),
        borderColor: "green",
        fill: false,
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
      <Typography variant="h3">Access to Counseling by Nationality</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nationality</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>Female</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableData}</TableBody>
        </Table>
      </TableContainer>

      <Line data={chartData} options={chartOptions} />
    </>
  );
};

export default NationalityCount;
