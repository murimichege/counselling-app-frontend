import React, { useContext, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ExaminationFormContext } from "./Examinationform";
import SignatureTextField from "../../components/signature"; 

const SignatureImage = styled("img")({
  width: "40%",
  maxWidth: "150px", // Adjust the max width as needed
});

// Renamed the component for better clarity.
const ClientDetailsForm = ({ onButtonClick }) => {

  const { formData, setFormData } = useContext(ExaminationFormContext);

  const [capturedSignatures, setCapturedSignatures] = useState([]);
  const [signatureDialogOpen, setSignatureDialogOpen] = useState(false);
  // Improved the function name to be more descriptive.
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
 
  // Open the signature dialog
  const openSignatureDialog = () => {
    setSignatureDialogOpen(true);
  };

  // Close the signature dialog
  const closeSignatureDialog = () => {
    setSignatureDialogOpen(false);
  };

  // Handle saving the captured signature and closing the dialog
  const handleSignatureCapture = (capturedImage) => {
    setCapturedSignatures([...capturedSignatures, capturedImage]);
    closeSignatureDialog();
  };

  console.log("formData", formData);

  // Styled component for consistent styling.
  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <div
        className="center ph4 selectionDiv"
        style={{ height: "46%", display: "flow" }}
      >
        {/* Using flexbox for improved layout */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="counselors-name"
            label="Counselor's Name" // Corrected the label text
            name="Counselorsname" // Updated the name attribute
            variant="standard"
            value={formData.Counselorsname}
            onChange={handleFieldChange}
            sx={{
              marginRight: "20px",
              width: "240px",
              height: "auto",
              gridColumn: "span 2",
            }}
          />
          <TextField
            id="date"
            label="Date"
            name="Date"
            variant="standard"

            value={formData.Date}
            onChange={handleFieldChange}
            sx={{
              marginRight: "20px",
              width: "240px",
              height: "auto",
              gridColumn: "span 2",
            }}
          />
        </Box>
        <Box
        mt={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

          }}
        >
          <TextField
            id="client-name"
            variant="standard"
            label="Client's Name" // Corrected the label text
            name="Clientname" // Updated the name attribute
            value={formData.ClientName}
            onChange={handleFieldChange}
            sx={{
              marginRight: "20px",
              width: "240px",
              height: "auto",
              gridColumn: "span 2",
            }}
          />
          <TextField
            id="ID"
            label="ID Number"
            name="IdNumber"
            variant="standard"

            value={formData.IdNumber}
            onChange={handleFieldChange}
            sx={{
              marginRight: "20px",
              width: "240px",
              height: "auto",
              gridColumn: "span 2",
            }}
          />
        </Box>
        <Box
                mt={4}

          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          
          <Box>
            <Typography variant="body4" mt={4} gutterBottom>
              Signature:
            </Typography>
            <Typography variant="body4" mt={4} gutterBottom>
              {capturedSignatures.length > 1 && (
                <SignatureImage
                  src={capturedSignatures[0]}
                  alt="Signature 2"
                />
              )}
            </Typography>
          </Box>
        </Box>
         {/* Signature Capture Dialog */}
         <SignatureTextField
          open={signatureDialogOpen}
          onClose={closeSignatureDialog}
          onSaveSignature={handleSignatureCapture}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* You can add more fields here if needed */}
        </Box>
      </div>
      <Box
        sx={{
          marginTop: "40px",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Button
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          type="button" // Specify the button type
          variant="contained"
          onClick={() => onButtonClick("pagetwo")}
        >
          Cancel
        </Button>
        <Button type="button" 
                  className="f6 grow br2 ph3 pv2 mb2 dib white"

        // Specify the button type
          variant="contained" onClick={openSignatureDialog}>
            Sign
          </Button>
        <Button
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          type="button" // Specify the button type
          variant="contained"
          onClick={() => onButtonClick("pagetwo")}
        >
          Save Client Details
        </Button>
      </Box>
    </main>
  );
};

export default ClientDetailsForm;
