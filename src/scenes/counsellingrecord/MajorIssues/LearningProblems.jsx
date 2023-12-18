import React, { useState, useContext } from "react";
// import "./index.css";
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

const LearningProblems = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
    LowMotivation: true,
    Lackoffocus: true,
    Absenteeism: true,
    OccupationalProblems: true,
    HousingProblems: true,
    LackofBasicNeeds: true,
    FinancialDistressIssues: true,
  });
  const [checked, setChecked] = useState([1]);
  const [commentInputOpen, setCommentInputOpen] = useState({
    LowMotivation: true,
    Lackoffocus: true,
    Absenteeism: true,
    OccupationalProblems: true,
    HousingProblems: true,
    LackofBasicNeeds: true,
    FinancialDistressIssues: true,
  });
  const [comments, setComments] = useState({
    LowMotivation: "",
    Lackoffocus: "",
    Absenteeism: "",
    OccupationalProblems: "",
    HousingProblems: "",
    LackofBasicNeeds: "",
    FinancialDistressIssues: "",
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
  const LowMotivationItems = ["Symptom"];

  const LackoffocusItems = ["Symptom"];
  const AbsenteeismItems = ["Symptom"];
  const OccupationalProblemsItems = [
    " Difficulty with career choice",
    " Work/school/life balance ",
    "employer-Employee Relationships",
  ];
  const HousingProblemsItems = [
    "Homeless",
    "Conflict with housemates",
    "Problems related to living at home",
    "Problems related to living in residential institution",
    "Inadequate housing",
  ];
  const LackofBasicNeedsItems = ["Inadequate food"];
  const FinancialDistressIssuesItems = [
    "Lack finances (school fees, medical)",
    "Poor management of finances",
  ];

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Learning problems</h2>

      <Accordion
        expanded={accordionStates.LowerAcademicAchievementItems}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.LowerAcademicAchievementItems ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Low Motivation" />
        </AccordionSummary>
        <AccordionDetails>
          {LowMotivationItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`LowMotivation${index}`]}
              onChange={handleAccordionChange(
                `LowerAcademicAchievementItemsOpen${index}`
              )}
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
                  {commentInputOpen[`LowMotivation${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`LowMotivation${index}`]}
                          onChange={handleCommentChange(
                            `LowMotivation${index}`
                          )}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`LowMotivation${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`LowMotivation${index}`]
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
        expanded={accordionStates.LackoffocusItems}
        onChange={handleAccordionChange("LackoffocusItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Lackoffocus ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Lack of focus" />
        </AccordionSummary>
        <AccordionDetails>
          {LackoffocusItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Lackoffocus${index}`]}
              onChange={handleAccordionChange(
                `LowerAcademicAchievementItemsOpen${index}`
              )}
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
                  {commentInputOpen[`Lackoffocus${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Lackoffocus${index}`]}
                          onChange={handleCommentChange(`Lackoffocus${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Lackoffocus${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Lackoffocus${index}`]
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
        expanded={accordionStates.AbsenteeismItems}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Absenteeism ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Absenteeism" />
        </AccordionSummary>
        <AccordionDetails>
          {AbsenteeismItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Absenteeism ${index}`]}
              onChange={handleAccordionChange(
                `LowerAcademicAchievementItemsOpen${index}`
              )}
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
                  {commentInputOpen[`Absenteeism${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={
                            comments[
                              `      Absenteeism
                          ${index}`
                            ]
                          }
                          onChange={handleCommentChange(`      Absenteeism
                          ${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`      Absenteeism
                      ${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `      Absenteeism
                          ${index}`
                          ]
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
        expanded={accordionStates.OccupationalProblemsItems}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.OccupationalProblems ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Occupational Problems" />
        </AccordionSummary>
        <AccordionDetails>
          {OccupationalProblemsItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`OccupationalProblems ${index}`]}
              onChange={handleAccordionChange(
                `LowerAcademicAchievementItemsOpen${index}`
              )}
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
                  {commentInputOpen[`OccupationalProblems${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={
                            comments[
                              `      OccupationalProblems
                          ${index}`
                            ]
                          }
                          onChange={handleCommentChange(`      OccupationalProblems
                          ${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(
                        `OccupationalProblems${index}`
                      )}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `OccupationalProblems
                          ${index}`
                          ]
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
        expanded={accordionStates.OccupationalProblemsItems}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.OccupationalProblems ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Housing Problems" />
        </AccordionSummary>
        <AccordionDetails>
          {HousingProblemsItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`HousingProblems ${index}`]}
              onChange={handleAccordionChange(
                `LowerAcademicAchievementItemsOpen${index}`
              )}
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
                  {commentInputOpen[`HousingProblems${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={
                            comments[
                              `      HousingProblems
                          ${index}`
                            ]
                          }
                          onChange={handleCommentChange(`      HousingProblems
                          ${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`HousingProblems${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `HousingProblems
                          ${index}`
                          ]
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
        expanded={accordionStates.LackofBasicNeedsItems}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.FinancialDistressIssues ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Financial Distress Issues" />
        </AccordionSummary>
        <AccordionDetails>
          {FinancialDistressIssuesItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`FinancialDistressIssues ${index}`]}
              onChange={handleAccordionChange(
                `LowerAcademicAchievementItemsOpen${index}`
              )}
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
                  {commentInputOpen[`FinancialDistressIssues${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={
                            comments[
                              `      FinancialDistressIssues
                          ${index}`
                            ]
                          }
                          onChange={handleCommentChange(`      FinancialDistressIssues
                          ${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(
                        `FinancialDistressIssues${index}`
                      )}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `FinancialDistressIssues
                          ${index}`
                          ]
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

export default LearningProblems;
