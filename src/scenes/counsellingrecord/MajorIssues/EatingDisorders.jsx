import React, { useState, useContext } from "react";
import {
  ListItem,
  Checkbox,
  List,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  TextField,
  AccordionDetails,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CounsellingRecordContext } from "../CounselingRecord";
import CommentIcon from "@mui/icons-material/Comment";

const EatingDisorders = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
    RestrictiveFoodIntakeDisorder:true, 
AnorexiaNervosa :true,
BingeEating: true,
BulimiaNervosa:true ,
 



  });

  const [checked, setChecked] = useState([1]);
  const [commentInputOpen, setCommentInputOpen] = useState({
    RestrictiveFoodIntakeDisorder:true, 
    AnorexiaNervosa :true,
    BingeEating: true,
    BulimiaNervosa:true ,
    


  });
  const [comments, setComments] = useState({
    RestrictiveFoodIntakeDisorder:"", 
    AnorexiaNervosa :"",
    BingeEating: "",
    BulimiaNervosa:"" ,
    

  
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
  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h3>Eating Disorders  </h3>

      <Accordion
        expanded={accordionStates.RestrictiveFoodIntakeDisorder}
        onChange={handleAccordionChange("RestrictiveFoodIntakeDisorder")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.RestrictiveFoodIntakeDisorder ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Avoidant/Restrictive Food Intake Disorder" />
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
            
                  {commentInputOpen[`RestrictiveFoodIntakeDisorder`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`RestrictiveFoodIntakeDisorder`]}
                          onChange={handleCommentChange(`RestrictiveFoodIntakeDisorder`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`RestrictiveFoodIntakeDisorder`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`RestrictiveFoodIntakeDisorder`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={accordionStates.AnorexiaNervosa}
        onChange={handleAccordionChange("AnorexiaNervosa")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.AnorexiaNervosa ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Anorexia Nervosa" />
        </AccordionSummary>
        <AccordionDetails>
   

            <Accordion
              expanded={accordionStates[`AnorexiaNervosa`]}
              onChange={handleAccordionChange(`AnorexiaNervosa`)}
            >
            
              <AccordionDetails>
              <List
                  dense
                  sx={{
                    width: "100%",
                    minWidth: 400,
                    bgcolor: "background.paper",
                  }}
                >
            
                  {commentInputOpen[`AnorexiaNervosa`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`AnorexiaNervosa`]}
                          onChange={handleCommentChange(`AnorexiaNervosa`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`AnorexiaNervosa`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`AnorexiaNervosa`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
    
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={accordionStates.BulimiaNervosa}
        onChange={handleAccordionChange("BulimiaNervosa")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.BulimiaNervosa ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Bulimia Nervosa" />
        </AccordionSummary>
        <AccordionDetails>
            <Accordion
              expanded={accordionStates[`BulimiaNervosa`]}
              onChange={handleAccordionChange(`BulimiaNervosa`)}
            >
             
              <AccordionDetails>
              <List
                  dense
                  sx={{
                    width: "100%",
                    minWidth: 400,
                    bgcolor: "background.paper",
                  }}
                >
            
                  {commentInputOpen[`BulimiaNervosa`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`BulimiaNervosa`]}
                          onChange={handleCommentChange(`BulimiaNervosa`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`BulimiaNervosa`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`BulimiaNervosa`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
    
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={accordionStates.BingeEating}
        onChange={handleAccordionChange("BingeEating")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.BingeEating ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Binge Eating/purging " />
        </AccordionSummary>
        <AccordionDetails>
   

            <Accordion
              expanded={accordionStates[`BingeEating`]}
              onChange={handleAccordionChange(`BingeEating`)}
            >
             
              <AccordionDetails>
              <List
                  dense
                  sx={{
                    width: "100%",
                    minWidth: 400,
                    bgcolor: "background.paper",
                  }}
                >
            
                  {commentInputOpen[`BingeEating`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`BingeEating`]}
                          onChange={handleCommentChange(`BingeEating`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`BingeEating`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`BingeEating`]
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
    
        </AccordionDetails>
      </Accordion>



    


    </main>
  );
};

export default EatingDisorders;
