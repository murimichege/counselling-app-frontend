import React, { useState, useContext } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CounsellingRecordContext } from "./OngoingCounselingRecord";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

const NextAppointment = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [editorContent, setEditorContent] = useState([]);

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

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

  const handleInputChange = () => {};

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>{"Referral (if any)"}</h2>

      <div
        className="center ph4 selectionDiv"
        style={{ height: "46%", display: "inline-block" }}
      >
        <Box item xs={12} sm={8} md={9}>
          <EditorWrapper>
            <ReactQuill value={editorContent} onChange={handleEditorChange} />
          </EditorWrapper>
        </Box>

        <Box>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Next Appointment
          </Typography>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Date"
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
                seconds: renderTimeViewClock,
              }}
            />
          </LocalizationProvider>
        </Box>
      </div>

      <Box
        sx={{
          marginTop: "40px",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Button
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          type="submit"
          variant="contained"
          onClick={() => onButtonClick("pageone")}
        >
          Cancel
        </Button>

        <Button
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          type="submit"
          variant="contained"
          onClick={() => onButtonClick("pagethree")}
        >
          Save Referral and Close Record.
        </Button>
      </Box>
    </main>
  );
};

export default NextAppointment;
