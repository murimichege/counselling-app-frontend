import React, { useState } from "react";
import { Box, Typography, MenuItem, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import { mockDataTeam } from "../../data/mockData";
import SessionDocuments from "./SessionDocuments";
import useMediaQuery from "@mui/material/useMediaQuery";
// import Documentlist from './DocumentList'

const SessionItem = () => {
  const { id } = useParams();
  const [user, setUser] = useState(mockDataTeam);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [dialogOpen, setDialogOpen] = useState(false);

  //   useEffect(() => {
  //     const getAccountDetail = async () => {
  //       try {
  //         const res = await userApi.getOne(id);
  //         console.log(res);
  //         setUser(res);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     getAccountDetail();
  //   }, [id]);

  const handleFormSubmit = (values) => {
    // Handle form submission logic
    console.log(values);
  };

  return (
    <Box m="20px">
      <Typography variant="h4" mb ={5}component="h1">
        Session
      </Typography>
      <AccountInfo
        user={user}
        handleFormSubmit={handleFormSubmit}
        isNonMobile={isNonMobile}
      />
    </Box>
  );
};

const AccountInfo = ({ user, handleFormSubmit, isNonMobile }) => {
  // const { name,  email, phone, age, access,verification } =
  //   user;
  const handleSubmit = (values) => {
    // Handle form submission
    handleFormSubmit(values);
  };

  const handleInputChange = () => {};
  return (
    <Formik
      initialValues={{
        name: user.name,
        email: user.email,
        phone: user.phone,
        age: user.age,
        access: user.access,
        verification: user.verification,
      }}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
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
              label="Name"
              value={values.name}
              sx={{ gridColumn: "span 2" }}
            />

            <TextField
              fullWidth
              label="Student ID"
              value={values.name}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              label="Phone Number"
              value={values.phone}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              label="Email address"
              value={values.email}
              sx={{ gridColumn: "span 2" }}
            />

            <TextField
              select
              fullWidth
              label="First Semester"
              name="Semester"
              value={values.SessionsHeld}
              inputProps={{
                style: { height: "auto" },
              }}
              onChange={handleInputChange}
              sx={{
               
                gridColumn: "span 2",
              }}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={10}>Summer</MenuItem>
              <MenuItem value={20}>Fall</MenuItem>
              <MenuItem value={30}>Spring</MenuItem>
            </TextField>
            <TextField
              select
              fullWidth
              label="Year"
              name="Year"
              value={values.year}
              inputProps={{
                style: { height: "auto" },
              }}
              onChange={handleInputChange}
              sx={{
               
                gridColumn: "span 2",
              }}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={10}>2023</MenuItem>
              <MenuItem value={20}>2024</MenuItem>
              <MenuItem value={30}>2025</MenuItem>
              <MenuItem value={30}>2026</MenuItem>
              <MenuItem value={30}>2027</MenuItem>
            </TextField>
          </Box>
          <Box>
          </Box>
          <SessionDocuments/>
        </form>
      )}
    </Formik>
  );
};

export default SessionItem;
