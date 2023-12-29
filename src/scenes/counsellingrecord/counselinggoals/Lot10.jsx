

import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItem,
  Checkbox,
  List,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CommentIcon from "@mui/icons-material/Comment";

const Lot10 = ({ title, items, accordionState, handleAccordionChange, checked, handleToggle, commentInputOpen, toggleCommentInput, comments, handleCommentChange }) => {
  return (
    <Accordion expanded={accordionState} onChange={handleAccordionChange}>
      <AccordionSummary
        expandIcon={accordionState ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      >
        <ListItemText primary={title} />
      </AccordionSummary>
      <AccordionDetails>
        <List dense sx={{ width: "100%", minWidth: 400, bgcolor: "background.paper" }}>
          {items.map((item, index) => (
            <ListItem key={index}>
              <ListItemButton>
                <ListItemText primary={item} />
                <Checkbox
                  edge="end"
                  onChange={handleToggle(item)}
                  checked={checked.indexOf(item) !== -1}
                />
              </ListItemButton>
            </ListItem>
          ))}
          {commentInputOpen && (
            <ListItem>
              <ListItemButton>
                <TextField
                  fullWidth
                  label="Add a comment"
                  variant="outlined"
                  value={comments}
                  onChange={handleCommentChange}
                />
              </ListItemButton>
            </ListItem>
          )}
          <ListItem>
            <ListItemButton onClick={toggleCommentInput}>
              <CommentIcon color={commentInputOpen ? "primary" : "inherit"} />
            </ListItemButton>
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

const EmotionRegulation = ({ formData, setFormData }) => {
  const [accordionStates, setAccordionStates] = useState({
    Regulation: true,
  });

  const [checked, setChecked] = useState([]);
  const [commentInputOpen, setCommentInputOpen] = useState(false);
  const [comments, setComments] = useState("");

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    // Add or remove the item from the checked array
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    // Update majorIssues in the form data based on newChecked array
    setFormData((prevData) => ({
      ...prevData,
      counselingGoals: newChecked,
    }));

    setChecked(newChecked);
  };
  const handleAccordionChange = (section) => () => {
    setAccordionStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const toggleCommentInput = () => {
    setCommentInputOpen((prevState) => !prevState);
  };

  const handleCommentChange = (event) => {
    const { value } = event.target;
    setComments(value);
  };
  const EmotionRegulation = [
    "Identify, recognize, regulate emotions- emotional regulation",
    "Psycho-educate on the interconnection between thoughts, emotions and behavior",
    "Learn to relax (muscle relaxation, deep breathing, yoga, meditation)",
    "Replace overwhelm with calm, confidence and Stabilization",
    "Reduce and be able to cope with the intense emotions, phobia or anxiety.",
    "Learn ways to boost their energy and strength",
    "Manage intense feelings of powerlessness, heightened feeling of vulnerability",
    "Empower the client to feel in control of their life",
    "Change negative feelings into positive ones.",
    "Take a different perspective of what they are experiencing",
    "Enhance the belief in their ability to manage events",
    "Enhance self-management",
    "Enhance self-awareness",
    "Focus on the positives in the present moment.",
    "Know they have the liberty to select their own path",
    "enhance their belief in themselves and choose a better life.",
    "Stop using unconscious biases and practice Mindfulness"
];


  return (
    <main className="pt5 black-80" style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h2>Lot 10</h2>

      <Lot10
        title="Emotion Regulation"
        items={EmotionRegulation}
        accordionState={accordionStates.Regulation}
        handleAccordionChange={handleAccordionChange("Regulation")}
        checked={checked}
        handleToggle={handleToggle}
        commentInputOpen={commentInputOpen}
        toggleCommentInput={toggleCommentInput}
        comments={comments}
        handleCommentChange={handleCommentChange}
      />
    </main>
  );
};

export default EmotionRegulation;

