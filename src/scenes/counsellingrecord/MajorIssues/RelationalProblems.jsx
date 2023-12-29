import React, { useState } from "react";
import {
  ListItem,
  Checkbox,
  List,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  TextField,
  AccordionDetails,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CommentIcon from "@mui/icons-material/Comment";

const RelationalProblems = ({formData,setFormData}) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setFormData((prevData) => ({
      ...prevData,
      majorIssues: [...prevData.majorIssues],
    }));
    setChecked(newChecked);
  };

  const [accordionStates, setAccordionStates] = useState({
    familyProblems: true,
    parentChildRelationalProblem: true,
    siblingRelationalProblem: true,
    upbringing: true,
    childAffectedParentalRelationship: true,
    highExpressedEmotionLevel: true,
    childAffectedByDisruptions: true,
    intimatePartnerRelationship: true,
  });

  const [commentInputOpen, setCommentInputOpen] = useState({
    familyProblems: true,
    parentChildRelationalProblem: true,
    siblingRelationalProblem: true,
    upbringing: true,
    childAffectedParentalRelationship: true,
    highExpressedEmotionLevel: true,
    childAffectedByDisruptions: true,
    intimatePartnerRelationship: true,
  });

  const [comments, setComments] = useState({
    familyProblems: "",
    parentChildRelationalProblem: "",
    siblingRelationalProblem: "",
    upbringing: "",
    childAffectedParentalRelationship: "",
    highExpressedEmotionLevel: "",
    childAffectedByDisruptions: "",
    intimatePartnerRelationship: "",
  });

  const handleToggleAccordion = (section) => {
    setAccordionStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const toggleCommentInput = (section) => {
    setCommentInputOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleCommentChange = (section, event) => {
    const { value } = event.target;
    setComments((prevState) => ({
      ...prevState,
      [section]: value,
    }));
  };

  const renderAccordionSection = (sectionKey, sectionTitle) => {
    return (
      <Accordion
        expanded={accordionStates[sectionKey]}
        onChange={() => handleToggleAccordion(sectionKey)}
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
            {["Mild", "Moderate", "Severe"].map((severity) => (
              <ListItem
                key={severity}
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

            {commentInputOpen[sectionKey] && (
              <ListItem disablePadding>
                <ListItemButton>
                  <TextField
                    fullWidth
                    label="Add a comment"
                    variant="outlined"
                    value={comments[sectionKey]}
                    onChange={(e) => handleCommentChange(sectionKey, e)}
                  />
                </ListItemButton>
              </ListItem>
            )}
            <ListItem disablePadding>
              <ListItemButton onClick={() => toggleCommentInput(sectionKey)}>
                <CommentIcon
                  color={commentInputOpen[sectionKey] ? "primary" : "inherit"}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <main style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h3>Relational Problems</h3>

      {renderAccordionSection("familyProblems", "Problems related to Family upbringing")}
      {renderAccordionSection("parentChildRelationalProblem", "Parent –Child Relational Problem")}
      {renderAccordionSection("siblingRelationalProblem", "Sibling Relational Problem")}
      {renderAccordionSection("upbringing", "Upbringing away from parents")}
      {renderAccordionSection("childAffectedParentalRelationship", "Child affected by parental relationship")}
      {renderAccordionSection("highExpressedEmotionLevel", "High expressed emotion level within the family")}
      {renderAccordionSection("childAffectedByDisruptions", "Child affected by disruptions in the family")}
      {renderAccordionSection("intimatePartnerRelationship", "Intimate partner Relationship distress")}
    </main>
  );
};

export default RelationalProblems;
