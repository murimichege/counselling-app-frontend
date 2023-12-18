import React, { useState, useContext } from "react";
import {
  ListItem,
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

const LifeSkills = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
    SelfAwareness: true,
    TimeManagement: true,
    Decisionmaking : true,
    ProblemSolving : true,
    GoalSetting : true,
  });
  const [checked, setChecked] = useState([1]);
  const [commentInputOpen, setCommentInputOpen] = useState({
    SelfAwareness: true,
    TimeManagement: true,
    Decisionmaking : true,
    ProblemSolving : true,
    GoalSetting : true,
  });
  const [comments, setComments] = useState({
    SelfAwareness: "",
    TimeManagement: "",
    Decisionmaking : "",
    ProblemSolving : "",
    GoalSetting : "",
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
  const SelfAwarenessItems = ["Symptom"];

  const TimeManagementItems = ["Symptom"];
  const DecisionmakingItems = ["Symptom"];
  const ProblemSolvingItems = [
    "Symptom"
  ];
  const GoalSettingItems = [
    "Symptom"
  ];

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Life Skills</h2>

      <Accordion
        expanded={accordionStates.SelfAwareness}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.SelfAwareness ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Self Awareness" />
        </AccordionSummary>
        <AccordionDetails>
          {SelfAwarenessItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`SelfAwareness${index}`]}
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
                  {commentInputOpen[`SelfAwareness${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`SelfAwareness${index}`]}
                          onChange={handleCommentChange(
                            `SelfAwareness${index}`
                          )}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`SelfAwareness${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`SelfAwareness${index}`]
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
        expanded={accordionStates.TimeManagement}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.TimeManagement ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Time Management" />
        </AccordionSummary>
        <AccordionDetails>
          {TimeManagementItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`TimeManagement${index}`]}
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
                  {commentInputOpen[`TimeManagement${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`TimeManagement${index}`]}
                          onChange={handleCommentChange(`TimeManagement${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`TimeManagement${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`TimeManagement${index}`]
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
        expanded={accordionStates.Decisionmaking}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Decisionmaking ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Decisionmaking" />
        </AccordionSummary>
        <AccordionDetails>
          {DecisionmakingItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Decisionmaking ${index}`]}
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
                  {commentInputOpen[`Decisionmaking${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={
                            comments[
                              `Decisionmaking${index}`
                            ]
                          }
                          onChange={handleCommentChange(`Decisionmaking${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(` Decisionmaking${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `Decisionmaking${index}`
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
        expanded={accordionStates.ProblemSolving}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.ProblemSolving ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="ProblemSolving" />
        </AccordionSummary>
        <AccordionDetails>
          {ProblemSolvingItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`ProblemSolving ${index}`]}
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
                  {commentInputOpen[`ProblemSolving${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={
                            comments[
                              `ProblemSolving${index}`
                            ]
                          }
                          onChange={handleCommentChange(`ProblemSolving${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(
                        `ProblemSolving${index}`
                      )}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `ProblemSolving
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
        expanded={accordionStates.GoalSetting}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.GoalSetting ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Housing Problems" />
        </AccordionSummary>
        <AccordionDetails>
          {GoalSettingItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`GoalSetting ${index}`]}
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
                  {commentInputOpen[`GoalSetting${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={
                            comments[
                              `GoalSetting${index}`
                            ]
                          }
                          onChange={handleCommentChange(`GoalSetting${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`GoalSetting${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `GoalSetting
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

export default LifeSkills;
