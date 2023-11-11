import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { Line } from "react-chartjs-2";

const semesters = ["Spring", "Summer", "Fall"];

const sampleData = {
  Spring: [
    { year: 2022, maleCount: 40, femaleCount: 50, totalCount: 90 },
    { year: 2023, maleCount: 50, femaleCount: 70, totalCount: 120 },
  ],
  Summer: [
    { year: 2022, maleCount: 30, femaleCount: 40, totalCount: 70 },
    { year: 2023, maleCount: 40, femaleCount: 60, totalCount: 100 },
  ],
  Fall: [
    { year: 2022, maleCount: 50, femaleCount: 60, totalCount: 110 },
    { year: 2023, maleCount: 60, femaleCount: 80, totalCount: 140 },
  ],
};

const AttendanceTrend = () => {
  const [currentSemester, setCurrentSemester] = useState("Fall");

  const handleChangeSemester = (event) => {
    setCurrentSemester(event.target.value);
  };

  const renderTable = () => {
    const data = sampleData[currentSemester];
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Year</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>Female</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.year}</TableCell>
                <TableCell>{item.maleCount}</TableCell>
                <TableCell>{item.femaleCount}</TableCell>
                <TableCell>{item.totalCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderChart = () => {
    const data = sampleData[currentSemester];
    const chartData = {
      labels: data.map((item) => item.year),
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

    return <Line data={chartData} options={chartOptions} />;
  };

  return (
    <>
      <Typography variant="h3">Attendance Trend</Typography>

      <Select value={currentSemester} onChange={handleChangeSemester}>
        {semesters.map((semester) => (
          <MenuItem key={semester} value={semester}>
            {semester}
          </MenuItem>
        ))}
      </Select>

      {renderTable()}
      {renderChart()}
    </>
  );
};

export default AttendanceTrend;
