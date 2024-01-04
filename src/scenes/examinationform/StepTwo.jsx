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
import { ExaminationFormContext } from "./Examinationform";

const StepTwo = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(ExaminationFormContext);

  const [accordionStates, setAccordionStates] = useState({
    EmotionsDisplay: true,
    Orientation: true,
    Cognitivefunctioning: true,
    Thoughtcontent: true,
    Perceptualdisturbances: true,
  });

  const [comments, setComments] = useState({
    EmotionsDisplay: "",
    Orientation: "",
    Cognitivefunctioning: "",
    Thoughtcontent: "",
    Perceptualdisturbances: "",
  });
  const handleToggle = (section, value) => {
    const updatedFormData = {
      ...formData,
      examination: {
        ...formData.examination,
        [section]: value,
      },
    };

    console.log(updatedFormData)
    setFormData(updatedFormData);
  };

  const handleCommentChange = (section) => (event) => {
    const { value } = event.target;
    setComments((prevState) => ({ ...prevState, [section]: value }));
    handleToggle(section, value);
  };

  const toggleAccordion = (section) => () =>
    setAccordionStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));

  const toggleCommentInput = (section) => () =>
    setComments((prevState) => ({ ...prevState, [section]: !prevState[section] }));

  // const handleCommentChange = (section) => (event) => {
  //   const { value } = event.target;
  //   setComments((prevState) => ({ ...prevState, [section]: value }));
  // };

  const renderAccordion = (section, items) => (
    <Accordion expanded={accordionStates[section]} onChange={toggleAccordion(section)}>
      <AccordionSummary expandIcon={accordionStates[section] ? <ExpandLessIcon /> : <ExpandMoreIcon />}>
        <ListItemText primary={section.replace(/([a-z])([A-Z])/g, "$1 $2")} />
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
                {value === "Time, place, person, self" ||
                "Clients intelligence – check on vocabulary, demonstrated complexity of thought" ? (
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

  // Define your actual items for each section
  const EmotionsDisplayItems = [
    "Intense feelings (sad evidenced by facial expression, tearful, and crying",
    "Irritability",
    "Anxious",
    "Is the affect discrepant from the situation he or she is in (e.g. lack affect when describing a painful story, laughing to a sad story)",
    "Flat-appearing emotionless",
    "Blunted- lacking outward emotional expression to provocative clinical material- just give factual information without any feelings",
  ];

  const OrientationItems = [
    "Time, place, person, self",
    "Does the client appear oriented – knows where he or she is, what the date is? Etc.",
  ];

  const CognitivefunctioningItems = [
    "Clients intelligence – check on vocabulary, demonstrated complexity of thought",
  ];

  const ThoughtcontentItems = [
    "Content and organization of client's thinking",
    "Preoccupation with negative thinking e.g. 'I am worthless'",
    "Reports of obsession (negative mental images or ideas)",
    "Phobias",
    "Suicidal ideation",
    "Homicidal ideation",
    "If active *",
    "Plan",
    "Intent",
    "Means",
  ];

  const PerceptualdisturbancesItems = [
    "Evidence of hallucinations – sensory experiences not experienced by others (seeing, hearing, tasting, touching experiences)",
    "Rule out hallucination that has an organic cause",
    "Delusions – ideas that are firmly held yet unrealistic or not shared by others; ideas of being persecuted, ideas of self – grandeur, ideas of reference",
    "Illusions – are distortions of existing sensory stimuli",
  ];


  return (
    <main className="pt5 black-80" style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h2>Orientation and mental status examination (MSE) form</h2>

      {renderAccordion("EmotionsDisplay", EmotionsDisplayItems)}
      {renderAccordion("Orientation", OrientationItems)}
      {renderAccordion("Cognitivefunctioning", CognitivefunctioningItems)}
      {renderAccordion("Thoughtcontent", ThoughtcontentItems)}
      {renderAccordion("Perceptualdisturbances", PerceptualdisturbancesItems)}

      <Box sx={{ marginTop: "40px", justifyContent: "space-between", display: "flex" }}>
        <Button className="f6 grow br2 ph3 pv2 mb2 dib white" type="submit" variant="contained" onClick={() => onButtonClick("pagetwo")}>
          Cancel
        </Button>
        <Button className="f6 grow br2 ph3 pv2 mb2 dib white" type="submit" variant="contained" onClick={() => onButtonClick("pagethree")}>
          Save Client Details
        </Button>
      </Box>
    </main>
  );
};

export default StepTwo;
