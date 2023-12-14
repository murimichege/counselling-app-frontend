import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActionse,
  FormControl,
  DialogActions,
  InputLabel,
  Select,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import MenuItem from "@mui/material/MenuItem";
import toast, { Toaster } from "react-hot-toast";
import FolderAccordion from "./SessionDocumentFolder";
import { useNavigate } from "react-router-dom";

import userApi from "../../api/users";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  sessionNo: yup.string().required("Session No is required"),
  clientNumber: yup.string().required("Client Number is required"),
  name: yup.string().required("Name is required"),
  studentId: yup.string().required("Student ID is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  firstSemester: yup.string().required("First Semester is required"),
  year: yup.string().required("Year is required"),
});

const initialValues = {
  sessionNo: "",
  clientNumber: "",
  name: "",
  studentId: "",
  phone: "",
  email: "",
  firstSemester: "",
  year: "",
};

const NewSession = () => {
  const [open, setOpen] = useState(false);

  const [selectedDocument, setSelectedDocument] = useState(""); // State to manage selected document
  const [sessionDocuments, setSessionDocuments] = useState([]); // State to store session documents
  const [isDocumentSelected, setIsDocumentSelected] = useState(false);
  const [folders, setFolders] = useState([]); // Empty array initially

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleDocumentAddition = (document) => {
    if (document) {
      setSelectedDocument(document);
      setIsDocumentSelected(true);
      setFolders((prevFolders) => [
        ...prevFolders,
        { title: document, links: [] },
      ]); 
    } else {
      setIsDocumentSelected(false);
      setFolders([]); 
    }
  };
  const addDocumentToSession = (document) => {
    setSessionDocuments([...sessionDocuments, document]);
    setSelectedDocument(""); // Clear selected document after adding
  };
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  const handleFormSubmit = async (values) => {
    try {
      // Assuming 'userApi.create()' method exists and sends data to the server
      await userApi.create(values);
      toast.success("Session Created Successfully!");
      navigate("/sessions");
    } catch (error) {
      // Handle error appropriately
      console.error("Error:", error);
      toast.error("Failed to create session");
    }
  };
  const docfolders = [
    {
      title: "Intake Form 2",
    },
    { title: "Consent Form" },
    { title: " MSE Form" },

    { title: " Initial Counseling Record" },

    { title: "Intake Form 2" },

    { title: " On-going Form" },

    { title: "Safety Form" },
    { title: "       Termination Form" },
  ];
  return (
    <Box m="20px">
      <Toaster />
      <Header title="New Session" subtitle="Create a New Session" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                label="Client Name"
                name="ClientName"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                label="Student Id"
                name="Student Id"
                value={values.studentId}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.studentId && Boolean(errors.studentId)}
                helperText={touched.studentId && errors.studentId}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                label="Phone"
                name="Phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                label="Email"
                name="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                label="First Semester"
                name="FirstSemester"
                value={values.firstSemester}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstSemester && Boolean(errors.firstSemester)}
                helperText={touched.firstSemester && errors.firstSemester}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                label="Year"
                name="Year"
                value={values.year}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.year && Boolean(errors.year)}
                helperText={touched.year && errors.year}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                label="Session No"
                name="sessionNo"
                value={values.sessionNo}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled
                error={touched.sessionNo && Boolean(errors.sessionNo)}
                helperText={touched.sessionNo && errors.sessionNo}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                label="Client Nunmber"
                name="clientNumber"
                value={values.clientNumber}
                onChange={handleChange}
                disabled
                // onBlur={handleBlur}
                // error={touched.clientNumber && Boolean(errors.clientNumber)}
                // helperText={touched.clientNumber && errors.clientNumber}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
          </form>
        )}
      </Formik>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3,
        }}
      >
        <Typography variant="h3">Session Documents</Typography>
      </Box>

      <Box display="flex" justifyContent="flex-end" mt="20px">
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          onClick={handleClickOpen}
        >
          Add Documents
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle>Add Document For This Session</DialogTitle>
        <DialogContent>
          <FormControl display="flex" justifyContent="center">
            <InputLabel id="document-select-label">
              Select Document Type
            </InputLabel>
            <Select
              labelId="document-select-label"
              id="document-select"
              fullWidth
              value={selectedDocument}
              onChange={(e) => handleDocumentAddition(e.target.value)}
            >
              <MenuItem value="">
                <em>Select Document</em>
              </MenuItem>
              {docfolders.map((folder, index) => (
                <MenuItem key={index} value={folder.title}>
                  {folder.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              addDocumentToSession(selectedDocument);
              handleClose();
            }}
          >
            Add Document
          </Button>
        </DialogActions>
      </Dialog>


      {/* Conditionally render FolderAccordion based on document selection */}
      {isDocumentSelected && <FolderAccordion folders={folders} />}
    </Box>
  );
};

export default NewSession;
