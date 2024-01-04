import { useState, useEffect } from "react";
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
import { isAuthenticated } from "../../handlers/authHandler";

const Login = () => {
  const navigate = useNavigate();
  const [loginErr, setLoginErr] = useState("");
  const [authValues, setAuthValues] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = async () => {
    try {
      const response = await authApi.login(authValues);
      console.log("response", response);
      toast.success("User authenticated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to login. Please contact IT");
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      const res = await isAuthenticated();
      if (res) return navigate('/');
    };
    checkToken();
  }, []);

  return (
    <>
      <Toaster/>
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
        >
          Welcome to the Counseling Center
        </Typography>
        <TextField
          sx={{ width: "80%", maxWidth: "300px", marginBottom: "1rem" }}
          label="Email"
          variant="outlined"
          value={authValues.email}
          onChange={(e) => setAuthValues({ ...authValues, email: e.target.value })}
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
          onChange={(e) => setAuthValues({ ...authValues, password: e.target.value })}
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
    </>
  );
};

export default Login;
