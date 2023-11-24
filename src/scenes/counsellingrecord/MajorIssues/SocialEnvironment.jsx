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

const SocialEnvironment = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
    Impairmentinsocialcommunicationandinteractions: true,
    Difficultiesreadingsocialcuesandsocialconsequences: true,
    DisinhibitedattachmentDisorders: true,
    NegativePeerpressure: true,
    Acculturationdifficulty: true,
    Loneliness: true,
    DifficultieswithCommunicationlack: true,
    LoveRelationshipbreakup: true,
    Friendshipbreakupseclusion: true,
    Problemsrelatedtocrime: true,
    Problemsrelatedtoincarceration: true,
    Problemstolegalissues: true,
    ReligiousorSpiritualproblem: true,
    Exposuretodisasters: true,
  });

  const [checked, setChecked] = useState([1]);
  const [commentInputOpen, setCommentInputOpen] = useState({
    Impairmentinsocialcommunicationandinteractions: true,
    Difficultiesreadingsocialcuesandsocialconsequences: true,
    DisinhibitedattachmentDisorders: true,
    NegativePeerpressure: true,
    Acculturationdifficulty: true,
    Loneliness: true,
    DifficultieswithCommunicationlack: true,
    LoveRelationshipbreakup: true,
    Friendshipbreakupseclusion: true,
    Problemsrelatedtocrime: true,
    Problemsrelatedtoincarceration: true,
    Problemstolegalissues: true,
    ReligiousorSpiritualproblem: true,
    Exposuretodisasters: true,
  });
  const [comments, setComments] = useState({
    Impairmentinsocialcommunicationandinteractions: "",
    Difficultiesreadingsocialcuesandsocialconsequences: "",
    DisinhibitedattachmentDisorders: "",
    NegativePeerpressure: "",
    Acculturationdifficulty: "",
    Loneliness: "",
    DifficultieswithCommunicationlack: "",
    LoveRelationshipbreakup: "",
    Friendshipbreakupseclusion: "",
    Problemsrelatedtocrime: "",
    Problemsrelatedtoincarceration: "",
    Problemstolegalissues: "",
    ReligiousorSpiritualproblem: "",
    Exposuretodisasters: "",
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
  const ImpairmentinsocialcommunicationandinteractionsItems = ["Symptom"];

  const DifficultiesreadingsocialcuesandsocialconsequencesItems = ["Symptom"];
  const DisinhibitedattachmentDisordersItems = ["Symptom"];
  const NegativePeerpressureItems = ["Symptom"];
  const AcculturationdifficultyItems = ["Symptom"];
  const LackofBasicNeedsItems = ["Symptom"];
  const LonelinessItems = ["Symptom"];
  const DifficultieswithCommunicationlackItems = ["Symptom"];
  const LoveRelationshipbreakupItems = ["Symptom"];
  const FriendshipbreakupseclusionItems = ["Symptom"];
  const ProblemsrelatedtocrimeItems = ["Symptom"];
  const ProblemsrelatedtoincarcerationItems = ["Symptom"];
  const ProblemstolegalissuesItems = ["Symptom"];
  const ReligiousorSpiritualproblemItems = ["Symptom"];
  const ExposuretodisastersItems = ["Symptom"];

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Problems Related to the Social Environment </h2>

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
          <ListItemText primary="Impairmentinsocialcommunicationandinteractions" />
        </AccordionSummary>
        <AccordionDetails>
          {ImpairmentinsocialcommunicationandinteractionsItems.map(
            (item, index) => (
              <Accordion
                expanded={
                  accordionStates[
                    `Impairmentinsocialcommunicationandinteractions${index}`
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
                      `Impairmentinsocialcommunicationandinteractions${index}`
                    ] && (
                      <ListItem disablePadding>
                        <ListItemButton>
                          <TextField
                            fullWidth
                            label="Add a comment"
                            variant="outlined"
                            value={
                              comments[
                                `Impairmentinsocialcommunicationandinteractions${index}`
                              ]
                            }
                            onChange={handleCommentChange(
                              `Impairmentinsocialcommunicationandinteractions${index}`
                            )}
                          />
                        </ListItemButton>
                      </ListItem>
                    )}
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={toggleCommentInput(
                          `Impairmentinsocialcommunicationandinteractions${index}`
                        )}
                      >
                        <CommentIcon
                          color={
                            commentInputOpen[
                              `Impairmentinsocialcommunicationandinteractions${index}`
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
        expanded={
          accordionStates.Difficultiesreadingsocialcuesandsocialconsequences
        }
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Difficultiesreadingsocialcuesandsocialconsequences ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Difficultiesreadingsocialcuesandsocialconsequences" />
        </AccordionSummary>
        <AccordionDetails>
          {DifficultiesreadingsocialcuesandsocialconsequencesItems.map(
            (item, index) => (
              <Accordion
                expanded={
                  accordionStates[
                    `Difficultiesreadingsocialcuesandsocialconsequences${index}`
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
                      `Difficultiesreadingsocialcuesandsocialconsequences${index}`
                    ] && (
                      <ListItem disablePadding>
                        <ListItemButton>
                          <TextField
                            fullWidth
                            label="Add a comment"
                            variant="outlined"
                            value={
                              comments[
                                `Difficultiesreadingsocialcuesandsocialconsequences${index}`
                              ]
                            }
                            onChange={handleCommentChange(
                              `Difficultiesreadingsocialcuesandsocialconsequences${index}`
                            )}
                          />
                        </ListItemButton>
                      </ListItem>
                    )}
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={toggleCommentInput(
                          `Difficultiesreadingsocialcuesandsocialconsequences${index}`
                        )}
                      >
                        <CommentIcon
                          color={
                            commentInputOpen[
                              `Difficultiesreadingsocialcuesandsocialconsequences${index}`
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
        expanded={accordionStates.DisinhibitedattachmentDisorders}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.DisinhibitedattachmentDisorders ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="DisinhibitedattachmentDisorders" />
        </AccordionSummary>
        <AccordionDetails>
          {DisinhibitedattachmentDisordersItems.map((item, index) => (
            <Accordion
              expanded={
                accordionStates[`DisinhibitedattachmentDisorders ${index}`]
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
                    `DisinhibitedattachmentDisorders${index}`
                  ] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={
                            comments[
                              `      DisinhibitedattachmentDisorders
                          ${index}`
                            ]
                          }
                          onChange={handleCommentChange(`      DisinhibitedattachmentDisorders
                          ${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`      DisinhibitedattachmentDisorders
                      ${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `      DisinhibitedattachmentDisorders
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
        expanded={accordionStates.NegativePeerpressure}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.NegativePeerpressure ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="NegativePeerpressure" />
        </AccordionSummary>
        <AccordionDetails>
          {NegativePeerpressureItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`NegativePeerpressure ${index}`]}
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
                  {commentInputOpen[`NegativePeerpressure${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={
                            comments[
                              `      NegativePeerpressure
                          ${index}`
                            ]
                          }
                          onChange={handleCommentChange(`      NegativePeerpressure
                          ${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(
                        `NegativePeerpressure${index}`
                      )}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `NegativePeerpressure
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
        expanded={accordionStates.Acculturationdifficulty}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Acculturationdifficulty ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="NegativePeerpressure" />
        </AccordionSummary>
        <AccordionDetails>
          {AcculturationdifficultyItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Acculturationdifficulty ${index}`]}
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
                  {commentInputOpen[`Acculturationdifficulty${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={
                            comments[
                              `      Acculturationdifficulty
                          ${index}`
                            ]
                          }
                          onChange={handleCommentChange(`      Acculturationdifficulty
                          ${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(
                        `Acculturationdifficulty${index}`
                      )}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `Acculturationdifficulty
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
        expanded={accordionStates.Loneliness}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Loneliness ? <ExpandLessIcon /> : <ExpandMoreIcon />
          }
        >
          <ListItemText primary="Loneliness" />
        </AccordionSummary>
        <AccordionDetails>
          {LonelinessItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Loneliness ${index}`]}
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
                  {commentInputOpen[`Loneliness${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={
                            comments[
                              `      Loneliness
                          ${index}`
                            ]
                          }
                          onChange={handleCommentChange(`      Loneliness
                          ${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Loneliness${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `Loneliness
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
        expanded={accordionStates.DifficultieswithCommunicationlack}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.DifficultieswithCommunicationlack ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="DifficultieswithCommunicationlack" />
        </AccordionSummary>
        <AccordionDetails>
          {DifficultieswithCommunicationlackItems.map((item, index) => (
            <Accordion
              expanded={
                accordionStates[`DifficultieswithCommunicationlack ${index}`]
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
                    `DifficultieswithCommunicationlack${index}`
                  ] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={
                            comments[
                              `      DifficultieswithCommunicationlack
                          ${index}`
                            ]
                          }
                          onChange={handleCommentChange(`      DifficultieswithCommunicationlack
                          ${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(
                        `DifficultieswithCommunicationlack${index}`
                      )}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `DifficultieswithCommunicationlack
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
        expanded={accordionStates.LoveRelationshipbreakup}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.LoveRelationshipbreakup ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="DifficultieswithCommunicationlack" />
        </AccordionSummary>
        <AccordionDetails>
          {LoveRelationshipbreakupItems.map((item, index) => (
            <Accordion
              expanded={
                accordionStates[`DifficultieswithCommunicationlack ${index}`]
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
                  {commentInputOpen[`LoveRelationshipbreakup${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={
                            comments[
                              `      LoveRelationshipbreakup
                          ${index}`
                            ]
                          }
                          onChange={handleCommentChange(`      LoveRelationshipbreakup
                          ${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(
                        `LoveRelationshipbreakup${index}`
                      )}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `LoveRelationshipbreakup
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
        expanded={accordionStates.Friendshipbreakupseclusion}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Friendshipbreakupseclusion ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Friendshipbreakupseclusion" />
        </AccordionSummary>
        <AccordionDetails>
          {FriendshipbreakupseclusionItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Friendshipbreakupseclusion ${index}`]}
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
                  {commentInputOpen[`Friendshipbreakupseclusion${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={
                            comments[
                              `      Friendshipbreakupseclusion
                          ${index}`
                            ]
                          }
                          onChange={handleCommentChange(`      Friendshipbreakupseclusion
                          ${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(
                        `Friendshipbreakupseclusion${index}`
                      )}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `Friendshipbreakupseclusion
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
        expanded={accordionStates.Problemsrelatedtocrime}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Problemsrelatedtocrime ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="ProblemsrelatedtocrimeItems" />
        </AccordionSummary>
        <AccordionDetails>
          {ProblemsrelatedtocrimeItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Problemsrelatedtocrime ${index}`]}
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
                  {commentInputOpen[`Problemsrelatedtocrime${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={
                            comments[
                              `      Problemsrelatedtocrime
                          ${index}`
                            ]
                          }
                          onChange={handleCommentChange(`Problemsrelatedtocrime
                          ${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(
                        `Problemsrelatedtocrime${index}`
                      )}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `Problemsrelatedtocrime
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
        expanded={accordionStates.Problemsrelatedtocrime}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Problemsrelatedtocrime ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="ProblemsrelatedtocrimeItems" />
        </AccordionSummary>
        <AccordionDetails>
          {ProblemsrelatedtoincarcerationItems.map((item, index) => (
            <Accordion
              expanded={
                accordionStates[`Problemsrelatedtoincarceration ${index}`]
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
                    `Problemsrelatedtoincarceration${index}`
                  ] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={
                            comments[`Problemsrelatedtoincarceration${index}`]
                          }
                          onChange={handleCommentChange(`Problemsrelatedtoincarceration
                          ${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(
                        `Problemsrelatedtoincarceration${index}`
                      )}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `Problemsrelatedtoincarceration
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
        expanded={accordionStates.Problemstolegalissues}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Problemstolegalissues ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Problemstolegalissues" />
        </AccordionSummary>
        <AccordionDetails>
          {ProblemstolegalissuesItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Problemstolegalissues ${index}`]}
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
                  {commentInputOpen[`Problemstolegalissues${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Problemstolegalissues${index}`]}
                          onChange={handleCommentChange(
                            `Problemstolegalissues${index}`
                          )}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(
                        `Problemstolegalissues${index}`
                      )}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `Problemstolegalissues
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
        expanded={accordionStates.ReligiousorSpiritualproblem}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.ReligiousorSpiritualproblem ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="ReligiousorSpiritualproblem" />
        </AccordionSummary>
        <AccordionDetails>
          {ReligiousorSpiritualproblemItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`ReligiousorSpiritualproblem ${index}`]}
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
                  {commentInputOpen[`ReligiousorSpiritualproblem${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={
                            comments[`ReligiousorSpiritualproblem${index}`]
                          }
                          onChange={handleCommentChange(
                            `ReligiousorSpiritualproblem${index}`
                          )}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(
                        `ReligiousorSpiritualproblem${index}`
                      )}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `ReligiousorSpiritualproblem
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
        expanded={accordionStates.Exposuretodisasters}
        onChange={handleAccordionChange("LowerAcademicAchievementItems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Exposuretodisasters ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Exposuretodisasters" />
        </AccordionSummary>
        <AccordionDetails>
          {ExposuretodisastersItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Exposuretodisasters ${index}`]}
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
                  {commentInputOpen[`Exposuretodisasters${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Exposuretodisasters${index}`]}
                          onChange={handleCommentChange(
                            `Exposuretodisasters${index}`
                          )}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(
                        `Exposuretodisasters${index}`
                      )}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[
                            `Exposuretodisasters
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

export default SocialEnvironment;
