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
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

import CheckIcon from "@mui/icons-material/Check";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CounsellingRecordContext } from "./OngoingCounselingRecord";

const Assignment = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [secondary, setSecondary] = React.useState(false);

  const [editorContent, setEditorContent] = useState([]); // State to store editor content
  const [dense, setDense] = React.useState(false);

  // Handler to update the state when editor content changes
  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
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
  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Assignment</h2>
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
          Homework / Assignment given:
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
          onClick={() => onButtonClick("pagesix")}
        >
          Save Assignment.
        </Button>
      </Box>
    </main>
  );
};

export default Assignment;
