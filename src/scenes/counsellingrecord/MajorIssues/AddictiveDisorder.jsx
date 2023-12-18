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
import { CounsellingRecordContext } from "./CounselingRecord";

const AssessmentOptions = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
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
  const LowerAcademicAchievementItems = [
    "Academic Warning",
    "Academic Probation",
    "Academic Dismissal",
    "Course Registration Difficulties ",

  ];
  const LowerAcademicAchievementSubItems = [
    {option1:"Yes", option2:"No"},
    {option1:"Yes", option2:"No"},
    {option1:"Yes", option2:"No"},
    {option1:"Yes", option2:"No"},
    {option1:"Yes", option2:"No"},


  ]
  const AcademicProblems = [
    "Comment"

  ]

  const LearningproblemsItems = [
    "Low Motivation",
    "Lack of focus, difficulty with concentration, difficulty with sustaining attention and goal directed behavior ",
    "Absenteeism /failure to hand in assignments",
  ];


  const OccupationalProblemsItems = [
    
  ]
  const SpeechItems = ["Style of speech", "Volume", "Speed", "Tone"];
  const MoodItems = ["Normal-euthymic","Hyperthermia-extremely happy mood","Dysthymia-depressed mood","Does client suffer from mood disorder or medical condition"]
  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      {/* <h2>Orientation and mental status examination (MSE) form</h2> */}

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
          <ListItemText primary="LowerAcademicAchievementItems" />
        </AccordionSummary>
        <AccordionDetails>
          {LowerAcademicAchievementItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`LowerAcademicAchievementItemsOpen${index}`]}
              onChange={handleAccordionChange(`LowerAcademicAchievementItemsOpen${index}`)}
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
                  {commentInputOpen[`LowerAcademicAchievementItems${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`LowerAcademicAchievementItems${index}`]}
                          onChange={handleCommentChange(`LowerAcademicAchievementItems${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`LowerAcademicAchievementItems${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`LowerAcademicAchievementItems${index}`]
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
        expanded={accordionStates.AcademicProblems}
        onChange={handleAccordionChange("AcademicProblems")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.AcademicProblems ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Academic Problems" />
        </AccordionSummary>
        <AccordionDetails>
          {AcademicProblems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Academic Problems${index}`]}
              onChange={handleAccordionChange(`Academic Problems${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`AcademicProblems${index}`] ? (
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
         
                  {commentInputOpen[`Academic Problems${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Academic Problems${index}`]}
                          onChange={handleCommentChange(`AcademicProblems${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`AcademicProblems${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`AcademicProblems${index}`]
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
        onChange={handleAccordionChange("Learningproblems")}
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
          <ListItemText primary="Learning problems" />
        </AccordionSummary>
        <AccordionDetails>
          {LearningproblemsItems.map((item, index) => (
            <Accordion
              expanded={accordionStates[`Learningproblems${index}`]}
              onChange={handleAccordionChange(`Learningproblems${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  accordionStates[`Learningproblems${index}`] ? (
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
                  {commentInputOpen[`Learningproblems${index}`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Learningproblems${index}`]}
                          onChange={handleCommentChange(`Learningproblems${index}`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Learningproblems${index}`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Learningproblems${index}`]
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
                          commentInputOpen[`LowerAcademicAchievementItems${index}`]
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
