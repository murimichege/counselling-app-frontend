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
    title: "Chandaria School of Business",
    sections: [
      {
        title: "Undergraduate",
        majors: [
          {
            major: "International Business Administration",
            male: 1,
            female: 13,
            total: 14,
          },
          {
            major: "Business Administration",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "Accounting",
            male: 2,
            female: 12,
            total: 14,
          },

          {
            major: "Finance",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "Hotel and Restaurant Management",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "Global Leadership and Governance",
            male: 2,
            female: 12,
            total: 14,
          },
        ],
      },
      {
        title: "Graduate",
        majors: [
          {
            major: "Masters in Business Administration (MBA)",
            male: 3,
            female: 11,
            total: 14,
          },
          {
            major: "MBA - Online",
            male: 4,
            female: 10,
            total: 14,
          },
          {
            major: "MBA – Global Business Management",
            male: 4,
            female: 10,
            total: 14,
          },
          {
            major: "MBA – Health Leadership and Management",
            male: 4,
            female: 10,
            total: 14,
          },
          {
            major: "Msc.Management & Organizational Development ",
            male: 4,
            female: 10,
            total: 14,
          },

          // Add more majors for this section if needed
        ],
      },
      {
        title: "Doctoral",
        majors: [
          {
            major: "Doctor of Business Administration (DBA)",
            male: 1,
            female: 13,
            total: 14,
          },
        ],
      },
    ],
  },
  {
    title: "School of Humanities and Social Sciences",
    sections: [
      {
        title: "Undergraduate",
        majors: [
          {
            major: "International Relations",
            male: 1,
            female: 13,
            total: 14,
          },
          {
            major: "Psychology",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "Criminal Justice",
            male: 2,
            female: 12,
            total: 14,
          },
        ],
      },
      {
        title: "Graduate",
        majors: [
          {
            major: "MA Clinical Psychology",
            male: 1,
            female: 13,
            total: 14,
          },
          {
            major: "MA Counseling Psychology",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "MA International Relations",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "MA Marriage and Family Therapy ",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "MA in Criminal and Transitional Justice",
            male: 2,
            female: 12,
            total: 14,
          },
         
        ],
      },
      {
        title: "Doctoral",
        majors: [
          {
            major: "Doctor of Psychology (PsyD) Clinical Psychology",
            male: 1,
            female: 13,
            total: 14,
          },
          {
            major: "Doctor of Philosophy in International Relations",
            male: 2,
            female: 12,
            total: 14,
          },
          
         
        ],
      },
      // Add more sections if needed
    ],
  },
  {
    title: "School of Pharmacy & Health Sciences",
    sections: [
      {
        title: "Undergraduate",
        majors: [
          {
            major: "Pharmacy",
            male: 1,
            female: 13,
            total: 14,
          },
          {
            major: "Epidemiology and Biostatistics",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "Applied Biochemistry" ,
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "B,Tech in Analytical Chemistry." ,
            male: 2,
            female: 12,
            total: 14,
          },
          
        ],
      },
      ],
  },
  {
    title: "School of Communications, Cinematics & Creative Arts ",
    sections: [
      {
        title: "Undergraduate",
        majors: [
          {
            major: "Journalism",
            male: 1,
            female: 13,
            total: 14,
          },
          {
            major: "Film Production and Directing ",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "Animation" ,
            male: 2,
            female: 12,
            total: 14,
          },
         
          
        ],
      },
      {
        title: "Graduate",
        majors: [
          {
            major: "MA Communication Studies ",
            male: 3,
            female: 11,
            total: 14,
          }
        ],
      },    
    ],
  },
  {
    title: "School of Science & Technology ",
    sections: [
      {
        title: "Undergraduate",
        majors: [
          {
            major: "Data Science and Analytics ",
            male: 1,
            female: 13,
            total: 14,
          },
          {
            major: "Software Engineering ",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "Information Systems &  Technology" ,
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "Applied Computer Technology" ,
            male: 2,
            female: 12,
            total: 14,
          },
         
          
        ],
      },
      {
        title: "Graduate",
        majors: [
          {
            major: "Masters in Information Systems and Technology",
            male: 3,
            female: 11,
            total: 14,
          },
          {
            major: "Masters in Information Security ",
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
            major: "PhD. In Information Systems and Technology ",
            male: 3,
            female: 11,
            total: 14,
          },
          
         
        ],
      },  
    ],
  },
];
const CounselingByMajorTable = () => {
  return (
    <div>
      <Typography variant="h3" align="center">
                    Access to Counseling by Major
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
                <TableCell>Major</TableCell>
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
    </div>
  );
};

export default CounselingByMajorTable;
