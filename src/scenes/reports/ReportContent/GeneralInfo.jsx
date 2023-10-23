import React from "react";
import { Typography, Grid, TextField, MenuItem, Button } from "@mui/material";
function GeneralInfo() {
  // make api calls for the sessions undertaken by this counsellor.
  // all details should be auto-populated.
  // all details pulled should reflect info for the last 3 semesters.

  return (
    <Grid container>
      

      <Grid item xs={12} mt={4}>
        <TextField
          select
          label="Semester"
          name="Semester"
          sx={{ width: "20%", marginRight: "30px" }}
        >
          <MenuItem value={10}>Summer</MenuItem>
          <MenuItem value={20}>Spring</MenuItem>
          <MenuItem value={30}>Fall</MenuItem>

        </TextField>
        <TextField select label="Year" name="Year" sx={{ width: "20%" }}>
          <MenuItem value={10}>2023</MenuItem>
          <MenuItem value={20}>2024</MenuItem>
          <MenuItem value={30}>2025</MenuItem>
          <MenuItem value={40}>2026</MenuItem>
          <MenuItem value={50}>2027</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} mt={3}>
        <TextField
          mr={3}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Male"
        />
        <TextField
          ml={3}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Female"
        />
        <TextField label="Total" />
      </Grid>
      <Grid item xs={12} mt={3}>
        <Typography variant="subtitle1">
          Total Number of Clients based on the school population
        </Typography>{" "}
        {"  "}
        <TextField
          label="Total No. Of Clients"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
        />
        <TextField label="%" />
      </Grid>
      <Grid item xs={12} mt={3}>
        <Typography variant="subtitle1">
        Access by Nationality
                </Typography>{" "}
        {"  "}
        <TextField
          label="Total No. Of Clients"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
        />
                <TextField
          label="Total No. Of Clients"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
        />
        <TextField label="%" />
      </Grid>
      <Grid item xs={12} mt={3}>
        <TextField
          mr={3}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Male"
        />
        <TextField
          ml={3}
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Female"
        />
        <TextField label="Total" />
      </Grid>
    </Grid>
  );
}

export default GeneralInfo;
