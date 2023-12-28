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

const Lot2 = ({ title, items, accordionState, handleAccordionChange, checked, handleToggle, commentInputOpen, toggleCommentInput, comments, handleCommentChange }) => {
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

const BehaviorChange = () => {
  const [accordionStates, setAccordionStates] = useState({
    Behavior: true,
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

  const Lot2Items = [
  
   "unlearn, learn and relearn healthy coping mechanisms",
   "change acquired habits that are potentially self-destructive or unhealthy behaviors.",
   "Help the client identify the errors they've made in the development of their style of life, character or behavior.",
   "Modify or unlearn harmful behaviors",
   "develop their strengths.",
   "Focus on healthy, appropriate compensations for their weaknesses.",
   "Learn the interpretation, meaning attached to their behavior",
   "explore the presence of faulty reinforcement history or socially inadequate or inappropriate responses to situations.",
   "Feel encouraged about their capacity to create meaning and connections in their life.",
   "creates awareness that the dysfunctional behavior is a result of a conditioned automatic response to an external event (Stimulus-response)",
   "learn how to respond appropriately to the external environment.",
   "Learn how to break the abuse cycle",
   "Learn to take control and charge of their life.",
   "Learn to say No.",
   "Learn to be assertive.",
   "Learn to make the right and positive choices.",
   "Learn goal setting.",
   "Learn social skills.",
   "Make changes in one’s environment",
   "understand and manage the unconscious intrapsychic functioning of the client, make the Unconscious Conscious (The iceberg principle).",
   "understand how they receive, organize, perceive, conceptualize, interpret and construe the world.",
   "understand the determinants of behavior as influenced by Conditioning, Observing, Copying others, Imitation.",
   "Recognize their attitude and perfectionism tendencies",
   "Stop personalization and projection tendencies",
   "Enhance empathy"
];

  return (
    <main className="pt5 black-80" style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h2>Lot 2</h2>

      <Lot2
        title="Behavior Change and modification"
        items={Lot2Items}
        accordionState={accordionStates.Behavior}
        handleAccordionChange={handleAccordionChange("Behavior")}
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

export default BehaviorChange;
