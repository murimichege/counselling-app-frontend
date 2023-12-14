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
import toast, { Toaster } from "react-hot-toast";
import authApi from '../../api/users/auth'
import { Eye, EyeSlash } from "phosphor-react";
import logo from "../../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [loginErr, setLoginErr] = useState();
  const [authValues, setAuthValues] = useState({
    email:"",
    password:""
  })
  const [email, setEmail] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [onSubmit, setOnSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const handleFormSubmit = async (values) => {
    try {
      // Assuming 'userApi.create()' method exists and sends data to the server
    const response =   await authApi.login(authValues)
    console.log("response",response)
      toast.success("user authenticated successfully!");
      navigate("/");
    } catch (error) {
      // Handle error appropriately
      console.error("Error:", error);
      toast.error("Failed to authenticate");
    }
  };
  return (
    <Box
      sx={{
        height: "62vh",
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
          width: "20%",
          height: "auto",
        }}
      />
      <Typography
        variant="h3"
        textAlign="center"
        mb="1rem"
        fontWeight="700"
        // sx={{ fontSize: "1.5rem" }} // Adjust font size for mobile
      >
        Welcome to the Counseling Center
      </Typography>
      <TextField
        sx={{ width: "80%", maxWidth: "300px", marginBottom: "1rem" }}
        label="Email"
        variant="outlined"
        value={authValues.email}
        onChange={(e) =>setAuthValues(e.target.value)}
        error={userErr}
      />
      <TextField
        sx={{ width: "80%", maxWidth: "300px", marginBottom: "1rem" }}
        label="Password"
        variant="outlined"
        value={authValues.password}
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
        onClick={handleFormSubmit}
      >
        Sign in
      </LoadingButton>
    </Box>
  );
};

export default Login;
