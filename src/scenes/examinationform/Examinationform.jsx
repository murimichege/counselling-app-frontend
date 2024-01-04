import React, { useState, createContext } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree"
import StepFour from "./StepFour";
import MultiStepProgressBar from "./Multistepbar/MultiStepProgressBar";

export const ExaminationFormContext = createContext();
function ExaminationForm() {
  const [formData, setFormData] = useState({
    ClientCode: "",
    ClientInitials: "",
    Date: "",
    examination: {
      checked: [],
      comments: {},
    },  });

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
    <ExaminationFormContext.Provider value={{ formData, setFormData }}>
      <div className="App">
        {/* <Logo /> */}
        <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
        {
          {
            pageone: <StepOne onButtonClick={nextPage} />,
            pagetwo: <StepTwo onButtonClick={nextPage} />,
            pagethree: <StepThree onButtonClick={nextPage} />,
            pagefour: <StepFour onButtonClick={nextPage} />,
        
          }[page]
        }
      </div>
    </ExaminationFormContext.Provider>
  );
}

export default ExaminationForm;
