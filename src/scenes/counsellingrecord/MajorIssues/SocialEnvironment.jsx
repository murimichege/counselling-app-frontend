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

const SocialEnvironment = ({formData,setFormData}) => {
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
    Impairmentinsocialcommunicationandinteractions: true,
    Difficultiesreadingsocialcuesandsocialconsequences: true,
    DisinhibitedattachmentDisorders: true,
    NegativePeerpressure: true,
    Acculturationdifficulty: true,
    Loneliness: true,
    DifficultieswithCommunicationlack: true,
    LoveRelationshipbreakup: true,
    Friendshipbreakupseclusion: true,
    Problemsrelatedtocrime: true,
    Problemsrelatedtoincarceration: true,
    Problemstolegalissues: true,
    ReligiousorSpiritualproblem: true,
    Exposuretodisasters: true,
  });

  const [commentInputOpen, setCommentInputOpen] = useState({
    Impairmentinsocialcommunicationandinteractions: true,
    Difficultiesreadingsocialcuesandsocialconsequences: true,
    DisinhibitedattachmentDisorders: true,
    NegativePeerpressure: true,
    Acculturationdifficulty: true,
    Loneliness: true,
    DifficultieswithCommunicationlack: true,
    LoveRelationshipbreakup: true,
    Friendshipbreakupseclusion: true,
    Problemsrelatedtocrime: true,
    Problemsrelatedtoincarceration: true,
    Problemstolegalissues: true,
    ReligiousorSpiritualproblem: true,
    Exposuretodisasters: true,
  });

  const [comments, setComments] = useState({
    Impairmentinsocialcommunicationandinteractions: "",
    Difficultiesreadingsocialcuesandsocialconsequences: "",
    DisinhibitedattachmentDisorders: "",
    NegativePeerpressure: "",
    Acculturationdifficulty: "",
    Loneliness: "",
    DifficultieswithCommunicationlack: "",
    LoveRelationshipbreakup: "",
    Friendshipbreakupseclusion: "",
    Problemsrelatedtocrime: "",
    Problemsrelatedtoincarceration: "",
    Problemstolegalissues: "",
    ReligiousorSpiritualproblem: "",
    Exposuretodisasters: "",
  });
  const sections = {
    Impairmentinsocialcommunicationandinteractions: "Impairment in social communication and interactions",
    Difficultiesreadingsocialcuesandsocialconsequences: "Difficulties reading social cues and consequences",
    DisinhibitedattachmentDisorders: "Disinhibited attachment Disorders",
    NegativePeerpressure: "Negative Peer pressure",
    Acculturationdifficulty: "Acculturation difficulty",
    Loneliness: "Loneliness",
    DifficultieswithCommunicationlack: "Difficulties with Communication lack",
    LoveRelationshipbreakup: "Love Relationship breakup",
    Friendshipbreakupseclusion: "Friendship breakup seclusion",
    Problemsrelatedtocrime: "Problems related to crime",
    Problemsrelatedtoincarceration: "Problems related to incarceration",
    Problemstolegalissues: "Problems to legal issues",
    ReligiousorSpiritualproblem: "Religious or Spiritual problem",
    Exposuretodisasters: "Exposure to disasters",
  };

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
      <h3>Social Environment</h3>
      {Object.keys(sections).map((sectionKey) =>
        renderAccordionSection(sectionKey)
      )}
    </main>
  );
};

export default SocialEnvironment;
