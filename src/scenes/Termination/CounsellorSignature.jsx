import React, { useState, useContext } from "react";
import "./index.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box, TextField, Button, Typography } from "@mui/material";
import SignatureTextField from "../../components/signature";
import { TerminationContext } from "./Termination";

const CounsellorSignature = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(TerminationContext);
  const [signature, setSignature] = useState("");
  const [signatureDialogOpen, setSignatureDialogOpen] = useState(false);

  const openSignatureDialog = () => {
    setSignatureDialogOpen(true);
  };

  const closeSignatureDialog = () => {
    setSignatureDialogOpen(false);
  };

  const handleSignatureCapture = (capturedImage) => {
    setSignature(capturedImage);
    closeSignatureDialog();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const {CounsellorName, CurrentDate } = formData;
  

  console.log("formdata", formData);

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Counselor Signature</h2>

      <div
        className="center ph4 selectionDiv"
        style={{ height: "46%", display: "inline-block" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // justifyContent: space-evenly
          }}
        >
          <TextField
            label="Counselor Name"
            name="CounsellorName"
            value={CounsellorName}
            inputProps={{
              style: { height: "auto" },
            }}
            onChange={handleInputChange}
            sx={{
              marginRight: "20px",
              width: "240px",
              height: "auto",
              gridColumn: "span 2",
            }}
          />
          <TextField
            id="date"
            name="CurrentDate"
            label="CurrentDate"
            type="date"
            value={CurrentDate}
            onChange={handleInputChange}
            // defaultValue=now()
            sx={{
              marginRight: "20px",
              width: "240px",
              height: "auto",
              gridColumn: "span 2",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // justifyContent: space-evenly
          }}
        >
          {/* Signature Capture */}
          <SignatureTextField
            open={signatureDialogOpen}
            onClose={closeSignatureDialog}
            onSaveSignature={handleSignatureCapture}
          />
          <Typography variant="body4" gutterBottom>
            Signature:
          </Typography>
          {/* Display Captured Signature */}
          {signature && (
            <Box
              sx={{
                // marginTop: "40px",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img src={signature} alt="Captured Signature" />
            </Box>
          )}
        </Box>
      </div>
      <Box
        sx={{
          marginTop: "40px",
          justifyContent: "space-evenly",
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
                variant="contained"
                sx={{
                  mx: 2,
                }}
                onClick={openSignatureDialog}
              >
                Sign
              </Button>
        <Button
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          type="submit"
          variant="contained"
          onClick={() => onButtonClick("pagesix")}
        >
          Save Counselor Details
        </Button>
      </Box>
    </main>
  );
};

export default CounsellorSignature;
