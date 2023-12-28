import React, { useState, useContext, useEffect } from "react";
import "./index.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import GoalsBeingWorked from "./ClientProgress/GoalsBeingWorked";
import GoalsMet from "./ClientProgress/GoalsMet";
import GoalsNotMet from "./ClientProgress/GoalsNotMet";
import "react-quill/dist/quill.snow.css";
import { TerminationContext } from "./Termination";
import GoalsApi from '../../api/goals/couselinggoals'
const ClientProgress = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(TerminationContext);

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
        GoalsSet: goal_status === "set",
        GoalsMet: goal_status === "done",
        GoalsbeingWorkedOn: goal_status === "progress", 
        GoalsNotMet:  goal_status === "notmet"
      }))
    }
    } catch (error) {
      console.error("Error:", error);
    }
   }

   useEffect(() => {
    const selectedUserId = formData.StudentID; // Get the selected user ID from form data
    if (selectedUserId) {
      fetchCounselingGoals(selectedUserId);
    }
   },[formData.selectedUserId])
  return (
    <main
      className="pt5 black-80"
      // style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2 sx={{justifyContent:"center" ,display:"flex"}}>Counseling Goals</h2>
      <GoalsBeingWorked Goals={Goals} />
      <GoalsMet Goals={Goals}/>
      <GoalsNotMet Goals={Goals}/>

      {/* Buttons */}
      <Box
        sx={{
          marginTop: "40px",
          justifyContent: "space-evenly",
          display: "flex",
        }}
      >
        <Button
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          type="submit"
          variant="contained"
          onClick={() => onButtonClick("pageone")}
        >
          Cancel
        </Button>

        <Button
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          type="submit"
          variant="contained"
          onClick={() => onButtonClick("pagefour")}
        >
          Save & Continue.
        </Button>
      </Box>
    </main>
  );
};

export default ClientProgress;
