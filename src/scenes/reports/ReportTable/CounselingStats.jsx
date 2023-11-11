import React from "react";
import { Table, TableBody, TableCell,Box, Button, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";

const data = [
  {
    title: "Student",
    total: 30,
  },
  {
    title: "Staff",
    total: 20,
  },
  {
    title: "Faculty",
    total: 20,
  },
  {
    title: "Family",
    total: 15,
  },
  {
    title: "Alumni",
    total: 10,
  },
];

const CounselingStatsTable = () => {
  // Table Data
  const tableData = data.map((row, index) => (
    <TableRow key={index}>
      <TableCell>{row.title}</TableCell>
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
