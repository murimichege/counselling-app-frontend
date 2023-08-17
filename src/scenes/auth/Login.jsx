import { useEffect, useState } from "react";
// import { isAuthenticated } from "handlers/authHandler"
import { useNavigate } from "react-router-dom";
// import login from '../../assets/login.jpg'
import {
  Box,
  Card,
  FormControl,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
// import authApi from 'apis/Users/authAPI'
// import logo from 'assets/logo.png'
import { Eye, EyeSlash } from "phosphor-react";
import logo from "../../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [loginErr, setLoginErr] = useState();
  const [username, setUserName] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [onSubmit, setOnSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // useEffect(() => {
  //     const checkToken = async () => {
  //         const res = await isAuthenticated()
  //         // check whether the user is already onboarded.
  //         if (res) return navigate('/')
  //         console.log("+++++++++++++++++++++" + res)
  //     }
  //     checkToken()
  // }, [])

  const loginSubmit = async () => {
    if (onSubmit) return;
    setLoginErr(undefined);

    const checkErr = {
      username: username.trim().length === 0,
      password: password.trim().length === 0,
    };
    setUserName(checkErr.Email);
    setPasswordErr(checkErr.password);
    if (checkErr.Email || checkErr.password) return;

    const params = {
      username,
      password,
    };
    setOnSubmit(true);
    // try {
    //     const res = await authApi.login(params)
    //     localStorage.setItem('token', res.token)
    //     // const isOnBoarded = await authApi.onBoarding()

    //     setOnSubmit(false)
    //     navigate('/')
    // } catch(err) {
    //     if (err.response.status === 401) {
    //         setLoginErr(err.response.data)
    //     }
    //     setOnSubmit(false)
    // }
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
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
          width: "12%",
          height: "auto",
        }}
      />
      <Typography variant="h3" textAlign="center" mb="4rem" fontWeight="700">
        Login{" "}
      </Typography>
      <TextField
        sx={{ width: "30%" }}
        label="User Name"
        variant="outlined"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        error={userErr}
      />
      <TextField
        sx={{ marginTop: "40px", width: "30%" }}
        label="Password"
        variant="outlined"
        value={password}
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <Eye /> : <EyeSlash />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={(e) => setPassword(e.target.value)}
        error={passwordErr}
      />
      {loginErr && (
        <FormControl>
          <Typography color="error">{loginErr}</Typography>
        </FormControl>
      )}
      <LoadingButton
        variant="outlined"
        size="large"
        sx={{ marginTop: "1rem", backgroundColor: "rgba(43,57,144, 0.7)" }}
        onClick={loginSubmit}
      >
        Sign in
      </LoadingButton>
    </Box>
  );
};

export default Login;
