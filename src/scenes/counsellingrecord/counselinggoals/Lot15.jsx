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

const Lot14 = ({
  title,
  items,
  accordionState,
  handleAccordionChange,
  checked,
  handleToggle,
  commentInputOpen,
  toggleCommentInput,
  comments,
  handleCommentChange,
}) => {
  return (
    <Accordion expanded={accordionState} onChange={handleAccordionChange}>
      <AccordionSummary
        expandIcon={accordionState ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      >
        <ListItemText primary={title} />
      </AccordionSummary>
      <AccordionDetails>
        <List
          dense
          sx={{ width: "100%", minWidth: 400, bgcolor: "background.paper" }}
        >
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

const TraumaRecovery = ({ formData, setFormData }) => {
  const [accordionStates, setAccordionStates] = useState({
    Trauma: true,
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
  const traumaRecoveryTasks = [
    "Explore, verbalize or talk about their traumatic experience.",
    "Psycho-educate on trauma response",
    "Understand how they perceive trauma",
    "Process and make a meaningful comprehensible sense of meaning, interpretation or explanation of the traumatic experience.",
    "Manage the client’s intrapsychic functioning by doing an in-depth exploration of both the conscious and unconscious associations to the trauma.",
    "Acknowledge, accept and be in touch with their vulnerability and woundedness as human beings.",
    "Heal past hurts and deep-rooted wounds",
    "Learn to let go",
    "Self-evaluate, reflect and respond appropriately to the trauma.",
    "Make peace with the experience then distance themselves from the content of the traumatic thoughts, emotions and physical sensations.",
    "Enable catharsis, instill hope, help them move from victim to survivor",
    "Enhance self-reliance and mastery",
    "Process feelings of distrust, lack of control and despair",
    "Re-establish a sense of trust, control, purpose, see the bigger picture.",
    "Engage in Resilience building.",
    "Facilitate acceptance.",
    "Balance out the difficult outcomes with something more positive in the future.",
    "Deal with the crisis of faith due to the traumatic experience",
    "Make reference to cultural or religious belief systems, which provide a framework of causes, meanings, and consequences of traumatic events.",
    "Retaining or rebuilding a sense of a benevolent world that has in some way protected one from a worse outcome.",
    "Balance between painful memories, external expectations and subjective needs",
    "Enhance their self-awareness",
    "Deal with the implications of trauma on their identity, self-image or self-concept",
    "Understand how their self-interacts with the traumatic occurrence and how they are relating with the outside world",
    "Acknowledge that they cannot process the traumatic information using psychic defense mechanisms."
  ];
  

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Lot 15</h2>

      <Lot14
        title="Trauma Recovery"
        items={traumaRecoveryTasks}
        accordionState={accordionStates.Trauma}
        handleAccordionChange={handleAccordionChange("Trauma")}
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

export default TraumaRecovery;
