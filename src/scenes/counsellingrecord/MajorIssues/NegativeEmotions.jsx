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

const NegativeEmotions = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
    Anger: true,
    Fearandapprehension: true,
    Fearpastunpleasantfeelingsorfuturenegativepossibilities: true,
    Worry: true,
    Guilt: true,
    ShameandHumiliation: true,
  });
  const [checked, setChecked] = useState([1]);
  const [commentInputOpen, setCommentInputOpen] = useState({
    Anger: true,
    Fearandapprehension: true,
    Fearpastunpleasantfeelingsorfuturenegativepossibilities: true,
    Worry: true,
    Guilt: true,
    ShameandHumiliation: true,
  });
  const [comments, setComments] = useState({
    Anger: "",
    Fearandapprehension: "",
    Fearpastunpleasantfeelingsorfuturenegativepossibilities: "",
    Worry: "",
    Guilt: "",
    ShameandHumiliation: "",
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
  const AngerItems = ["Symptom"];

  const FearandapprehensionItems = ["Symptom"];
  const FearpastunpleasantfeelingsorfuturenegativepossibilitiesItems = [
    "Symptom",
  ];
  const WorryItems = ["Symptom"];
  const GuiltyItems = ["Symptom"];
  const ShameandHumiliationItems = ["Symptom"];
  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Experience of Negative Emotions  </h2>

      <Accordion
        expanded={accordionStates.Anger}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Anger ? <ExpandLessIcon /> : <ExpandMoreIcon />
          }
        >
          <ListItemText primary="Anger" />
        </AccordionSummary>
        <AccordionDetails>
          {AngerItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Anger${index}`]}
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
                  {commentInputOpen[`Anger${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Anger${index}`]}
                          onChange={handleCommentChange(`Anger${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Anger${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Anger${index}`]
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
        expanded={accordionStates.Fearandapprehension}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Fearandapprehension ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Fearandapprehension" />
        </AccordionSummary>
        <AccordionDetails>
          {FearandapprehensionItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Fearandapprehension${index}`]}
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
                  {commentInputOpen[`Fearandapprehension${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Fearandapprehension${index}`]}
                          onChange={handleCommentChange(
                            `Fearandapprehension${index}`
                          )}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(
                        `Fearandapprehension${index}`
                      )}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Fearandapprehension${index}`]
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
        expanded={
          accordionStates.Fearpastunpleasantfeelingsorfuturenegativepossibilities
        }
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Fearpastunpleasantfeelingsorfuturenegativepossibilities ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Fearpastunpleasantfeelingsorfuturenegativepossibilities" />
        </AccordionSummary>
        <AccordionDetails>
          {FearpastunpleasantfeelingsorfuturenegativepossibilitiesItems.map(
            (item, index) => (
              <Accordion
                expanded={
                  accordionStates[
                    `Fearpastunpleasantfeelingsorfuturenegativepossibilities ${index}`
                  ]
                }
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
                    {commentInputOpen[
                      `Fearpastunpleasantfeelingsorfuturenegativepossibilities${index}`
                    ] && (
                      <ListItem disablePadding>
                        <ListItemButton>
                          <TextField
                            fullWidth
                            label="Add a comment"
                            variant="outlined"
                            value={
                              comments[
                                `Fearpastunpleasantfeelingsorfuturenegativepossibilities${index}`
                              ]
                            }
                            onChange={handleCommentChange(
                              `Fearpastunpleasantfeelingsorfuturenegativepossibilities${index}`
                            )}
                          />
                        </ListItemButton>
                      </ListItem>
                    )}
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={toggleCommentInput(
                          ` Fearpastunpleasantfeelingsorfuturenegativepossibilities${index}`
                        )}
                      >
                        <CommentIcon
                          color={
                            commentInputOpen[
                              `Fearpastunpleasantfeelingsorfuturenegativepossibilities${index}`
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
            )
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={accordionStates.Worry}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Worry ? <ExpandLessIcon /> : <ExpandMoreIcon />
          }
        >
          <ListItemText primary="Worry" />
        </AccordionSummary>
        <AccordionDetails>
          {WorryItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Worry ${index}`]}
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
                  {commentInputOpen[`Worry${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Worry${index}`]}
                          onChange={handleCommentChange(`Worry${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Worry${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `Worry
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
        expanded={accordionStates.Guilty}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Guilty ? <ExpandLessIcon /> : <ExpandMoreIcon />
          }
        >
          <ListItemText primary="HousingProblems" />
        </AccordionSummary>
        <AccordionDetails>
          {GuiltyItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Guilty ${index}`]}
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
                  {commentInputOpen[`Guilty${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Guilty${index}`]}
                          onChange={handleCommentChange(`Guilty${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Guilty${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `Guilty
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
        expanded={accordionStates.ShameandHumiliation}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.ShameandHumiliation ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="ShameandHumiliation" />
        </AccordionSummary>
        <AccordionDetails>
          {ShameandHumiliationItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`ShameandHumiliation ${index}`]}
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
                  {commentInputOpen[`ShameandHumiliation${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`ShameandHumiliation${index}`]}
                          onChange={handleCommentChange(
                            `ShameandHumiliation${index}`
                          )}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(
                        `ShameandHumiliation${index}`
                      )}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `ShameandHumiliation
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

export default NegativeEmotions;
