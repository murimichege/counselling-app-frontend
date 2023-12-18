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

const DepressiveDisorder = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
    Singleepisode   : true,
    Recurrentepisode : true,
    DysthymiaPersistentDepressiveDisorder: true,
    PremenstrualDysphoricDisorder : true, 
    SubstanceinducedDepressiveDisorder: true

  });
  const [checked, setChecked] = useState([1]);
  const [commentInputOpen, setCommentInputOpen] = useState({
    Singleepisode   : true,
    Recurrentepisode : true,
    DysthymiaPersistentDepressiveDisorder: true,
    PremenstrualDysphoricDisorder : true,
    SubstanceinducedDepressiveDisorder: true


  });
  const [comments, setComments] = useState({
    Singleepisode   : "",
    Recurrentepisode : "",
    DysthymiaPersistentDepressiveDisorder: "",
    PremenstrualDysphoricDisorder : "",
    SubstanceinducedDepressiveDisorder: ""

  
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
  const SingleepisodeItems = ["Symptom"];
  const RecurrentepisodeItems = ["Symptom"];
  const DysthymiaPersistentDepressiveDisorderItems = ["Symptom"];
  const PremenstrualDysphoricDisorderItems = ["Symptom"];
  const SubstanceinducedDepressiveDisorderItems =["Symptom"]; 


  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h3>Depressive Disorder </h3>

      <Accordion
        expanded={accordionStates.Singleepisode}
        onChange={handleAccordionChange("SingleepisodeItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Singleepisode ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Single episode" />
        </AccordionSummary>
        <AccordionDetails>
          {SingleepisodeItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Singleepisode${index}`]}
              onChange={handleAccordionChange(`Singleepisode${index}`)}
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
        expanded={accordionStates.Recurrentepisode}
        onChange={handleAccordionChange("Recurrentepisode")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Recurrentepisode ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Recurrent episode" />
        </AccordionSummary>
        <AccordionDetails>
          {RecurrentepisodeItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Recurrentepisode${index}`]}
              onChange={handleAccordionChange(`Recurrentepisode${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`Recurrentepisode${index}`] ? (
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
        expanded={accordionStates.DysthymiaPersistentDepressiveDisorder}
        onChange={handleAccordionChange("DysthymiaPersistentDepressiveDisorder")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Singleepisode ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Dysthymia Persistent Depressive Disorder" />
        </AccordionSummary>
        <AccordionDetails>
          {DysthymiaPersistentDepressiveDisorderItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`DysthymiaPersistentDepressiveDisorder${index}`]}
              onChange={handleAccordionChange(`DysthymiaPersistentDepressiveDisorder${index}`)}
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
        expanded={accordionStates.PremenstrualDysphoricDisorder}
        onChange={handleAccordionChange("PremenstrualDysphoricDisorder")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.PremenstrualDysphoricDisorder ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Premenstrual Dysphoric Disorder" />
        </AccordionSummary>
        <AccordionDetails>
          {PremenstrualDysphoricDisorderItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`PremenstrualDysphoricDisorder${index}`]}
              onChange={handleAccordionChange(`PremenstrualDysphoricDisorder${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`PremenstrualDysphoricDisorder${index}`] ? (
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
        expanded={accordionStates.SubstanceinducedDepressiveDisorder}
        onChange={handleAccordionChange("SubstanceinducedDepressiveDisorder")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.SubstanceinducedDepressiveDisorder ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Substance induced Depressive Disorder" />
        </AccordionSummary>
        <AccordionDetails>
          {SubstanceinducedDepressiveDisorderItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`SubstanceinducedDepressiveDisorder${index}`]}
              onChange={handleAccordionChange(`SubstanceinducedDepressiveDisorder${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`SubstanceinducedDepressiveDisorder${index}`] ? (
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

export default DepressiveDisorder;
