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

import {data } from './data'

// Your imports...

const MajorIssuesPresented = () => {
  return (
    <div>
      <Typography variant="h3" display="flex" justifyContent="center">
        Issues Presented
      </Typography>
      {data.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <Typography variant="h3" align="center">
            {category.category}
          </Typography>

          {category.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <Typography variant="h4" align="center">
                {section.section}
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                    <TableCell>Subcategory</TableCell>

                      <TableCell>Symptom</TableCell>
                      <TableCell>Male</TableCell>
                      <TableCell>Female</TableCell>
                      <TableCell>Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {section.issues.map((issue, issueIndex) => (
                      <TableRow key={issueIndex}>
                                                <TableCell>
                          {category.subcategories &&
                          category.subcategories[issueIndex]
                            ? category.subcategories[issueIndex]
                            : ""}
                        </TableCell>
                        <TableCell>{issue.symptom}</TableCell>
                        {/* Display subcategories if available */}

                        <TableCell>{issue.male}</TableCell>
                        <TableCell>{issue.female}</TableCell>
                        <TableCell>{issue.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MajorIssuesPresented;

