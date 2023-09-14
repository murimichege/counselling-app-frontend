import React from 'react';
import Select from 'react-select';

const Header = ({ title }) => {
  // Define options for the dropdown
  const semesterOptions = [
    { value: 'Summer', label: 'Summer' },
    { value: '2023', label: '2023' },
  ];

  // Handle selection change
  const handleSelectChange = (selectedOption) => {
    // Implement your logic here when the dropdown value changes
    console.log(`Selected value: ${selectedOption.value}`);
  };

  return (
    <div>
      <h1>{title}</h1>
      <Select
        options={semesterOptions}
        onChange={handleSelectChange}
        placeholder="Select Semester"
      />
    </div>
  );
};

export default Header;
