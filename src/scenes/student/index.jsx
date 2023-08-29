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

import userApi from "../../api/users";
const StudentBookingForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [initialValues, setValues] = useState({
  
    StudentID: "",
    preferedDate: "",
    preferedTime: "",
    Name: "",
    Email: "",
    PhoneNumber:"",
    Notes: "",
  });
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
  // useEffect(() => {
  //   const currentDate = new Date();
  //   const currentTime = currentDate.toLocaleTimeString([], {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   });
  //   const formattedDate = currentDate.toISOString().split("T")[0]; // Get the date in 'YYYY-MM-DD' format

  //   setValues({
  //     ...initialValues,
  //     CurrentDate: formattedDate,
  //     CurrentTime: currentTime,
  //   });
  //   console.log("currentDate", currentDate);
  //   console.log("currenttime", currentTime);
  // }, []);
  return (
    <Box
      sx={{
        height: "100vh", // Center vertically
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box m="20px">
        <Toaster />

        <Header
          title="Book a Counselling Session"
          subtitle="Summer Semester 2023"
        />

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
                  label=" Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Name}
                  name="Name"
                  error={!!touched.Name && !!errors.Name}
                  helperText={touched.Name && errors.Name}
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
                  name="Email Address"
                  error={!!touched.Email && !!errors.Email}
                  helperText={touched.Email && errors.Email}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  // variant="filled"
                  type="text"
                  label="Phone Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.PhoneNumber}
                  name="Phone Number"
                  error={!!touched.PhoneNumber && !!errors.PhoneNumber}
                  helperText={touched.PhoneNumber && errors.PhoneNumber}
                  sx={{ gridColumn: "span 2" }}
                />

                <TextField
                  fullWidth
                  // variant="filled"
                  type="text"
                  label="Prefered Date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.preferedDate}
                  name="preferedDate"
                  error={!!touched.preferedDate && !!errors.preferedDate}
                  helperText={touched.preferedDate && errors.preferedDate}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  // variant="filled"
                  type="text"
                  label="Prefered Time"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.preferedTime}
                  name="preferedTime"
                  error={!!touched.preferedTime && !!errors.preferedTime}
                  helperText={touched.preferedTime && errors.preferedTime}
                  sx={{ gridColumn: "span 2" }}
                />
               <TextField
                  fullWidth
                  // variant="filled"
                  type="text"
                  label="Notes"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Notes}
                  name="Notes"
                  error={!!touched.Notes && !!errors.Notes}
                  helperText={touched.Notes && errors.Notes}
                  sx={{ gridColumn: "span 4", height:"13vh" }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="outlined">
                  Book a Counselling Session
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
  Notes: yup.string().required("required"),
  StudentID: yup.string().required("required"),
  Email: yup.string().email("invalid email").required("required"),
  preferedTime: yup.string().required("required"),
  Name: yup.string().required("required"),
  preferedDate: yup.string().required("required"),
  PhoneNumber: yup.string().required("required"),

});

export default StudentBookingForm;
