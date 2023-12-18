


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

const Lot13 = ({ title, items, accordionState, handleAccordionChange, checked, handleToggle, commentInputOpen, toggleCommentInput, comments, handleCommentChange }) => {
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

const PersonalEmpowerment = () => {
  const [accordionStates, setAccordionStates] = useState({
    Empowerment: true,
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
  const PersonalEmpowerment = [
    "Turn down the intensity of emotions and thoughts",
    "Make peace with their experience",
    "Work towards autonomy and preservation of their privacy and freedom",
    "Work towards meeting their own needs, desires, life goals.",
    "Focus on what they have control over and they can change",
    "Make the choice to have control over their life",
    "Enhance the ability to have fun and to experience satisfaction, pleasure, and delight.",
    "Enhance tolerance and know they have a choice to change and work towards solutions to the problem they are facing",
    "Enhance problem-solving skills",
    "Encourage facing reality and the facts of life",
    "Be conscious, stop operating from the suppressed unconscious emotions or thoughts",
    "Tap into their strength to take control and move forward",
    "Get unstuck from or not be trapped in narratives/stories of the past",
    "Engage in self-care"
];



  return (
    <main className="pt5 black-80" style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h2>Lot 13</h2>

      <Lot13
        title="Personal Empowerment"
        items={PersonalEmpowerment}
        accordionState={accordionStates.Empowerment}
        handleAccordionChange={handleAccordionChange("Empowerment")}
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

export default PersonalEmpowerment;

