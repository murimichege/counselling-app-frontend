import React, { useState } from "react";
import {
  ListItem,
  Checkbox,
  List,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DisorderAccordion = ({
  title,
  expanded,
  onChange,
  levels,
  handleToggle,
  checked,
}) => (
  <Accordion expanded={expanded} onChange={onChange}>
    <AccordionSummary expandIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}>
      <ListItemText primary={title} />
    </AccordionSummary>
    <AccordionDetails>
      <List dense sx={{ width: "100%", minWidth: 400, bgcolor: "background.paper" }}>
        {levels.map((level, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton>
              <ListItemText primary={level} />
              <Checkbox
                edge="end"
                onChange={handleToggle(level)}
                checked={checked === level}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </AccordionDetails>
  </Accordion>
);

const ObsessiveDisorders = ({ formData, setFormData }) => {
  const [accordionStates, setAccordionStates] = useState({
    ObsessiveCompulsiveDisorder: false,
    BodyWeightIssues: false,
    BodyDysphormicDisorder: false,
    HoardingDisorder: false,
    Trichotillomania: false,
    Excoriation: false,
    MedicationInduced: false,
  });

  const [checked, setChecked] = useState("");

  const handleToggle = (value) => () => {
    setChecked((prevChecked) => {
      const isChecked = prevChecked.includes(value);
      let updatedChecked = [...prevChecked];
    
      if (isChecked) {
        updatedChecked = updatedChecked.filter((item) => item !== value);
      } else {
        updatedChecked.push(value);
      }
    
      const uniqueChecked = Array.from(new Set(updatedChecked));
    
      setFormData((prevData) => ({
        ...prevData,
        majorIssues: uniqueChecked,
      }));
    
      return uniqueChecked;
    });
  };
  

  const handleAccordionChange = (section) => () => {
    setAccordionStates((prevState) => ({ ...prevState, [section]: !prevState[section] }));
  };

  const disorders = [
    { title: "Obsessive Compulsive Disorder", levels: ["Mild", "Moderate", "Severe"] },
    { title: "Body Weight Issues", levels: ["Mild", "Moderate", "Severe"] },
    { title: "Body Dysphormic Disorder", levels: ["Mild", "Moderate", "Severe"] },
    { title: "Hoarding Disorder", levels: ["Mild", "Moderate", "Severe"] },
    { title: "Trichotillomania – (Hair Pulling Disorder)", levels: ["Mild", "Moderate", "Severe"] },
    { title: "Excoriation (Skin picking) Disorder", levels: ["Mild", "Moderate", "Severe"] },
    { title: "Substance /Medication Induced Obsessive Compulsive and Related Disorders", levels: ["Mild", "Moderate", "Severe"] },
  ];

  return (
    <main className="pt5 black-80" style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h3>Obsessive Compulsive and Related Disorders</h3>
      {disorders.map((disorder, index) => (
        <DisorderAccordion
          key={index}
          title={disorder.title}
          expanded={accordionStates[disorder.title]}
          onChange={handleAccordionChange(disorder.title)}
          levels={disorder.levels}
          handleToggle={handleToggle(disorder.title)}
          checked={checked}
        />
      ))}
    </main>
  );
};

export default ObsessiveDisorders;
