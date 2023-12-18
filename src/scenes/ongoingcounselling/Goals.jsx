import React, { useState, useContext } from "react";
import "./index.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import ThoughtsManagement from './counselinggoals/Lot1'
import BehaviorChange from './counselinggoals/Lot2'
import GrievingLosses from './counselinggoals/Lot3'
import PersonalDevelopmentAndGrief from './counselinggoals/Lot4'
import TraumaMemoryManagement from './counselinggoals/Lot5'
import BeliefSystemExploration from './counselinggoals/Lot6'
import GriefManagement from './counselinggoals/Lot7'
import SelfImprovement from './counselinggoals/Lot8'
import TraumaHealing from './counselinggoals/Lot9'
import EmotionRegulation from './counselinggoals/Lot10'
import RelationshipImprovement from './counselinggoals/Lot11'
import FamilyAndRelationshipEnhancement from './counselinggoals/Lot12'
import PersonalEmpowerment from './counselinggoals/Lot13'
import TraumaManagement from './counselinggoals/Lot14'
import TraumaRecovery from './counselinggoals/Lot15'
import Personality from './counselinggoals/Lot16'
import "react-quill/dist/quill.snow.css";
import { CounsellingRecordContext } from "./OngoingCounselingRecord";

const Goals = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);

  return (
    <main
      className="pt5 black-80"
      // style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Counseling Goals</h2>
      <ThoughtsManagement />
      <BehaviorChange/>
      <GrievingLosses/>
      <PersonalDevelopmentAndGrief/>
      <TraumaMemoryManagement/>
      <BeliefSystemExploration/>
      <GriefManagement/>
      <SelfImprovement/>
      <TraumaHealing/>
      <EmotionRegulation/>
      <RelationshipImprovement/>
      <FamilyAndRelationshipEnhancement/>
      <PersonalEmpowerment/>
      <TraumaManagement/>
      <TraumaRecovery/>
      <Personality/>
     

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
          Save Assignment.
        </Button>
      </Box>
    </main>
  );
};

export default Goals;
