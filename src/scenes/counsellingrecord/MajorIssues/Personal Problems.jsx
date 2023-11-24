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

const PersonalProblems = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
    selfCriticism: true,
    lowSelfEsteem: true,
    identityIssues: true,
    lackOfConfidence: true,
    timeManagement: true,
    selfManagement: true,
    fraudulentBehavior: true,
    dishonesty: true
  });
  const [checked, setChecked] = useState([1]);
  const [commentInputOpen, setCommentInputOpen] = useState({
    selfCriticism: true,
    lowSelfEsteem: true,
    identityIssues: true,
    lackOfConfidence: true,
    timeManagement: true,
    selfManagement: true,
    fraudulentBehavior: true,
    dishonesty: true
    

  });
  const [comments, setComments] = useState({
    selfCriticism: '',
    lowSelfEsteem: '',
    identityIssues: '',
    lackOfConfidence: '',
    timeManagement: '',
    selfManagement: '',
    fraudulentBehavior: '',
    dishonesty: ''
  
  });
  const formatLabel = (label) => {
    // Split the label using regular expression to insert a space before capital letters
    return label.replace(/([A-Z])/g, ' $1').trim();
  };

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
  const selfCriticismItems = ["Symptom"];
  const lowSelfEsteemItems = ["Symptom"];
  const identityIssuesItems = ["Symptom"];
  const lackOfConfidenceItems = ["Symptom"];
  const timeManagementItems = ["Symptom"];

  const selfManagementItems = ["Symptom"];
  const fraudulentBehaviorItems = ["Symptom"];
  const dishonestyItems = ["Symptom"];



  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h3>Personal Problems</h3>

      <Accordion
        expanded={accordionStates.selfCriticismItems}
        onChange={handleAccordionChange("selfCriticismItems")}
 
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Detachmentinavoidanceofsocioemotionalexperience ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="selfCriticism" />
        </AccordionSummary>
        <AccordionDetails>
          {selfCriticismItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`selfCriticism${index}`]}
              onChange={handleAccordionChange(`selfCriticism${index}`)}
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
                  {commentInputOpen[`selfCriticism${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`selfCriticism${index}`]}
                          onChange={handleCommentChange(`selfCriticism${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`selfCriticism${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`selfCriticism${index}`]
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
        expanded={accordionStates.lowSelfEsteemItems}
        onChange={handleAccordionChange("lowSelfEsteem")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.lowSelfEsteem ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="lowSelfEsteem" />
        </AccordionSummary>
        <AccordionDetails>
          {lowSelfEsteemItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`lowSelfEsteem${index}`]}
              onChange={handleAccordionChange(`lowSelfEsteem${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`lowSelfEsteem${index}`] ? (
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
                  {commentInputOpen[`lowSelfEsteem${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`lowSelfEsteem${index}`]}
                          onChange={handleCommentChange(`lowSelfEsteem${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`lowSelfEsteem${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`lowSelfEsteem${index}`]
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
        expanded={accordionStates.identityIssuesItems}
        onChange={handleAccordionChange("identityIssues")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.identityIssues ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="identityIssues" />
        </AccordionSummary>
        <AccordionDetails>
          {identityIssuesItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`identityIssues${index}`]}
              onChange={handleAccordionChange(`identityIssues${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`identityIssues${index}`] ? (
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
                  {commentInputOpen[`identityIssues${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`identityIssues${index}`]}
                          onChange={handleCommentChange(`identityIssues${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`identityIssues${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`identityIssues${index}`]
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
        expanded={accordionStates.lackOfConfidenceItems}
        onChange={handleAccordionChange("lackOfConfidence")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.lackOfConfidence ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="lackOfConfidence" />
        </AccordionSummary>
        <AccordionDetails>
          {lackOfConfidenceItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`lackOfConfidence${index}`]}
              onChange={handleAccordionChange(`lackOfConfidence${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`lackOfConfidence${index}`] ? (
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
                  {commentInputOpen[`lackOfConfidence${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`lackOfConfidence${index}`]}
                          onChange={handleCommentChange(`lackOfConfidence${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`lackOfConfidence${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`lackOfConfidence${index}`]
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
        expanded={accordionStates.timeManagementItems}
        onChange={handleAccordionChange("timeManagement")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.timeManagement ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="timeManagement" />
        </AccordionSummary>
        <AccordionDetails>
          {timeManagementItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`timeManagement${index}`]}
              onChange={handleAccordionChange(`timeManagement${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`timeManagement${index}`] ? (
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
                  {commentInputOpen[`timeManagement${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`timeManagement${index}`]}
                          onChange={handleCommentChange(`timeManagement${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`timeManagement${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`timeManagement${index}`]
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
        expanded={accordionStates.selfManagementItems}
        onChange={handleAccordionChange("selfManagement")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.selfManagement ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="selfManagement" />
        </AccordionSummary>
        <AccordionDetails>
          {selfManagementItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`selfManagement${index}`]}
              onChange={handleAccordionChange(`selfManagement${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`selfManagement${index}`] ? (
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
                  {commentInputOpen[`selfManagement${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`selfManagement${index}`]}
                          onChange={handleCommentChange(`selfManagement${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`selfManagement${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`selfManagement${index}`]
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
        expanded={accordionStates.fraudulentBehaviorItems}
        onChange={handleAccordionChange("fraudulentBehavior")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.fraudulentBehavior ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="fraudulentBehavior" />
        </AccordionSummary>
        <AccordionDetails>
          {fraudulentBehaviorItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`fraudulentBehavior${index}`]}
              onChange={handleAccordionChange(`fraudulentBehavior${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`fraudulentBehavior${index}`] ? (
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
                  {commentInputOpen[`fraudulentBehavior${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`fraudulentBehavior${index}`]}
                          onChange={handleCommentChange(`fraudulentBehavior${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`fraudulentBehavior${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`fraudulentBehavior${index}`]
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
        expanded={accordionStates.dishonestyItems}
        onChange={handleAccordionChange("dishonestyItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.dishonesty ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="dishonesty" />
        </AccordionSummary>
        <AccordionDetails>
          {fraudulentBehaviorItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`dishonesty${index}`]}
              onChange={handleAccordionChange(`dishonesty${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`dishonesty${index}`] ? (
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
                  {commentInputOpen[`dishonesty${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`dishonesty${index}`]}
                          onChange={handleCommentChange(`dishonesty${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`dishonesty${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`dishonesty${index}`]
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

export default PersonalProblems;
