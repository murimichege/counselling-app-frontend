/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, createContext, useEffect } from "react";
import { useParams } from "react-router";

import ClientDetails from "./ClientDetails";
import ClientReason from "./ClientReason";
import Recommendation from "./Recommendation";
import CounsellorSignature from "./CounsellorSignature";
import Explore from "./Explore";
import History from "./History";
import Goals from "./Goals";
import FinalStep from "./FinalStep";
import MultiStepProgressBar from "./Multistepbar/MultiStepProgressBar";
import Assessment from "./Assessment";
import TreatmentPlan from "./TreatmentPlan";
import Referrals from "./Referrals";
import AssessmentOptions from "./AssessmentOptions";
import SessionsApi from "../../api/session/session";
// Create a new context
export const CounsellingRecordContext = createContext();
function CounselingRecord() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    ClientCode: "",
    ClientInitials: "",
    currentDate: new Date().toLocaleDateString(),
    ReasonsforCounseling: [],
    Durationofissuepresented: [],
    effectsonclient: [],
    currentfunctioning: [],
    pastfunctioning: [],
    historyofpastcounselingexperiences: [],
    familyhistory: [],
    medicalandpsychiatrichistory: [],
    SubstanceAbuseHistory: [],
    majorIssues:[],
    counselingGoals:[]
  });

  console.log("formdata", formData);
  // fetch and autopopulate this data with the selected client's details from the sessions params.

  const fetchUserDetails = async () => {
    try {
      const response = await SessionsApi.getsessiondetail(id);
      console.log("response", response);
      setFormData((prevData) => ({
        ...prevData,
        ClientCode: response.ClientCode,
        ClientInitials: response.ClientInitials,
      }));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);


  const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        setPage("pagefour");
        break;
      case "5":
        setPage("pagefive");
        break;

      case "6":
        setPage("pagesix");
        break;
      case "7":
        setPage("pageseven");
        break;
      case "8":
        alert("Ooops! Seems like you did not fill the form.");
        break;
      default:
        setPage("1");
    }
  };

  return (
    <CounsellingRecordContext.Provider value={{ formData, setFormData }}>
      <div className="App">
        {/* <Logo /> */}
        <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
        {
          {
            pageone: <ClientDetails onButtonClick={nextPage} />,
            pagetwo: <ClientReason onButtonClick={nextPage} />,
            pagethree: <Explore onButtonClick={nextPage} />,
            pagefour: <History onButtonClick={nextPage} />,
            pagefive: <AssessmentOptions onButtonClick={nextPage} />,
            pagesix: <Goals onButtonClick={nextPage} />,
            pageseven: <TreatmentPlan onButtonClick={nextPage} />,
            pageeight: <Referrals onButtonClick={nextPage} />,
          }[page]
        }
      </div>
    </CounsellingRecordContext.Provider>
  );
}

export default CounselingRecord;
