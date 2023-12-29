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

const StressDisorders = ({formData, setFormData}) => {
  const [accordionStates, setAccordionStates] = useState({
    AcuteStressDisorder: true,
    ChildAbuse: true,
    Physicalandsexualassault: true,
    Accidents: true,
    AdjustmentDisorder: true,
    AdjustmentDisorderwithanxiety: true,
    AdjustmentDisorderdepressedmoodandanxiety: true,
  });

  // State to manage severity level checkboxes for each disorder
  const [checked, setChecked] = useState({
    AcuteStressDisorder: {
      Mild: false,
      Moderate: false,
      Severe: false,
    },
    ChildAbuse: {
      Mild: false,
      Moderate: false,
      Severe: false,
    },
    Physicalandsexualassault: {
      Mild: false,
      Moderate: false,
      Severe: false,
    },
    Accidents: {
      Mild: false,
      Moderate: false,
      Severe: false,
    },
    AdjustmentDisorder: {
      Mild: false,
      Moderate: false,
      Severe: false,
    },
    AdjustmentDisorderwithanxiety: {
      Mild: false,
      Moderate: false,
      Severe: false,
    },
    AdjustmentDisorderdepressedmoodandanxiety: {
      Mild: false,
      Moderate: false,
      Severe: false,
    },
  });
  

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    // Add or remove the item from the checked array
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    // Update majorIssues in the form data based on newChecked array
    setFormData((prevData) => ({
      ...prevData,
      majorIssues: newChecked,
    }));

    setChecked(newChecked);
  };
  const handleAccordionChange = (section) => () => {
    setAccordionStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const renderSeverityOptions = (disorder) => {
    return ["Mild", "Moderate", "Severe"].map((severity) => (
      <ListItem
        key={severity}
        secondaryAction={
          <Checkbox
            edge="end"
            onChange={handleToggle(disorder, severity)}
            checked={checked[disorder][severity]}
          />
        }
        disablePadding
      >
        <ListItemButton>
          <ListItemText primary={severity} />
        </ListItemButton>
      </ListItem>
    ));
  };

  const renderAccordion = (sectionKey, sectionTitle) => {
    return (
      <Accordion
        key={sectionKey}
        expanded={accordionStates[sectionKey]}
        onChange={handleAccordionChange(sectionKey)}
      >
        <AccordionSummary
          expandIcon={
            accordionStates[sectionKey] ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary={sectionTitle} />
        </AccordionSummary>
        <AccordionDetails>
          <List
            dense
            sx={{ width: "100%", minWidth: 400, bgcolor: "background.paper" }}
          >
            {renderSeverityOptions(sectionKey)}
          </List>
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <main style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h3>Stress Disorders </h3>

      {renderAccordion("AcuteStressDisorder", "Acute Stress Disorder")}
      {renderAccordion("ChildAbuse", "Child abuse, neglect, abandonment, defilement")}
      {renderAccordion("Physicalandsexualassault", "Physical and sexual assault and abuse")}
      {renderAccordion("Accidents", "Accidents, drowning, robbery")}
      {renderAccordion("AdjustmentDisorder", "Adjustment Disorder (culture shock, transition after graduation) with depressed mood – disturbed emotions")}
      {renderAccordion("AdjustmentDisorderwithanxiety", "Adjustment Disorder with anxiety")}
      {renderAccordion("AdjustmentDisorderdepressedmoodandanxiety", "Adjustment Disorder with both depressed mood and anxiety")}
    </main>
  );
};

export default StressDisorders;
