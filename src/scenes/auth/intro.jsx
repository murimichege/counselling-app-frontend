import { useEffect, useState } from "react";
// import { isAuthenticated } from "handlers/authHandler"
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  Box,
  Card,
  FormControl,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const IntroPage = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [service, setService] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  // useEffect(() => {
  //     const checkToken = async () => {
  //         const res = await isAuthenticated()
  //         // check whether the user is already onboarded.
  //         if (res) return navigate('/')
  //         console.log("+++++++++++++++++++++" + res)
  //     }
  //     checkToken()
  // }, [])

  // const loginSubmit = async () => {
  //   if (onSubmit) return;
  //   setLoginErr(undefined);

  //   const checkErr = {
  //     Email: Email.trim().length === 0,
  //     password: password.trim().length === 0,
  //   };
  //   setEmailErr(checkErr.Email);
  //   setPasswordErr(checkErr.password);
  //   if (checkErr.Email || checkErr.password) return;

  //   const params = {
  //     Email,
  //     password,
  //   };
  //   setOnSubmit(true);
  //   // try {
  //   //     const res = await authApi.login(params)
  //   //     localStorage.setItem('token', res.token)
  //   //     // const isOnBoarded = await authApi.onBoarding()

  //   //     setOnSubmit(false)
  //   //     navigate('/')
  //   // } catch(err) {
  //   //     if (err.response.status === 401) {
  //   //         setLoginErr(err.response.data)
  //   //     }
  //   //     setOnSubmit(false)
  //   // }
  // };

  const clickNext = () => {
    navigate("/Login");
  };
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        margin:"auto",
        "& .MuiTextField-root": { mb: 5 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "5rem 1rem",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        sm={{
          width: "18%",
          height: "auto",
        }}
      />
      <Typography variant="h3" textAlign="center" mb="4rem" fontWeight="700">
        Welcome to the Counselling Centre
      </Typography>
 
      <FormControl
        sx={{
          width: "40%",
          marginTop: "30px",
        }}
      >
        <InputLabel id="demo-simple-select-label">Choose service</InputLabel>

        <Select
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={service}
          label="Service"
          onChange={handleServiceChange}
        >
          <MenuItem value={10}>VCT services</MenuItem>
          <MenuItem value={20}>Psychological counseling</MenuItem>
          <MenuItem value={20}>Consultation services </MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="outlined"
        size="large"
        sx={{
          marginTop: "1rem",
          backgroundColor: "rgba(43,57,144, 0.7)",
          width: "40%",
          color: "white",
        }}
        onClick={clickNext}
      >
        Proceed
      </Button>
    </Box>
  );
};

export default IntroPage;
