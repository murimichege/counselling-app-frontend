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

const SleepWakedisorders = ( { formData, setFormData }) => {
  
  const initialAccordionState = {
    InsomniaDisorder: true,
    Hypersomniadisorder: true,
    Narcolepsy: true,
    Delayedsleep: true,
    Irregularsleepwake: true,
    Sleepwalking: true,
    Intimatepartnerrelationshipissues: true,
    NightmareDisorders: true,
    SubstanceInducedSleepDisorder: true,
  };

  const [accordionStates, setAccordionStates] = useState(initialAccordionState);

  const [checked, setChecked] = useState([1]);

  const [commentInputOpen, setCommentInputOpen] = useState(initialAccordionState);

  const [comments, setComments] = useState({
    InsomniaDisorder: "",
    Hypersomniadisorder: "",
    Narcolepsy: "",
    Delayedsleep: "",
    Irregularsleepwake: "",
    Sleepwalking: "",
    Intimatepartnerrelationshipissues: "",
    NightmareDisorders: "",
    SubstanceInducedSleepDisorder: "",
  });

 const handleToggle = (value, section) => () => {
    const currentIndex = formData.majorIssues.findIndex(
      (issue) => issue.issue === section
    );

    let updatedIssues = [...formData.majorIssues];

    if (currentIndex === -1) {
      // If issue not found, add it with checked status
      updatedIssues.push({
        issue: section,
        checked: true,
        comment: comments[section],
      });
    } else {
      // If issue found, update its checked status
      updatedIssues[currentIndex].checked = !updatedIssues[currentIndex].checked;
    }

    setFormData({
      ...formData,
      majorIssues: updatedIssues,
    });
  };
  const handleCommentChange = (section) => (event) => {
    const { value } = event.target;
    setComments((prevState) => ({
      ...prevState,
      [section]: value,
    }));

    updateMajorIssues(section, value);
  };

  const updateMajorIssues = (section, value) => {
    const majorIssuesData = formData.majorIssues.map((issue) => {
      if (issue.issue === section) {
        return {
          ...issue,
          comment: value,
        };
      }
      return issue;
    });

    setFormData({
      ...formData,
      majorIssues: majorIssuesData,
    });
  };

  const handleAccordionChange = (section) => () => {
    setAccordionStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const toggleCommentInput = (section) => () => {
    setCommentInputOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };



  const renderAccordion = (section, label) => (
    <Accordion
      expanded={accordionStates[section]}
      onChange={handleAccordionChange(section)}
    >
      <AccordionSummary
        expandIcon={
          accordionStates[section] ? <ExpandLessIcon /> : <ExpandMoreIcon />
        }
      >
        <ListItemText primary={label} />
      </AccordionSummary>
      <AccordionDetails>
        <List
          dense
          sx={{
            width: "100%",
            minWidth: 400,
            bgcolor: "background.paper",
          }}
        >
          {commentInputOpen[section] && (
            <ListItem disablePadding>
              <ListItemButton>
                <TextField
                  fullWidth
                  label="Add a comment"
                  variant="outlined"
                  value={comments[section]}
                  onChange={handleCommentChange(section)}
                />
              </ListItemButton>
            </ListItem>
          )}
          <ListItem disablePadding>
            <ListItemButton onClick={toggleCommentInput(section)}>
              <CommentIcon
                color={commentInputOpen[section] ? "primary" : "inherit"}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>
  );

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h3>Sleep-Wake Disorders </h3>

      {renderAccordion("InsomniaDisorder", "Insomnia Disorder – lack sleep")}
      {renderAccordion(
        "Hypersomniadisorder",
        "Hypersomnia  disorder – sleep too much"
      )}
      {renderAccordion("Narcolepsy", "Narcolepsy- unconscious")}
      {renderAccordion("Delayedsleep", "Delayed sleep")}
      {renderAccordion("Irregularsleepwake", "Irregular sleep wake")}
      {renderAccordion("Sleepwalking", "Sleep walking")}
      {renderAccordion(
        "Intimatepartnerrelationshipissues",
        "Intimate partner relationship issues (conflict, break up)"
      )}
      {renderAccordion("NightmareDisorders", "Nightmare Disorders")}
      {renderAccordion(
        "SubstanceInducedSleepDisorder",
        "Substance/Medication Induced Sleep Disorder"
      )}
    </main>
  );
};

export default SleepWakedisorders;
