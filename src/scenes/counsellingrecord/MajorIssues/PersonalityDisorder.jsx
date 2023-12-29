import React, { useState, useContext } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Checkbox,
  TextField,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CommentIcon from "@mui/icons-material/Comment";
import { CounsellingRecordContext } from "../CounselingRecord";

const PersonalityDisorder = () => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const [checked, setChecked] = useState([0]);

  const [accordionStates, setAccordionStates] = useState({
    ClusterA: true,
    ClusterB: true,
    ClusterC: true,
  });

  const [commentInputOpen, setCommentInputOpen] = useState({
    ClusterA: true,
    ClusterB: true,
    ClusterC: true,
  });

  const [comments, setComments] = useState({
    ClusterA: "",
    ClusterB: "",
    ClusterC: "",
  });

  const addToMajorIssues = (selectedItem) => {
    setFormData((prevData) => ({
      ...prevData,
      majorIssues: [...prevData.majorIssues, selectedItem],
    }));
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);  };


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

  // Your clusters data
  const clustersData = [
    {
      title: "Cluster A Personality Disorders",
      items: ["Paranoid Personality Disorder", "Schizoid Personality Disorder", "Schizotypal Personality Disorder"],
      cluster: "ClusterA",
    },
    {
      title: "Cluster B Personality Disorders",
      items: ["Antisocial Personality Disorder", "Borderline Personality Disorder", "Histrionic Personality Disorder", "Narcissistic Personality Disorders"],
      cluster: "ClusterB",
    },
    {
      title: "Cluster C Personality Disorders",
      items: ["Avoidant Personality Disorder", "Dependent Personality Disorder", "Obsessive – Compulsive Personality Disorder"],
      cluster: "ClusterC",
    },
  ];

  return (
    <main className="pt5 black-80" style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h2>Personality Disorder</h2>

      {clustersData.map(({ title, items, cluster }, clusterIndex) => (
        <Accordion
          expanded={accordionStates[cluster]}
          onChange={handleAccordionChange(cluster)}
          key={clusterIndex}
        >
          <AccordionSummary expandIcon={accordionStates[cluster] ? <ExpandLessIcon /> : <ExpandMoreIcon />}>
            <ListItemText primary={title} />
          </AccordionSummary>
          <AccordionDetails>
            {items.map((item, index) => (
              <Accordion
                expanded={accordionStates[`${cluster}${index}`]}
                onChange={handleAccordionChange(`${cluster}${index}`)}
                key={index}
              >
                <AccordionSummary>
                  <ListItemText primary={item} />
                </AccordionSummary>
                <AccordionDetails>
                  {/* Your list items */}
                  <List dense sx={{ width: "100%", minWidth: 400, bgcolor: "background.paper" }}>
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => addToMajorIssues(item)}>
                        <Checkbox
                          edge="end"
                          onChange={handleToggle()}
                          checked={checked}                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton onClick={toggleCommentInput(`${cluster}${index}`)}>
                        <CommentIcon color={commentInputOpen[`${cluster}${index}`] ? "primary" : "inherit"} />
                      </ListItemButton>
                    </ListItem>
                    {commentInputOpen[`${cluster}${index}`] && (
                      <ListItem disablePadding>
                        <ListItemButton>
                          <TextField
                            fullWidth
                            label="Add a comment"
                            variant="outlined"
                            value={comments[`${cluster}${index}`]}
                            onChange={handleCommentChange(`${cluster}${index}`)}
                          />
                        </ListItemButton>
                      </ListItem>
                    )}
                  </List>
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </main>
  );
};

export default PersonalityDisorder;
