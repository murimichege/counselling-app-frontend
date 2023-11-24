import React, { useState, useContext } from "react";
import "./index.css";
import {
  Box,
  Button,
} from "@mui/material";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import CommentIcon from "@mui/icons-material/Comment";
import { CounsellingRecordContext } from "./CounselingRecord";
import AcademicIssues from './MajorIssues/AcademicIssues'
import LearningProblems from './MajorIssues/LearningProblems'
import SocialEnvironment from "./MajorIssues/SocialEnvironment";
import LifeSkills from "./MajorIssues/LifeSkills";
import NegativeEmotions from './MajorIssues/NegativeEmotions'
import AnxietyDisorders from './MajorIssues/AnxietyDisorders'
import InterpersonalDetachmentissues from './MajorIssues/InterpersonalDetachmentissues'
import PersonalProblems from './MajorIssues/Personal Problems'
const AssessmentOptions = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  return (
 <>
 <AcademicIssues/>
 <LearningProblems/>
 <SocialEnvironment/>
 <LifeSkills/>
 <NegativeEmotions/>
 <AnxietyDisorders/>
 <InterpersonalDetachmentissues/>
 <PersonalProblems/>
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
          onClick={() => onButtonClick("pagetwo")}
        >
          Save Client Details
        </Button>
      </Box>
 </>
      
     
   
  );
};

export default AssessmentOptions;
