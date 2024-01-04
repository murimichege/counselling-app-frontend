import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  ListItem,
  Checkbox,
  List,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CommentIcon from "@mui/icons-material/Comment";
import { ExaminationFormContext } from "./Examinationform";

const StepThree = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(ExaminationFormContext);

  const [accordionStates, setAccordionStates] = useState({
    Memory: true,
    Concentration: true,
    Insight: true,
    Judgment: true,
  });

  const [checked, setChecked] = useState([]);

  const [commentInputOpen, setCommentInputOpen] = useState({
    Memory: false,
    Concentration: false,
    Insight: false,
    Judgment: false,
  });

  const [comments, setComments] = useState({
    Memory: "",
    Concentration: "",
    Insight: "",
    Judgment: "",
  });

  const handleToggle = (section, value) => {
    const updatedChecked = { ...checked };
    updatedChecked[section] = value;
    setChecked(updatedChecked);
    updateFormData(section, value);
  };

  const handleAccordionChange = (section) => {
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

  const handleCommentChange = (section, value) => {
    const updatedComments = { ...comments };
    updatedComments[section] = value;
    setComments(updatedComments);
    updateFormData(section, value);
  };

  const updateFormData = (section, value) => {
    const updatedFormData = {
      ...formData,
      examination: {
        ...formData.examination,
        [section]: value,
      },
    };
    setFormData(updatedFormData);
  };

  const renderAccordion = (section, items) => (
    <Accordion expanded={accordionStates[section]} onChange={() => handleAccordionChange(section)}>
      <AccordionSummary expandIcon={accordionStates[section] ? <ExpandLessIcon /> : <ExpandMoreIcon />}>
        <ListItemText primary={section} />
      </AccordionSummary>
      <AccordionDetails>
        {items.map((value, index) => (
          <Accordion key={index}>
            <AccordionSummary>
              <ListItemText primary={value} />
            </AccordionSummary>
            <AccordionDetails>
              <List dense sx={{ width: "100%", minWidth: 400, bgcolor: "background.paper" }}>
                {value === "Short Term Intact" || value === "Long Term Intact" ? (
                  <ListItem disablePadding sx={{ display: "block" }} key={`${section}-${value}`}>
                    <ListItemButton>
                      <ListItemText primary="Good" />
                      <Checkbox
                        edge="end"
                        onChange={() => handleToggle(section, "Good")}
                        checked={checked[section] === "Good"}
                      />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="Poor" />
                      <Checkbox
                        edge="end"
                        onChange={() => handleToggle(section, "Poor")}
                        checked={checked[section] === "Poor"}
                      />
                    </ListItemButton>
                  </ListItem>
                ) : (
                  ["Yes", "No"].map((value) => (
                    <ListItem key={`${section}-${value}`} disablePadding>
                      <ListItemButton>
                        <ListItemText primary={`${value}`} />
                        <Checkbox
                          edge="end"
                          onChange={() => handleToggle(section, value)}
                          checked={checked[section] === value}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))
                )}
                {comments[section] && (
                  <ListItem disablePadding>
                    <ListItemButton>
                      <TextField
                        fullWidth
                        label="Add a comment"
                        variant="outlined"
                        value={comments[section]}
                        onChange={(e) => handleCommentChange(section, e.target.value)}
                      />
                    </ListItemButton>
                  </ListItem>
                )}
                <ListItem disablePadding>
                  <ListItemButton onClick={() => toggleCommentInput(section)}>
                    <CommentIcon color={comments[section] ? "primary" : "inherit"} />
                  </ListItemButton>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionDetails>
    </Accordion>
  );

  const sections = {
    Memory: ["Short Term Intact", "Long Term Intact"],
    Concentration: ["Inattentive", "Easily Distracted."],
    Insight: ["Does The Client Understand The Nature Of His Or Her Symptoms Or Functional Impairment (Judgment)"],
    Judgment: ["Does The Client Make Adaptive Decision For Himself Or others Despite The Symptoms Of Functional Impairment (Judgment)"],
  };

  return (
    <main className="pt5 black-80" style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h2>Orientation and mental status examination (MSE) form</h2>

      {Object.keys(sections).map((section) => renderAccordion(section, sections[section]))}

      {/* Buttons */}
      <Box sx={{ marginTop: "40px", justifyContent: "space-between", display: "flex" }}>
        <Button className="f6 grow br2 ph3 pv2 mb2 dib white" type="submit" variant="contained" onClick={() => onButtonClick("pagetwo")}>
          Cancel
        </Button>
        <Button className="f6 grow br2 ph3 pv2 mb2 dib white" type="submit" variant="contained" onClick={() => onButtonClick("pagefour")}>
          Save Client Details
        </Button>
      </Box>
    </main>
  );
};

export default StepThree;
