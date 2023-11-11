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
import { ExaminationFormContext } from "../examinationform/Examinationform";

const AssessmentOptions = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(ExaminationFormContext);
  const [accordionStates, setAccordionStates] = useState({
    AcademicProblems : true,
    LowerAcademicAchievement : true,
    Learningproblems : true,
    OccupationalProblems: true,
    HousingProblems : true,
    BasicNeedsLack: true,
    FinancialDistressIssues : true,
    ProblemsRelatedtotheSocialEnvironment: true ,
    LifeSkills:true,
    ExperienceofNegativeEmotions:true,
    AnxietyDisorders : true,
    InterpersonalDetachmentissues: true ,
    PersonalProblems: true,
    SuicidalBehaviorDisorder: true,
    CommunicationDisorder : true,
    AutismSpectrumDisorder: true,
    AttentionDeficit: true,
    MoodDisorders:true,
    BipolarType:true,
    DepressiveDisorder:true,
    PremenstrualDysphoricDisorder: true,
    PsychoticDisorders: true,
    SubstanceinducedDepressiveDisorder : true,
    PersonalityDisorder: true,
    TraumaDisorders:true,
    StressDisorders:true,
    RelationalProblems :true,
    Bereavement: true,
    EatingDisorders: true,
    Sleep: true,
    SexualDysfunctions:true,
    ParaphilicSexualDisorders:true,
    AbuseandNeglect :true,
    GenderRelatedIssues: true,
    DisciplinaryIssues  : true,
    SubstanceRelatedandAddictiveDisorder: true,
    SubstanceRelatedDisorder : true,
    GamblingDisorders : true,
    NeurocognitiveDisorders : true,
    DissociativeDisorders : true,
    SomaticDisorders : true,
    FactitiousDisorders : true
 
           

  });
  const [checked, setChecked] = useState([1]);
  const [commentInputOpen, setCommentInputOpen] = useState({
      AcademicProblems : true,
    LowerAcademicAchievement : true,
    Learningproblems : true,
    OccupationalProblems: true,
    HousingProblems : true,
    BasicNeedsLack: true,
    FinancialDistressIssues : true,
    ProblemsRelatedtotheSocialEnvironment: true ,
    LifeSkills:true,
    ExperienceofNegativeEmotions:true,
    AnxietyDisorders : true,
    InterpersonalDetachmentissues: true ,
    PersonalProblems: true,
    SuicidalBehaviorDisorder: true,
    CommunicationDisorder : true,
    AutismSpectrumDisorder: true,
    AttentionDeficit: true,
    MoodDisorders:true,
    BipolarType:true,
    DepressiveDisorder:true,
    PremenstrualDysphoricDisorder: true,
    PsychoticDisorders: true,
    SubstanceinducedDepressiveDisorder : true,
    PersonalityDisorder: true,
    TraumaDisorders:true,
    StressDisorders:true,
    RelationalProblems :true,
    Bereavement: true,
    EatingDisorders: true,
    Sleep: true,
    SexualDysfunctions:true,
    ParaphilicSexualDisorders:true,
    AbuseandNeglect :true,
    GenderRelatedIssues: true,
    DisciplinaryIssues  : true,
    SubstanceRelatedandAddictiveDisorder: true,
    SubstanceRelatedDisorder : true,
    GamblingDisorders : true,
    NeurocognitiveDisorders : true,
    DissociativeDisorders : true,
    SomaticDisorders : true,
    FactitiousDisorders : true
  });
  const [comments, setComments] = useState({
    AcademicProblems : "",
    LowerAcademicAchievement : "",
    Learningproblems : "",
    OccupationalProblems: "",
    HousingProblems : "",
    BasicNeedsLack: "",
    FinancialDistressIssues : "",
    ProblemsRelatedtotheSocialEnvironment: "" ,
    LifeSkills:"",
    ExperienceofNegativeEmotions:"",
    AnxietyDisorders : "",
    InterpersonalDetachmentissues: "" ,
    PersonalProblems: "",
    SuicidalBehaviorDisorder: "",
    CommunicationDisorder : "",
    AutismSpectrumDisorder: "",
    AttentionDeficit: "",
    MoodDisorders:"",
    BipolarType:"",
    DepressiveDisorder:"",
    PremenstrualDysphoricDisorder: "",
    PsychoticDisorders: "",
    SubstanceinducedDepressiveDisorder : "",
    PersonalityDisorder: "",
    TraumaDisorders:"",
    StressDisorders:"",
    RelationalProblems :"",
    Bereavement: "",
    EatingDisorders: "",
    Sleep: "",
    SexualDysfunctions:"",
    ParaphilicSexualDisorders:"",
    AbuseandNeglect :"",
    GenderRelatedIssues: "",
    DisciplinaryIssues  : "",
    SubstanceRelatedandAddictiveDisorder: "",
    SubstanceRelatedDisorder : "",
    GamblingDisorders : "",
    NeurocognitiveDisorders : "",
    DissociativeDisorders : "",
    SomaticDisorders : "",
    FactitiousDisorders : ""
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
  const appearanceItems = [
    "Dressing",
    "Grooming &amp; Hygiene",
    "Looking his or her age",
  ];
  const appearanceSubItems = [
    {option1:"Normal", option2:"Inappropriate"},
    {option1:"Normal", option2:"Inappropriate"},
    {option1:"Yes", option2:"No"},

  ]
  const attitudeItems = [
    "Check client’s attitude towards the counsellor especially during the intake process",
  ];

  const BehaviorItems = [
    "Ritualized behavior, compulsions",
    "Check for unwanted behavior (tics, unusual movement,repetitive motion)",
    "Non-verbal behavior",
    "Is level of activity within expected ranges?",
  ];

  const SpeechItems = ["Style of speech", "Volume", "Speed", "Tone"];
  const MoodItems = ["Normal-euthymic","Hyperthermia-extremely happy mood","Dysthymia-depressed mood","Does client suffer from mood disorder or medical condition"]
  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      {/* <h2>Orientation and mental status examination (MSE) form</h2> */}

      <Accordion
        expanded={accordionStates.Appearance}
        onChange={handleAccordionChange("Appearance")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Appearance ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Appearance" />
        </AccordionSummary>
        <AccordionDetails>
          {appearanceItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`appearanceOpen${index}`]}
              onChange={handleAccordionChange(`appearanceOpen${index}`)}
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
                        <ListItemText primary={`Normal`} />

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
                       <ListItemText primary={`Inappropriate`} />

                     </ListItemButton>
                     
                   </ListItem>
                  {commentInputOpen[`appearance${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`appearance${index}`]}
                          onChange={handleCommentChange(`appearance${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`appearance${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`appearance${index}`]
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
        expanded={accordionStates.Attitude}
        onChange={handleAccordionChange("Attitude")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Attitude ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Attitude" />
        </AccordionSummary>
        <AccordionDetails>
          {attitudeItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Attitude${index}`]}
              onChange={handleAccordionChange(`Attitude${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`Attitude${index}`] ? (
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
                  {commentInputOpen[`Attitude${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Attitude${index}`]}
                          onChange={handleCommentChange(`Attitude${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`appearance${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`appearance${index}`]
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
        expanded={accordionStates.Behavior}
        onChange={handleAccordionChange("Behavior")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Behavior ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Behavior" />
        </AccordionSummary>
        <AccordionDetails>
          {BehaviorItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Behavior${index}`]}
              onChange={handleAccordionChange(`Behavior${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`Behavior${index}`] ? (
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
                  {commentInputOpen[`Behavior${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Behavior${index}`]}
                          onChange={handleCommentChange(`Behavior${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Behavior${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Behavior${index}`]
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
        expanded={accordionStates.Speech}
        onChange={handleAccordionChange("Speech")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Speech ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Speech" />
        </AccordionSummary>
        <AccordionDetails>
          {SpeechItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Speech${index}`]}
              onChange={handleAccordionChange(`Speech${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`Speech${index}`] ? (
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
                  {commentInputOpen[`Speech${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Speech${index}`]}
                          onChange={handleCommentChange(`Speech${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Speech${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Speech${index}`]
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
        expanded={accordionStates.Mood}
        onChange={handleAccordionChange("Mood")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Mood ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Mood" />
        </AccordionSummary>
        <AccordionDetails>
          {MoodItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Mood${index}`]}
              onChange={handleAccordionChange(`Mood${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`Mood${index}`] ? (
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
                  {commentInputOpen[`Mood${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Mood${index}`]}
                          onChange={handleCommentChange(`Mood${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Mood${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`appearance${index}`]
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

export default AssessmentOptions;
