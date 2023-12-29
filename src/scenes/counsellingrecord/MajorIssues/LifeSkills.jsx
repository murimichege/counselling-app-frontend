import React, { useState, useContext } from "react";
import {
  ListItem,
  List,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CommentIcon from "@mui/icons-material/Comment";

const LifeSkills = ({ formData, setFormData }) => {
  const [commentInputOpen, setCommentInputOpen] = useState({
    SelfAwareness: false,
    TimeManagement: false,
    Decisionmaking: false,
    ProblemSolving: false,
    GoalSetting: false,
  });
  const [accordionStates, setAccordionStates] = useState({
    SelfAwareness: true,
    TimeManagement: true,
    Decisionmaking: true,
    ProblemSolving: true,
    GoalSetting: true,
  });
  const [comments, setComments] = useState({
    SelfAwareness: "",
    TimeManagement: "",
    Decisionmaking: "",
    ProblemSolving: "",
    GoalSetting: "",
  });

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
    setComments((prevState) => ({
      ...prevState,
      [section]: value,
    }));

    // Update majorIssues on every comment change
    const updatedMajorIssues = {
      ...formData,
      majorIssues: {
        ...formData.majorIssues,
        [section]: value,
      },
    };

    setFormData(updatedMajorIssues);
  };
  const generateAccordion = (sectionTitle, sectionItems) => (
    <Accordion
      expanded={accordionStates[sectionTitle]}
      onChange={handleAccordionChange(sectionTitle)}
      key={sectionTitle}
    >
      <AccordionSummary
        expandIcon={
          accordionStates[sectionTitle] ? <ExpandLessIcon /> : <ExpandMoreIcon />
        }
      >
        <ListItemText primary={sectionTitle} />
      </AccordionSummary>
      <AccordionDetails>
        {sectionItems.map((item, index) => (
          <Accordion
            expanded={accordionStates[`${sectionTitle}${index}`]}
            onChange={handleAccordionChange(`${sectionTitle}${index}`)}
            key={index}
          >
            <AccordionSummary>
              <ListItemText primary={item} />
            </AccordionSummary>
            <AccordionDetails>
              <List
                dense
                sx={{
                  width: "100%",
                  minWidth: 400,
                  bgcolor: "background.paper",
                }}
              >
                {commentInputOpen[`${sectionTitle}${index}`] && (
                  <ListItem disablePadding>
                    <ListItemButton>
                      <TextField
                        fullWidth
                        label="Add a comment"
                        variant="outlined"
                        value={comments[`${sectionTitle}${index}`]}
                        onChange={handleCommentChange(`${sectionTitle}${index}`)}
                      />
                    </ListItemButton>
                  </ListItem>
                )}
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={toggleCommentInput(`${sectionTitle}${index}`)}
                  >
                    <CommentIcon
                      color={
                        commentInputOpen[`${sectionTitle}${index}`]
                          ? "primary"
                          : "inherit"
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionDetails>
    </Accordion>
  );

  const sections = {
    SelfAwareness: ["Symptom"],
    TimeManagement: ["Symptom"],
    Decisionmaking: ["Symptom"],
    ProblemSolving: ["Symptom"],
    GoalSetting: ["Symptom"],
  };

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Life Skills</h2>

      {Object.entries(sections).map(([sectionTitle, sectionItems]) =>
        generateAccordion(sectionTitle, sectionItems)
      )}
    </main>
  );
};

export default LifeSkills;
