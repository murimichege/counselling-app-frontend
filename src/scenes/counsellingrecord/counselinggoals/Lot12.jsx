


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

const Lot12 = ({ title, items, accordionState, handleAccordionChange, checked, handleToggle, commentInputOpen, toggleCommentInput, comments, handleCommentChange }) => {
  return (
    <Accordion expanded={accordionState} onChange={handleAccordionChange}>
      <AccordionSummary
        expandIcon={accordionState ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      >
        <ListItemText primary={title} />
      </AccordionSummary>
      <AccordionDetails>
        <List dense sx={{ width: "100%", minWidth: 400, bgcolor: "background.paper" }}>
          {items.map((item, index) => (
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
          {commentInputOpen && (
            <ListItem>
              <ListItemButton>
                <TextField
                  fullWidth
                  label="Add a comment"
                  variant="outlined"
                  value={comments}
                  onChange={handleCommentChange}
                />
              </ListItemButton>
            </ListItem>
          )}
          <ListItem>
            <ListItemButton onClick={toggleCommentInput}>
              <CommentIcon color={commentInputOpen ? "primary" : "inherit"} />
            </ListItemButton>
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

const FamilyAndRelationshipEnhancement = ({ formData, setFormData }) => {
  const [accordionStates, setAccordionStates] = useState({
    Lot1: true,
  });

  const [checked, setChecked] = useState([]);
  const [commentInputOpen, setCommentInputOpen] = useState(false);
  const [comments, setComments] = useState("");

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
      counselingGoals: newChecked,
    }));

    setChecked(newChecked);
  };

  const handleAccordionChange = (section) => () => {
    setAccordionStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const toggleCommentInput = () => {
    setCommentInputOpen((prevState) => !prevState);
  };

  const handleCommentChange = (event) => {
    const { value } = event.target;
    setComments(value);
  };
  const FamilyAndRelationshipEnhancement = [
    "Strengthen the family",
    "Identify what is driving the interactions among couples or families e.g. self-interests, social skills",
    "psycho-educate on healthy relationships",
    "encourage a focus on the solution",
    "create a harmonious flow in the home by purposing to improve on their relationship every day",
    "learn to promote greater intimacy, connection, passion",
    "Conduct a rewards and cost-benefit analysis of relationships",
    "confront a behavior that has been avoided in the relationship",
    "learn to grow towards each other",
    "Manage interpersonal traumatic experiences",
    "seek to be valuable, know why the partner is valuable to them and what value they add to the relationship",
    "make readjustments after an interpersonal relationship conflict or disagreements",
    "embrace diversity",
    "Have dialogue",
    "Sustain and have meaningful social and family relationships.",
    "Heal from emotionally destructive relationships",
    "development of interpersonal relationship skills",
    "Reconciliation in case of interpersonal conflict",
    "help deal with high levels of mistrust",
    "Manage feelings from relationships with significant people in the past.",
    "Manage trauma caused by the relationship breakup or betrayal",
    "Comprehend and manage the preoccupation with the search for the causal explanation of why another person would willfully inflict pain on them.",
    "be empowered to be able to deal with insecurity, emotional pain, fear, anger, anxiety, hatred, mistrust and feelings of powerlessness.",
    "overcome the need for attention and external validation",
    "Overcome being overly agreeable (too needy, yet self-obsessed), Manage codependency, people-pleasing or living according to people’s expectations.",
    "Understand and manage their attachment styles",
    "overcome feelings of shame, humiliation, embarrassment.",
    "Create insight by being aware of and dealing with unconscious psychological defense mechanisms that people use to self-better themselves over others; overgeneralization, projection, displacement, disillusionment negative responses etc.",
    "cope with all relational challenges",
    "alter their perception, attitude towards the person",
    "Restore trust and comfort with the person or other people",
    "develop an action plan to form, reform, enhance and strengthen emotional connections in the relationship",
    "Refrain from the habit of criticizing and blaming others.",
    "re-establish linkages and connections",
    "restore a feeling of social cohesiveness",
    "be aware of intrapsychic dynamics and the function of transference and countertransference in psychotherapy transformation"
];



  return (
    <main className="pt5 black-80" style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h2>Lot 12</h2>

      <Lot12
        title="Heal from emotionally destructive relationships"
        items={FamilyAndRelationshipEnhancement}
        accordionState={accordionStates.LowerAcademicAchievement}
        handleAccordionChange={handleAccordionChange("Lot9")}
        checked={checked}
        handleToggle={handleToggle}
        commentInputOpen={commentInputOpen}
        toggleCommentInput={toggleCommentInput}
        comments={comments}
        handleCommentChange={handleCommentChange}
      />
    </main>
  );
};

export default FamilyAndRelationshipEnhancement;

