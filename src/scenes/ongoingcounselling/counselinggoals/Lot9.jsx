

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

const Lot8 = ({ title, items, accordionState, handleAccordionChange, checked, handleToggle, commentInputOpen, toggleCommentInput, comments, handleCommentChange }) => {
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

const TraumaHealing = () => {
  const [accordionStates, setAccordionStates] = useState({
    Healing: true,
  });

  const [checked, setChecked] = useState([]);
  const [commentInputOpen, setCommentInputOpen] = useState(false);
  const [comments, setComments] = useState("");

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
  const TraumaHealing = [
    "Explore, verbalize or talk about their traumatic experience.",
    "psycho-educate on trauma response",
    "understand how they perceive trauma",
    "Process and make a meaningful comprehensible sense of meaning, interpretation or explanation of the traumatic experience.",
    "manage the client’s intrapsychic functioning by doing an in-depth exploration of both the conscious and unconscious associations to the trauma.",
    "acknowledge, accept and be in touch with their vulnerability and woundedness as human beings.",
    "Heal past hurts and deep rooted wounds",
    "Learn to let go",
    "Self-evaluate, reflect and respond appropriately to the trauma.",
    "make peace with the experience then distance themselves from the content of the traumatic thoughts, emotions and physical sensations.",
    "Enable catharsis, instill hope, help them move from victim to survivor",
    "enhance self-reliance and mastery",
    "Process feelings of distrust, lack of control and despair",
    "Re-establish a sense of trust, control, purpose, see the bigger picture.",
    "Engage in Resilience building.",
    "Facilitate acceptance.",
    "Balance out the difficult outcomes with something more positive in the future.",
    "Deal with crisis of faith due to the traumatic experience",
    "Make reference to cultural or religious belief systems, which provide a framework of causes, meanings, and consequences of traumatic events.",
    "retaining or rebuilding a sense of a benevolent world that has in some way protected one from a worse outcome.",
    "balance between painful memories, external expectations and subjective needs",
    "enhance their self-awareness",
    "deal with the implications of trauma on their identity, self-image or self-concept",
    "understand how their self-interacts with the traumatic occurrence and how they are relating with the outside world",
    "acknowledge that they cannot process the traumatic information using psychic defense mechanisms."
];


  return (
    <main className="pt5 black-80" style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h2>Lot 9</h2>

      <Lot8
        title="Trauma Healing"
        items={TraumaHealing}
        accordionState={accordionStates.Healing}
        handleAccordionChange={handleAccordionChange("Healing")}
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

export default TraumaHealing;

