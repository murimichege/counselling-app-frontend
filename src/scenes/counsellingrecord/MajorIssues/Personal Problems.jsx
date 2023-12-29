import React, { useState } from "react";
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
import CommentIcon from "@mui/icons-material/Comment";

const PersonalProblems = () => {
  const [checked, setChecked] = useState([]);

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

  const [accordionStates, setAccordionStates] = useState({
    selfCriticism: true,
    lowSelfEsteem: true,
    identityIssues: true,
    lackOfConfidence: true,
    timeManagement: true,
    selfManagement: true,
    fraudulentBehavior: true,
    dishonesty: true,
  });

  const [commentInputOpen, setCommentInputOpen] = useState({
    selfCriticism: true,
    lowSelfEsteem: true,
    identityIssues: true,
    lackOfConfidence: true,
    timeManagement: true,
    selfManagement: true,
    fraudulentBehavior: true,
    dishonesty: true,
  });

  const [comments, setComments] = useState({
    selfCriticism: "",
    lowSelfEsteem: "",
    identityIssues: "",
    lackOfConfidence: "",
    timeManagement: "",
    selfManagement: "",
    fraudulentBehavior: "",
    dishonesty: "",
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
            {["Mild", "Moderate", "Severe"].map((severity) => (
              <ListItem
                key={severity}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(severity)}
                    checked={checked.includes(severity)}
                  />
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemText primary={severity} />
                </ListItemButton>
              </ListItem>
            ))}

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
    <main style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h3>Personal Problems</h3>

      {renderAccordionSection("selfCriticism", "Self Criticism")}
      {renderAccordionSection("lowSelfEsteem", "Low Self-Esteem")}
      {renderAccordionSection("identityIssues", "Identity Issues")}
      {renderAccordionSection("lackOfConfidence", "Lack Of Confidence")}
      {renderAccordionSection("timeManagement", "Time Management")}
      {renderAccordionSection("selfManagement", "Self Management")}
      {renderAccordionSection("fraudulentBehavior", "Fraudulent Behavior")}
      {renderAccordionSection("dishonesty", "Dishonesty")}
    </main>
  );
};

export default PersonalProblems;
