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

const TraumaManagement = () => {
  const [accordionStates, setAccordionStates] = useState({
    Trauma: true,
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
  const Lot14Items = [
    "Deal with trauma memories",
    "Be fully present in their current life",
    "Deal with re-experiencing of the trauma",
    "Deal with intrusive thoughts and physical sensations, hyperarousal, or being easily alarmed, obsession with safety",
    "Enhance self-monitoring abilities",
    "Reconsolidate sensory memory to be integrated into verbal memory",
    "Understand, normalize, and be knowledgeable about their reactions at and after the traumatic event",
    "Unfreeze unprocessed stress and create positive change",
    "Learn to let go of the struggle and adapt a new paradigm shift, new perspective, or change in viewpoint",
    "Create awareness of the futile continued struggle that damages and adds pain and suffering",
    "Encourage them to be ready to step into the unknown future",
    "Accept it is time to ascend above the current situation, move on, and pave the way for the new",
    "Appreciate, acknowledge, and be thankful for what one has and is or has been",
    "Enhance self-compassion and empathy",
    "Work towards contentment and happiness.",
    "Free up their attention, memory, focus, concentration, and avoid getting trapped in negative narratives/stories",
    "Manage distractions that keep pulling them to the past or pushing them to an uncertain future- worst-case scenario",
    "Stop catastrophizing the situation as it fuels an overwhelming sense of helplessness and powerlessness.",
  ];

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Lot 14</h2>

      <Lot14
        title="Trauma Management"
        items={Lot14Items}
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

export default TraumaManagement;
