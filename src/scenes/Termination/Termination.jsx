import React, { useState, createContext } from "react";
import ClientDetails from "./ClientDetails";
import ClientProgress from "./ClientProgress";
import Recommendation from "./Recommendation";
import CounsellorSignature from "./CounsellorSignature";
import FinalStep from "./FinalStep";
import MultiStepProgressBar from "./Multistepbar/MultiStepProgressBar";
// Create a new context
export const TerminationContext = createContext();
function Termination() {
  const [formData, setFormData] = useState({
    ClientName: "",
    StudentID: "",
    SessionsHeld: "",
    dateFrom: "",
    dateTo: "",
    CounsellorSignature: "",
    CounsellorName: "",
    CurrentDate: "",
    GoalsSet: [],
    GoalsMet: [],
    GoalsbeingWorkedOn: [],
    GoalsNotMet: [],
    Recommendations: [],
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
      case "5":
        setPage("pagefive");
        break;
      case "6":
        alert("Ooops! Seems like you did not fill the form.");
        break;
      default:
        setPage("1");
    }
  };

  return (
    <TerminationContext.Provider value={{ formData, setFormData }}>
      <div className="App">
        {/* <Logo /> */}
        <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
        {
          {
            pageone: <ClientDetails onButtonClick={nextPage} />,
            pagetwo: <ClientProgress onButtonClick={nextPage} />,
            pagethree: <Recommendation onButtonClick={nextPage} />,
            pagefour: <CounsellorSignature onButtonClick={nextPage} />,
            pagefive: <FinalStep />,
          }[page]
        }
      </div>
    </TerminationContext.Provider>
  );
}

export default Termination;
