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

const AcademicIssues = () => {
  const [accordionStates, setAccordionStates] = useState({
    LowerAcademicAchievement: true,
  });

  const [checked, setChecked] = useState([]);
  const [commentInputOpen, setCommentInputOpen] = useState({});

  const [comments, setComments] = useState({});

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

  const toggleCommentInput = (section) => () => {
    setCommentInputOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleCommentChange = (section) => (event) => {
    const { value } = event.target;
    setComments((prevComments) => ({
      ...prevComments,
      [section]: value,
    }));
  };

  const LowerAcademicAchievementItems = [
    "Academic Warning",
    "Academic Probation",
    "Academic Dismissal",
    "Course Registration Difficulties",
  ];



  return (
    <main className="pt5 black-80" style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h2>Academic or Educational Problems </h2>

      <Accordion
        expanded={accordionStates.LowerAcademicAchievement}
        onChange={handleAccordionChange("LowerAcademicAchievement")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.LowerAcademicAchievement ? <ExpandLessIcon /> : <ExpandMoreIcon />
          }
        >
          <ListItemText primary="Lower Academic Achievement" />
        </AccordionSummary>
        <AccordionDetails>
          <List dense sx={{ width: "100%", minWidth: 400, bgcolor: "background.paper" }}>
            {LowerAcademicAchievementItems.map((item, index) => (
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
            {/* Display sub-items */}
            {/* {LowerAcademicAchievementSubItems.map((subItem, index) => (
              <ListItem key={index}>
                <ListItemButton>
                  <ListItemText primary={`${subItem.option1} / ${subItem.option2}`} />
                </ListItemButton>
              </ListItem>
            ))} */}
            {commentInputOpen.LowerAcademicAchievement && (
              <ListItem>
                <ListItemButton>
                  <TextField
                    fullWidth
                    label="Add a comment"
                    variant="outlined"
                    value={comments.LowerAcademicAchievement}
                    onChange={handleCommentChange("LowerAcademicAchievement")}
                  />
                </ListItemButton>
              </ListItem>
            )}
            <ListItem>
              <ListItemButton onClick={toggleCommentInput("LowerAcademicAchievement")}>
                <CommentIcon
                  color={commentInputOpen.LowerAcademicAchievement ? "primary" : "inherit"}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </main>
  );
};

export default AcademicIssues;
