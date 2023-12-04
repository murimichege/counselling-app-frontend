import React, { useState, useContext } from "react";
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
import { CounsellingRecordContext } from "../CounselingRecord";
import CommentIcon from "@mui/icons-material/Comment";

const DisciplinaryIssues = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
    Impulsivedisruptivebehavior : true,
    OppositionalDefiantDisorder : true,
    IntermittentexplosiveDisorder : true,
    ConductDisorder : true,
    Antisocialpersonalitydisorder : true,
    Pyromania : true,
    Kleptomania: true,
    
    
      });

  const [commentInputOpen, setCommentInputOpen] = useState({
    Impulsivedisruptivebehavior : true,
    OppositionalDefiantDisorder : true,
    IntermittentexplosiveDisorder : true,
    ConductDisorder : true,
    Antisocialpersonalitydisorder : true,
    Pyromania : true,
    Kleptomania: true,
      });

  const [comments, setComments] = useState({
    Impulsivedisruptivebehavior : "",
    OppositionalDefiantDisorder : "",
    IntermittentexplosiveDisorder : "",
    ConductDisorder : "",
    Antisocialpersonalitydisorder : "",
    Pyromania : "",
    Kleptomania: "",
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
          <List dense sx={{ width: "100%", minWidth: 400, bgcolor: "background.paper" }}>
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
                <CommentIcon color={commentInputOpen[sectionKey] ? "primary" : "inherit"} />
              </ListItemButton>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <main className="pt5 black-80" style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h3>Sexual Dysfunctions</h3>

      {renderAccordionSection("Impulsivedisruptivebehavior", "Impulsive, disruptive behavior")}
      {renderAccordionSection("OppositionalDefiantDisorder", "Oppositional Defiant Disorder ")}
      {renderAccordionSection("IntermittentexplosiveDisorder", "Intermittent explosive Disorder ")}
      {renderAccordionSection("ConductDisorder", "Conduct Disorder ")}
      {renderAccordionSection("Antisocialpersonalitydisorder", "Antisocial personality disorder ")}
      {renderAccordionSection("Pyromania", "Pyromania")}
      {renderAccordionSection("Kleptomania", "Kleptomania")}

    </main>
  );
};

export default DisciplinaryIssues;
