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

const EmotionsAccordion = ({
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
  formData,
  setFormData,
}) => {
  const updateMajorIssues = (section, value) => {
    const updatedFormData = {
      ...formData,
      majorIssues: {
        ...formData.majorIssues,
        [section]: value,
      },
    };
    setFormData(updatedFormData);
  };

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
                  onBlur={() => updateMajorIssues(title, comments)}
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

const NegativeEmotions = ({ formData, setFormData }) => {
  const [accordionStates, setAccordionStates] = useState({
    Anger: true,
    Fearandapprehension: true,
    Fearpastunpleasantfeelingsorfuturenegativepossibilities: true,
    Worry: true,
    Guilt: true,
    ShameandHumiliation: true,
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

  const emotionsData = {
    Anger: ["Symptom"],
    Fearandapprehension: ["Symptom"],
    Fearpastunpleasantfeelingsorfuturenegativepossibilities: ["Symptom"],
    Worry: ["Symptom"],
    Guilt: ["Symptom"],
    ShameandHumiliation: ["Symptom"],
  };

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Experience of Negative Emotions</h2>
      {Object.entries(emotionsData).map(([emotion, items]) => (
        <EmotionsAccordion
          key={emotion}
          title={emotion}
          items={items}
          accordionState={accordionStates[emotion]}
          handleAccordionChange={handleAccordionChange(emotion)}
          checked={checked}
          handleToggle={handleToggle}
          commentInputOpen={commentInputOpen}
          toggleCommentInput={toggleCommentInput}
          comments={comments}
          handleCommentChange={handleCommentChange}
          formData={formData}
          setFormData={setFormData}
        />
      ))}
    </main>
  );
};

export default NegativeEmotions;
