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

const SleepWakedisorders = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
InsomniaDisorder : true,
Hypersomniadisorder: true,
Narcolepsy: true,
Delayedsleep:true, 
Irregularsleepwake :true,
Sleepwalking:true, 
Intimatepartnerrelationshipissues: true,
NightmareDisorders: true,
SubstanceInducedSleepDisorder: true



  });

  const [checked, setChecked] = useState([1]);
  const [commentInputOpen, setCommentInputOpen] = useState({
    InsomniaDisorder : true,
    Hypersomniadisorder: true,
    Narcolepsy: true,
    Delayedsleep:true, 
    Irregularsleepwake :true,
    Sleepwalking:true, 
    Intimatepartnerrelationshipissues: true,
    NightmareDisorders: true,
    SubstanceInducedSleepDisorder: true
    


  });
  const [comments, setComments] = useState({
    InsomniaDisorder : "",
    Hypersomniadisorder: "",
    Narcolepsy: "",
    Delayedsleep:"", 
    Irregularsleepwake :"",
    Sleepwalking:"", 
    Intimatepartnerrelationshipissues: "",
    NightmareDisorders: "",
    SubstanceInducedSleepDisorder: ""
    

  
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
  return (



    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h3>Sleep- Wake disorders </h3>

      <Accordion
        expanded={accordionStates.InsomniaDisorder}
        onChange={handleAccordionChange("InsomniaDisorder")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.InsomniaDisorder ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Insomnia Disorder – lack sleep " />
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
            
                  {commentInputOpen[`InsomniaDisorder`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`InsomniaDisorder`]}
                          onChange={handleCommentChange(`InsomniaDisorder`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`InsomniaDisorder`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`InsomniaDisorder`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={accordionStates.Hypersomniadisorder}
        onChange={handleAccordionChange("Hypersomniadisorder")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Hypersomniadisorder ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Hypersomnia  disorder – sleep too much " />
        </AccordionSummary>
        <AccordionDetails>
   

            <Accordion
              expanded={accordionStates[`Hypersomniadisorder`]}
              onChange={handleAccordionChange(`Hypersomniadisorder`)}
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
            
                  {commentInputOpen[`Hypersomniadisorder`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Hypersomniadisorder`]}
                          onChange={handleCommentChange(`Hypersomniadisorder`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Hypersomniadisorder`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Hypersomniadisorder`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
    
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={accordionStates.Narcolepsy}
        onChange={handleAccordionChange("Narcolepsy")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Narcolepsy ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Narcolepsy- unconscious" />
        </AccordionSummary>
        <AccordionDetails>
            <Accordion
              expanded={accordionStates[`Narcolepsy`]}
              onChange={handleAccordionChange(`Narcolepsy`)}
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
            
                  {commentInputOpen[`Narcolepsy`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Narcolepsy`]}
                          onChange={handleCommentChange(`Narcolepsy`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Narcolepsy`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Narcolepsy`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
    
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={accordionStates.Delayedsleep}
        onChange={handleAccordionChange("Delayedsleep")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Delayedsleep ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Delayed sleep " />
        </AccordionSummary>
        <AccordionDetails>
   

            <Accordion
              expanded={accordionStates[`Delayedsleep`]}
              onChange={handleAccordionChange(`Delayedsleep`)}
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
            
                  {commentInputOpen[`Delayedsleep`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Delayedsleep`]}
                          onChange={handleCommentChange(`Delayedsleep`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Delayedsleep`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Delayedsleep`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
    
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={accordionStates.Irregularsleepwake}
        onChange={handleAccordionChange("Irregularsleepwake")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Irregularsleepwake ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Irregular sleep wake " />
        </AccordionSummary>
        <AccordionDetails>
   

            <Accordion
              expanded={accordionStates[`Irregularsleepwake`]}
              onChange={handleAccordionChange(`Irregularsleepwake`)}
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
            
                  {commentInputOpen[`Irregularsleepwake`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Irregularsleepwake`]}
                          onChange={handleCommentChange(`Irregularsleepwake`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Irregularsleepwake`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Irregularsleepwake`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
    
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={accordionStates.Sleepwalking}
        onChange={handleAccordionChange("Sleepwalking")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Sleepwalking ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Sleep walking " />
        </AccordionSummary>
        <AccordionDetails>
   

            <Accordion
              expanded={accordionStates[`Sleepwalking`]}
              onChange={handleAccordionChange(`Sleepwalking`)}
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
            
                  {commentInputOpen[`Sleepwalking`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Sleepwalking`]}
                          onChange={handleCommentChange(`Sleepwalking`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Sleepwalking`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Sleepwalking`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
    
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={accordionStates.Intimatepartnerrelationshipissues}
        onChange={handleAccordionChange("Intimatepartnerrelationshipissues")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Intimatepartnerrelationshipissues ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Intimate partner relationship issues(conflict, break up)" />
        </AccordionSummary>
        <AccordionDetails>
   

            <Accordion
              expanded={accordionStates[`Intimatepartnerrelationshipissues`]}
              onChange={handleAccordionChange(`Intimatepartnerrelationshipissues`)}
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
            
                  {commentInputOpen[`Intimatepartnerrelationshipissues`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Intimatepartnerrelationshipissues`]}
                          onChange={handleCommentChange(`Intimatepartnerrelationshipissues`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Intimatepartnerrelationshipissues`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Intimatepartnerrelationshipissues`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
    
        </AccordionDetails>
      </Accordion>



      <Accordion
        expanded={accordionStates.NightmareDisorders}
        onChange={handleAccordionChange("NightmareDisorders")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.NightmareDisorders ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Nightmare Disorders" />
        </AccordionSummary>
        <AccordionDetails>
   

            <Accordion
              expanded={accordionStates[`NightmareDisorders`]}
              onChange={handleAccordionChange(`NightmareDisorders`)}
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
            
                  {commentInputOpen[`NightmareDisorders`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`NightmareDisorders`]}
                          onChange={handleCommentChange(`NightmareDisorders`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`NightmareDisorders`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`NightmareDisorders`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
    
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={accordionStates.SubstanceInducedSleepDisorder}
        onChange={handleAccordionChange("SubstanceInducedSleepDisorder")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.SubstanceInducedSleepDisorder ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Substance/Medication Induced Sleep Disorder" />
        </AccordionSummary>
        <AccordionDetails>
   

            <Accordion
              expanded={accordionStates[`SubstanceInducedSleepDisorder`]}
              onChange={handleAccordionChange(`SubstanceInducedSleepDisorder`)}
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
            
                  {commentInputOpen[`SubstanceInducedSleepDisorder`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`SubstanceInducedSleepDisorder`]}
                          onChange={handleCommentChange(`SubstanceInducedSleepDisorder`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`SubstanceInducedSleepDisorder`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`SubstanceInducedSleepDisorder`]
                            ? "primary"
                            : "inherit"
                        }
                      />
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

export default SleepWakedisorders;
