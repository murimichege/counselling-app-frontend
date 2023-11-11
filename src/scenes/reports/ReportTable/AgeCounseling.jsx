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
import Chart from 'chart.js/auto';


const data = [
  {
    title: "15 – 20",
    maleCount: 50,
    femaleCount: 70,
    totalCount: 120,
  },
  {
    title: "21 – 25",
    maleCount: 30,
    femaleCount: 40,
    totalCount: 70,
  },
  {
    title: "26 – 30",
    maleCount: 20,
    femaleCount: 25,
    totalCount: 45,
  },
  {
    title: "36 – 40",
    maleCount: 15,
    femaleCount: 20,
    totalCount: 35,
  },
  {
    title: "41 – 45",
    maleCount: 10,
    femaleCount: 15,
    totalCount: 25,
  },
  {
    title: "46 +",
    maleCount: 5,
    femaleCount: 10,
    totalCount: 15,
  },
];

const AgeCounseling = () => {
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
      x: [
        {
          type: 'category',
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      y: {
        beginAtZero: true,
      },
    },
  };
  
  
  return (
    <>
      <Typography variant="h3">Access to Counseling by Age</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Age Range</TableCell>
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

      <Line data={chartData} options={chartOptions} />
    </>
  );
};

export default AgeCounseling;
