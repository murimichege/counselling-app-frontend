import React from "react";
import { Table, TableBody, TableCell,Box, Button, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";

const data = [
  {
    title: "Student",
    Male:20,
    Female:20,
    total: 30,
  },
  {
    title: "Staff",
    Male:20,
    Female:20,
    total: 20,
  },
  {
    title: "Faculty",
    Male:20,
    Female:20,
    total: 20,
  },
  {
    title: "Family",
    Male:20,
    Female:20,
    total: 15,
  },
  {
    title: "Alumni",
    Male:20,
    Female:20,
    total: 10,
  },
];

const CounselingStatsTable = () => {
  const tableData = data.map((row, index) => (
    <TableRow key={index}>
      <TableCell>{row.title}</TableCell>
      <TableCell>{row.Male}</TableCell>
      <TableCell>{row.Female}</TableCell>
      <TableCell>{row.total}</TableCell>
    </TableRow>
  ));

  // Custom colors for each bar
  const barColors = ["red", "blue", "green", "orange", "purple"];

  // Chart Data
  const chartData = {
    labels: data.map((row) => row.title),
    datasets: [
      {
        label: "Total",
        data: data.map((row) => row.total),
        backgroundColor: barColors,
      },
      {
        label: "Female",
        data: data.map((row) => row.Female),
        backgroundColor: barColors,
      },
      {
        label: "Male",
        data: data.map((row) => row.Male),
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
    <Box sx={{
      display:"flex",
      justifyContent:"space-between"
    }}>
    <Typography variant="h3">Counseling Report</Typography>
      <Button variant="contained">
        Generate Report
      </Button>
    </Box>
     
    <Typography variant="h4">General Statistics</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
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

export default CounselingStatsTable;
