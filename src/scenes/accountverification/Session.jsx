import React, { useState } from "react";
import { Box, Typography, MenuItem, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import { mockDataTeam } from "../../data/mockData";
import useMediaQuery from "@mui/material/useMediaQuery";
// import Documentlist from './DocumentList'

const AccountDetail = () => {
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
      <Typography variant="h4" component="h1">
        Session
      </Typography>
      {/* {user && <AccountInfo user={user} handleFormSubmit={handleFormSubmit} />} */}
      <AccountInfo
        user={user}
        handleFormSubmit={handleFormSubmit}
        isNonMobile={isNonMobile}
      />
    </Box>
  );
};
// id: 2,
//     name: "Eddie",
//     email: "eddiee@gmail.com",
//     age: 42,
//     phone: "(421)314-2288",
//     access: "Developer",
//  verification:"verified"
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
              disabled
              label="Name"
              value={values.name}
              sx={{ gridColumn: "span 2" }}
            />

            <TextField
              fullWidth
              disabled
              label="Student ID"
              value={values.name}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              disabled
              label="Phone Number"
              value={values.phone}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              disabled
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
            <Typography variant="h3">Session Attachments</Typography>
          </Box>
          {/* <Documentlist/> */}
          {/* <Box display="flex" justifyContent="flex-end" mt={4}>
            <Button type="submit" variant="contained" color="primary">
             Verify User
            </Button>
          </Box> */}
        </form>
      )}
    </Formik>
  );
};

export default AccountDetail;
