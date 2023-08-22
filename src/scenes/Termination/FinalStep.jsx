import React, { useState } from "react";
import DeploymentSuccess from "./CreationSuccess";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import{Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'
function FinalStep() {
    // const [showSuccess, setShowSuccess] = useState(false);

    // const handleDeploy = async () => {
    //   // Do your deployment logic here
    //   setShowSuccess(true);
    //   setTimeout(() => {
    //     setShowSuccess(false);
    //   }, 3000);
    // };
    const navigate  = useNavigate()

    const createProduct =()=>{
      navigate('/products')


    }

    return (
        <div>
            <main className="pt5 black-80 flex justify-center items-center" style={{ maxWidth: "100%", maxHeight: "25%", margin: "auto" }}>
                <div className="mw5 bg-white pa2-ns mt5 dib center" style={{ maxWidth: "84%", maxHeight: "30%" }}>
                    {/* <img src={tick} className="h3 w3" title="success icon" alt="tick-icon" /> */}
                    <CheckCircleOutlineIcon/>
                    <h3 className="" style={{ display: "flex", justifyContent: "center" }}>
                        Congratulations!
                    </h3>
                    <p style={{ color: "#C0C0C0" }}>You have completed your product onboarding, you will receive purchase requests!</p>
                    <Button />
                    <Button
                        className="f6 grow br2 ph3 pv2 mb2 dib white"
                        style={{ borderStyle: "none", width: "100%", backgroundColor: "#664DE5" }}
                        type="submit"
                        variant="contained"
                        onClick={createProduct}   
                    >
                      Terminate Counselling Session
                      </Button>
                      
                </div>
                <DeploymentSuccess />
            </main>
        </div>
    );
}

export default FinalStep;