import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DoneIcon from '@mui/icons-material/Done';
const GeneralAdministrationIssues = () => {
  // Assuming a list of issues for a counseling report for a specific year
  const issues = [
    'Budgeting and Financial Management',
    'Staffing and Human Resources',
    'Facilities and Infrastructure',
    'Policy Development and Implementation',
    'Records Management',
    // Add more issues as needed
  ];

  return (
    <div>
      <Typography variant="h4">General Administration Issues</Typography>
      <List>
      {issues.map((issue, index) => (
          <ListItem key={index}>
            <DoneIcon /> {issue}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GeneralAdministrationIssues;
