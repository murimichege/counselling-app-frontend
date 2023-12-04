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

const SomaticDisorders = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [checked, setChecked] = useState([0]);


  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const [accordionStates, setAccordionStates] = useState({
    Illnessanxiety : true,
Terminalillnessanxiety: true,
Painmanagement : true,
Psychologicalfactorsaccompanyingillness : true,
NeurologicalsymptomsDisorder : true,
CareGiverfatigue: true

    
      });

  const [commentInputOpen, setCommentInputOpen] = useState({
    Illnessanxiety : true,
Terminalillnessanxiety: true,
Painmanagement : true,
Psychologicalfactorsaccompanyingillness : true,
NeurologicalsymptomsDisorder : true,
CareGiverfatigue: true

      });

  const [comments, setComments] = useState({
    Illnessanxiety : "",
    Terminalillnessanxiety: "",
    Painmanagement : "",
    Psychologicalfactorsaccompanyingillness :  "",
    NeurologicalsymptomsDisorder :  "",
    CareGiverfatigue:     ""
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

                 
          <ListItem
                     
                     secondaryAction={
                       <Checkbox
                         edge="end"
                         onChange={handleToggle()}
                         checked={checked}
                       />
                     }
                     disablePadding
                   >
                   
                     <ListItemButton>
                       <ListItemText primary={`Acute`} />

                     </ListItemButton>
                     
                   </ListItem>
                   <ListItem
                     
                     secondaryAction={
                       <Checkbox
                         edge="end"
                         onChange={handleToggle()}
                         checked={checked}
                       />
                     }
                     disablePadding
                   >
                   
                     <ListItemButton>
                       <ListItemText primary={`episodic`} />

                     </ListItemButton>
                     
                   </ListItem>
                    <ListItem
                     
                     secondaryAction={
                       <Checkbox
                         edge="end"
                         onChange={handleToggle()}
                         checked={checked}
                       />
                     }
                     disablePadding
                   >
                   
                     <ListItemButton>
                       <ListItemText primary={`Persistent`} />

                     </ListItemButton>
                     
                   </ListItem>

            
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
      <h3>Somatic Disorders   </h3>

      {renderAccordionSection("Illnessanxiety", "Illness anxiety ")}
      {renderAccordionSection("Terminalillnessanxiety", "Terminal illness anxiety")}
      {renderAccordionSection("Painmanagement", "Pain management ")}
      {renderAccordionSection("Psychologicalfactorsaccompanyingillness", "Psychological factors accompanying illness ")}
      {renderAccordionSection("NeurologicalsymptomsDisorder", "Neurological symptoms Disorder -Paralysis -movement -swallowing -speech -Seizures -Sensory loss ")}
      {renderAccordionSection("CareGiverfatigue ", "Care Giver fatigue ")}




    </main>
  );
};

export default SomaticDisorders;
