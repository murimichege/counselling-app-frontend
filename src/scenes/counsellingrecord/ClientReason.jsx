import { FC, useContext, useEffect, useState } from 'react';
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

import { CounsellingRecordContext } from './CounselingRecord';
import { Container, Typography, Button, Box } from '@mui/material';

const ClientReason = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const { ReasonsforCounseling } = formData;

  const [orderedItemsText, setOrderedItemsText] = useState([]);

  const handleContentChange = (content) => {
    setFormData((prevState) => ({
      ...prevState,
      ReasonsforCounseling: content,
    }));
  };

  useEffect(() => {
    const orderedItems = ReasonsforCounseling[0]?.root?.children[0]?.children || [];

    const itemsText = orderedItems.map((item, index) => {
      return `${index + 1}: ${item.children[0]?.text || ''}`;
    });

    setOrderedItemsText(itemsText);
  }, [ReasonsforCounseling]);
  return (
  <Container sx={{mt:4}}>
<h3>
Client’s presenting problem(s) -  Why client is seeking counseling?

</h3>

   <EditorComposer>
      <Editor hashtagsEnabled={true} onChange={handleContentChange} defaultValue={ReasonsforCounseling[0]}>
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

<Typography variant="h4">
  Reasons
</Typography>

 <Typography variant="body4">
        {orderedItemsText.map((text, index) => (
          <div key={index}>{text}</div>
        ))}
      </Typography>

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
          Save Client Details.
        </Button>
      </Box>
  </Container>
 
  );
};

export default ClientReason;
