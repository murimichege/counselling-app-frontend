import React, { useState, useContext } from "react";
import {
  ListItem,
  Checkbox,
  List,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  TextField,
  AccordionDetails,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CounsellingRecordContext } from "../CounselingRecord";
import CommentIcon from "@mui/icons-material/Comment";

const Bereavement = ({ formData, setFormData }) => {
  const [accordionStates, setAccordionStates] = useState({
    Death: true,
    Lossofemployment: true,
    Displacement: true,
    ComplexGrief: true,
  });

  const [commentInputOpen, setCommentInputOpen] = useState({
    Death: true,
    Lossofemployment: true,
    Displacement: true,
    ComplexGrief: true,
  });

  const [comments, setComments] = useState({
    Death: "",
    Lossofemployment: "",
    Displacement: "",
    ComplexGrief: "",
  });

  const handleToggleAccordion = (section) => {
    setAccordionStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const toggleCommentInput = (section) => {
    setCommentInputOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleCommentChange = (section, event) => {
    const { value } = event.target;
    setComments((prevState) => ({
      ...prevState,
      [section]: value,
    }));
  };

  const renderAccordionSection = (sectionKey, sectionTitle) => {
    return (
      <Accordion
        expanded={accordionStates[sectionKey]}
        onChange={() => handleToggleAccordion(sectionKey)}
      >
        <AccordionSummary
          expandIcon={
            accordionStates[sectionKey] ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary={sectionTitle} />
        </AccordionSummary>
        <AccordionDetails>
          <List
            dense
            sx={{ width: "100%", minWidth: 400, bgcolor: "background.paper" }}
          >
            {commentInputOpen[sectionKey] && (
              <ListItem disablePadding>
                <ListItemButton>
                  <TextField
                    fullWidth
                    label="Add a comment"
                    variant="outlined"
                    value={comments[sectionKey]}
                    onChange={(e) => handleCommentChange(sectionKey, e)}
                  />
                </ListItemButton>
              </ListItem>
            )}
            <ListItem disablePadding>
              <ListItemButton onClick={() => toggleCommentInput(sectionKey)}>
                <CommentIcon
                  color={commentInputOpen[sectionKey] ? "primary" : "inherit"}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h3>Attention Deficit</h3>

      {renderAccordionSection(
        "SpecialLearningDisorder",
        "Special Learning Disorder"
      )}
      {renderAccordionSection("Death", "Death")}
      {renderAccordionSection("Lossofemployment", "Loss of Employment")}
      {renderAccordionSection("Displacement", "Displacement")}
      {renderAccordionSection("ComplexGrief", "Complex Grief")}
    </main>
  );
};

export default Bereavement;
