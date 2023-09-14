import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
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

  const loginSubmit = async () => {
    // ... (rest of the code)
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        margin:"auto",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "40%",
          height: "auto",
        }}
      />
      <Typography
        variant="h5"
        textAlign="center"
        mb="1rem"
        fontWeight="700"
        sx={{ fontSize: "1.5rem" }} // Adjust font size for mobile
      >
        Welcome to the Counseling Center
      </Typography>
      <TextField
        sx={{ width: "80%", maxWidth: "300px", marginBottom: "1rem" }}
        label="User Name"
        variant="outlined"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        error={userErr}
      />
      <TextField
        sx={{ width: "80%", maxWidth: "300px", marginBottom: "1rem" }}
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
        sx={{
          width: "80%",
          maxWidth: "300px",
          backgroundColor: "rgba(43,57,144, 0.7)",
        }}
        onClick={loginSubmit}
      >
        Sign in
      </LoadingButton>
    </Box>
  );
};

export default Login;
