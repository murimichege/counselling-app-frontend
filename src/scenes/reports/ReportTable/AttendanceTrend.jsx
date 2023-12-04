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
const years = Array.from({ length: 10 }, (_, index) => 2026 - index); // Generates years from 2017 to 2026

const sampleData = {
  Spring: [
    { year: 2015, maleCount: 120, femaleCount: 55, totalCount: 175 },
    { year: 2016, maleCount: 190, femaleCount: 250, totalCount: 340 },
    { year: 2017, maleCount: 210, femaleCount: 82, totalCount: 292 },
    { year: 2018, maleCount: 120, femaleCount: 89, totalCount: 209 },
    { year: 2019, maleCount: 230, femaleCount: 305, totalCount: 535 },
    { year: 2020, maleCount: 137, femaleCount: 305, totalCount: 442 },
    { year: 2021, maleCount: Math.floor(Math.random() * 200) + 100, femaleCount: Math.floor(Math.random() * 200) + 100, totalCount: Math.floor(Math.random() * 400) + 200 },
    { year: 2022, maleCount: Math.floor(Math.random() * 200) + 100, femaleCount: Math.floor(Math.random() * 400) + 200, totalCount: Math.floor(Math.random() * 600) + 300 },
    { year: 2023, maleCount: Math.floor(Math.random() * 200) + 100, femaleCount: Math.floor(Math.random() * 200) + 100, totalCount: Math.floor(Math.random() * 400) + 200 },
  ],
  Summer: [
    { year: 2015, maleCount: 120, femaleCount: 55, totalCount: 175 },
    { year: 2016, maleCount: 190, femaleCount: 250, totalCount: 340 },
    { year: 2017, maleCount: 210, femaleCount: 82, totalCount: 292 },
    { year: 2018, maleCount: 120, femaleCount: 89, totalCount: 209 },
    { year: 2019, maleCount: 230, femaleCount: 305, totalCount: 535 },
    { year: 2020, maleCount: 137, femaleCount: 305, totalCount: 442 },
    { year: 2021, maleCount: Math.floor(Math.random() * 200) + 100, femaleCount: Math.floor(Math.random() * 200) + 100, totalCount: Math.floor(Math.random() * 400) + 200 },
    { year: 2022, maleCount: Math.floor(Math.random() * 200) + 100, femaleCount: Math.floor(Math.random() * 400) + 200, totalCount: Math.floor(Math.random() * 600) + 300 },
    { year: 2023, maleCount: Math.floor(Math.random() * 200) + 100, femaleCount: Math.floor(Math.random() * 200) + 100, totalCount: Math.floor(Math.random() * 400) + 200 },
  ],
  Fall: [
    { year: 2015, maleCount: 120, femaleCount: 55, totalCount: 175 },
    { year: 2016, maleCount: Math.floor(Math.random() * 200) + 100, femaleCount: Math.floor(Math.random() * 200) + 100, totalCount: Math.floor(Math.random() * 400) + 200 },
    { year: 2017, maleCount: 210, femaleCount: 82, totalCount: 292 },
    { year: 2018, maleCount: 120, femaleCount: 89, totalCount: 209 },
    { year: 2019, maleCount: 230, femaleCount: 305, totalCount: 535 },
    { year: 2020, maleCount: 137, femaleCount: 305, totalCount: 442 },
    // Reproduce random data for Fall semester...
    { year: 2021, maleCount: Math.floor(Math.random() * 200) + 100, femaleCount: Math.floor(Math.random() * 200) + 100, totalCount: Math.floor(Math.random() * 400) + 200 },
    { year: 2022, maleCount: Math.floor(Math.random() * 200) + 100, femaleCount: Math.floor(Math.random() * 400) + 200, totalCount: Math.floor(Math.random() * 600) + 300 },
    { year: 2023, maleCount: Math.floor(Math.random() * 200) + 100, femaleCount: Math.floor(Math.random() * 200) + 100, totalCount: Math.floor(Math.random() * 400) + 200 },
    // ... Continue for other years till 2016
  ],
  // Add data for other semesters...
};


const AttendanceTrend = () => {
  const [currentSemester, setCurrentSemester] = useState("Fall");
  const [year1, setYear1] = useState(2021);
  const [year2, setYear2] = useState(2020);

  const handleChangeSemester = (event) => {
    setCurrentSemester(event.target.value);
  };

  const handleChangeYear1 = (event) => {
    setYear1(event.target.value);
  };

  const handleChangeYear2 = (event) => {
    setYear2(event.target.value);
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

      <Select value={year1} onChange={handleChangeYear1}>
        {years.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>

      <Select value={year2} onChange={handleChangeYear2}>
        {years.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>

      {renderTable()}
      {renderChart()}
    </>
  );
};

export default AttendanceTrend;
