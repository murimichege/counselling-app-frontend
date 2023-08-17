import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import MenuItem from "@mui/material/MenuItem";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import userApi from "../../api/users";
const IntakeForm = () => {
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
    height: "100vh", // Center vertically
    display: "flex",
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
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Student Id Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.StudentID}
                name="StudentID"
                error={!!touched.StudentID && !!errors.StudentID}
                helperText={touched.StudentID && errors.StudentID}
                sx={{ gridColumn: "span 2" }}
              />
               <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Counsellor Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.CounsellorName}
                name="CounsellorName"
                error={!!touched.CounsellorName && !!errors.CounsellorName}
                helperText={touched.CounsellorName && errors.CounsellorName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Current Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Current Time"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nationalidentity}
                name="nationalidentity"
                error={!!touched.nationalidentity && !!errors.nationalidentity}
                helperText={touched.nationalidentity && errors.nationalidentity}
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
                label="Role"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.role}
                name="role"
                error={!!touched.role && !!errors.role}
                helperText={touched.role && errors.role}
                sx={{ gridColumn: "span 2" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Staff</MenuItem>
                <MenuItem value={20}>Student</MenuItem>
              
              </TextField>
              <TextField
                fullWidth
                select
                // variant="filled"
                type="text"
                label="Student Category"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.StudentCategory}
                name="role"
                error={!!touched.StudentCategory && !!errors.StudentCategory}
                helperText={touched.StudentCategory && errors.StudentCategory}
                sx={{ gridColumn: "span 2" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>None</MenuItem>
                <MenuItem value={20}>Undergraduate</MenuItem>
                <MenuItem value={30}>Graduate</MenuItem>
                <MenuItem value={40}>Alumni</MenuItem>
                <MenuItem value={50}>Scholarship</MenuItem>
              </TextField>
              <TextField
                fullWidth
                select
                // variant="filled"
                type="text"
                label="Service Sought Form"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Service}
                name="Service"
                error={!!touched.Service && !!errors.Service}
                helperText={touched.Service && errors.Service}
                sx={{ gridColumn: "span 2" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Personal Counselling</MenuItem>
                <MenuItem value={20}>VCT</MenuItem>
                <MenuItem value={30}>Consultation Services</MenuItem>
            
              </TextField>
              
              
             
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Forward to Receptionist
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
  CounsellorName: "",
  StudentID: "",
  CurrentDate: "",
  CurrentTime: "",
  role: "",
  StudentCategory: "",
  Service:"",
};

export default IntakeForm;
