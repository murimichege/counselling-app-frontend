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
import {
  EditorComposer,
  Editor,
  ToolbarPlugin,
  FontFamilyDropdown,
  FontSizeDropdown,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  CodeFormatButton,
  InsertLinkButton,
  TextColorPicker,
  BackgroundColorPicker,
  TextFormatDropdown,
  InsertDropdown,
  AlignDropdown,
  Divider,
} from 'verbum';

import { CounsellingRecordContext } from "./CounselingRecord";

const Explore = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);

  const {
    Durationofissuepresented,
    effectsonclient,
    currentfunctioning,
    pastfunctioning,
  } = formData;
  const [secondary, setSecondary] = React.useState(false);

  const [editorContent, setEditorContent] = useState([]); // State to store editor content
  const [dense, setDense] = React.useState(false);

  // Handler to update the state when editor content changes

  const handleInputChange = (content) => {
    setFormData((prevState) => ({ ...prevState, Durationofissuepresented: [content], effectsonclient: [content], currentfunctioning: [content],pastfunctioning:[content]  }));
  };


  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>
        Explore for how long this has been going on and how this has affected
        the client’s?
      </h2>
      <div
        className="center ph4 selectionDiv"
        style={{ height: "46%", display: "inline-block" }}
      >
        <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
          Explore for how long this has been going on and
        </Typography>
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
        <EditorComposer>
      <Editor hashtagsEnabled={true} onChange={handleInputChange} defaultValue={Durationofissuepresented[0]}>
        <ToolbarPlugin defaultFontSize="10px">
          <FontFamilyDropdown />
          <FontSizeDropdown />
          <Divider />
          <BoldButton />
          <ItalicButton />
          <UnderlineButton />
          <CodeFormatButton />
          <InsertLinkButton />
          {/* <TextColorPicker />
          <BackgroundColorPicker /> */}
          <TextFormatDropdown />
          <Divider />
          <InsertDropdown enablePoll={true} />
          <Divider />
          <AlignDropdown />
        </ToolbarPlugin>
      </Editor>
    </EditorComposer>
        </Box>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
          how this has affected the client’s?
        </Typography>
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
             <EditorComposer>
      <Editor hashtagsEnabled={true} onChange={handleInputChange} defaultValue={effectsonclient[0]}>
        <ToolbarPlugin defaultFontSize="10px">
          <FontFamilyDropdown />
          <FontSizeDropdown />
          <Divider />
          <BoldButton />
          <ItalicButton />
          <UnderlineButton />
          <CodeFormatButton />
          <InsertLinkButton />
          {/* <TextColorPicker />
          <BackgroundColorPicker /> */}
          <TextFormatDropdown />
          <Divider />
          <InsertDropdown enablePoll={true} />
          <Divider />
          <AlignDropdown />
        </ToolbarPlugin>
      </Editor>
    </EditorComposer>
        </Box>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
          i. Current functioning
        </Typography>
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
                <EditorComposer>
      <Editor hashtagsEnabled={true} onChange={handleInputChange} defaultValue={currentfunctioning[0]}>
        <ToolbarPlugin defaultFontSize="10px">
          <FontFamilyDropdown />
          <FontSizeDropdown />
          <Divider />
          <BoldButton />
          <ItalicButton />
          <UnderlineButton />
          <CodeFormatButton />
          <InsertLinkButton />
          {/* <TextColorPicker />
          <BackgroundColorPicker /> */}
          <TextFormatDropdown />
          <Divider />
          <InsertDropdown enablePoll={true} />
          <Divider />
          <AlignDropdown />
        </ToolbarPlugin>
      </Editor>
    </EditorComposer>
        </Box>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
          ii. Past Functioning
        </Typography>
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
                    <EditorComposer>
      <Editor hashtagsEnabled={true} onChange={handleInputChange} defaultValue={pastfunctioning[0]}>
        <ToolbarPlugin defaultFontSize="10px">
          <FontFamilyDropdown />
          <FontSizeDropdown />
          <Divider />
          <BoldButton />
          <ItalicButton />
          <UnderlineButton />
          <CodeFormatButton />
          <InsertLinkButton />
          {/* <TextColorPicker />
          <BackgroundColorPicker /> */}
          <TextFormatDropdown />
          <Divider />
          <InsertDropdown enablePoll={true} />
          <Divider />
          <AlignDropdown />
        </ToolbarPlugin>
      </Editor>
    </EditorComposer>
        </Box>
        <Box>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
            Reasons
          </Typography>
          {/* <List dense={dense}>
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
          </List> */}
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
          onClick={() => onButtonClick("pagefour")}
        >
          Save Client Details.
        </Button>
      </Box>
    </main>
  );
};

export default Explore;
