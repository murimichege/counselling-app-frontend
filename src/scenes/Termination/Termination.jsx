import React, { useState,createContext } from "react";
import Category from "../category/Category";
import ProductCategorySelection from "../pricing/ProductCategorySelection";
import onBoarding03 from '../../../onBoarding/onBoarding03/onBoarding03'
import Quantity from "../quantity/Quantity";
import ProductSuccess from "../productsuccess/ProductSuccess";
import Payment from "../Payments/Payments";
import tachyons from "tachyons";
import MultiStepProgressBar from "../multistepprogressbar/ProgressBar";
// Create a new context
export const TerminationContext = createContext();
function ProductOnboard() {
    const [formData, setFormData] = useState({
        ClientName: "",
        StudentID: "",
        SessionsHeld: "",
        dateFrom:"",
        dateTo:"",
        CounsellorSignature:"",
        CounsellorName:"",
        CurrentDate:"",
        GoalsSet: [],
        GoalsMet:[],
        GoalsbeingWorkedOn:[],
        GoalsNotMet:[],
        Recommendations:[]
    });

    console.log("formdata", formData)

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
                        pageone: <Category onButtonClick={nextPage} />,
                        
                        pagetwo: <ProductCategorySelection onButtonClick={nextPage} />,
                        pagethree: <Quantity onButtonClick={nextPage} />,
                        pagefour: <Payment onButtonClick={nextPage} />,
                        pagefive: <ProductSuccess />
                    }[page]
                }
            </div>
        </TerminationContext.Provider>
    );
}

export default ProductOnboard;