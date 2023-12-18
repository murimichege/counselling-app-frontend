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
import { CounsellingRecordContext } from "../CounselingRecord";

const AttentionDeficit = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
    SpecialLearningDisorder  : true,

  });
  const [checked, setChecked] = useState([0]);
  const [commentInputOpen, setCommentInputOpen] = useState({
    SpecialLearningDisorder  : true,

  });
  const [comments, setComments] = useState({
    SpecialLearningDisorder  : "",
    
  
  });

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

  const handleAccordionChange = (section) => () => {
    setAccordionStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const toggleCommentInput = (section) => () => {
    setCommentInputOpen((prevState) => ({
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
  const SpecialLearningDisorderItems = ["Symptom"];


  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h3>Attention Deficit</h3>

      <Accordion
        expanded={accordionStates.SpecialLearningDisorderItems}
        onChange={handleAccordionChange("SpecialLearningDisorderItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.SpecialLearningDisorder ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Special Learning Disorder" />
        </AccordionSummary>
        <AccordionDetails>
          {SpecialLearningDisorderItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`SpecialLearningDisorder${index}`]}
              onChange={handleAccordionChange(`SpecialLearningDisorder${index}`)}
              key={index}
            >
              <AccordionSummary
                // expandIcon={
                //   accordionStates[`LowerAcademicAchievementItemsOpen${index}`] ? (
                //     <ExpandLessIcon />
                //   ) : (
                //     <ExpandMoreIcon />
                //   )
                // }
              >
                <ListItemText primary={item} />
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
                       <ListItemText primary={`Mild`} />

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
                       <ListItemText primary={`Moderate`} />

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
                       <ListItemText primary={`Severe`} />

                     </ListItemButton>
                     
                   </ListItem>
        
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
   

    </main>
  );
};

export default AttentionDeficit;
