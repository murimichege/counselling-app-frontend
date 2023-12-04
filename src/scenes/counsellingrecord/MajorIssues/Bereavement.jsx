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

const Bereavement = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
    Death: true,
    Lossofemployment : true,
    Displacement: true,
    ComplexGrief: true,
    
 
    

  });

  const [checked, setChecked] = useState([1]);
  const [commentInputOpen, setCommentInputOpen] = useState({
    Death: true,
    Lossofemployment : true,
    Displacement: true,
    ComplexGrief: true,
    


  });
  const [comments, setComments] = useState({
    Death: "",
    Lossofemployment : "",
    Displacement: "",
    ComplexGrief: "",
    

  
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
      <h3>Bereavement – Loss and Grief </h3>

      <Accordion
        expanded={accordionStates.Death}
        onChange={handleAccordionChange("Death")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Death ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Death of a loved one" />
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
            
                  {commentInputOpen[`Death`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Death`]}
                          onChange={handleCommentChange(`Death`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Death`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Death$`]
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
        expanded={accordionStates.Lossofemployment}
        onChange={handleAccordionChange("Lossofemployment")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Lossofemployment ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Loss of employment" />
        </AccordionSummary>
        <AccordionDetails>
   

            <Accordion
              expanded={accordionStates[`Lossofemployment`]}
              onChange={handleAccordionChange(`Lossofemployment`)}
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
            
                  {commentInputOpen[`Lossofemployment`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Lossofemployment`]}
                          onChange={handleCommentChange(`Lossofemployment`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Lossofemployment`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Lossofemployment`]
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
        expanded={accordionStates.Displacement}
        onChange={handleAccordionChange("Displacement")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Displacement ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Displacement or loss of a home" />
        </AccordionSummary>
        <AccordionDetails>
            <Accordion
              expanded={accordionStates[`Displacement`]}
              onChange={handleAccordionChange(`Displacement`)}
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
            
                  {commentInputOpen[`Displacement`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`Displacement`]}
                          onChange={handleCommentChange(`Displacement`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`Displacement`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`Displacement`]
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
        expanded={accordionStates.ComplexGrief}
        onChange={handleAccordionChange("ComplexGrief")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.ComplexGrief ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          }
        >
          <ListItemText primary="Complex Grieve or Bereavement" />
        </AccordionSummary>
        <AccordionDetails>
   

            <Accordion
              expanded={accordionStates[`ComplexGrief`]}
              onChange={handleAccordionChange(`ComplexGrief`)}
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
            
                  {commentInputOpen[`ComplexGrief`] && (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TextField
                          fullWidth
                          label="Add a comment"
                          variant="outlined"
                          value={comments[`ComplexGrief`]}
                          onChange={handleCommentChange(`ComplexGrief`)}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleCommentInput(`ComplexGrief`)}
                    >
                      <CommentIcon
                        color={
                          commentInputOpen[`ComplexGrief`]
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

export default Bereavement;
