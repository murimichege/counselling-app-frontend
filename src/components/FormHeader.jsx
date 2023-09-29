import React, { useState } from 'react';
import Select from 'react-select';
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const FormHeader = ({ title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Define options for the dropdown
  const semesterOptions = [
    { value: 'Summer', label: 'Summer' },
    { value: 'Spring ', label: 'Spring' },
    { value: 'Fall ', label: 'Fall' },

  ];
  const yearOptions = [
    { value: '2023', label: '2023' },
    { value: '2024 ', label: '2024' },
    { value: '2025 ', label: '2025' },
    { value: '2026 ', label: '2026' },
    { value: '2027 ', label: '2027' },


  ];

  // State to manage the selected semester
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedYear, setselectedYear] = useState(null);

  // Handle selection change
  const handleSelectChange = (selectedOption) => {
    setSelectedSemester(selectedOption);
  };

  const handleSelectYear = (selectedYear) =>{
    setselectedYear(selectedYear)
  }
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        // color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title} 
      </Typography>
      <Select
        options={semesterOptions}
        value={selectedSemester}
        onChange={handleSelectChange}
        placeholder="Select Semester"
      />
       <Select
        options={yearOptions}
        value={selectedYear}
        onChange={handleSelectYear}
        placeholder="Select Year"
      />
    </Box>
  );
};

export default FormHeader;
