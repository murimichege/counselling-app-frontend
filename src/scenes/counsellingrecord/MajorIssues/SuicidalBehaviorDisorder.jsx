import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemText,
  List,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SuicidalBehaviorDisorder = ({ formData, setFormData }) => {
  const [accordionStates, setAccordionStates] = useState({
    NonSuicidalSelfinjuryorharm: true,
    SuicidalIdeations: true,
    strugglewiththeanguish: true,
    Suicidalattempt: true,
  });
  const [checked, setChecked] = useState([]);
  const [comments, setComments] = useState({
    NonSuicidalSelfinjuryorharm: "",
    SuicidalIdeations: "",
    strugglewiththeanguish: "",
    Suicidalattempt: "",
  });

  // Function to update majorIssues array in formData context
  const updateMajorIssues = (checkedItems) => {
    setFormData((prevData) => ({
      ...prevData,
      majorIssues: [...prevData.majorIssues, ...checkedItems],
    }));
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    updateMajorIssues([value]); // Update majorIssues with the checked item
  };

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
  };

  const renderAccordionItems = (title, items) => {
    return (
      <Accordion
        expanded={accordionStates[title]}
        onChange={handleAccordionChange(title)}
        key={title}
      >
        <AccordionSummary
          expandIcon={
            accordionStates[title] ? <ExpandLessIcon /> : <ExpandMoreIcon />
          }
        >
          <ListItemText primary={title} />
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
            {items.map((item, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(item)}
                    checked={checked.indexOf(item) !== -1}
                  />
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    );
  };

  const sections = {
    NonSuicidalSelfinjuryorharm: ["Symptom"],
    SuicidalIdeations: ["Symptom"],
    strugglewiththeanguish: ["Symptom"],
    Suicidalattempt: ["Symptom"],
  };

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h3>Suicidal Behavior Disorder</h3>

      {Object.entries(sections).map(([title, items]) =>
        renderAccordionItems(title, items)
      )}
    </main>
  );
};

export default SuicidalBehaviorDisorder;
