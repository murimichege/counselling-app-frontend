import React, { useState, useContext, useEffect } from "react";
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
import { ExaminationFormContext } from "./Examinationform";

const StepOne = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(ExaminationFormContext);

  const [accordionStates, setAccordionStates] = useState({
    Appearance: true,
    Attitude: true,
    Behavior: true,
    Speech: true,
    Mood: true,
  });

  const [comments, setComments] = useState({
    Appearance: "",
    Attitude: "",
    Behavior: "",
    Speech: "",
    Mood: "",
  });

  const handleToggle = (section, item, value) => {
    const updatedChecked = {
      ...formData.examination.checked,
      [section]: {
        ...(formData.examination.checked[section] || {}),
        [value]:
          value === undefined
            ? !formData.examination.checked[section]?.[value]
            : value,
      },
    };

    const sectionItems = sections[section];
    const sectionData = {};
    sectionItems.forEach((secItem) => {
      sectionData[secItem] =
        formData.examination.checked[section]?.[secItem] || "";
    });
    sectionData[value] =
      value === undefined ? value : value === value ? value : "";

    const updatedFormData = {
      ...formData,
      examination: {
        ...formData.examination,
        checked: {
          ...updatedChecked,
          [section]: sectionData,
        },
      },
    };
    console.log(updatedFormData);
    setFormData(updatedFormData);
  };

  const handleAccordionChange = (section) => {
    setAccordionStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const toggleCommentInput = (section) => {
    setComments((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleCommentChange = (section, value) => {
    setComments((prevState) => ({
      ...prevState,
      [section]: value,
    }));
  };

  const renderAccordion = (section, items) => (
    <Accordion
      expanded={accordionStates[section]}
      onChange={() => handleAccordionChange(section)}
    >
      <AccordionSummary
        expandIcon={
          accordionStates[section] ? <ExpandLessIcon /> : <ExpandMoreIcon />
        }
      >
        <ListItemText primary={section} />
      </AccordionSummary>
      <AccordionDetails>
        {items.map((value, index) => (
          <Accordion expanded={accordionStates[section + index]} key={index}>
            <AccordionSummary>
              <ListItemText primary={value} />
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
                {value === "Looking his or her age" ||
                "Dressing" ||
                "Grooming & Hygiene" ||
                "Style of speech" ? (
                  <ListItem
                    disablePadding
                    sx={{ display: "block" }}
                    key={`${section}-${value}`}
                  >
                    <ListItemButton>
                      <ListItemText primary="Normal" />
                      <Checkbox
                        edge="end"
                        onChange={() => handleToggle(section, "Normal")}
                        checked={
                          formData.examination.checked[section] === "Normal"
                        }
                      />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="Inappropriate" />
                      <Checkbox
                        edge="end"
                        onChange={() => handleToggle(section, "Inappropriate")}
                        checked={
                          formData.examination.checked[section] ===
                          "Inappropriate"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                ) : (
                  ["Yes", "No"].map((value) => (
                    <ListItem key={`${section}-${value}`} disablePadding>
                      <ListItemButton>
                        <ListItemText primary={`${value}`} />
                        <Checkbox
                          edge="end"
                          onChange={() => handleToggle(section, value)}
                          checked={
                            formData.examination.checked[section] === value
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                  ))
                )}
                {comments[section + index] && (
                  <ListItem disablePadding>
                    <ListItemButton>
                      <TextField
                        fullWidth
                        label="Add a comment"
                        variant="outlined"
                        value={comments[section]}
                        onChange={(e) =>
                          handleCommentChange(section, e.target.value)
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                )}
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => toggleCommentInput(section + index)}
                  >
                    <CommentIcon
                      color={comments[section + index] ? "primary" : "inherit"}
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
    Appearance: ["Dressing", "Grooming & Hygiene", "Looking his or her age"],
    Attitude: [
      "Check client’s attitude towards the counsellor especially during the intake process",
    ],
    Behavior: [
      "Ritualized behavior, compulsions",
      "Check for unwanted behavior (tics, unusual movement,repetitive motion)",
      "Non-verbal behavior",
      "Is level of activity within expected ranges?",
    ],
    Speech: ["Style of speech", "Volume", "Speed", "Tone"],
    Mood: [
      "Normal-euthymic",
      "Hyperthermia-extremely happy mood",
      "Dysthymia-depressed mood",
      "Does client suffer from mood disorder or medical condition",
    ],
  };

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Orientation and mental status examination (MSE) form</h2>

      {Object.keys(sections).map((section) =>
        renderAccordion(section, sections[section])
      )}
      <Box
        sx={{
          marginTop: "40px",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Button
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          type="submit"
          variant="contained"
          onClick={() => onButtonClick("pageone")}
        >
          Cancel
        </Button>

        <Button
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          type="button"
          variant="contained"
          onClick={() => onButtonClick("pagetwo")}
        >
          Save Client Details
        </Button>
      </Box>
    </main>
  );
};

export default StepOne;
