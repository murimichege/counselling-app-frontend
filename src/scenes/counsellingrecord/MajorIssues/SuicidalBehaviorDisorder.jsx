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

const SuicidalBehaviorDisorder = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
    NonSuicidalSelfinjuryorharm  : true,
    SuicidalIdeations: true,
    strugglewiththeanguish: true,
    Suicidalattempt:true,
  });
  const [checked, setChecked] = useState([1]);
  const [commentInputOpen, setCommentInputOpen] = useState({
    NonSuicidalSelfinjuryorharm  : true,
    SuicidalIdeations: true,
    strugglewiththeanguish: true,
    Suicidalattempt:true

  });
  const [comments, setComments] = useState({
    NonSuicidalSelfinjuryorharm  : "",
    SuicidalIdeations:  "",
    strugglewiththeanguish:  "",
    Suicidalattempt: ""
    
  
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
  const NonSuicidalSelfinjuryorharmItems = ["Symptom"];
  const SuicidalIdeationsItems = ["Symptom"];
  const strugglewiththeanguishItems = ["Symptom"];
  const SuicidalattemptItems = ["Symptom"];


  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h3>Suicidal Behavior Disorder</h3>

      <Accordion
        expanded={accordionStates.NonSuicidalSelfinjuryorharmItems}
        onChange={handleAccordionChange("NonSuicidalSelfinjuryorharmItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.NonSuicidalSelfinjuryorharmItems ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Non-Suicidal Self injury or harm" />
        </AccordionSummary>
        <AccordionDetails>
          {NonSuicidalSelfinjuryorharmItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`NonSuicidalSelfinjuryorharm${index}`]}
              onChange={handleAccordionChange(`NonSuicidalSelfinjuryorharm${index}`)}
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
      <Accordion
        expanded={accordionStates.SuicidalIdeationsItems}
        onChange={handleAccordionChange("SuicidalIdeationsItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.SuicidalIdeationsItems ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Dependence" />
        </AccordionSummary>
        <AccordionDetails>
          {SuicidalIdeationsItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`SuicidalIdeations${index}`]}
              onChange={handleAccordionChange(`SuicidalIdeations${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`SuicidalIdeations${index}`] ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )
                }
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
      <Accordion
        expanded={accordionStates.strugglewiththeanguishItems}
        onChange={handleAccordionChange("strugglewiththeanguishItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Withdrawalfrompeople ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Struggle with the anguish Items" />
        </AccordionSummary>
        <AccordionDetails>
          {strugglewiththeanguishItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`strugglewiththeanguish${index}`]}
              onChange={handleAccordionChange(`strugglewiththeanguish${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`strugglewiththeanguish${index}`] ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )
                }
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

      <Accordion
        expanded={accordionStates.SuicidalattemptItems}
        onChange={handleAccordionChange("SuicidalattemptItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Suicidalattempt ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Suicidal attempt" />
        </AccordionSummary>
        <AccordionDetails>
          {SuicidalattemptItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`SuicidalattemptItems${index}`]}
              onChange={handleAccordionChange(`SuicidalattemptItems${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`SuicidalattemptItems${index}`] ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )
                }
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

export default SuicidalBehaviorDisorder;
