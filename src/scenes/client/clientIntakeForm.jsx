import { useState } from "react";
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
import FormHeader from "../../components/FormHeader";
import MenuItem from "@mui/material/MenuItem";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CounselorIntakeFormApi from "../../api/forms/counselorIntakeform";
const ClientIntakeForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);

  const handleFormSubmit = async () => {
    try {
      const response = await CounselorIntakeFormApi.create(values);
      console.log("response", response);
      toast.success("Form submitted successfully!");
      navigate("/");
    } catch (error) {
      // Handle error appropriately
      console.error("Error:", error);
      toast.error("Failed to submit form. Please contact IT support");
    }
  };

  // Function to update form values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        margin: "auto",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box m="20px">
        <Toaster />

        <FormHeader
          title="COUNSELING CENTER INTAKE FORM 2"
          subtitle="Summer Semester 2023"
        />

        <Formik initialValues={initialValues}>
          {({ errors, touched, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                margin="auto"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  fullWidth
                  // variant="filled"
                  type="text"
                  label="Official Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.FullName}
                  required
                  name="FullName"
                  error={!!touched.FullName && !!errors.FullName}
                  helperText={touched.FullName && errors.FullName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  // variant="filled"
                  type="text"
                  required
                  label="Client Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.ClientNo}
                  name="ClientNo"
                  error={!!touched.ClientNo && !!errors.ClientNo}
                  helperText={touched.ClientNo && errors.ClientNo}
                  sx={{ gridColumn: "span 2" }}
                />

                <TextField
                  fullWidth
                  // variant="filled"
                  type="text"
                  label="Major"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Major}
                  name="Major"
                  error={!!touched.Major && !!errors.Major}
                  helperText={touched.Major && errors.Major}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  // variant="filled"
                  type="number"
                  label="Age"
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Age}
                  name="Age"
                  error={!!touched.Age && !!errors.Age}
                  helperText={touched.Age && errors.Age}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  select
                  // variant="filled"
                  type="text"
                  label="Gender"
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Gender}
                  name="Gender"
                  error={!!touched.Gender && !!errors.Gender}
                  helperText={touched.Gender && errors.Gender}
                  sx={{ gridColumn: "span 2" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                </TextField>


                /**Review this  */
                <TextField
                  fullWidth
                  select
                  // variant="filled"
                  type="text"
                  label="ClientCategory"
                  required
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                    if (e.target.value !== "20") {
                      // If the selected value is not 'Undergraduate' (value='20')
                      setValues({
                        ...values,
                        UnderGraduateYearofStudy: "", // Resetting the UnderGraduateYearofStudy value
                        ClientCategory: e.target.value, // Update ClientCategory only if it's not Undergraduate
                      });
                    } else if (e.target.value !== "30") {
                      // If the selected value is not 'Graduate' (value='30')
                      setValues({
                        ...values,
                        GraduateYearofStudy: "", // Resetting the GraduateYearofStudy value
                        ClientCategory: e.target.value, // Update ClientCategory only if it's not Graduate
                      });
                    } else {
                      // No other category selected, keep the selected value
                      setValues({
                        ...values,
                        ClientCategory: e.target.value,
                      });
                    }
                  }}
                  
                  value={values.ClientCategory}
                  name="ClientCategory"
                  error={!!touched.ClientCategory && !!errors.ClientCategory}
                  helperText={touched.ClientCategory && errors.ClientCategory}
                  sx={{ gridColumn: "span 2" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={20}>Undergraduate</MenuItem>
                  <MenuItem value={30}>Staff</MenuItem>
                  <MenuItem value={20}>Graduate</MenuItem>
                  <MenuItem value={10}>Faculty</MenuItem>
                  <MenuItem value={10}>Alumni</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  select
                  // variant="filled"
                  type="text"
                  label="Undergraduate Year of Study"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.UnderGraduateYearofStudy}
                  name="UnderGraduateYearofStudy"
                  error={
                    !!touched.GraduateYearofStudy &&
                    !!errors.GraduateYearofStudy
                  }
                  helperText={
                    touched.GraduateYearofStudy && errors.GraduateYearofStudy
                  }
                  sx={{ gridColumn: "span 2" }}
                  disabled={values.ClientCategory !== "20"} // Disable if ClientCategory is not 'Undergraduate'
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Freshman</MenuItem>
                  <MenuItem value={20}>Sophomore</MenuItem>
                  <MenuItem value={30}>Junior</MenuItem>
                  <MenuItem value={40}>Senior</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  select
                  // variant="filled"
                  type="text"
                  label="Graduate Year of Study"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.GraduateYearofStudy}
                  name="GraduateYearofStudy"
                  error={
                    !!touched.GraduateYearofStudy &&
                    !!errors.GraduateYearofStudy
                  }
                  helperText={
                    touched.GraduateYearofStudy && errors.GraduateYearofStudy
                  }
                  sx={{ gridColumn: "span 2" }}
                  disabled={values.ClientCategory !== '30'} // Disable if ClientCategory is not 'Graduate'
                  >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>First</MenuItem>
                  <MenuItem value={20}>Second</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  select
                  // variant="filled"
                  type="text"
                  label="Refered By"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Referee}
                  name="Referee"
                  error={!!touched.Referee && !!errors.Referee}
                  helperText={touched.Referee && errors.Referee}
                  sx={{ gridColumn: "span 2" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Self</MenuItem>
                  <MenuItem value={20}>Peer Counselor</MenuItem>
                  <MenuItem value={10}>Friends</MenuItem>
                  <MenuItem value={20}>Lecturer</MenuItem>
                  <MenuItem value={10}>Academic Advisor</MenuItem>
                  <MenuItem value={10}>Registrar</MenuItem>
                  <MenuItem value={20}>Dean of School</MenuItem>
                  <MenuItem value={20}>Dean of Students</MenuItem>
                  <MenuItem value={20}>Other</MenuItem>
                </TextField>
                <TextField
                  fullWidth
                  // variant="filled"
                  type="text"
                  label="Specify"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.RefereeSpecification}
                  name="RefereeSpecification"
                  error={
                    !!touched.RefereeSpecification &&
                    !!errors.RefereeSpecification
                  }
                  helperText={
                    touched.RefereeSpecification && errors.RefereeSpecification
                  }
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  select
                  // variant="filled"
                  type="text"
                  required
                  label="Residence"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Residence}
                  name="Residence"
                  error={!!touched.Residence && !!errors.Residence}
                  helperText={touched.Residence && errors.Residence}
                  sx={{ gridColumn: "span 2" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={20}>On Campus</MenuItem>
                  <MenuItem value={30}>Nearby hostels</MenuItem>
                  <MenuItem value={40}>Off Campus</MenuItem>
                </TextField>
                <TextField
                  fullWidth
                  // variant="filled"
                  type="text"
                  label="Phone Number"
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Phone}
                  name="Phone"
                  error={!!touched.Phone && !!errors.Phone}
                  helperText={touched.Phone && errors.Phone}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  // variant="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  required
                  onChange={handleChange}
                  value={values.Email}
                  name="Email"
                  error={!!touched.Email && !!errors.Email}
                  helperText={touched.Email && errors.Email}
                  sx={{ gridColumn: "span 2" }}
                />
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="First Visit"
                  />
                  <FormControlLabel
                    // required
                    control={<Checkbox />}
                    label="Return Visit"
                  />
                </FormGroup>
                <TextField
                  fullWidth
                  select
                  // variant="filled"
                  type="text"
                  label="Marital Status"
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.MaritalStatus}
                  name="MaritalStatus"
                  error={!!touched.MaritalStatus && !!errors.MaritalStatus}
                  helperText={touched.MaritalStatus && errors.MaritalStatus}
                  sx={{ gridColumn: "span 4" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Single</MenuItem>
                  <MenuItem value={20}>Married, living together</MenuItem>
                  <MenuItem value={30}>Married, not living together</MenuItem>
                  <MenuItem value={40}>Steady partner</MenuItem>

                  <MenuItem value={50}>Separated</MenuItem>

                  <MenuItem value={60}>Divorced</MenuItem>

                  <MenuItem value={70}>Widowed</MenuItem>
                </TextField>
                <Typography
                  sx={{ mt: 1, mb: 2, gridColumn: "span 4" }}
                  variant="h4"
                >
                  Kin Details
                </Typography>
                <TextField
                  fullWidth
                  // variant="filled"
                  type="text"
                  label="Next of Kin Name"
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.NextofkinName}
                  name="Nextofkin"
                  error={!!touched.NextofkinName && !!errors.NextofkinName}
                  helperText={touched.NextofkinName && errors.NextofkinName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  // variant="filled"
                  type="text"
                  required
                  label=" Relation"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.KinRelation}
                  name="Kin Relation"
                  error={!!touched.KinRelation && !!errors.KinRelation}
                  helperText={touched.KinRelation && errors.KinRelation}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  // variant="filled"
                  type="text"
                  label="Email"
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.KinEmail}
                  name="KinEmail"
                  error={!!touched.KinEmail && !!errors.KinEmail}
                  helperText={touched.KinEmail && errors.KinEmail}
                  sx={{ gridColumn: "span 2" }}
                />

                <TextField
                  fullWidth
                  // variant="filled"
                  type="text"
                  required
                  label=" Telephone Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.KinTelephoneNumber}
                  name="KinTelephoneNumber"
                  error={
                    !!touched.KinTelephoneNumber && !!errors.KinTelephoneNumber
                  }
                  helperText={
                    touched.KinTelephoneNumber && errors.KinTelephoneNumber
                  }
                  sx={{ gridColumn: "span 2" }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{
                    backgroundColor: "rgba(43,57,144, 0.7)",
                  }}
                  onClick={handleFormSubmit}
                >
                  Save
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

const initialValues = {
  FullName: "", // Official Name
  ClientNo: "", // Client Number
  Major: "", // Major
  Age: 0, // Age (assuming it's a number)
  Gender: "", // Gender
  ClientCategory: "", // Client Category
  UnderGraduateYearofStudy: "", // Undergraduate Year of Study
  GraduateYearofStudy: "", // Graduate Year of Study
  Referee: "", // Referred By
  RefereeSpecification: "",
  Email: "", // Email
  Residence: "", // Residence
  Phone: "", // Phone Number
  MaritalStatus: "", // Marital Status
  NextofkinName: "", // Next of Kin
  KinRelation: "", // Relation of Next of Kin
  KinEmail: "", // Email of Next of Kin
  KinTelephoneNumber: "", // Telephone Number of Next of Kin
  semester: "",
  Year: "",
  // Add other fields as needed
};

export default ClientIntakeForm;
