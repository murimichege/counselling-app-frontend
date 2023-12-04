import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItem,
  Checkbox,
  List,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CommentIcon from "@mui/icons-material/Comment";

const AbuseAccordion = ({ title, options, accordionState, handleAccordionChange, checked, handleToggle, commentInputOpen, toggleCommentInput, comments, handleCommentChange }) => {
    return (
      <Accordion expanded={accordionState} onChange={handleAccordionChange}>
        <AccordionSummary
          expandIcon={accordionState ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
          <ListItemText primary={title} />
        </AccordionSummary>
        <AccordionDetails>
          <List dense sx={{ width: "100%", minWidth: 400, bgcolor: "background.paper" }}>
            {options.map((group, groupIndex) => (
              <React.Fragment key={groupIndex}>
                <ListItem>
                  <ListItemText primary={`Group ${groupIndex + 1}`} />
                </ListItem>
                {group.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemButton>
                      <ListItemText primary={item} />
                      <Checkbox
                        edge="end"
                        onChange={handleToggle(item)}
                        checked={checked.indexOf(item) !== -1}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </React.Fragment>
            ))}
            {commentInputOpen && (
              <ListItem>
                <ListItemButton>
                  <TextField
                    fullWidth
                    label="Add a comment"
                    variant="outlined"
                    value={comments}
                    onChange={handleCommentChange}
                  />
                </ListItemButton>
              </ListItem>
            )}
            <ListItem>
              <ListItemButton onClick={toggleCommentInput}>
                <CommentIcon color={commentInputOpen ? "primary" : "inherit"} />
              </ListItemButton>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    );
  };
const AbuseandNeglect = () => {
  const [accordionStates, setAccordionStates] = useState({
    MaltreatmentandNeglectproblem: true,
    PhysicalAbuse: true,
    SexualAbuse: true,
    PsychologicalAbuse: true,
    SexualPartnerViolence: true,
    PartnerNeglect: true,
    PartnerViolenceRape: true,
  });

  const [checked, setChecked] = useState([]);
  const [commentInputOpen, setCommentInputOpen] = useState(false);
  const [comments, setComments] = useState("");

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

  const toggleCommentInput = () => {
    setCommentInputOpen((prevState) => !prevState);
  };

  const handleCommentChange = (event) => {
    const { value } = event.target;
    setComments(value);
  };

  const IndicationOptions = ["child", "adolescent", "adult", "elderly abuse"];
  const SpecifyOptions = [
    "Suspected",
    "Confirmed",
    "Initial encounter",
    "Subsequent encounter",
  ];
  const SpecifyOptions2 = ["Presently happening", "Happened in the Past"];
  const options = [IndicationOptions, SpecifyOptions, SpecifyOptions2];

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Abuse and Neglect Issues</h2>

      <AbuseAccordion
        title="Maltreatment and Neglect Problem"
        options={options}
        accordionState={accordionStates.MaltreatmentandNeglectproblem}
        handleAccordionChange={handleAccordionChange(
          "MaltreatmentandNeglectproblem"
        )}
        checked={checked}
        handleToggle={handleToggle}
        commentInputOpen={commentInputOpen}
        toggleCommentInput={toggleCommentInput}
        comments={comments}
        handleCommentChange={handleCommentChange}
      />

      <AbuseAccordion
        title="Physical Abuse"
        options={options}
        accordionState={accordionStates.PhysicalAbuse}
        handleAccordionChange={handleAccordionChange("PhysicalAbuse")}
        checked={checked}
        handleToggle={handleToggle}
        commentInputOpen={commentInputOpen}
        toggleCommentInput={toggleCommentInput}
        comments={comments}
        handleCommentChange={handleCommentChange}
      />

      <AbuseAccordion
        title="Sexual Abuse "
        options={options}
        accordionState={accordionStates.PhysicalAbuse}
        handleAccordionChange={handleAccordionChange("SexualAbuse")}
        checked={checked}
        handleToggle={handleToggle}
        commentInputOpen={commentInputOpen}
        toggleCommentInput={toggleCommentInput}
        comments={comments}
        handleCommentChange={handleCommentChange}
      />

      <AbuseAccordion
        title="Psychological Abuse"
        options={options}
        accordionState={accordionStates.PhysicalAbuse}
        handleAccordionChange={handleAccordionChange("PsychologicalAbuse")}
        checked={checked}
        handleToggle={handleToggle}
        commentInputOpen={commentInputOpen}
        toggleCommentInput={toggleCommentInput}
        comments={comments}
        handleCommentChange={handleCommentChange}
      />
      <AbuseAccordion
        title="Sexual Partner Violence"
        options={options}
        accordionState={accordionStates.PhysicalAbuse}
        handleAccordionChange={handleAccordionChange("SexualPartnerViolence")}
        checked={checked}
        handleToggle={handleToggle}
        commentInputOpen={commentInputOpen}
        toggleCommentInput={toggleCommentInput}
        comments={comments}
        handleCommentChange={handleCommentChange}
      />
      <AbuseAccordion
        title="Partner Neglect"
        options={options}
        accordionState={accordionStates.PhysicalAbuse}
        handleAccordionChange={handleAccordionChange("PartnerNeglect")}
        checked={checked}
        handleToggle={handleToggle}
        commentInputOpen={commentInputOpen}
        toggleCommentInput={toggleCommentInput}
        comments={comments}
        handleCommentChange={handleCommentChange}
      />
      <AbuseAccordion
        title="Partner Violence Rape"
        options={options}
        accordionState={accordionStates.PhysicalAbuse}
        handleAccordionChange={handleAccordionChange("PartnerViolenceRape")}
        checked={checked}
        handleToggle={handleToggle}
        commentInputOpen={commentInputOpen}
        toggleCommentInput={toggleCommentInput}
        comments={comments}
        handleCommentChange={handleCommentChange}
      />
    </main>
  );
};

export default AbuseandNeglect;
