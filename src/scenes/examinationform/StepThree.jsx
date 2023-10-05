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

const StepThree = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(ExaminationFormContext);
  const [accordionStates, setAccordionStates] = useState({
    Memory: true,
    Concentration: true,
    Insight: true,
    Judgment: true,
  });
  const [checked, setChecked] = useState([1]);
  const [commentInputOpen, setCommentInputOpen] = useState({
    Memory: true,
    Concentration: true,
    Insight: true,
    Judgment: true,
  });
  const [comments, setComments] = useState({
    Memory: "",
    Concentration: "",
    Insight: "",
    Judgment: "",
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
  const MemoryItems = [
    
    "Short Term Intact",
    "Long Term Intact",
  ];
  const ConcentrationItems = [
    "Inattentive",
    "Easily Distracted."
  ]

  const InsightItems = [
    "Does The Client Understand The Nature Of His Or Her Symptoms Or Functional Impairment (Judgment)"
  ];

  const PerceptualdisturbancesItems = [
    "Does The Client Make Adaptive Decision For Himself Or others Despite The Symptoms Of Functional Impairment (Judgment )"];

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Orientation and mental status examination (MSE) form</h2>

      <Accordion
        expanded={accordionStates.Memory}
        onChange={handleAccordionChange("Memory")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Memory ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Memory" />
        </AccordionSummary>
        <AccordionDetails>
          {MemoryItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Memory${index}`]}
              onChange={handleAccordionChange(`Memory${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`Memory${index}`] ? (
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
                  {commentInputOpen[`Memory${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Memory${index}`]}
                          onChange={handleCommentChange(`Memory${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Memory${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Memory${index}`]
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
        expanded={accordionStates.Concentration}
        onChange={handleAccordionChange("Concentration")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Concentration ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Concentration" />
        </AccordionSummary>
        <AccordionDetails>
          {ConcentrationItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Concentration${index}`]}
              onChange={handleAccordionChange(`Concentration${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`Concentration${index}`] ? (
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
                  {commentInputOpen[`Concentration${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Concentration${index}`]}
                          onChange={handleCommentChange(`Concentration${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Concentration${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Concentration${index}`]
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
        expanded={accordionStates.Insight}
        onChange={handleAccordionChange("Insight")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Insight ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Insight" />
        </AccordionSummary>
        <AccordionDetails>
          {InsightItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Insight${index}`]}
              onChange={handleAccordionChange(`Insight${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`Insight${index}`] ? (
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
                  {commentInputOpen[`Insight${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Insight${index}`]}
                          onChange={handleCommentChange(`Insight${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Insight${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Insight${index}`]
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
        expanded={accordionStates.Judgment}
        onChange={handleAccordionChange("Judgment")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Judgment ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Judgment" />
        </AccordionSummary>
        <AccordionDetails>
          {PerceptualdisturbancesItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Judgment${index}`]}
              onChange={handleAccordionChange(`Judgment${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`Judgment${index}`] ? (
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
                  {commentInputOpen[`Judgment${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Judgment${index}`]}
                          onChange={handleCommentChange(`Judgment${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Judgment${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Judgment${index}`]
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
          onClick={() => onButtonClick("pagefour")}
        >
          Save Client Details
        </Button>
      </Box>
    </main>
  );
};

export default StepThree;
