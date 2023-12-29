import React, { useState } from "react";
import {
  ListItem,
  Checkbox,
  List,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PsychoticDisorders = ({formData, setFormData}) => {
  const [accordionStates, setAccordionStates] = useState({
    Schizophrenia: true,
    SchizotypalPersonalityDisorder: true,
    DelusionalDisorder: true,
    BriefPsychoticDisorder: true,
    SchizophreniformDisorder: true,
    SchizoaffectiveDisorder: true,
    SubstanceInducedPsychosis: true,
  });

  const [checked, setChecked] = useState([1]);

  const psychoticDisordersData = [
    {
      title: "Schizophrenia",
      items: ["Symptom"],
      state: "Schizophrenia",
    },
    {
      title: "Schizotypal Personality Disorder",
      items: ["Symptom"],
      state: "SchizotypalPersonalityDisorder",
    },
    {
      title: "Delusional Disorder",
      items: ["Symptom"],
      state: "DelusionalDisorder",
    },
    {
      title: "Brief Psychotic Disorder",
      items: ["Symptom"],
      state: "BriefPsychoticDisorder",
    },
    {
      title: "Schizophreniform Disorder",
      items: ["Symptom"],
      state: "SchizophreniformDisorder",
    },
    {
      title: "Schizoaffective Disorder",
      items: ["Symptom"],
      state: "SchizoaffectiveDisorder",
    },
    {
      title: "Substance Induced Psychosis",
      items: ["Symptom"],
      state: "SubstanceInducedPsychosis",
    },
  ];

  const handleToggle = (value, section, severity) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
  
    if (currentIndex === -1) {
      newChecked.push(value);
      // Assuming majorIssues is an array in your context
      setFormData((prevData) => ({
        ...prevData,
        majorIssues: [
          ...prevData.majorIssues,
          {
            section: section,
            severity: severity,
          },
        ],
      }));
    } else {
      newChecked.splice(currentIndex, 1);
      // Remove the deselected item from majorIssues
      setFormData((prevData) => ({
        ...prevData,
        majorIssues: prevData.majorIssues.filter(
          (issue) => issue.section !== section || issue.severity !== severity
        ),
      }));
    }
  
    setChecked(newChecked);
  };
  
  const handleAccordionChange = (section) => () => {
    setAccordionStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h3>Psychotic Disorders</h3>

      {psychoticDisordersData.map(({ title, items, state }, index) => (
        <Accordion
          expanded={accordionStates[state]}
          onChange={handleAccordionChange(state)}
          key={index}
        >
          <AccordionSummary
            expandIcon={
              accordionStates[state] ? <ExpandLessIcon /> : <ExpandMoreIcon />
            }
          >
            <ListItemText primary={title} />
          </AccordionSummary>
          <AccordionDetails>
            {items.map((item, itemIndex) => (
              <Accordion
                expanded={accordionStates[`${state}${itemIndex}`]}
                onChange={handleAccordionChange(`${state}${itemIndex}`)}
                key={itemIndex}
              >
                <AccordionSummary>
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
                          onChange={handleToggle(`${state}${itemIndex}`)}
                          checked={checked}
                        />
                      }
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemText primary={`Mild`} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem
                      secondaryAction={
                        <Checkbox
                          edge="end"
                          onChange={handleToggle(`${state}${itemIndex}`)}
                          checked={checked}
                        />
                      }
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemText primary={`Moderate`} />
                      </ListItemButton>
                    </ListItem>
                    
                    <ListItem
                      secondaryAction={
                        <Checkbox
                          edge="end"
                          onChange={handleToggle(`${state}${itemIndex}`)}
                          checked={checked}
                        />
                      }
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemText primary={`Severe`} />
                      </ListItemButton>
                    </ListItem>
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

export default PsychoticDisorders;
