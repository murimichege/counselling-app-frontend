import React, { useState, useContext } from "react";
import "./index.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  ListItem,
  Checkbox,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { TerminationContext } from './Termination';

const Recommendation = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(TerminationContext);
  const [goalsMetOpen, setGoalsMetOpen] = useState(true);
  const [goalsBeingWorkedOnOpen, setGoalsBeingWorkedOnOpen] = useState(true);
  const [goalsNotMetOpen, setGoalsNotMetOpen] = useState(true);
  const [checked, setChecked] = useState([1]);

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Recommendation</h2>
      <p style={{ color: "#C0C0C0" }}>Goals met</p>
      <div
        className="center ph4 selectionDiv"
        style={{ height: "46%", display: "inline-block" }}
      >
     <Box>
      </Box>

        {/* Recommendation component */}
        {/* ... (your Recommendation component) */}
      </div>

      {/* Buttons */}
      <Box 
sx={{marginTop:"40px", justifyContent:"space-between", display:"flex"}}
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
        onClick={() => onButtonClick("pagefour")}
      >
        Save Recommendation.
      </Button>

</Box>
     
    </main>
  );
};

export default Recommendation;
