import React, { useState, useContext } from "react";
import "./index.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  List,
  Demo,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TerminationContext } from "./Termination";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function FinalStep({ onButtonClick }) {
  const { formData, setFormData } = useContext(TerminationContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  console.log("formdata", formData);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const navigate = useNavigate();

  const CloseSession = () => {
    navigate("/");
  };

  return (
    <div>
      <main
        className="pt5 black-80 flex justify-center items-center"
        style={{ maxWidth: "100%", maxHeight: "25%", margin: "auto" }}
      >
        
         
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
              onClick={() => {
                onButtonClick("pagefive");
              }}
            >
              Close Session.
            </Button>
          </Box>
        {/* <DeploymentSuccess /> */}
      </main>
    </div>
  );
}

export default FinalStep;
