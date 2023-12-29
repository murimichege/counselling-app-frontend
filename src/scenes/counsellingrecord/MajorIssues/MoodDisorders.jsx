import React, { useState, useContext } from "react";
import {
  ListItem,
  List,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  TextField,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MoodDisorders = ( { formData, setFormData }) => {
  const [accordionStates, setAccordionStates] = useState({
    BipolarType1: true,
    WithPsychoticFeatures: true,
    WithHypomaniaEpisode: true,
    WithDepressiveEpisode: true,
    WithMixedFeatures: true,
  });

  const [comments, setComments] = useState({
    BipolarType1: "",
    WithPsychoticFeatures: "",
    WithHypomaniaEpisode: "",
    WithDepressiveEpisode: "",
    WithMixedFeatures: "",
  });

  const handleAccordionChange = (section) => () => {
    setAccordionStates((prevState) => ({
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

    // Update majorIssues in formData
    const updatedMajorIssues = {
      ...formData,
      majorIssues: {
        ...formData.majorIssues,
        [section]: value,
      },
    };
    setFormData(updatedMajorIssues);
  };

  const renderAccordion = (section, items) => (
    <Accordion
      expanded={accordionStates[section]}
      onChange={handleAccordionChange(section)}
    >
      <AccordionSummary
        expandIcon={
          accordionStates[section] ? <ExpandLessIcon /> : <ExpandMoreIcon />
        }
      >
        <ListItemText primary={section.replace(/([A-Z])/g, " $1").trim()} />
      </AccordionSummary>
      <AccordionDetails>
        {items.map((item, index) => (
          <Accordion key={index}>
            <AccordionDetails>
              <List>
                {["Mild", "Moderate", "Severe"].map((severity, index) => (
                  <ListItem key={index}>
                    <ListItemButton>
                      <ListItemText primary={severity} />
                      <Checkbox />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionDetails>
    </Accordion>
  );

  const sections = [
    { section: "BipolarType1", items: ["Symptom"] },
    { section: "WithPsychoticFeatures", items: ["Symptom"] },
    { section: "WithHypomaniaEpisode", items: ["Symptom"] },
    { section: "WithDepressiveEpisode", items: ["Symptom"] },
    { section: "WithMixedFeatures", items: ["Symptom"] },
  ];

  return (
    <main className="pt5 black-80" style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h3>Mood Disorders</h3>
      {sections.map(({ section, items }) => (
        <div key={section}>
          {renderAccordion(section, items)}
          <TextField
            fullWidth
            label={`Add a comment for ${section}`}
            variant="outlined"
            value={comments[section]}
            onChange={handleCommentChange(section)}
          />
        </div>
      ))}
    </main>
  );
};

export default MoodDisorders;
