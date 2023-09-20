import React, { useState, createContext } from "react";
import ClientDetails from "./ClientDetails";
import ClientReason from "./ClientReason";
import Recommendation from "./Recommendation";
import CounsellorSignature from "./CounsellorSignature";
import Explore from './Explore'
import History from "./History";
import Goals from './Goals'
import FinalStep from "./FinalStep";
import MultiStepProgressBar from "./Multistepbar/MultiStepProgressBar";
import Assessment from "./Assessment";
import TreatmentPlan from "./TreatmentPlan";
import Referrals from "./Referrals";
// Create a new context
export const CounsellingRecordContext = createContext();
function CounselingRecord() {
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
            pagetwo: <ClientReason onButtonClick={nextPage} />,
            pagethree: <Explore onButtonClick={nextPage} />,
            pagefour: <History onButtonClick={nextPage} />,
            pagefive: <Assessment onButtonClick={nextPage} />,
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
