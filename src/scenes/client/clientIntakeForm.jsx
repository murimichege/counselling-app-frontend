import { useState } from "react";
import { Box, Button, TextField,FormGroup,FormControlLabel,Checkbox } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import MenuItem from "@mui/material/MenuItem";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import userApi from "../../api/users";
const ClientIntakeForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  const handleFormSubmit = async () => {
    toast.success("User Created Successfully!");
    navigate("/users");

    // try {
    // 	const res = await userApi.create(initialValues);
    // 	res.status(201);
    // } catch (error) {
    // 	res.status(401).json({ message: error });
    // }
  };

  return (
    <Box
  sx={{
    display: "flex",
    margin:"auto",
    alignItems: "center",
    justifyContent: "center",
    
  }}
>
<Box m="20px" >
      <Toaster />

      <Header title="COUNSELLING CENTER INTAKE FORM " subtitle="Summer Semester 2023" />

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
              margin="auto"
              
              
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                justifyContent: "center",
                alignItems:"center",
                
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
                name="StudentID"
                error={!!touched.FullName && !!errors.FullName}
                helperText={touched.FullName && errors.FullName}
                sx={{ gridColumn: "span 2" }}
              />
               <TextField
                fullWidth
                // variant="filled"
                type="text"
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
                label="Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Date}
                name="Date"
                error={!!touched.Date && !!errors.Date}
                helperText={touched.Date && errors.Date}
                sx={{ gridColumn: "span 2" }}
              />
                 <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Time"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Time}
                name="Time"
                error={!!touched.Time && !!errors.Time}
                helperText={touched.Time && errors.Time}
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
           

              <TextField
                fullWidth
                select
                // variant="filled"
                type="text"
                label="ClientCategory"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Referee}
                name="ClientCategory"
                error={!!touched.ClientCategory && !!errors.ClientCategory}
                helperText={touched.ClientCategory && errors.ClientCategory}
                sx={{ gridColumn: "span 2" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Student</MenuItem>
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
                label="Under Graduate Year of Study"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Referee}
                name="UnderGraduateYearofStudy"
                error={!!touched.GraduateYearofStudy && !!errors.GraduateYearofStudy}
                helperText={touched.GraduateYearofStudy && errors.GraduateYearofStudy}
                sx={{ gridColumn: "span 2" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Freshman</MenuItem>
                <MenuItem value={20}>Sophomore</MenuItem>
                <MenuItem value={30}>Junior</MenuItem>
                <MenuItem value={20}>Senior</MenuItem>
              </TextField>
              <TextField
                fullWidth
                select
                // variant="filled"
                type="text"
                label="Graduate Year of Study"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Referee}
                name="GraduateYearofStudy"
                error={!!touched.GraduateYearofStudy && !!errors.GraduateYearofStudy}
                helperText={touched.GraduateYearofStudy && errors.GraduateYearofStudy}
                sx={{ gridColumn: "span 2" }}
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
                label="Referee"
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
                <MenuItem value={20}>Dean of your school</MenuItem>
                <MenuItem value={20}>Dean of Students</MenuItem>
              </TextField>
              <TextField
                fullWidth
                select
                // variant="filled"
                type="text"
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
                <MenuItem value={10}>Other</MenuItem>
                <MenuItem value={20}>On Campus</MenuItem>
                <MenuItem value={30}>Nearby hostels</MenuItem>
                <MenuItem value={40}>Off Campus</MenuItem>
              </TextField>
              <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Phone}
                name="Phone Number"
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
                onChange={handleChange}
                value={values.Email}
                name="Phone Number"
                error={!!touched.Email && !!errors.Email}
                helperText={touched.Email && errors.Email}
                sx={{ gridColumn: "span 2" }}
              />
              <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="First Visit" />
      <FormControlLabel required control={<Checkbox />} label="Return Visit" />
    </FormGroup>
              <TextField
                fullWidth
                select
                // variant="filled"
                type="text"
                label="Marital Status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.MaritalStatus}
                name="Marital Status"
                error={!!touched.MaritalStatus && !!errors.MaritalStatus}
                helperText={touched.MaritalStatus && errors.MaritalStatus}
                sx={{ gridColumn: "span 2" }}
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

                <MenuItem value={80}>Consultation Services</MenuItem>

            
              </TextField>
              <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Next of kin"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Nextofkin}
                name="Nextofkin"
                error={!!touched.Nextofkin && !!errors.Nextofkin}
                helperText={touched.Nextofkin && errors.Nextofkin}
                sx={{ gridColumn: "span 2" }}
              />
               <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Kin Relation"
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
                label="KinEmail"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.KinEmail}
                name="lastName"
                error={!!touched.KinEmail && !!errors.KinEmail}
                helperText={touched.KinEmail && errors.KinEmail}
                sx={{ gridColumn: "span 2" }}
              />                                                        
             
               <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Kin Telephone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.KinTelephoneNumber}
                name="KinTelephoneNumber"
                error={!!touched.KinTelephoneNumber && !!errors.KinTelephoneNumber}
                helperText={touched.KinTelephoneNumber && errors.KinTelephoneNumber}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Forward to Counsellor
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>


</Box>
   
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  CounsellorName: yup.string().required("required"),
  StudentID: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address: yup.string().required("required"),
  role: yup.string().required("required"),
  nationalidentity: yup.string().required("required"),
});
const initialValues = {
  StudentID: "",
  FullName:"",
  CurrentDate: "",
  CurrentTime: "",
  Gender:"",
  Nationality:"",
  Major:"",
  Age:16,
  Religion:"",
  Role: "",
  ClientCategory: "",
  Service:"", 
  GraduateYearofStudy:"",
  Referee:"", 
  Residence:"", 
  ClientContact:"", 
  ClientEmailAddress:"", 
  MaritalStatus:"",
  Nextofkin:"",
  KinRelation:"",
  KinEmail:"",
  KinTelephoneNumber:""





};

export default ClientIntakeForm;
