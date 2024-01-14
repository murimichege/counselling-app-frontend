import React, { useState, useContext } from "react";
import "./index.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Typography,
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
  TextFormatDropdown,
  InsertDropdown,
  AlignDropdown,
  Divider,
} from "verbum";
import CheckIcon from "@mui/icons-material/Check";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CounsellingRecordContext } from "./CounselingRecord";

const TreatmentPlan = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [editorContent, setEditorContent] = useState([]);

  const handleInputChange = (content, field) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: [content],
    }));
  };

  const renderEditor = (defaultValue = [], field) => (
    <Box sx={{ item: true, xs: 12, sm: 8, md: 9 }}>
      <EditorComposer>
        <Editor
          hashtagsEnabled={true}
          onChange={(content) => handleInputChange(content, field)}
          defaultValue={defaultValue[0]}
        >
          <ToolbarPlugin defaultFontSize="20px">
            <FontFamilyDropdown />
            <FontSizeDropdown />
            <Divider />
            <BoldButton />
            <ItalicButton />
            <UnderlineButton />
            <CodeFormatButton />
            <InsertLinkButton />
            <TextFormatDropdown />
            <Divider />
            <InsertDropdown enablePoll={true} />
            <Divider />
            <AlignDropdown />
          </ToolbarPlugin>
        </Editor>
      </EditorComposer>
    </Box>
  );

  return (
    <main className="pt5 black-80" style={{ maxWidth: "50%", maxHeight: "50%", margin: "auto" }}>
      <h2>Treatment plan - Counseling intervention used / Action taken</h2>
      <Typography sx={{ mt: 4, mb: 2 }} variant="p" component="div">
        Determined by theoretical orientation because it helps one to conceptualize the client’s presenting concerns and to pick on the helpful intervention
      </Typography>

      <div className="center ph4 selectionDiv">
        {renderEditor(formData)}
       
      </div>

      {/* Buttons */}
      <Box sx={{ marginTop: "40px", justifyContent: "space-between", display: "flex" }}>
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
          onClick={() => onButtonClick("pageeight")}
        >
          Save Treatment plan.
        </Button>
      </Box>
    </main>
  );
};

export default TreatmentPlan;
