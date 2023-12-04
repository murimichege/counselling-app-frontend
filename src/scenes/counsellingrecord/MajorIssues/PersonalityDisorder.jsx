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

const PersonalityDisorder = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
    ClusterA : true,
    ClusterB: true,
    ClusterC: true,

  });
  const [checked, setChecked] = useState([1]);
  const [commentInputOpen, setCommentInputOpen] = useState({
    ClusterA : true,
    ClusterB: true,
    ClusterC: true,
  });
  const [comments, setComments] = useState({
    ClusterA : "",
    ClusterB: "",
    ClusterC: "",
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
  const ClusterAItems = [
    "Paranoid Personality Disorder",
    "Schizoid Personality Disorder",
    "Schizotypal Personality Disorder",
  ];
  const ClusterBItems = [
    "Antisocial personality Disorder ",
    "Borderline Personality Disorder",
    "Histrionic Personality Disorder",
    "Narcissistic Personality Disorders ",

  ];
  const ClusterCItems = [
    "Avoidant Personality Disorder ",
    "Dependent Personality Disorder",
    "Obsessive – Compulsive Personality Disorder ",
  ];
  const appearanceSubItems = [
    {option1:"Normal", option2:"Inappropriate"},
    {option1:"Normal", option2:"Inappropriate"},
    {option1:"Yes", option2:"No"},

  ]
  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Personality Disorder </h2>

      <Accordion
        expanded={accordionStates.ClusterA}
        onChange={handleAccordionChange("ClusterA")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.ClusterA ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Cluster A Personality Disorders" />
        </AccordionSummary>
        <AccordionDetails>
          {ClusterAItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`ClusterA${index}`]}
              onChange={handleAccordionChange(`ClusterA${index}`)}
              key={index}
            >
              <AccordionSummary
                // expandIcon={
                //   accordionStates[`appearanceOpen${index}`] ? (
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
                  
                  
                  {commentInputOpen[`ClusterA${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`ClusterA${index}`]}
                          onChange={handleCommentChange(`ClusterA${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`ClusterA${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`ClusterA${index}`]
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
        expanded={accordionStates.ClusterB}
        onChange={handleAccordionChange("ClusterB")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.ClusterB ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Cluster B Personality Disorders" />
        </AccordionSummary>
        <AccordionDetails>
          {ClusterBItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`ClusterB${index}`]}
              onChange={handleAccordionChange(`ClusterB${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`ClusterB${index}`] ? (
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
             
                  {commentInputOpen[`ClusterB${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`ClusterB${index}`]}
                          onChange={handleCommentChange(`ClusterB${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`ClusterB${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`ClusterB${index}`]
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
        expanded={accordionStates.ClusterC}
        onChange={handleAccordionChange("ClusterC")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.ClusterC ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Cluster C Personality Disorders" />
        </AccordionSummary>
        <AccordionDetails>
          {ClusterCItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`ClusterC${index}`]}
              onChange={handleAccordionChange(`ClusterC${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`ClusterC${index}`] ? (
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
            
                  {commentInputOpen[`ClusterC${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`ClusterC${index}`]}
                          onChange={handleCommentChange(`ClusterC${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`ClusterC${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`ClusterC${index}`]
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

export default PersonalityDisorder;
