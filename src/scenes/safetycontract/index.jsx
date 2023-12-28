import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  Divider,
  TextField,
  Box,
  Button,
  Tooltip,
  InputLabel,
  Grid,
} from "@mui/material";
import DownloadTwoToneIcon from "@mui/icons-material/DownloadTwoTone";
import SignatureTextField from "../../components/signature";
import SaveIcon from "@mui/icons-material/Save";
import SafetyFormApi from "../../api/forms/safetyform";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const SafetyContractForm = () => {
  const [signature, setSignature] = useState("");
  const navigate = useNavigate();

  const initialFormState = {
    name: "",
    startDate: "",
    endDate: "",
    selfCare: "",
    fullNames1: "",
    contact1: "",
    relation1: "",
    fullNames2: "",
    contact2: "",
    relation2: "",
    placeName: "",
    placeContact: "",
    emergencyContact1Name: "",
    emergencyContact1Contact: "",
    emergencyContact2Name: "",
    emergencyContact2Contact: "",
    crisisHotline: "",
    contractAccepted: false,
    witness: "",
    currentDate: new Date().toLocaleDateString(),
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      const response = await SafetyFormApi.create(formData);
      console.log("response", response);
      toast.success("Form submitted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        "Failed to submit safety contract. Please contact IT support"
      );
    }
  };

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

  return (
    <Container maxWidth="lg">
      <Card sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant="h1"
              sx={{
                justifyContent: "center",
                display: "flex",
              }}
              gutterBottom
            >
              Safety Contract
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <div style={{ display: "grid", justifyContent: "center" }}>
          {/* Your content here */}
          <Typography variant="body1">
            I{" "}
            <TextField
              name="name"
              variant="standard"
              value={formData.name}
              inputProps={{
                style: { marginTop: "-11px" },
              }}
              onChange={(e) => handleInputChange(e, "name")}
            />
            , agree to NOT harm myself in any way,
            <br /> attempt to kill myself, or kill myself during the period from{" "}
            <TextField
              name="startDate"
              variant="standard"
              inputProps={{
                style: { marginTop: "-11px" },
              }}
              value={formData.startDate}
              onChange={(e) => handleInputChange(e, "startDate")}
            />
            to <br />{" "}
            <TextField
              name="EndDate"
              variant="standard"
              inputProps={{
                style: { marginTop: "-11px" },
              }}
              value={formData.endDate}
              onChange={(e) => handleInputChange(e, "endDate")}
            />{" "}
            (the time of my next appointment).
            <br />
          </Typography>

          <Typography variant="body1" gutterBottom>
            I agree that, for any reason, if the appointment session is
            postponed, cancelled, etc., that this <br />
            time period is extended until the next direct meeting with my
            counselor. In this time of period, I <br />
            agree to care for myself, to <br />
            <TextField
              name="selfCare"
              variant="standard"
              inputProps={{
                style: { marginTop: "-11px" },
              }}
              value={formData.selfCare}
              onChange={(e) => handleInputChange(e, "selfCare")}
            />{" "}
            (e.g. eat well, get enough sleep each night, etc).
            <br />
          </Typography>

          <Typography variant="body1" gutterBottom>
            I agree to make social/family contact with the following
            individuals:
            <br />
          </Typography>
          <Box>
            <Box style={{ display: "flex" }}>
              <div style={{ marginRight: "20px" }}>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Full Names
                </InputLabel>
                <TextField
                  name="Full names"
                  variant="standard"
                  inputProps={{
                    style: { marginTop: "-11px" },
                  }}
                  value={formData.fullNames1}
                  onChange={(e) => handleInputChange(e, "fullNames1")}
                />
              </div>
              <div style={{ marginRight: "20px" }}>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Contact{" "}
                </InputLabel>
                <TextField
                  name="Contact"
                  inputProps={{
                    style: { marginTop: "-11px" },
                  }}
                  variant="standard"
                  value={formData.contact1}
                  onChange={(e) => handleInputChange(e, "contact1")}
                />
              </div>

              <div>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Relation{" "}
                </InputLabel>
                <TextField
                  inputProps={{
                    style: { marginTop: "-11px" },
                  }}
                  name="Relation"
                  variant="standard"
                  value={formData.relation1}
                  onChange={(e) => handleInputChange(e, "relation1")}
                />
              </div>
            </Box>
            <Box style={{ display: "flex" }}>
              <div style={{ marginRight: "20px" }}>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Full Names
                </InputLabel>
                <TextField
                  name="Full names"
                  variant="standard"
                  inputProps={{
                    style: { marginTop: "-11px" },
                  }}
                  value={formData.fullNames2}
                  onChange={(e) => handleInputChange(e, "fullNames2")}
                />
              </div>
              <div style={{ marginRight: "20px" }}>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Contact{" "}
                </InputLabel>
                <TextField
                  name="Contact"
                  inputProps={{
                    style: { marginTop: "-11px" },
                  }}
                  variant="standard"
                  value={formData.contact2}
                  onChange={(e) => handleInputChange(e, "contact2")}
                />
              </div>

              <div>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Relation{" "}
                </InputLabel>
                <TextField
                  inputProps={{
                    style: { marginTop: "-11px" },
                  }}
                  name="Relation"
                  variant="standard"
                  value={formData.relation2}
                  onChange={(e) => handleInputChange(e, "relation2")}
                />
              </div>
            </Box>
          </Box>
          <Typography variant="body1" gutterBottom>
            Or go to the following nearby safe place (e.g. a counseling
            office/clinic, religious set up like church):
            <br />
          </Typography>
          <Box style={{ display: "flex" }}>
            <div style={{ marginRight: "20px" }}>
              <InputLabel htmlFor="input-with-icon-adornment">
                Name of the Place or location
              </InputLabel>
              <TextField
                name="Full names"
                variant="standard"
                inputProps={{
                  style: { marginTop: "-11px" },
                }}
                value={formData.placeName}
                onChange={(e) => handleInputChange(e, "placeName")}
              />
            </div>
            <div style={{ marginRight: "20px" }}>
              <InputLabel htmlFor="input-with-icon-adornment">
                Contact{" "}
              </InputLabel>
              <TextField
                name="Contact"
                inputProps={{
                  style: { marginTop: "-11px" },
                }}
                variant="standard"
                value={formData.placeContact}
                onChange={(e) => handleInputChange(e, "placeContact")}
              />
            </div>
          </Box>

          <Typography variant="body1" gutterBottom>
            I agree to rid my presence of all things I could use to harm or kill
            myself. I agree that, if I am <br />
            having a rough time and come to a point where I may break any of
            these promises, I will call and <br /> make significant contact with
            any of the following individuals:
            <br />
          </Typography>

          <Box>
            <Box style={{ display: "flex" }}>
              <div style={{ marginRight: "20px" }}>
                {/* <InputLabel htmlFor="input-with-icon-adornment">
    Name of the Place or location
        </InputLabel> */}
                <TextField
                  name="emergencyContact1Name"
                  variant="standard"
                  inputProps={{
                    style: { marginTop: "-11px" },
                  }}
                  value={formData.emergencyContact1Name}
                  onChange={(e) =>
                    handleInputChange(e, "emergencyContact1Name")
                  }
                />
              </div>
              <div style={{ marginRight: "20px" }}>
                {"at #"}
                {/* <InputLabel htmlFor="input-with-icon-adornment">
    Contact    </InputLabel> */}
                <TextField
                  name="Contact"
                  inputProps={{
                    style: { marginTop: "-11px" },
                  }}
                  variant="standard"
                  value={formData.emergencyContact1Contact}
                  onChange={(e) =>
                    handleInputChange(e, "emergencyContact1Contact")
                  }
                />
              </div>
            </Box>

            <Box style={{ display: "flex" }}>
              <div style={{ marginRight: "20px" }}>
                {/* <InputLabel htmlFor="input-with-icon-adornment">
    Name of the Place or location
        </InputLabel> */}
                <TextField
                  name="Full names"
                  variant="standard"
                  inputProps={{
                    style: { marginTop: "-11px" },
                  }}
                  value={formData.emergencyContact2Name}
                  onChange={(e) =>
                    handleInputChange(e, "emergencyContact2Name")
                  }
                />
              </div>
              <div style={{ marginRight: "20px" }}>
                {"at # "}
                {/* <InputLabel htmlFor="input-with-icon-adornment">
    Contact    </InputLabel> */}
                <TextField
                  name="Contact"
                  inputProps={{
                    style: { marginTop: "-11px" },
                  }}
                  variant="standard"
                  value={formData.emergencyContact2Contact}
                  onChange={(e) =>
                    handleInputChange(e, "emergencyContact2Contact")
                  }
                />
              </div>
            </Box>
          </Box>

          <Typography variant="body1" gutterBottom>
            The Counseling Center at 0730 116797/748/746/791/750
            <br />
          </Typography>

          <Typography variant="body1" gutterBottom>
            Or, if I cannot contact these individuals, I will immediately call
            911, 116 (for children) or any
            <br /> crisis hotline at #{" "}
            <TextField
              name="CrisisHotline"
              variant="standard"
              inputProps={{
                style: { marginTop: "-11px" },
              }}
              value={formData.crisisHotline}
              onChange={(e) => handleInputChange(e, "crisisHotline")}
            />{" "}
            or nearby emergency center.
            <br />
          </Typography>

          <Typography variant="body1" gutterBottom>
            I agree that these conditions are important, worth doing, and that
            this is a contract I am willing to <br />
            make and keep. By my word and honor, I intend to keep this contract.
            <br />
          </Typography>
          <Box
            sx={{
              marginTop: "40px",
              justifyContent: "space-between",
              display: "flex",
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

            {/* <TextField
              label="Signature"
              name="Signature"
              variant="standard"
              value={signature}
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
            /> */}
            <TextField
              label="Date"
              name="currentDate"
              variant="standard"
              value={formData.currentDate}
              inputProps={{
                style: { height: "auto" },
              }}
              onChange={handleInputChange}
              sx={{
                marginRight: "40px",
                width: "240px",
                height: "auto",
                marginTop: "-30px",
                gridColumn: "span 2",
              }}
            />
          </Box>
          <Box
            sx={{
              marginTop: "40px",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <TextField
              label="Witnessed By"
              name="witness"
              variant="standard"
              value={formData.witness}
              inputProps={{
                style: { height: "auto" },
              }}
              onChange={(e) => handleInputChange(e, "witness")}
              sx={{
                marginRight: "20px",
                width: "240px",
                height: "auto",
                gridColumn: "span 2",
              }}
            />
            <TextField
              label="Date"
              name="currentDate"
              variant="standard"
              value={formData.currentDate}
              inputProps={{
                style: { height: "auto" },
              }}
              onChange={(e) => handleInputChange(e, "currentDate")}
              sx={{
                marginRight: "20px",
                width: "240px",
                height: "auto",
                gridColumn: "span 2",
              }}
            />
          </Box>
          <Typography
            variant="body4"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            *this contract is renewable after expiry of specified period*
          </Typography>

          <Tooltip
            placement="top"
            arrow
            title="This functionality will be added in a future release!"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt={4}
            >
              <Button
                variant="contained"
                sx={{
                  mx: 2,
                }}
                onClick={handleFormSubmit}
                startIcon={<SaveIcon />}
              >
                Save Form
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
            </Box>
          </Tooltip>
        </div>
      </Card>
    </Container>
  );
};

export default SafetyContractForm;
