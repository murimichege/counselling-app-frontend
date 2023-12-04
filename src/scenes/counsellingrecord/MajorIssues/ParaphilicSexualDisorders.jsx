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

const ParaphilicSexualDisorders = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
    VoyeuristicDisorder : true,
    ExhibitionisticDisorder:  true,
    FrotteuristicDisorder : true,
    SexualMasochismDisorder:  true,
    SexualSadismDisorder : true,
    PedophilicDisorders : true,
    FetishisticDisorder: true,
    TransvesticDisorder : true,
    
      });

  const [commentInputOpen, setCommentInputOpen] = useState({
    VoyeuristicDisorder : true,
    ExhibitionisticDisorder:  true,
    FrotteuristicDisorder : true,
    SexualMasochismDisorder:  true,
    SexualSadismDisorder : true,
    PedophilicDisorders : true,
    FetishisticDisorder: true,
    TransvesticDisorder : true,
      });

  const [comments, setComments] = useState({
    VoyeuristicDisorder : "",
    ExhibitionisticDisorder:  "",
    FrotteuristicDisorder : "",
    SexualMasochismDisorder:  "",
    SexualSadismDisorder : "",
    PedophilicDisorders : "",
    FetishisticDisorder: "",
    TransvesticDisorder : "",
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
      <h3>Paraphilic Sexual Disorders </h3>

      {renderAccordionSection("VoyeuristicDisorder", "Voyeuristic  Disorder ")}
      {renderAccordionSection("ExhibitionisticDisorder", "Exhibitionistic Disorder")}
      {renderAccordionSection("FrotteuristicDisorder", "Frotteuristic Disorder")}
      {renderAccordionSection("SexualMasochismDisorder", "Sexual Masochism Disorder")}
      {renderAccordionSection("SexualSadismDisorder", "Sexual Sadism Disorder")}
      {renderAccordionSection("PedophilicDisorders", "Pedophilic Disorders")}
      {renderAccordionSection("FetishisticDisorder", "Fetishistic Disorder")}
      {renderAccordionSection("TransvesticDisorder", "Transvestic Disorder")}

    </main>
  );
};

export default ParaphilicSexualDisorders;
