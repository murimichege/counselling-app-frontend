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
  Grid,
} from "@mui/material";
import DownloadTwoToneIcon from "@mui/icons-material/DownloadTwoTone";

const SafetyContractForm = () => {
  const [signature, setSignature] = useState("");
  const [Name, setName] = useState("");
  const [Position, setPosition] = useState("");
  const [CurrentDate, setCurrentDate] = useState("");
  const [Witness, setWitness] = useState("");

  const [formData, setFormData] = useState("");

  const handleInputChange = () => {};

  return (
    <Container maxWidth="lg">
      <Card sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h1" gutterBottom>
              Safety Contract
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
<div style={{textAlign:"center"}}>
   {/* Your content here */}
   <Typography variant="body1">
          I{" "}{" "}
          <TextField
            name="Signature"
            variant="standard"
            value={signature}
            inputProps={{
              style: {     marginTop: "-11px"},
            }}
            onChange={handleInputChange}
          />
          , agree to NOT harm myself in any way,
          <br /> attempt to kill myself, or kill myself during the period from{" "}
          <TextField
            name="StartDate"
            variant="standard"
            inputProps={{
              style: {     marginTop: "-11px"},
            }}
            value={formData.StartDate}
            onChange={handleInputChange}
          />
          to <br />{" "}
          <TextField
            name="EndDate"
            variant="standard"
            inputProps={{
              style: {     marginTop: "-11px"},
            }}
            value={formData.EndDate}
            onChange={handleInputChange}
          />{" "}
          (the time of my next appointment).
          <br />
        </Typography>

        <Typography variant="body1" gutterBottom>
          I agree that, for any reason, if the appointment session is postponed,
          cancelled, etc., that this <br />
          time period is extended until the next direct meeting with my
          counselor. In this time of period, I <br />
          agree to care for myself, to <br />
          <TextField
          
            name="SelfCare"
            variant="standard"
            inputProps={{
              style: {     marginTop: "-11px"},
            }}
            value={formData.SelfCare}
            onChange={handleInputChange}
          />{" "}
          (e.g. eat well, get enough sleep each night, etc).
          <br />
        </Typography>

        <Typography variant="body1" gutterBottom>
          I agree to make social/family contact with the following individuals:
          <br />
        </Typography>

        <Typography variant="body1" gutterBottom>
          Full names{" "} 
          <TextField
            name="FullNames"
            variant="standard"
            inputProps={{
              style: {     marginTop: "-11px"},
            }}
            value={formData.FullNames}
            onChange={handleInputChange}
          />{" "}
          Contact{" "}
          <TextField
            name="Contact"
            inputProps={{
              style: {     marginTop: "-11px"},
            }}
            variant="standard"
            value={formData.Contact}
            onChange={handleInputChange}
          />{" "}
          Relation{" "}
          <TextField
             inputProps={{
              style: {     marginTop: "-11px"},
            }}
            name="Relation"
            variant="standard"
            value={formData.Relation}
            onChange={handleInputChange}
          />
        </Typography>

        <Typography variant="body1" gutterBottom>
          Or go to the following nearby safe place (e.g. a counseling
          office/clinic, religious set up like church):
          <br />
        </Typography>

        <Typography variant="body1" gutterBottom>
          Name of place/location{" "}
          <TextField
            name="PlaceLocation"
            variant="standard"
            inputProps={{
              style: {     marginTop: "-11px"},
            }}
            value={formData.PlaceLocation}
            onChange={handleInputChange}
          />{" "}
          Contact{" "}
          <TextField
            name="LocationContact"
            variant="standard"
            inputProps={{
              style: {     marginTop: "-11px"},
            }}
            value={formData.LocationContact}
            onChange={handleInputChange}
          />
        </Typography>

        <Typography variant="body1" gutterBottom>
          I agree to rid my presence of all things I could use to harm or kill
          myself. I agree that, if I am <br />
          having a rough time and come to a point where I may break any of these
          promises, I will call and <br /> make significant contact with any of
          the following individuals:
          <br />
        </Typography>

        <Typography variant="body1" gutterBottom>
          <TextField
            name="ContactPerson1"
            inputProps={{
              style: {     marginTop: "-11px"},
            }}
            variant="standard"
            value={formData.ContactPerson1}
            onChange={handleInputChange}
          />{" "}
          at #{" "}
          <TextField
            name="ContactNumber1"
            inputProps={{
              style: {     marginTop: "-11px"},
            }}
            variant="standard"
            value={formData.ContactNumber1}
            onChange={handleInputChange}
          />
        </Typography>

        <Typography variant="body1" gutterBottom>
          <TextField
            name="ContactPerson2"
            variant="standard"
            inputProps={{
              style: {     marginTop: "-11px"},
            }}
            value={formData.ContactPerson2}
            onChange={handleInputChange}
          />{" "}
          at #{" "}
          <TextField
            name="ContactNumber2"
            variant="standard"
            inputProps={{
              style: {     marginTop: "-11px"},
            }}
            value={formData.ContactNumber2}
            onChange={handleInputChange}
          />
        </Typography>

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
              style: {     marginTop: "-11px"},
            }}
            value={formData.CrisisHotline}
            onChange={handleInputChange}
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
          sx={{ marginTop: "40px", justifyContent: "center", display: "flex" }}
        >
           <TextField
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
          />
          <TextField
            label="Date"
            name="Date"
            variant="standard"
            value={CurrentDate}
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
         
    
        </Box>
        <Box
          sx={{ marginTop: "40px", justifyContent: "center", display: "flex" }}
        >
        
          <TextField
            label="Witnessed By"
            name="Name"
            variant="standard"
            value={Witness}
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
            label="Date"
            name="Date"
            variant="standard"
            value={CurrentDate}
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
            <Button
              disabled
              variant="contained"
              sx={{
                mx: 2,
              }}
              startIcon={<DownloadTwoToneIcon />}
            >
              Generate PDF
            </Button>
          </Box>
          </Tooltip>

</div>
     
      </Card>
    </Container>
  );
};

export default SafetyContractForm;
