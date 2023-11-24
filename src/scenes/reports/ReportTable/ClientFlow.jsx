import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";

const data = [
  { category: "New Clients", male: 10, female: 15, total: 25 },
  { category: "Continuing", male: 8, female: 12, total: 20 },
];

const ClientFlow = () => {
  // Extracting chart data from the existing 'data' object
  const chartData = {
    labels: data.map((entry) => entry.category),
    datasets: [
      {
        label: 'Male',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: data.map((entry) => entry.male),
      },
      {
        label: 'Female',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: data.map((entry) => entry.female),
      },
    ],
  };

  return (
    <>
      <Typography variant="h4">Client Flow</Typography>
      {/* Render the Table */}
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
      {/* Render the Bar Chart */}
      <div style={{ marginTop: "20px" }}>
        <Bar data={chartData} />
      </div>
    </>
  );
};

export default ClientFlow;
