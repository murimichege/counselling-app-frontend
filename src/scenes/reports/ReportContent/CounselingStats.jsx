import React from "react";
import { Typography, Grid, TextField, MenuItem, Button, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
function CounselingStats() {
  // make api calls for the sessions undertaken by this counsellor.
  // all details should be auto-populated.
  // all details pulled should reflect info for the last 3 semesters.

  return (
    <Grid container>
      <Grid item xs={12} mt={4}>
        <Typography variant="subtitle1">Total Number of Clients</Typography>{" "}
      </Grid>
      <Grid item xs={12} mt={3}>
        <TextField
          type="number"
          mr={3}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Student"
        />
        <TextField
          type="number"
          ml={3}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Staff"
        />
        <TextField
          type="number"
          mr={3}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Faculty"
        />
        <TextField
          type="number"
          ml={3}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Family"
        />
        <TextField type="number" label="alumni" />
      </Grid>

      <Grid item xs={12} mt={3}>
        <Typography variant="subtitle1">Family Therapy. </Typography>{" "}
        <TextField
          type="number"
          mr={3}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Total Number of sessions"
        />
      </Grid>
      <Grid item xs={12} mt={3}>
        <Typography variant="subtitle1">Marital Therapy.</Typography>{" "}
        <TextField
          type="number"
          mr={3}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Total Number of sessions"
        />
      </Grid>

      <Grid item xs={12} mt={3}>
        <Typography variant="subtitle1">Group Counseling.</Typography>{" "}
        <TextField
          type="number"
          mr={3}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Male"
        />
        <TextField
          type="number"
          mr={3}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Female"
        />
        <TextField
          type="number"
          mr={3}
          mt={4}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Total"
        />{'  '} <br/>
         <TextField
          type="number"
          mr={3}
          sx={{ marginRight: "30px", marginTop:"25px" }}
          label="Total No. Of Sessions"
        />
         <Accordion sx={{width:"70%", marginTop:"30px"}}>
      <AccordionSummary>
        <Typography>Types</Typography>
      </AccordionSummary>
      <AccordionDetails>
            <Accordion>
                <AccordionSummary>
                <Typography variant="subtitle1">Group Therapy</Typography>{" "}
                </AccordionSummary>
            <AccordionDetails>
            <TextField
          type="number"
          mr={3}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Male Count"
        />
         <TextField
          type="number"
          mr={3}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Female Count"
        />
         <TextField
          type="number"
          mr={3}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Total Count"
        />
            </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                <Typography variant="subtitle1">Art Therapy</Typography>{" "}
                </AccordionSummary>
            <AccordionDetails>
            <TextField
          type="number"
          mr={3}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Male Count"
        />
         <TextField
          type="number"
          mr={3}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Female Count"
        />
         <TextField
          type="number"
          mr={3}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Total Count"
        />
            </AccordionDetails>
            </Accordion>
          
       
    
   
       
      </AccordionDetails>
    </Accordion>
      </Grid>
      
   
    </Grid>
  );
}

export default CounselingStats;
