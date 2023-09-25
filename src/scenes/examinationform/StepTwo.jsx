import React, { useState, useContext } from "react";
import "./index.css";
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
import { ExaminationFormContext } from "./Examinationform";

const StepTwo = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(ExaminationFormContext);
  const [accordionStates, setAccordionStates] = useState({
    EmotionsDisplay: true,
    Orientation: true,
    Cognitivefunctioning: true,
    Thoughtcontent: true,
    Perceptualdisturbances: true,
  });
  const [checked, setChecked] = useState([1]);
  const [commentInputOpen, setCommentInputOpen] = useState({
    EmotionsDisplay: true,
    Orientation: true,
    Cognitivefunctioning: true,
    Thoughtcontent: true,
    Perceptualdisturbances: true,
  });
  const [comments, setComments] = useState({
    EmotionsDisplay: "",
    Orientation: "",
    Cognitivefunctioning: "",
    Thoughtcontent: "",
    Perceptualdisturbances: "",
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
  const EmotionsDisplayItems = [
    "Intense feelings (sad evidenced by facial expression,tearful and crying,Grooming &  Hygiene",
    "Irritability",
    "Anxious",
    "Is the affect discrepant from the situation he or she is in",
    "(e.g. lack affect when describing a painful story, laughing, to a sad story)",
    "Flat-appearing emotionless",
    "Blunted- lacking outward emotional expression to provocative clinical material- just give factual information without any feelings",
  ];
  const OrientationItems = [
    "Time, place , person, self",
    "Does the client appear oriented – knows where he or she is, what the date is? Etc."
  ]

  const CognitivefunctioningItems = [
    "Clients intelligence – check on vocabulary , demonstrated complexity of thought", 
       "Check for unwanted behavior (tics, unusual movement,repetitive motion)",
    "Non-verbal behavior",
    "Is level of activity within expected ranges?",
  ];

  const ThoughtcontentItems = [
    "Content and organization of clients thinking", 
       "Preoccupation with negative thinking e.g. I am worthless",
    "Reports of obsession( negative mental images or ides)",
    "Phobias",
    "Suicidal ideation",
  " Homicidal ideation",
  "If active *",
  "Plan",
  "Intent",
  "Means"
  ];

  const PerceptualdisturbancesItems = [
    "Evidence of hallucinations – sensory experiences not experienced by others ( seeing, hearing ( common ),tasting , touching experiences )", 
    "Rule out hallucination that has an organic cause", 
    "Delusions – ideas that are firmly held yet unrealistic or not shared by others ; ideas of being persecuted , ideas of self – grandeur , ideas of reference", 
    "Illusions – are distortions of existing sensory stimuli"];

  const MoodItems = ["Normal-euthymic","Hyperthermia-extremely happy mood","Dysthymia-depressed mood","Does client suffer from mood disorder or medical condition"]
  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Orientation and mental status examination (MSE) form</h2>

      <Accordion
        expanded={accordionStates.EmotionsDisplay}
        onChange={handleAccordionChange("EmotionsDisplay")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.EmotionsDisplay ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="EmotionsDisplay" />
        </AccordionSummary>
        <AccordionDetails>
          {EmotionsDisplayItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`EmotionsDisplay${index}`]}
              onChange={handleAccordionChange(`EmotionsDisplay${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`EmotionsDisplay${index}`] ? (
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
                  {[0, 1, 2].map((value) => (
                    <ListItem
                      key={value}
                      secondaryAction={
                        <Checkbox
                          edge="end"
                          onChange={handleToggle(value)}
                          checked={checked.indexOf(value) !== -1}
                        />
                      }
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemText primary={`Line item ${value + 1}`} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                  {commentInputOpen[`EmotionsDisplay${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`EmotionsDisplay${index}`]}
                          onChange={handleCommentChange(`EmotionsDisplay${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`EmotionsDisplay${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`EmotionsDisplay${index}`]
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
        expanded={accordionStates.Orientation}
        onChange={handleAccordionChange("Orientation")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Orientation ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Orientation" />
        </AccordionSummary>
        <AccordionDetails>
          {OrientationItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Orientation${index}`]}
              onChange={handleAccordionChange(`Orientation${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`Orientation${index}`] ? (
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
                  {[0, 1, 2].map((value) => (
                    <ListItem
                      key={value}
                      secondaryAction={
                        <Checkbox
                          edge="end"
                          onChange={handleToggle(value)}
                          checked={checked.indexOf(value) !== -1}
                        />
                      }
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemText primary={`Line item ${value + 1}`} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                  {commentInputOpen[`Orientation${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Orientation${index}`]}
                          onChange={handleCommentChange(`Orientation${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Orientation${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Orientation${index}`]
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
        expanded={accordionStates.Cognitivefunctioning}
        onChange={handleAccordionChange("Cognitivefunctioning")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Cognitivefunctioning ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Cognitivefunctioning" />
        </AccordionSummary>
        <AccordionDetails>
          {CognitivefunctioningItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Cognitivefunctioning${index}`]}
              onChange={handleAccordionChange(`Cognitivefunctioning${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`Cognitivefunctioning${index}`] ? (
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
                  {[0, 1, 2].map((value) => (
                    <ListItem
                      key={value}
                      secondaryAction={
                        <Checkbox
                          edge="end"
                          onChange={handleToggle(value)}
                          checked={checked.indexOf(value) !== -1}
                        />
                      }
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemText primary={`Line item ${value + 1}`} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                  {commentInputOpen[`Cognitivefunctioning${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Cognitivefunctioning${index}`]}
                          onChange={handleCommentChange(`Cognitivefunctioning${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Cognitivefunctioning${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Cognitivefunctioning${index}`]
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
        expanded={accordionStates.Thoughtcontent}
        onChange={handleAccordionChange("Thoughtcontent")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Thoughtcontent ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Thoughtcontent" />
        </AccordionSummary>
        <AccordionDetails>
          {ThoughtcontentItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Thoughtcontent${index}`]}
              onChange={handleAccordionChange(`Thoughtcontent${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`Thoughtcontent${index}`] ? (
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
                  {[0, 1, 2].map((value) => (
                    <ListItem
                      key={value}
                      secondaryAction={
                        <Checkbox
                          edge="end"
                          onChange={handleToggle(value)}
                          checked={checked.indexOf(value) !== -1}
                        />
                      }
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemText primary={`Line item ${value + 1}`} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                  {commentInputOpen[`Thoughtcontent${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Thoughtcontent${index}`]}
                          onChange={handleCommentChange(`Thoughtcontent${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Thoughtcontent${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Thoughtcontent${index}`]
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
        expanded={accordionStates.Perceptualdisturbances}
        onChange={handleAccordionChange("Perceptualdisturbances")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Perceptualdisturbances ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Perceptualdisturbances" />
        </AccordionSummary>
        <AccordionDetails>
          {PerceptualdisturbancesItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Perceptualdisturbances${index}`]}
              onChange={handleAccordionChange(`Perceptualdisturbances${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`Perceptualdisturbances${index}`] ? (
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
                  {[0, 1, 2].map((value) => (
                    <ListItem
                      key={value}
                      secondaryAction={
                        <Checkbox
                          edge="end"
                          onChange={handleToggle(value)}
                          checked={checked.indexOf(value) !== -1}
                        />
                      }
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemText primary={`Line item ${value + 1}`} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                  {commentInputOpen[`Perceptualdisturbances${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Perceptualdisturbances${index}`]}
                          onChange={handleCommentChange(`Mood${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Perceptualdisturbances${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Perceptualdisturbances${index}`]
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

      {/* Buttons */}
      <Box
        sx={{
          marginTop: "40px",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Button
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          type="submit"
          variant="contained"
          onClick={() => onButtonClick("pagetwo")}
        >
          Cancel
        </Button>

        <Button
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          type="submit"
          variant="contained"
          onClick={() => onButtonClick("pagetwo")}
        >
          Save Client Details
        </Button>
      </Box>
    </main>
  );
};

export default StepTwo;
