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

const Lot1 = ({ title, items, accordionState, handleAccordionChange, checked, handleToggle, commentInputOpen, toggleCommentInput, comments, handleCommentChange }) => {
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

const ThoughtsManagement = ({ formData, setFormData }) => {
  const [accordionStates, setAccordionStates] = useState({
    Thoughts: true,
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
  console.log(formData)

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

  const Lot1Items = [
    "Regulate and adjust distorted thoughts and responses.",
    "-Change rigid, self-defeating black or white kind of thoughts.",
    "-Enhance flexibility in their thinking.",
    "-Assess the content of their constructs, their attributions (attribution theory), their perception and interpretation of the situations they are in.",
    "-Choose to Focus on positive thoughts.",
    "-Enhance communication with others",
    "-Confront denial, resistance, emotional numbness, detachment from others, catastrophizing the situation, loss of interest and dwelling on the negative experience.",
    "-Manage the overwhelming sense of helplessness and powerlessness.",
    "-Reprogram their mind to find opportunities and see possibilities",
    "-Be open to and accept changes, move towards change directing their attention, memory, focus, concentration from negative to more positive things in their lives.",
    "-Enhance positive image of a safe world",
    "-Encourage a belief in themselves",
    "-Encourage a positive image of themselves and the world in the lived reality.",
    "-Stay focused on their vision and goals.",
    "-Goal setting and propelling self towards achievement of goals",
    "-Think big about their life, move out of their comfort zone.",
    "-Process the painful memory, so transforming it from a 'stuck' memory to a more fitting recollection of the past.",
    "Expose themselves to what they fear",
    "Tap into their inner strength and heal from their fear.",
    "Manage distractors" 
];

  return (
    <main className="pt5 black-80" style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h2>Lot 1</h2>

      <Lot1
        title="Manage and control thoughts"
        items={Lot1Items}
        accordionState={accordionStates.Thoughts}
        handleAccordionChange={handleAccordionChange("Thoughts")}
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

export default ThoughtsManagement;
