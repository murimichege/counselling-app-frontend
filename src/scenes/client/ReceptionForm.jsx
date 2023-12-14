import { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import MenuItem from "@mui/material/MenuItem";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import IntakeFormApi from "../../api/forms/receptionintakeform";

const IntakeForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [isOnScholarship, setIsOnScholarship] = useState(false);

  const [initialValues, setInitialValues] = useState({
    CounsellorName: "",
    StudentID: "",
    StudentName:"",
    CurrentDate: "",
    CurrentTime: "",
    Position: "",
    Degree:"",
    Gender: "",
    StudentCategory: "",
    ScholarshipSpecification: "",
    Service: "",
  }
  )
  const handleScholarshipChange = (event) => {
    setIsOnScholarship(event.target.checked);
  };
  // Function to update form values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitialValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  }

  const handleFormSubmit = async () => {
    try {
      const response = await IntakeFormApi.create(initialValues);
      console.log("response", response);
      toast.success("Form submitted successfully!");
      navigate("/");
    } catch (error) {
      // Handle error appropriately
      console.error("Error:", error);
      toast.error("Failed to submit form");
    }
  };

  useEffect(() => {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const formattedDate = currentDate.toISOString().split("T")[0]; // Get the date in 'YYYY-MM-DD' format

    setInitialValues({
      ...initialValues,
      CurrentDate: formattedDate,
      CurrentTime: currentTime,
    });
  }, []);

  return (
    <Box
      sx={{
        // height: "100vh", // Center vertically
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box m="20px">
        <Toaster />

        <Header
          title="COUNSELING CENTER INTAKE FORM - RECEPTION "
          // subtitle="Summer Semester 2023"
        />

        <Formik
          initialValues={initialValues}
        >
          {({
            
            errors,
            touched,
            handleBlur,
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
                  // variant="filled"
                  required
                  type="text"
                  label="Current Date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={initialValues.CurrentDate} // Update to use CurrentDate
                  name="currentDate"
                  error={!!touched.currentDate && !!errors.currentDate}
                  helperText={touched.currentDate && errors.currentDate}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  // variant="filled"
                  required
                  type="text"
                  label="Current Time"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={initialValues.CurrentTime}
                  name="currentTime"
                  error={!!touched.currentTime && !!errors.currentTime}
                  helperText={touched.currentTime && errors.currentTime}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  // variant="filled"
                  required
                  type="text"
                  label="Student Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={initialValues.StudentName}
                  name="StudentName"
                  error={!!touched.StudentName && !!errors.StudentName}
                  helperText={touched.StudentName && errors.StudentName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  // variant="filled"
                  required
                  type="text"
                  label="Student ID Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={initialValues.StudentID}
                  name="StudentID"
                  error={!!touched.StudentID && !!errors.StudentID}
                  helperText={touched.StudentID && errors.StudentID}
                  sx={{ gridColumn: "span 2" }}
                />

                <TextField
                  fullWidth
                  select
                  // variant="filled"
                  required
                  type="text"
                  label="Gender"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={initialValues.Gender}
                  name="Gender"
                  error={!!touched.Gender && !!errors.Gender}
                  helperText={touched.Gender && errors.Gender}
                  sx={{ gridColumn: "span 4" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                </TextField>
                <TextField
                  fullWidth
                  select
                  // variant="filled"
                  required
                  type="text"
                  label="Client Category"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={initialValues.Position}
                  name="Position"
                  error={!!touched.Position && !!errors.Position}
                  helperText={touched.Position && errors.Position}
                  sx={{ gridColumn: "span 2" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={20}>Student</MenuItem>
                  <MenuItem value={10}>Staff</MenuItem>
                  <MenuItem value={20}>Faculty</MenuItem>
                  <MenuItem value={40}>Alumni</MenuItem>

                  <MenuItem value={20}>Other</MenuItem>
                </TextField>
                <TextField
                  fullWidth
                  select
                  // variant="filled"
                  required
                  type="text"
                  label="Degree"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={initialValues.Degree}
                  name="Degree"
                  error={!!touched.Degree && !!errors.Degree}
                  helperText={touched.Degree && errors.Degree}
                  sx={{ gridColumn: "span 2" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {/* <MenuItem value={10}>None</MenuItem> */}
                  <MenuItem value={20}>Undergraduate</MenuItem>
                  <MenuItem value={30}>Graduate</MenuItem>
                </TextField>

                <Typography>On Scholarship?</Typography>
                <FormGroup sx={{ gridColumn: "span 2", display: "block" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isOnScholarship}
                        onChange={handleScholarshipChange}
                      />
                    }
                    label="Yes"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={!isOnScholarship}
                        onChange={(e) =>
                          handleScholarshipChange({
                            target: { checked: !e.target.checked },
                          })
                        }
                      />
                    }
                    label="No"
                  />
                </FormGroup>
                <TextField
                  fullWidth
                  // variant="filled"
                  type="text"
                  label="Specify"
                  disabled={!isOnScholarship} // Disable the field if isOnScholarship is false
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={initialValues.ScholarshipSpecification}
                  name="Specify"
                  error={
                    !!touched.ScholarshipSpecification &&
                    !!errors.ScholarshipSpecification
                  }
                  helperText={
                    touched.ScholarshipSpecification &&
                    errors.ScholarshipSpecification
                  }
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  select
                  required
                  // variant="filled"
                  type="text"
                  label="Service Sought "
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={initialValues.Service}
                  name="Service"
                  error={!!touched.Service && !!errors.Service}
                  helperText={touched.Service && errors.Service}
                  sx={{ gridColumn: "span 2" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Personal Counseling</MenuItem>
                  <MenuItem value={20}>VCT</MenuItem>
                  <MenuItem value={30}>Consultation Services</MenuItem>
                  <MenuItem value={30}>Other</MenuItem>
                </TextField>
                <TextField
                  fullWidth
                  // variant="filled"
                  type="text"
                  select
                  label="Counselor Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={initialValues.CounsellorName}
                  name="CounsellorName"
                  error={!!touched.CounsellorName && !!errors.CounsellorName}
                  helperText={touched.CounsellorName && errors.CounsellorName}
                  sx={{ gridColumn: "span 2" }}
                >
                  <MenuItem value="Lucy">Lucy Kung'u</MenuItem>
            <MenuItem value="Lydia">Lydia Winda</MenuItem>
            <MenuItem value="Patrick">Patrick Obel</MenuItem>
            <MenuItem value="Adolphine">Adolphine Nyandoro</MenuItem>

                  </TextField>
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" variant="outlined" sx={{
                            backgroundColor: "rgba(43,57,144, 0.7)",

                }} onClick={handleFormSubmit}>
                  Save and Schedule Session
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};


export default IntakeForm;
