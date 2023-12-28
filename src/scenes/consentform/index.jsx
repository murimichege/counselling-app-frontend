import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  Divider,
  Container,
  Tooltip,
  Button,
  TextField,
  styled,
} from "@mui/material";

import DownloadTwoToneIcon from "@mui/icons-material/DownloadTwoTone";
import SignatureTextField from "../../components/signature";
import ConsentFormApi from "../../api/forms/consentform";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignatureImage = styled("img")({
  width: "30%",
  maxWidth: "100px", // Adjust the max width as needed
});
const ConsentForm = () => {
  const [capturedSignatures, setCapturedSignatures] = useState([]);
  const [signatureDialogOpen, setSignatureDialogOpen] = useState(false);

  const navigate = useNavigate();

  // New state variables for form data
  const [formData, setFormData] = useState({
    counselorName: "",
    clientName: "",
    position: "",
    currentDate: "",
    // signatures: [],
  });
  const [CurrentDate, setCurrentDate] = useState("");

  const handleFormSubmit = async () => {
    try {
      const payload = {
        formData,capturedSignatures
      }
      const response = await ConsentFormApi.create(payload);
      console.log("response", response);
      toast.success("Form submitted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to submit consent form. Please contact IT support");
    }
  };

  // const GetFormData = async () => {
  //   try {
  //     const response = await ConsentFormApi.g
  //     console.log("response", response);
  //     toast.success("Form submitted successfully!");
  //     navigate("/");
  //   } catch (error) {
  //     console.error("Error:", error);
  //     toast.error("Failed to submit consent form. Please contact IT support");
  //   }
  // };
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString(); // Get the current date
    setCurrentDate(currentDate); // Update the state with the current date
  }, []);
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

  return (
    <Container maxWidth="lg" sx={{ margin: "auto" }}>
      <Toaster />

      <Card
        sx={{
          p: 3,
          mb: 3,
        }}
      >
        <Box display="flex" textAlign="center">
          <Box>
            <Typography
              variant="h1"
              sx={{
                justifyContent: "center",
                display: "flex",
              }}
              gutterBottom
            >
              Consent and Confidentiality Form
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            my: 4,
          }}
        />

        <Typography variant="subtitle1" gutterBottom></Typography>
        <Typography
          variant="body4"
          sx={{ justifyContent: "center", display: "flex" }}
        >
          The Counseling Center maintains a strict level of client
          confidentiality. This means that individuals using <br /> any of the
          service offered by the Center can expect that their privacy will be
          represented. They can trust <br /> that their information will not be
          discussed or disclosed to anyone outside of the Counseling Center.
          <br />
          <br />
          <br />
          All Counseling Center staff members or those individuals working in
          the center are therefore required to <br /> acknowledge and commit to
          maintaining the highest standard of confidentiality. It is understood
          that
          <br /> continued employment with the Counseling Center is based on
          maintaining this standard. Anyone who <br /> breaks confidentiality
          will be immediately dismissed. <br /> <br />I have read and understand
          the above; I understand the requirements of continued employment{" "}
          <br /> at the Counseling Center. <br /> <br />
        </Typography>

        <Box
          sx={{ marginTop: "40px", justifyContent: "center", display: "flex" }}
        >
          <TextField
            id="outlined-select-currency"
            label="Name"
            name="name"
            variant="standard"
            value={formData.counselorName}
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
            label="Position"
            name="position"
            variant="standard"
            value={formData.position}
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
            name="currentDate"
            variant="standard"
            value={formData.currentDate}
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
          sx={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Typography variant="body4" mt={4} gutterBottom>
              Signature 1:
            </Typography>
            <Typography variant="body4" mt={4} gutterBottom>
              {capturedSignatures.length > 0 && (
                <SignatureImage src={capturedSignatures[0]} alt="Signature 1" />
              )}
            </Typography>
          </Box>
          <Button
            variant="outlined"
            sx={{ marginTop: "40px" }}
            onClick={openSignatureDialog}
          >
            Sign 1
          </Button>
        </Box>

        <Typography
          variant="body4"
          sx={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            marginTop: "40px",
          }}
        >
          I
          <TextField
            name="clientName"
            variant="standard"
            inputProps={{
              style: { marginTop: "-11px" },
            }}
            value={formData.clientName}
            onChange={(e) => handleInputChange(e, "clientName")}
          />
          (client) give consent for receiving counseling services. My Counselor{" "}
          <br />
          has explained to me the counseling process and I understand that,
          therapeutic counseling requires my <br />
          active involvement including my effort to change or undertake tasks
          given to me during and in between <br />
          sessions. I also understand that the issues discussed in the
          counseling process will remain confidential <br />
          and that the oath of confidentiality will be broken with my permission
          or if I plan to harm myself or
          <br /> another person. When counseling is mandated by a referral
          source I understand that the counselor will
          <br />
          provide the required information on my attendance,progress in
          counseling and in case a psychological
          <br /> diagnosis is required the counselor will inform me and give the
          information with my full knowledge
          <br /> and permission.{" "}
        </Typography>

        <Typography
          variant="body4"
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          If you have any questions please feel free to ask. Kindly sign and
          date this form.
        </Typography>

        <Box
          sx={{
            marginTop: "40px",
            display: "grid",
            justifyContent: "space-around",
          }}
        >
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
          <Box>
            <Typography variant="body4" mt={4} gutterBottom>
              Signature 2:
            </Typography>
            <Typography variant="body4" mt={4} gutterBottom>
              {capturedSignatures.length > 1 && (
                <SignatureImage src={capturedSignatures[1]} alt="Signature 2" />
              )}
            </Typography>
          </Box>
          <Button
            variant="outlined"
            sx={{ marginTop: "40px" }}
            onClick={openSignatureDialog}
          >
            Sign 2
          </Button>
        </Box>
        {/* Signature Capture Dialog */}
        <SignatureTextField
          open={signatureDialogOpen}
          onClose={closeSignatureDialog}
          onSaveSignature={handleSignatureCapture}
        />

        {/* Display the captured signature */}
        {/* <Box
          sx={{
            marginTop: "40px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body4" gutterBottom>
            Captured Signature:
          </Typography>
          <img src={signature} alt="Captured Signature" />
        </Box> */}

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
              onClick={handleFormSubmit}
              variant="contained"
              sx={{
                mx: 2,
              }}
              startIcon={<DownloadTwoToneIcon />}
            >
              {"Save Form"}
            </Button>
          </Box>
        </Tooltip>
      </Card>
    </Container>
  );
};

export default ConsentForm;
