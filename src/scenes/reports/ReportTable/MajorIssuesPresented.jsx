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

const data = [
  {
    category: "Academic or Educational Problems",
    sections: [
      {
        section: "Lower Academic Achievement",
        issues: [
          {
            symptom: "Academic Warning",
            male: 1,
            female: 13,
            total: 14,
          },
          {
            symptom: "Academic Probation",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            symptom: "Academic Dismissal",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            symptom: "Course Registration Difficulties",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            symptom: "Not meeting expected academic Goals",
            male: 2,
            female: 12,
            total: 14,
          },
        ],
      },
    ],
  },
  {
    category: "Learning problems",
    sections: [
      {
        section: "Lower Academic Achievement",
        issues: [
          {
            symptom: "Symptom 1",
            male: 1,
            female: 13,
            total: 14,
          },
          {
            symptom: "Symptom 1",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            symptom: "Symptom 1",
            male: 2,
            female: 12,
            total: 14,
          },
        ],
      },
    ],
  },
  {
    category: "Occupational Problems",
    sections: [
      {
        section: "",
        issues: [
          {
            symptom: "Difficulty with career choice",
            male: 1,
            female: 13,
            total: 14,
          },
          {
            symptom: "Work/school/life balance",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            symptom: "Employer-Employee Relationships",
            male: 2,
            female: 12,
            total: 14,
          },
        ],
      },
    ],
  },
  {
    category: "Housing Problems",
    sections: [
      {
        section: "",
        issues: [
          {
            symptom: "Homeless",
            male: 1,
            female: 13,
            total: 14,
          },
          {
            symptom: "Conflict with housemates",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            symptom:
              "Problems related to living at home -Problems related to living in residential institution",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            symptom: "Inadequate housing",
            male: 2,
            female: 12,
            total: 14,
          },
        ],
      },
    ],
  },
  {
    category: "Lack of Basic Needs: Food",
    sections: [
      {
        section: "",
        issues: [
          {
            symptom: "Inadequate food",
            male: 1,
            female: 13,
            total: 14,
          },
          
        ],
      },
    ],
  },



];

const MajorIssuesPresented = () => {
  return (
    <div>
      <Typography variant="h3" display="flex" justifyContent="center">
        {" "}
        Issues Presented
      </Typography>
      {data.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <Typography variant="subtitle1" align="center">
            {category.category}
          </Typography>

          {category.sections.map((section, sectionIndex) => (
            <TableContainer component={Paper} key={sectionIndex}>
              <Table>
                <TableHead>
                  <TableRow>
                    {/* <TableCell>Issue</TableCell> */}
                    <TableCell>Symptom</TableCell>
                    <TableCell>Male</TableCell>
                    <TableCell>Female</TableCell>
                    <TableCell>Total</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={5}>
                      <Typography variant="h4" align="center">
                        {section.section}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {section.issues.map((issue, issueIndex) => (
                    <TableRow key={issueIndex}>
                      {/* <TableCell>{issue.issue}</TableCell> */}
                      <TableCell>{issue.symptom}</TableCell>
                      <TableCell>{issue.male}</TableCell>
                      <TableCell>{issue.female}</TableCell>
                      <TableCell>{issue.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MajorIssuesPresented;
