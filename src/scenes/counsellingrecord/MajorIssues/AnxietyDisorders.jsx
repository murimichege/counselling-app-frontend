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

const AnxietyDisorders = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
    SeparationAnxietyDisorder:true,
    SpecificPhobia: true ,
    Agoraphobia:true,
    SocialAnxietyDisorder : true,
    PanicDisorder:true ,
    PanicAttacks : true,
    GeneralizedAnxietyDisorder: true ,
    Substance_MedicationInducedAnxietyDisorder : true
    
 
           

  });
  const [checked, setChecked] = useState([1]);
  const [commentInputOpen, setCommentInputOpen] = useState({
    SeparationAnxietyDisorder:true,
    SpecificPhobia: true ,
    Agoraphobia:true,
    SocialAnxietyDisorder : true,
    PanicDisorder:true ,
    PanicAttacks : true,
    GeneralizedAnxietyDisorder: true ,
    Substance_MedicationInducedAnxietyDisorder : true
    

  });
  const [comments, setComments] = useState({
    SeparationAnxietyDisorder:"",
    SpecificPhobia: "" ,
    Agoraphobia:"",
    SocialAnxietyDisorder : "",
    PanicDisorder:"" ,
    PanicAttacks : "",
    GeneralizedAnxietyDisorder: "" ,
    Substance_MedicationInducedAnxietyDisorder : ""
    
  
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
  const SeparationAnxietyDisorderItems = ["Symptom"];
  const SpecificPhobiaItems = ["Symptom"];
  const AgoraphobiaItems = ["Symptom"];

  
  const SocialAnxietyDisorderItems = ["Symptom"];
  const PanicDisorderItems = [
    "Symptom"
  ];
  const PanicAttacksItems = [
    "Symptom"
  ];
  const GeneralizedAnxietyDisorderItems = [
    "Symptom"
  ];
  const Substance_MedicationInducedAnxietyDisorderItems = [
    "Symptom"
  ]; 

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h3>Anxiety Disorders</h3>

      <Accordion
        expanded={accordionStates.SeparationAnxietyDisorder}
        onChange={handleAccordionChange("SeparationAnxietyDisorder")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.SeparationAnxietyDisorder ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="SeparationAnxietyDisorder" />
        </AccordionSummary>
        <AccordionDetails>
          {SeparationAnxietyDisorderItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`SeparationAnxietyDisorder${index}`]}
              onChange={handleAccordionChange(`SeparationAnxietyDisorder${index}`)}
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
                  {commentInputOpen[`SpecificPhobia${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`SpecificPhobia${index}`]}
                          onChange={handleCommentChange(`SpecificPhobia${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`SpecificPhobia${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`SpecificPhobia${index}`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={accordionStates.SpecificPhobia}
        onChange={handleAccordionChange("SpecificPhobia")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.SpecificPhobia ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="SpecificPhobia" />
        </AccordionSummary>
        <AccordionDetails>
          {SpecificPhobiaItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`SpecificPhobia${index}`]}
              onChange={handleAccordionChange(`SpecificPhobia${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`SpecificPhobia${index}`] ? (
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
                  {commentInputOpen[`SeparationAnxietyDisorder${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`SeparationAnxietyDisorder${index}`]}
                          onChange={handleCommentChange(`SeparationAnxietyDisorder${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`SeparationAnxietyDisorder${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`SeparationAnxietyDisorder${index}`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={accordionStates.Agoraphobia}
        onChange={handleAccordionChange("Agoraphobia")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Agoraphobia ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Agoraphobia" />
        </AccordionSummary>
        <AccordionDetails>
          {AgoraphobiaItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Agoraphobia${index}`]}
              onChange={handleAccordionChange(`Agoraphobia${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`Agoraphobia${index}`] ? (
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
                  {commentInputOpen[`Agoraphobia${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Agoraphobia${index}`]}
                          onChange={handleCommentChange(`Agoraphobia${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Agoraphobia${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Agoraphobia${index}`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={accordionStates.SocialAnxietyDisorder}
        onChange={handleAccordionChange("SocialAnxietyDisorder")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.SocialAnxietyDisorder ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="SocialAnxietyDisorder" />
        </AccordionSummary>
        <AccordionDetails>
          {SocialAnxietyDisorderItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`SocialAnxietyDisorder${index}`]}
              onChange={handleAccordionChange(`SocialAnxietyDisorder${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`SocialAnxietyDisorder${index}`] ? (
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
                  {commentInputOpen[`SocialAnxietyDisorder${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`SocialAnxietyDisorder${index}`]}
                          onChange={handleCommentChange(`SocialAnxietyDisorder${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`SocialAnxietyDisorder${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`SocialAnxietyDisorder${index}`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={accordionStates.Agoraphobia}
        onChange={handleAccordionChange("Agoraphobia")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Agoraphobia ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="SpecificPhobia" />
        </AccordionSummary>
        <AccordionDetails>
          {AgoraphobiaItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Agoraphobia${index}`]}
              onChange={handleAccordionChange(`Agoraphobia${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`Agoraphobia${index}`] ? (
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
                  {commentInputOpen[`Agoraphobia${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Agoraphobia${index}`]}
                          onChange={handleCommentChange(`Agoraphobia${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Agoraphobia${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Agoraphobia${index}`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={accordionStates.Agoraphobia}
        onChange={handleAccordionChange("Agoraphobia")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Agoraphobia ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="SpecificPhobia" />
        </AccordionSummary>
        <AccordionDetails>
          {AgoraphobiaItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Agoraphobia${index}`]}
              onChange={handleAccordionChange(`Agoraphobia${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`Agoraphobia${index}`] ? (
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
                  {commentInputOpen[`Agoraphobia${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Agoraphobia${index}`]}
                          onChange={handleCommentChange(`Agoraphobia${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Agoraphobia${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Agoraphobia${index}`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={accordionStates.PanicDisorder}
        onChange={handleAccordionChange("PanicDisorder")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.PanicDisorder ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="PanicDisorder" />
        </AccordionSummary>
        <AccordionDetails>
          {PanicDisorderItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`PanicDisorder${index}`]}
              onChange={handleAccordionChange(`PanicDisorder${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`PanicDisorder${index}`] ? (
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
                  {commentInputOpen[`PanicDisorder${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`PanicDisorder${index}`]}
                          onChange={handleCommentChange(`PanicDisorder${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`PanicDisorder${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`PanicDisorder${index}`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={accordionStates.GeneralizedAnxietyDisorder}
        onChange={handleAccordionChange("GeneralizedAnxietyDisorder")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.GeneralizedAnxietyDisorder ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="GeneralizedAnxietyDisorder" />
        </AccordionSummary>
        <AccordionDetails>
          {GeneralizedAnxietyDisorderItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`GeneralizedAnxietyDisorder${index}`]}
              onChange={handleAccordionChange(`GeneralizedAnxietyDisorder${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`GeneralizedAnxietyDisorder${index}`] ? (
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
                  {commentInputOpen[`GeneralizedAnxietyDisorder${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`GeneralizedAnxietyDisorder${index}`]}
                          onChange={handleCommentChange(`GeneralizedAnxietyDisorder${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`GeneralizedAnxietyDisorder${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`GeneralizedAnxietyDisorder${index}`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={accordionStates.Substance_MedicationInducedAnxietyDisorder}
        onChange={handleAccordionChange("Substance_MedicationInducedAnxietyDisorder")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Substance_MedicationInducedAnxietyDisorder ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Substance_MedicationInducedAnxietyDisorder" />
        </AccordionSummary>
        <AccordionDetails>
          {Substance_MedicationInducedAnxietyDisorderItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Substance_MedicationInducedAnxietyDisorder${index}`]}
              onChange={handleAccordionChange(`Substance_MedicationInducedAnxietyDisorder${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`Substance_MedicationInducedAnxietyDisorder${index}`] ? (
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
                  {commentInputOpen[`Substance_MedicationInducedAnxietyDisorder${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Substance_MedicationInducedAnxietyDisorder${index}`]}
                          onChange={handleCommentChange(`Substance_MedicationInducedAnxietyDisorder${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Substance_MedicationInducedAnxietyDisorder${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Substance_MedicationInducedAnxietyDisorder${index}`]
                            ? "primary"
                            : "inherit"
                        }
                      />
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

export default AnxietyDisorders;
