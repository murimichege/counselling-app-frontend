import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Pagination,
  Avatar,
  Card,
  CardActionArea,
  Accordion,
  AccordionSummary,
} from '@mui/material';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Define folder data
const folders = [
  {
    title: 'Client Intake 1',
    fileCount: 1,
  },
  {
    title: 'Consent Form',
    fileCount: 1,
  },
  {
    title: '  MSE Form',
    fileCount: 1,
  },
  {
    title: 'Initial Counseling Record',
    fileCount: 1,
  },
  {
    title: 'On-going Form',
    fileCount: 1,
  },  
  {
    title: 'Safety Form',
    fileCount: 1,
  },
  {
    title: 'Termination Form',
    fileCount: 1,
  },
  {
    title: 'Additional Documents',
    fileCount: 1,
  },
];

function FolderAccordion({ title, fileCount }) {
  return (
    <Accordion variant="outlined" sx={{ borderRadius: '10px' }}>
      <AccordionSummary expandIcon={<ChevronRightTwoToneIcon />}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={2}
          width="100%"
        >
          <Box display="flex" alignItems="center">
            <Avatar
              sx={{
                bgcolor: 'primary.lighter',
                color: 'primary.main',
                width: 48,
                height: 48,
                marginRight: 2,
              }}
            >
              <FolderOpenTwoToneIcon />
            </Avatar>
            <Box>
              <Typography variant="h4" color="text.primary" gutterBottom noWrap>
                {title}
              </Typography>
              <Typography variant="subtitle1">
                <b>{fileCount}</b> files
              </Typography>
            </Box>
          </Box>
          {/* <ChevronRightTwoToneIcon fontSize="large" /> */}
        </Box>
      </AccordionSummary>
    </Accordion>
  );
}

function SessionDocuments() {

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3,
        }}
      >
        <Typography variant="h3">Session Documents</Typography>
      </Box>

      <Grid container spacing={3}>
        {folders.map((folder, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <FolderAccordion {...folder} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default SessionDocuments;
