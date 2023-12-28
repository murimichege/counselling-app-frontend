import React, { useState, useContext } from "react";
import "./index.css";
import { Box, Button } from "@mui/material";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import CommentIcon from "@mui/icons-material/Comment";
import { CounsellingRecordContext } from "./CounselingRecord";
import AcademicIssues from "./MajorIssues/AcademicIssues";
import LearningProblems from "./MajorIssues/LearningProblems";
import SocialEnvironment from "./MajorIssues/SocialEnvironment";
import LifeSkills from "./MajorIssues/LifeSkills";
import NegativeEmotions from "./MajorIssues/NegativeEmotions";
import AnxietyDisorders from "./MajorIssues/AnxietyDisorders";
import InterpersonalDetachmentissues from "./MajorIssues/InterpersonalDetachmentissues";
import PersonalProblems from "./MajorIssues/Personal Problems";
import SuicidalBehaviorDisorder from "./MajorIssues/SuicidalBehaviorDisorder";
import CommunicationDisorders from "./MajorIssues/CommunicationDisorders";
import AttentionDeficit from "./MajorIssues/AttentionDeficit";
import MoodDisorders from "./MajorIssues/MoodDisorders";
import BiPolar11 from "./MajorIssues/Bipolar";
import DepressiveDisorder from "./MajorIssues/DepressiveDisorder";
import PsychoticDisorders from "./MajorIssues/PsychoticDisorders";
import PersonalityDisorder from "./MajorIssues/PersonalityDisorder";
import ObsessiveDisorders from "./MajorIssues/ObsessiveDisorders";
import TraumaDisorders from "./MajorIssues/TraumaDisorders";
import StressDisorders from "./MajorIssues/StressDisorders";
import RelationalProblems from "./MajorIssues/RelationalProblems";
import Bereavement from "./MajorIssues/Bereavement";
import EatingDisorders from "./MajorIssues/EatingDisorders";
import EliminationDisorders from "./MajorIssues/EliminationDisorders";
import SleepWakedisorders from "./MajorIssues/SleepWakedisorders";
import PornAddiction from "./MajorIssues/PornAddiction";
import ParaphilicSexualDisorders from "./MajorIssues/ParaphilicSexualDisorders";
import GenderRelatedIssues from "./MajorIssues/GenderRelatedIssues";
import AbuseandNeglect from "./MajorIssues/AbuseandNeglect";
import DissociativeDisorders from "./MajorIssues/DissociativeDisorders";
import SomaticDisorders from "./MajorIssues/SomaticDisorders";
import FactitiousDisorders from "./MajorIssues/FactitiousDisorders";

const AssessmentOptions = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);

  return (
    <>
      <AcademicIssues formData={formData} setFormData={setFormData} />
      <LearningProblems formData={formData} setFormData={setFormData} />
      <SocialEnvironment formData={formData} setFormData={setFormData} />
      <LifeSkills formData={formData} setFormData={setFormData} />
      <NegativeEmotions formData={formData} setFormData={setFormData} />
      <AnxietyDisorders formData={formData} setFormData={setFormData} />
      <InterpersonalDetachmentissues
        formData={formData}
        setFormData={setFormData}
      />
      <PersonalProblems formData={formData} setFormData={setFormData} />
      <SuicidalBehaviorDisorder formData={formData} setFormData={setFormData} />
      <CommunicationDisorders formData={formData} setFormData={setFormData} />
      <AttentionDeficit formData={formData} setFormData={setFormData} />
      <MoodDisorders formData={formData} setFormData={setFormData} />
      <BiPolar11 formData={formData} setFormData={setFormData} />
      <DepressiveDisorder formData={formData} setFormData={setFormData} />
      <PsychoticDisorders formData={formData} setFormData={setFormData} />
      <PersonalityDisorder formData={formData} setFormData={setFormData} />
      <ObsessiveDisorders formData={formData} setFormData={setFormData} />
      <TraumaDisorders formData={formData} setFormData={setFormData} />
      <StressDisorders formData={formData} setFormData={setFormData} />
      <RelationalProblems formData={formData} setFormData={setFormData} />
      <Bereavement formData={formData} setFormData={setFormData} />
      <EatingDisorders formData={formData} setFormData={setFormData} />
      <EliminationDisorders formData={formData} setFormData={setFormData} />
      <SleepWakedisorders formData={formData} setFormData={setFormData} />
      <PornAddiction formData={formData} setFormData={setFormData} />
      <ParaphilicSexualDisorders
        formData={formData}
        setFormData={setFormData}
      />
      <GenderRelatedIssues formData={formData} setFormData={setFormData} />
      <AbuseandNeglect formData={formData} setFormData={setFormData} />
      <DissociativeDisorders formData={formData} setFormData={setFormData} />
      <SomaticDisorders formData={formData} setFormData={setFormData} />
      <FactitiousDisorders formData={formData} setFormData={setFormData} />
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
          onClick={() => onButtonClick("pagesix")}
        >
          Save Client Details
        </Button>
      </Box>
    </>
  );
};

export default AssessmentOptions;
