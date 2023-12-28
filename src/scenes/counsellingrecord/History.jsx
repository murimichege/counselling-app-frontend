import React, { useContext } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
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
import { CounsellingRecordContext } from "./CounselingRecord";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const History = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);

  const handleInputChange = (content, field) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: [content],
    }));
  };

  const renderEditor = (defaultValue=[], field) => (
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

  const historyFields = [
    {
      label: "History of past counseling or other psychological services sought /how client has been coping:",
      field: "historyofpastcounselingexperience",
    },
    {
      label: "Background Information: Family, its structure and quality of relationships etc.; significant childhood experiences, history of education and quality of school life experiences, current school and social life;",
      field: "familyhistory",
    },
    {
      label: "Medical and Psychiatric history: Current or past medical condition, medication being taken",
      field: "medicalandpsychiatrichistory",
    },
    {
      label: "Substance Abuse History: Use of illegal substances, Use of legal substances; Duration, Frequency, Level of use, Use of substance in the family;",
      field: "SubstanceAbuseHistory",
    },
  ];

  return (
    <main
    className="pt5 black-80"
    style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
  >
      <div
        className="center ph4 selectionDiv"
        style={{ height: "46%", display: "inline-block" }}
      >
        
        
         {historyFields.map((fieldInfo, index) => (
        <div key={index}>
          <Typography sx={{ mt: 4, mb: 2 }} variant={index === 0 ? "h4" : "h6"} component="div">
            {fieldInfo.label}
          </Typography>
          {renderEditor(formData[fieldInfo.field], fieldInfo.field)}
        </div>
      ))}
      {/* Buttons */}
      <Box sx={{ marginTop: "40px", justifyContent: "space-between", display: "flex" }}>
        <Button
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          type="submit"
          variant="contained"
          onClick={() => onButtonClick("pagethree")}
        >
          <KeyboardArrowLeftIcon/>
          Back
        </Button>
        <Button
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          type="submit"
          variant="contained"
          onClick={() => onButtonClick("pagefive")}
        >
          Save Client History.
          <KeyboardArrowRightIcon/>

        </Button>
      </Box>
      </div>  
    </main>
  );
};

export default History;
