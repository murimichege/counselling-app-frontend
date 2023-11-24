import React from 'react'
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
      sections: [
        {
          title: "Undergraduate",
          majors: [
            {
              major: "Freshman",
              male: 1,
              female: 13,
              total: 14,
            },
            {
                major: "Sophomore",
                male: 1,
                female: 11,
                total: 14,
              },
              {
                major: "Junior",
                male: 1,
                female: 9,
                total: 10,
              },
              {
                major: "Senior",
                male: 1,
                female: 13,
                total: 14,
              },
          ],
        },
        {
          title: "Graduate",
          majors: [
            {
              major: "First Year",
              male: 3,
              female: 21,
              total: 24,
            },
            {
                major: "Second Year",
                male: 3,
                female: 11,
                total: 14,
              },
          ],
        },
        {
          title: "Doctoral",
          majors: [
            {
              major: "First Year",
              male: 3,
              female: 2,
              total: 5,
            },
            {
                major: "Second Year",
                male: 3,
                female: 11,
                total: 14,
              },
              {
                major: "Third Year",
                male: 3,
                female: 11,
                total: 14,
              },
          ]

        
        },
      ],
    },
  ];
  
function StudyYear() {
  return (
    <div>
      <Typography variant="h3" align="center">
                    Access to Counseling by Year of Study
                  </Typography>
      {data.map((section, sectionIndex) => (
        <TableContainer component={Paper} key={sectionIndex}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={4}>
                  
                  <Typography variant="subtitle1" align="center">
                    {section.title}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Level</TableCell>
                <TableCell>Male</TableCell>
                <TableCell>Female</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {section.sections.map((subsection, subsectionIndex) => (
                <React.Fragment key={subsectionIndex}>
                  <TableRow>
                    <TableCell colSpan={4}>
                      <Typography variant="subtitle1" align="center">
                        {subsection.title}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  {subsection.majors.map((major, majorIndex) => (
                    <TableRow key={majorIndex}>
                      <TableCell>{major.major}</TableCell>
                      <TableCell>{major.male}</TableCell>
                      <TableCell>{major.female}</TableCell>
                      <TableCell>{major.total}</TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </div>  )
}

export default StudyYear