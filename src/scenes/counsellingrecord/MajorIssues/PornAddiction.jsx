import React, { useState, useContext } from "react";
import {
  ListItem,
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

const PornAddiction = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
    DelayedEjaculation: true,
    Prematureejaculation: true, 
    ErectileDisorder : true,
    FemaleOrganismicDisorder: true,
    FemaleSexualInterest: true, 
    Genit0PelvicPain: true, 
    Hypoactivesexualdesiredisorders: true, 
    SubstanceInducedSexualdysfunction: true,
    UnwantedPregnancy: true, 
    Abortion : true,
    AddictiontoPornography : true,
    Masturbation: true
      });

  const [commentInputOpen, setCommentInputOpen] = useState({
    DelayedEjaculation: true,
    Prematureejaculation: true, 
    ErectileDisorder : true,
    FemaleOrganismicDisorder: true,
    FemaleSexualInterest: true, 
    Genit0PelvicPain: true, 
    Hypoactivesexualdesiredisorders: true, 
    SubstanceInducedSexualdysfunction: true,
    UnwantedPregnancy: true, 
    Abortion : true,
    AddictiontoPornography : true,
    Masturbation: true
      });

  const [comments, setComments] = useState({
    DelayedEjaculation: "",
    Prematureejaculation: "", 
    ErectileDisorder : true,
    FemaleOrganismicDisorder: "",
    FemaleSexualInterest: "", 
    Genit0PelvicPain: "", 
    Hypoactivesexualdesiredisorders: "", 
    SubstanceInducedSexualdysfunction: "",
    UnwantedPregnancy: "", 
    Abortion : "",
    AddictiontoPornography : "",
    Masturbation: ""
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

      {renderAccordionSection("DelayedEjaculation", "Delayed Ejaculation")}
      {renderAccordionSection("Prematureejaculation", "Premature Ejaculation")}
      {renderAccordionSection("ErectileDisorder", "Erectile Disorder")}
      {renderAccordionSection("FemaleOrganismicDisorder", "Female Organismic Disorder- never experienced organism ")}
      {renderAccordionSection("FemaleSexualInterest", "Female Sexual Interest/Arousal disorder")}
      {renderAccordionSection("Genit0PelvicPain", "Genito- Pelvic Pain/ Penetration Disorder ")}
      {renderAccordionSection("Hypoactivesexualdesiredisorders", "Hypoactive sexual desire disorders")}
      {renderAccordionSection("SubstanceInducedSexualdysfunction", "Substance/medication Induced Sexual dysfunction")}
      {renderAccordionSection("UnwantedPregnancy", "Unwanted Pregnancy ")}
      {renderAccordionSection("Abortion", "Abortion")}
      {renderAccordionSection("AddictiontoPornography", "Addiction to Pornography ")}
      {renderAccordionSection("Masturbation", "Masturbation")}
    </main>
  );
};

export default PornAddiction;
