import React, { useState } from "react";
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

const SafetyContractForm = () => {
  const [capturedSignature, setCapturedSignature] = useState("");

  const [signature, setSignature] = useState("");
  const [name, setName] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selfCare, setSelfCare] = useState("");
  const [fullNames1, setFullNames1] = useState("");
  const [contact1, setContact1] = useState("");
  const [relation1, setRelation1] = useState("");
  const [fullNames2, setFullNames2] = useState("");
  const [contact2, setContact2] = useState("");
  const [relation2, setRelation2] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [placeContact, setPlaceContact] = useState("");
  const [emergencyContact1Name, setEmergencyContact1Name] = useState("");
  const [emergencyContact1Contact, setEmergencyContact1Contact] = useState("");
  const [emergencyContact2Name, setEmergencyContact2Name] = useState("");
  const [emergencyContact2Contact, setEmergencyContact2Contact] = useState("");
  const [crisisHotline, setCrisisHotline] = useState("");
  const [contractAccepted, setContractAccepted] = useState(false);
  const [witness, setWitness] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const handleInputChange = (e, fieldName) => {
    const value = e.target.value;
  
    // Update the corresponding state variable based on the fieldName
    switch (fieldName) {
      case "startDate":
        setStartDate(value);
        break;
      case "endDate":
        setEndDate(value);
        break;
      case "selfCare":
        setSelfCare(value);
        break;
      case "fullNames1":
        setFullNames1(value);
        break;
      case "contact1":
        setContact1(value);
        break;
      case "relation1":
        setRelation1(value);
        break;
      case "fullNames2":
        setFullNames2(value);
        break;
      case "contact2":
        setContact2(value);
        break;
      case "relation2":
        setRelation2(value);
        break;
      case "placeName":
        setPlaceName(value);
        break;
      case "placeContact":
        setPlaceContact(value);
        break;
      case "emergencyContact1Name":
        setEmergencyContact1Name(value);
        break;
      case "emergencyContact1Contact":
        setEmergencyContact1Contact(value);
        break;
      case "emergencyContact2Name":
        setEmergencyContact2Name(value);
        break;
      case "emergencyContact2Contact":
        setEmergencyContact2Contact(value);
        break;
      case "crisisHotline":
        setCrisisHotline(value);
        break;
      case "contractAccepted":
        setContractAccepted(!contractAccepted); // Toggle between true and false
        break;
      case "witness":
        setWitness(value);
        break;
      case "currentDate":
        setCurrentDate(value);
        break;
      default:
        break;
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
              name="Name"
              variant="standard"
              value={name}
              inputProps={{
                style: { marginTop: "-11px" },
              }}
              onChange={(e) => handleInputChange(e, "name")}
              />
            , agree to NOT harm myself in any way,
            <br /> attempt to kill myself, or kill myself during the period from{" "}
            <TextField
              name="StartDate"
              variant="standard"
              inputProps={{
                style: { marginTop: "-11px" },
              }}
              value={startDate}
              onChange={(e) => handleInputChange(e, "startDate")}
              />
            to <br />{" "}
            <TextField
              name="EndDate"
              variant="standard"
              inputProps={{
                style: { marginTop: "-11px" },
              }}
              value={endDate}
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
              name="SelfCare"
              variant="standard"
              inputProps={{
                style: { marginTop: "-11px" },
              }}
              value={selfCare}
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
                  value={fullNames1}
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
                  value={contact1}
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
                  value={relation1}
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
                  value={fullNames2}
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
                  value={contact2}
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
                  value={relation2}
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
                value={placeName}
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
                value={placeContact}
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
                  value={emergencyContact1Name}
                  onChange={(e) => handleInputChange(e, "emergencyContact1Name")}
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
                  value={emergencyContact1Contact} 
                  onChange={(e) => handleInputChange(e, "emergencyContact1Contact")}
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
                  value={emergencyContact2Name}
                  onChange={(e) => handleInputChange(e, "emergencyContact2Name")}
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
                  value={emergencyContact2Contact}
                  onChange={(e) => handleInputChange(e, "emergencyContact2Contact")}
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
              value={crisisHotline}
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
              name="Date"
              variant="standard"
              value={currentDate}
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
              name="Name"
              variant="standard"
              value={witness}
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
              name="Date"
              variant="standard"
              value={CurrentDate}
              inputProps={{
                style: { height: "auto" },
              }}
              onChange={(e) => handleInputChange(e, "crisisHotline")}
              sx={{
                marginRight: "20px",
                width: "240px",
                height: "auto",
                gridColumn: "span 2",
              }}
            />
          </Box>

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
                disabled
                variant="contained"
                sx={{
                  mx: 2,
                }}
                startIcon={<DownloadTwoToneIcon />}
              >
                Save Form
              </Button>
              <Button  variant="contained"   sx={{
                  mx: 2,
                }} onClick={openSignatureDialog}>
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
