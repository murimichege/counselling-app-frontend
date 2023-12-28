import React, { useState, useContext, useEffect } from "react";
import "./index.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box, Typography, Button } from "@mui/material";
import { TerminationContext } from "./Termination";
import GoalsApi from "../../api/goals/couselinggoals"
const CounselingGoals = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(TerminationContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

// fetch goals 

const {Goals, setGoals} = useState([])

const fetchCounselingGoals = async (selectedUserId) => {
  try {
    
  const response =  await GoalsApi.get(selectedUserId); 
  setGoals(response)

  if(response.length > 0 ){
    const {goal_status} = response[0]
    console.log("response", response);
    setFormData((prevItems) => ({
      ...prevItems, 
      Goals: goal_status === "set",
    }))
  }
  } catch (error) {
    console.error("Error:", error);
  }
 }

 useEffect(() => {
  const selectedUserId = formData.selectedUserId; // Get the selected user ID from form data
  if (selectedUserId) {
    fetchCounselingGoals(selectedUserId);
  }
 },[formData.selectedUserId])


  console.log("formdata", formData);



  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Counseling Goals</h2>
      <div
        className="center ph4 selectionDiv"
        style={{ height: "46%", display: "inline-block" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // justifyContent: space-evenly
          }}
        >
          <Typography variant="body4">Item,</Typography>
          <Typography variant="body4">Item,</Typography>
          <Typography variant="body4">Item,</Typography>
          <Typography variant="body4">Item,</Typography>
          <Typography variant="body4">Item,</Typography>
          <Typography variant="body4">Item,</Typography>
          <Typography variant="body4">Item,</Typography>
          <Typography variant="body4">Item,</Typography>
        </Box>
      </div>
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
          onClick={() => onButtonClick("pageone")}
        >
          Back
        </Button>

        <Button
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          type="submit"
          variant="contained"
          onClick={() => onButtonClick("pagethree")}
        >
        Next
        </Button>
      </Box>
    </main>
  );
};

export default CounselingGoals;
