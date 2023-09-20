import React, { useState, createContext } from "react";
import ClientDetails from "./ClientDetails";
import ClientReason from "./ClientReason";
import Recommendation from "./Recommendation";
import CounsellorSignature from "./CounsellorSignature";
import Explore from './Explore'
import History from "./Progress";
import Goals from './Assignment'
import FinalStep from "./FinalStep";
import MultiStepProgressBar from "./Multistepbar/MultiStepProgressBar";
import Assessment from "./Assessment";
import TreatmentPlan from "./Outcome";
import Referrals from "./NextAppointment";
import InitialDiagnosis from './InitialDiagnosis'
import Progress from './Progress'
import Assignment from './Assignment'
import Outcome from './Outcome'
import Prognosis from "./Prognosis";
import NextAppointment from './NextAppointment'
// Create a new context
export const CounsellingRecordContext = createContext();
function OnGoingCounseling() {
  const [formData, setFormData] = useState({
    ClientCode: "",
    ClientInitials: "",
    Date: "",
    CounsellingReasons: [],
  });

  console.log("formdata", formData);

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
      case "6":
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
            pagetwo: <InitialDiagnosis onButtonClick={nextPage} />,
            pagethree:  <Goals onButtonClick={nextPage} />,
            pagefour: <Progress onButtonClick={nextPage} />,
            pagefive: <Assignment onButtonClick={nextPage} />,
            pagesix: <Outcome onButtonClick={nextPage} />,
            pageseven: <Prognosis onButtonClick={nextPage} />,
            pageeight: <NextAppointment onButtonClick={nextPage} />,
          }[page]
        }
      </div>
    </CounsellingRecordContext.Provider>
  );
}

export default OnGoingCounseling;
