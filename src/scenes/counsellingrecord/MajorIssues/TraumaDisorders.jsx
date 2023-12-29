import React, { useState, useContext } from "react";
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
import { CounsellingRecordContext } from "../CounselingRecord";

const TraumaDisorders = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
    ReactiveAttachmentDisorder: true,
    DisinhibitedSocialEngagementDisorder: true,
    Withdelayedexpression: true,
    Withdissociativesymptoms: true,
    Traumaandstressrelateddisorder: true,
  });
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      updateMajorIssues(value, true);
    } else {
      newChecked.splice(currentIndex, 1);
      updateMajorIssues(value, false);
    }

    setChecked(newChecked);
  };

  const updateMajorIssues = (value, isChecked) => {
    setFormData((prevData) => {
      const updatedMajorIssues = isChecked
        ? [...prevData.majorIssues, value]
        : prevData.majorIssues.filter((item) => item !== value);

      return { ...prevData, majorIssues: updatedMajorIssues };
    });
  };

  const handleAccordionChange = (section) => () => {
    setAccordionStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const renderAccordion = (title, section) => (
    <Accordion
      expanded={accordionStates[section]}
      onChange={handleAccordionChange(section)}
    >
      <AccordionSummary
        expandIcon={
          accordionStates[section] ? <ExpandLessIcon /> : <ExpandMoreIcon />
        }
      >
        <ListItemText primary={title} />
      </AccordionSummary>
      <AccordionDetails>
        <Accordion
          expanded={accordionStates[section]}
          onChange={handleAccordionChange(section)}
        >
          <AccordionDetails>
            <List
              dense
              sx={{ width: "100%", minWidth: 400, bgcolor: "background.paper" }}
            >
              {["Mild", "Moderate", "Severe"].map((severity, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(severity)}
                      checked={checked.includes(severity)}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText primary={severity} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </AccordionDetails>
    </Accordion>
  );

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h3>Trauma Disorders</h3>
      {renderAccordion("Reactive Attachment Disorder", "ReactiveAttachmentDisorder")}
      {renderAccordion(
        "Disinhibited Social Engagement Disorder",
        "DisinhibitedSocialEngagementDisorder"
      )}
      {renderAccordion(
        "Post-Traumatic Stress Disorder With delayed expression",
        "Withdelayedexpression"
      )}
      {renderAccordion(
        "Post-Traumatic Stress Disorder With dissociative symptoms",
        "Withdissociativesymptoms"
      )}
      {renderAccordion(
        "Trauma and stress related disorder",
        "Traumaandstressrelateddisorder"
      )}
    </main>
  );
};

export default TraumaDisorders;
