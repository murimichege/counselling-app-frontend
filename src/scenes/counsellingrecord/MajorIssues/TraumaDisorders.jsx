import React, { useState, useContext } from "react";
import {
  ListItem,
  Checkbox,
  List,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CounsellingRecordContext } from "../CounselingRecord";

const TraumaDisorders = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
    ReactiveAttachmentDisorder : true,
    DisinhibitedSocialEngagementDisorder  : true,
    Withdelayedexpression  : true,
    Withdissociativesymptoms : true,
    Traumaandstressrelateddisorder : true
    

  });
  const [checked, setChecked] = useState([1]);


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

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h3>Trauma Disorders</h3>

      <Accordion
        expanded={accordionStates.ReactiveAttachmentDisorder}
        onChange={handleAccordionChange("ReactiveAttachmentDisorder")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.ReactiveAttachmentDisorder ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Reactive Attachment Disorder" />
        </AccordionSummary>
        <AccordionDetails>
   

            <Accordion
              expanded={accordionStates[`ReactiveAttachmentDisorder`]}
              onChange={handleAccordionChange(`ReactiveAttachmentDisorder`)}
            >
             
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
    
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={accordionStates.DisinhibitedSocialEngagementDisorder}
        onChange={handleAccordionChange("DisinhibitedSocialEngagementDisorder")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.DisinhibitedSocialEngagementDisorder ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Disinhibited Social Engagement Disorder" />
        </AccordionSummary>
        <AccordionDetails>
   

            <Accordion
              expanded={accordionStates[`DisinhibitedSocialEngagementDisorder`]}
              onChange={handleAccordionChange(`DisinhibitedSocialEngagementDisorder`)}
            >
            
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
    
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={accordionStates.Withdelayedexpression}
        onChange={handleAccordionChange("Withdelayedexpression")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Withdelayedexpression ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Post-Traumatic Stress Disorder With delayed expression" />
        </AccordionSummary>
        <AccordionDetails>
            <Accordion
              expanded={accordionStates[`Withdelayedexpression`]}
              onChange={handleAccordionChange(`Withdelayedexpression`)}
            >
             
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
    
        </AccordionDetails>
      </Accordion>


      <Accordion
        expanded={accordionStates.Withdissociativesymptoms}
        onChange={handleAccordionChange("Withdissociativesymptoms")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Withdissociativesymptoms ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Post-Traumatic Stress Disorder With dissociative symptoms " />
        </AccordionSummary>
        <AccordionDetails>
   

            <Accordion
              expanded={accordionStates[`Withdissociativesymptoms`]}
              onChange={handleAccordionChange(`Withdissociativesymptoms`)}
            >
             
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
    
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={accordionStates.Traumaandstressrelateddisorder}
        onChange={handleAccordionChange("Traumaandstressrelateddisorder")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Traumaandstressrelateddisorder ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Trauma and stress related disorder " />
        </AccordionSummary>
        <AccordionDetails>
   

            <Accordion
              expanded={accordionStates[`Traumaandstressrelateddisorder`]}
              onChange={handleAccordionChange(`Traumaandstressrelateddisorder`)}
            >
             
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
    
        </AccordionDetails>
      </Accordion>

    </main>
  );
};

export default TraumaDisorders;