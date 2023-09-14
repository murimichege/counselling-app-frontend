import React, { useState, createContext } from "react";
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import StepSix from './StepSix';
import StepSeven from './StepSeven';
import StepEight from './StepEight';
import MultiStepProgressBar from "./Multistepbar/MultiStepProgressBar";
export const CounsellingRecordContext = createContext();

function OnGoingCounsellingRecord() {
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
        setPage("pageeight");
        break;
      case "9":
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
            pageone: <StepOne onButtonClick={nextPage} />,
            pagetwo: <StepTwo onButtonClick={nextPage} />,
            pagethree: <StepThree onButtonClick={nextPage} />,
            pagefour: <StepFour onButtonClick={nextPage} />,
            pagefive: <StepFive onButtonClick={nextPage} />,
            pagesix: <StepSix onButtonClick={nextPage} />,
            pageseven: <StepSeven onButtonClick={nextPage} />,
            pageeight: <StepEight />,
          }[page]
        }
      </div>
    </CounsellingRecordContext.Provider>
  );
}

export default OnGoingCounsellingRecord;
