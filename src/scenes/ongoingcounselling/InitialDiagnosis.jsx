import React, { useState, useContext } from "react";
import "./index.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  ListItem,
  Checkbox,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  ListItemIcon
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ReactQuill from "react-quill";
import CheckIcon from "@mui/icons-material/Check";


import { CounsellingRecordContext } from "./OngoingCounselingRecord";

const InitialDiagnosis = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [goalsMetOpen, setGoalsMetOpen] = useState(true);
  const [goalsBeingWorkedOnOpen, setGoalsBeingWorkedOnOpen] = useState(true);
  const [goalsNotMetOpen, setGoalsNotMetOpen] = useState(true);
  const [checked, setChecked] = useState([1]);
  const [editorContent, setEditorContent] = useState([]); // State to store editor content
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = useState(false);


  // Handler to update the state when editor content changes
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
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <main
    className="pt5 black-80"
    style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
  >
    <h2>Initial Diagnosis</h2>
    <div
      className="center ph4 selectionDiv"
      style={{ height: "46%", display: "inline-block" }}
    >
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
      <Box>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Reasons
        </Typography>
        <List dense={dense}>
          {formData.CounsellingReasons.map((item) => {
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText
                primary="Single-line item"
                secondary={secondary ? "Secondary text" : null}
              />
            </ListItem>;
          })}
        </List>
      </Box>
    </div>

    {/* Buttons */}
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
        Save.
      </Button>
    </Box>
  </main>
  );
};

export default InitialDiagnosis;
