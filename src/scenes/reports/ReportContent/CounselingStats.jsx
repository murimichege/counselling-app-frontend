import React, { useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  InputLabel,
  styled,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function CounselingStats() {
  // make api calls for the sessions undertaken by this counsellor.
  // all details should be auto-populated.
  // all details pulled should reflect info for the last 3 semesters.
  const EditorWrapper = styled(Box)(
    ({ theme }) => `
  
      .ql-editor {
        min-height: 100px;
        width: 86vh;
      }
  
      .ql-toolbar.ql-snow {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
      }
  
      .ql-toolbar.ql-snow,
      .ql-container.ql-snow {
        border-color: gray;
      }
  
      .ql-container.ql-snow {
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
      }
  
      &:hover {
        .ql-toolbar.ql-snow,
        .ql-container.ql-snow {
          border-color: gray;
        }
      }
  `
  );

  const [editorContent, setEditorContent] = useState([]); // State to store editor content
  const [dense, setDense] = React.useState(false);

  // Handler to update the state when editor content changes
  const handleEditorChange = (content) => {
    setEditorContent(content);
  };
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
        />
        {"  "} <br />
        <TextField
          type="number"
          mr={3}
          sx={{ marginRight: "30px", marginTop: "25px" }}
          label="Total No. Of Sessions"
        />
        <Accordion sx={{ width: "70%", marginTop: "30px" }}>
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
      <Grid item xs={12} mt={3}>
        <Typography variant="subtitle1">Online Counseling.</Typography>{" "}
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
        />
        {"  "} <br />
      </Grid>
      <Grid item xs={12} mt={3}>
        <Typography variant="subtitle1">Email Counseling</Typography>{" "}
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
        />
        {"  "} <br />
      </Grid>

      <Grid item xs={12} mt={3}>
        <Typography variant="subtitle1">Telephone Counseling</Typography>{" "}
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
        />
        {"  "} <br />
      </Grid>
      <Grid item xs={12} mt={3}>
        <Typography variant="subtitle1">Client Flow</Typography>{" "}
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
        />
        {"  "} <br />
      </Grid>
      <Accordion sx={{ width: "70%", marginTop: "30px" }}>
        <AccordionSummary>
          <Typography>Access of Counseling by</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary>
              <Typography variant="subtitle1">
                Undergraduate Students
              </Typography>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <Accordion>
                <AccordionSummary>
                  <Typography variant="subtitle1">Freshmen</Typography>{" "}
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
                  <Typography variant="subtitle1">Sophomore</Typography>{" "}
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
                  <Typography variant="subtitle1">Junior</Typography>{" "}
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
                  <Typography variant="subtitle1">Senior</Typography>{" "}
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
          <Accordion>
            <AccordionSummary>
              <Typography variant="subtitle1">Graduate Students</Typography>{" "}
            </AccordionSummary>

            <AccordionDetails>
              <Accordion>
                <AccordionSummary>
                  <Typography variant="subtitle1">Doctoral</Typography>{" "}
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
                  <Typography variant="subtitle1">Masters</Typography>{" "}
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
        </AccordionDetails>
      </Accordion>
      <Grid item xs={12} mt={3}>
        <Typography variant="h4">
          Trend over the last three semesters: (Spring, Summer, Fall)
        </Typography>{" "}
        {"  "}
        <Typography variant="subtitle1">
          Total Client Intake Per semester
        </Typography>{" "}
        {"  "}
        <TextField
          label="Total No. Of Clients"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
        />
        <Typography variant="subtitle1">
          Total Enrollment per semesters
        </Typography>{" "}
        {"  "}
        <TextField
          label="Total No. Of Clients"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
        />
        <Typography variant="subtitle1">
          Percentage access to counseling
        </Typography>{" "}
        {"  "}
        <TextField
          label="%"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
        />
      </Grid>
      <Grid item xs={12} mt={3}>
        <Typography variant="subtitle1">Access by Nationality</Typography>{" "}
        {"  "}
        <TextField
          label="Nationality"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
        />
        <TextField
          label="Nationality Count"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
        />
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
        <Typography variant="subtitle1">Access by Religion</Typography> {"  "}
        <TextField
          label="Nationality"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
        />
        <TextField
          label="Nationality Count"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
        />
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
          Access to Counseling by age:
        </Typography>{" "}
        {"  "}
        <Box display="flex" mb={5}>
          <InputLabel>15 – 20</InputLabel>
          <TextField
            label="Age Group Count"
            sx={{ gridColumn: "span 2", marginRight: "30px" }}
          />
          <InputLabel>21 – 25</InputLabel>
          <TextField
            label="Age Group Count"
            sx={{ gridColumn: "span 2", marginRight: "30px" }}
          />
          <InputLabel>26- 30</InputLabel>
          <TextField
            label="Age Group Count"
            sx={{ gridColumn: "span 2", marginRight: "30px" }}
          />
        </Box>
        <Box display="flex">
          <InputLabel>36 – 40</InputLabel>
          <TextField
            label="Age Group Count"
            sx={{ gridColumn: "span 2", marginRight: "30px" }}
          />
          <InputLabel>41- 45</InputLabel>
          <TextField
            label="Age Group Count"
            sx={{ gridColumn: "span 2", marginRight: "30px" }}
          />
          <InputLabel>46 + </InputLabel>
          <TextField
            label="Age Group Count"
            sx={{ gridColumn: "span 2", marginRight: "30px" }}
          />
        </Box>
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
          Access to Counseling by Major.
        </Typography>{" "}
        {"  "}
        List of majors against attendees
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
      <Grid item mt={3}>
        <Typography variant="h4">Major Counseling Issues presented</Typography>{" "}
        {"  "}
        <Box
          sx={
            {
              // mb: `${theme.spacing(3)}`
            }
          }
          item
          xs={12}
          sm={8}
          md={9}
        >
          <EditorWrapper>
            <ReactQuill value={editorContent} onChange={handleEditorChange} />
          </EditorWrapper>
        </Box>
      </Grid>
      <Grid item mt={3}>
        <Typography variant="h4">
          Psychological Tests/ Assessment tool administered to clients
        </Typography>{" "}
        {"  "}
        <Box
          sx={
            {
              // mb: `${theme.spacing(3)}`
            }
          }
          item
          xs={12}
          sm={8}
          md={9}
        >
          <EditorWrapper>
            <ReactQuill value={editorContent} onChange={handleEditorChange} />
          </EditorWrapper>
        </Box>
      </Grid>
      <Grid item xs={12} mt={3}>
        <TextField
          mr={3}
          type="number"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Male"
        />
        <TextField
          ml={3}
          type="number"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Female"
        />
        <TextField type="number" label="Total" />
      </Grid>
      <Grid item mt={3}>
        <Typography variant="h4">Counseling intervention used.</Typography>{" "}
        {"  "}
        <Box
          sx={
            {
              // mb: `${theme.spacing(3)}`
            }
          }
          item
          xs={12}
          sm={8}
          md={9}
        >
          <EditorWrapper>
            <ReactQuill value={editorContent} onChange={handleEditorChange} />
          </EditorWrapper>
        </Box>
      </Grid>

      <Grid item mt={3}>
        <Typography variant="h4">
          Publications of IEC. // Information Education Materials
        </Typography>{" "}
        {"  "}
        <Box
          sx={
            {
              // mb: `${theme.spacing(3)}`
            }
          }
          item
          xs={12}
          sm={8}
          md={9}
        >
          <EditorWrapper>
            <ReactQuill value={editorContent} onChange={handleEditorChange} />
          </EditorWrapper>
        </Box>
      </Grid>
      <Grid item xs={12} mt={3}>
        <TextField
          mr={3}
          type="number"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Number  Published"
        />
        <TextField
          ml={3}
          type="number"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Number distributed."
        />
      </Grid>

      <Grid item mt={3}>
        <Typography variant="h4">
        VCT
                </Typography>{" "}
        {"  "}
        <Box
          sx={
            {
              // mb: `${theme.spacing(3)}`
            }
          }
          item
          xs={12}
          sm={8}
          md={9}
        >
          <EditorWrapper>
            <ReactQuill value={editorContent} onChange={handleEditorChange} />
          </EditorWrapper>
        </Box>
      </Grid>
      <Grid item xs={12} mt={3}>

      <TextField
          mr={3}
          type="number"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Number of Clients seen"
        />
        <TextField
          mr={3}
          type="number"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Male"
        />
        <TextField
          ml={3}
          type="number"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Female"
        />
        <TextField
          ml={3}
          type="number"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Total"
        />
      </Grid>


      <Grid item mt={3}>
        <Typography variant="h4">
        Class Presentations Done
                </Typography>{" "}
        {"  "}
        <Box
          sx={
            {
              // mb: `${theme.spacing(3)}`
            }
          }
          item
          xs={12}
          sm={8}
          md={9}
        >
          <EditorWrapper>
            <ReactQuill value={editorContent} onChange={handleEditorChange} />
          </EditorWrapper>
        </Box>
      </Grid>
      <Grid item xs={12} mt={3}>

      <TextField
          mr={3}
          type="date"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Date"
        />
        <TextField
          mr={3}
          type="number"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Class Count"
        />
        <TextField
          ml={3}
          type="number"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="Number of Students. "
        />
     
      </Grid>


      <Grid item mt={3}>
        <Typography variant="h4">
        Referrals:
                        </Typography>{" "}
        {"  "}
       
      </Grid>
      <Grid item xs={12} mt={3}>

      <TextField
          mr={3}
          type="text"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="From Counseling Center"
        />
        <TextField
          mr={3}
          type="text"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label=" To Counseling Centre."
        />
        <TextField
          ml={3}
          type="text"
          sx={{ gridColumn: "span 2", marginRight: "30px" }}
          label="  Events Organized."
        />
     
      </Grid>

      <Grid item  mt={3}>
        <Typography variant="h4">
        General Administrative Issues
                        </Typography>{" "}
        {"  "}
        <Box
          sx={
            {
              // mb: `${theme.spacing(3)}`
            }
          }
          item
          xs={12}
          sm={8}
          md={9}
        >
          <EditorWrapper>
            <ReactQuill value={editorContent} onChange={handleEditorChange} />
          </EditorWrapper>
        </Box>
      </Grid>
      <Grid item  mt={3}>
        <Typography variant="h4">
        Trainings                        </Typography>{" "}
        {"  "}
        <Box
          sx={
            {
              // mb: `${theme.spacing(3)}`
            }
          }
          item
          xs={12}
          sm={8}
          md={9}
        >
          <EditorWrapper>
            <ReactQuill value={editorContent} onChange={handleEditorChange} />
          </EditorWrapper>
        </Box>
      </Grid>
      <Grid item xs={12} mt={3}>
      <Typography variant="h4">
      Events                        </Typography>{" "}
        {"  "}
      
<TextField
    mr={3}
    type="date"
    sx={{ gridColumn: "span 2", marginRight: "30px" }}
  />
  <TextField
    mr={3}
    type="text"
    sx={{ gridColumn: "span 2", marginRight: "30px" }}
    label=" Targeted Audience."
  />

  <TextField
    ml={3}
    type="text"
    sx={{ gridColumn: "span 4", marginRight: "30px" }}
    label="Number of participants planned for"
  />
  <TextField
    ml={3}
    type="text"
    sx={{ gridColumn: "span 4", marginRight: "30px" }}
    label="Number of participants in attendance. "
  />
    <TextField
    ml={3}
    type="text"
    sx={{ gridColumn: "span 4", marginRight: "30px" }}
    label="Topic Presented  "
  />

</Grid>
<Grid item mt={3}>
        <Typography variant="h4">Findings in the Semester.</Typography>{" "}
        {"  "}
        <Box
          sx={
            {
              // mb: `${theme.spacing(3)}`
            }
          }
          item
          xs={12}
          sm={8}
          md={9}
        >
          <EditorWrapper>
            <ReactQuill value={editorContent} onChange={handleEditorChange} />
          </EditorWrapper>
        </Box>
      </Grid>
      <Grid item mt={3}>
        <Typography variant="h4">Recommendations</Typography>{" "}
        {"  "}
        <Box
          sx={
            {
              // mb: `${theme.spacing(3)}`
            }
          }
          item
          xs={12}
          sm={8}
          md={9}
        >
          <EditorWrapper>
            <ReactQuill value={editorContent} onChange={handleEditorChange} />
          </EditorWrapper>
        </Box>
      </Grid>
    </Grid>
  );
}
export default CounselingStats;
