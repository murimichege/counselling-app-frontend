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
import { CounsellingRecordContext } from "./CounselingRecord";

const ClientProgress = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
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
      <h2>Client Progress</h2>
      <p style={{ color: "#C0C0C0" }}>Goals met</p>
      <div
        className="center ph4 selectionDiv"
        style={{ height: "46%", display: "inline-block" }}
      >
        {/* Goals Met section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ListItemButton onClick={() => setGoalsMetOpen(!goalsMetOpen)}>
            <ListItemText primary="Goals met" />
            {goalsMetOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={goalsMetOpen} timeout="auto" unmountOnExit>
            <List
              dense
              sx={{ width: "100%", minWidth: 400, bgcolor: "background.paper" }}
            >
              {[0, 1, 2, 3].map((value) => (
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
            </List>
          </Collapse>
        </Box>

        {/* Goals Being Worked On section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ListItemButton
            onClick={() => setGoalsBeingWorkedOnOpen(!goalsBeingWorkedOnOpen)}
          >
            <ListItemText primary="Goals Being Worked" />
            {goalsBeingWorkedOnOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={goalsBeingWorkedOnOpen} timeout="auto" unmountOnExit>
            <List
              dense
              sx={{ width: "100%", minWidth: 400, bgcolor: "background.paper" }}
            >
              {[0, 1, 2, 3].map((value) => (
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
                    <ListItemText primary={`Goal ${value + 1}`} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Box>

        {/* Goals Not Met section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ListItemButton onClick={() => setGoalsNotMetOpen(!goalsNotMetOpen)}>
            <ListItemText primary="Goals Not Met " />
            {goalsNotMetOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={goalsNotMetOpen} timeout="auto" unmountOnExit>
            <List
              dense
              sx={{ width: "100%", minWidth: 400, bgcolor: "background.paper" }}
            >
              {[0, 1, 2, 3].map((value) => (
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
            </List>
          </Collapse>
        </Box>

        {/* Recommendation component */}
        {/* ... (your Recommendation component) */}
      </div>

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
          onClick={() => onButtonClick("pagethree")}
        >
          Save Client Details.
        </Button>
      </Box>
    </main>
  );
};

export default ClientProgress;
