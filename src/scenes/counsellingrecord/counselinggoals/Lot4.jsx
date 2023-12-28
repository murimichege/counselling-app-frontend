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

const Lot4 = ({ title, items, accordionState, handleAccordionChange, checked, handleToggle, commentInputOpen, toggleCommentInput, comments, handleCommentChange }) => {
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

const PersonalDevelopmentAndGrief = () => {
  const [accordionStates, setAccordionStates] = useState({
    DevelopmentState: true,
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
  const Lot4Items = [
    "Develop inner aspects of their personality",
    "Enhance Ego strength (check from what level are they operating from, id, ego, super-ego)",
    "Normalize grieving significant losses - accept the pain, sadness, brokenness is part of the grieving process",
    "Psycho-educate on the loss process",
    "Manage their response and reaction to the loss",
    "find presence, connection and healing in the midst of the loss",
    "deal with the strong grief-related emotions",
    "get insight, a new perspective and ways to move forward after the loss.",
    "choose not to live with the pain and suffering following the loss",
    "Accept the “new person” they have become after the loss",
    "adjust and adapt to the changes",
    "learn to let go what they have no control over",
    "Tap into their social support",
    "identify their belief system",
    "evaluate the consequences of the beliefs",
    "Explore the self-defeating beliefs -work on/change irrational beliefs.",
    "Replace irrational with rational. Logical, coherent beliefs.",
    "deal with tensions between different explanatory frameworks be it cultural, traditional or modern religion or therapies.",
    "Practice effective ways of thinking.",
    "Manage distractors or blocks to their success"
];


  return (
    <main className="pt5 black-80" style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h2>Lot 4</h2>

      <Lot4
        title="Personal Development And Grief"
        items={Lot4Items}
        accordionState={accordionStates.DevelopmentState}
        handleAccordionChange={handleAccordionChange("DevelopmentState")}
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

export default PersonalDevelopmentAndGrief;