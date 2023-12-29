import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  ListItem,
  Checkbox,
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
import { CounsellingRecordContext } from "../CounselingRecord";

const initialAccordionState = {
  LowMotivation: ["Symptom"],
  Lackoffocus: ["Symptom"],
  Absenteeism: ["Symptom"],
  OccupationalProblems: [
    "Difficulty with career choice",
    "Work/school/life balance",
    "Employer-Employee Relationships",
  ],
  HousingProblems: [
    "Homeless",
    "Conflict with housemates",
    "Problems related to living at home",
    "Problems related to living in a residential institution",
    "Inadequate housing",
  ],
  LackofBasicNeeds: ["Inadequate food"],
  FinancialDistressIssues: [
    "Lack finances (school fees, medical)",
    "Poor management of finances",
  ],
};

const LearningProblems = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState(
    Object.fromEntries(Object.keys(initialAccordionState).map((key) => [key, true]))
  );
  const [comments, setComments] = useState({});
  // Function to update formData context with selected items
  const updateMajorIssues = (section, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      majorIssues: [...(prevFormData.majorIssues || []), `${section}: ${item}`],
    }));
  };
  const toggleAccordion = (section) => () => {
    setAccordionStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleCommentChange = (section, index) => (event) => {
    const { value } = event.target;
    setComments((prevComments) => ({
      ...prevComments,
      [`${section}-${index}`]: value,
    }));
  };

  return (
    <main className="pt5 black-80" style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h2>Learning problems</h2>
      {Object.entries(initialAccordionState).map(([section, items], sectionIndex) => (
        <Accordion
          key={sectionIndex}
          expanded={accordionStates[section]}
          onChange={toggleAccordion(section)}
        >
          <AccordionSummary
            expandIcon={accordionStates[section] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          >
            <ListItemText primary={section.replace(/([a-z])([A-Z])/g, "$1 $2")} />
          </AccordionSummary>
          <AccordionDetails>
            {items.map((item, index) => (
              <Accordion key={index}>
                <AccordionSummary>
                  <ListItemText primary={item} />
                </AccordionSummary>
                <AccordionDetails>
                  <List dense sx={{ width: "100%", minWidth: 400, bgcolor: "background.paper" }}>
                    <ListItem disablePadding>
                    <ListItemButton onClick={() => updateMajorIssues(section, item)}>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`${section}-${index}`] || ""}
                          onChange={handleCommentChange(section, index)}
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <CommentIcon />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </main>
  );
};

export default LearningProblems;
