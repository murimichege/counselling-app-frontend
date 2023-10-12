import React from "react";
import GeneralInfo from "./ReportContent/GeneralInfo";
import CounselingStats from "./ReportContent/CounselingStats";
import { Grid, Typography, Button } from "@mui/material";
function ReportBuilder() {
  // make api calls for the sessions undertaken by this counsellor.
  // all details should be auto-populated.
  // all details pulled should reflect info for the last 3 semesters.

  return (
    <>
      <Grid item xs={12} mt={3}>
        <Typography variant="h3">Build your report</Typography>
      </Grid>

      <GeneralInfo />
      <Grid item xs={12} mt={3}>
        <Typography variant="h4">Individual Assessment</Typography>
      </Grid>
      <CounselingStats/>
      <Button variant="outlined" sx={{ marginTop: "30px" }}>
        Continue
      </Button>
    </>
  );
}

export default ReportBuilder;
