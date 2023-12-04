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

const EliminationDisorders = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [accordionStates, setAccordionStates] = useState({
    Enuresis: true,
    Encopresis: true,
  });

  const [checked, setChecked] = useState([1]);
  const [commentInputOpen, setCommentInputOpen] = useState({
    Enuresis: true,
    Encopresis: true,
  });
  const [comments, setComments] = useState({
    Enuresis: "",
    Encopresis: "",
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
      <h3>Elimination Disorders </h3>

      <Accordion
        expanded={accordionStates.Enuresis}
        onChange={handleAccordionChange("Enuresis")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Enuresis ? <ExpandLessIcon /> : <ExpandMoreIcon />
          }
        >
          <ListItemText primary="Enuresis – Nocturnal (bed wetting)" />
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
            {commentInputOpen[`Enuresis`] && (
              <ListItem disablePadding>
                <ListItemButton>
                  <TextField
                    fullWidth
                    label="Add a comment"
                    variant="outlined"
                    value={comments[`Enuresis`]}
                    onChange={handleCommentChange(`Enuresis`)}
                  />
                </ListItemButton>
              </ListItem>
            )}
            <ListItem disablePadding>
              <ListItemButton onClick={toggleCommentInput(`Enuresis`)}>
                <CommentIcon
                  color={commentInputOpen[`Enuresis`] ? "primary" : "inherit"}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={accordionStates.Encopresis}
        onChange={handleAccordionChange("Encopresis")}
      >
        <AccordionSummary
          expandIcon={
            accordionStates.Encopresis ? <ExpandLessIcon /> : <ExpandMoreIcon />
          }
        >
          <ListItemText primary="Encopresis- With Constipation and overflow incontinence " />
        </AccordionSummary>
        <AccordionDetails>
          <Accordion
            expanded={accordionStates[`Encopresis`]}
            onChange={handleAccordionChange(`Encopresis`)}
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
                {commentInputOpen[`Encopresis`] && (
                  <ListItem disablePadding>
                    <ListItemButton>
                      <TextField
                        fullWidth
                        label="Add a comment"
                        variant="outlined"
                        value={comments[`Encopresis`]}
                        onChange={handleCommentChange(`Encopresis`)}
                      />
                    </ListItemButton>
                  </ListItem>
                )}
                <ListItem disablePadding>
                  <ListItemButton onClick={toggleCommentInput(`Encopresis`)}>
                    <CommentIcon
                      color={
                        commentInputOpen[`Encopresis`] ? "primary" : "inherit"
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

export default EliminationDisorders;
