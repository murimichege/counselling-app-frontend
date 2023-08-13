import { useEffect, useState } from 'react'
// import { isAuthenticated } from "handlers/authHandler"
import { useNavigate } from 'react-router-dom'

import { Box, Card, FormControl, TextField, Typography, InputAdornment,
    IconButton,Select,MenuItem, InputLabel } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
  

const IntroPage = () => {
    const navigate = useNavigate()
    const [loginErr, setLoginErr] = useState()
    const [Email, setEmail] = useState('')
    const [emailErr, setEmailErr] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordErr, setPasswordErr] = useState(false)
    const [onSubmit, setOnSubmit] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
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

    const loginSubmit =  async() => {
        if (onSubmit) return
        setLoginErr(undefined)

        const checkErr = {
            Email: Email.trim().length === 0,
            password: password.trim().length === 0
        }
        setEmailErr(checkErr.Email)
        setPasswordErr(checkErr.password)
        if (checkErr.Email || checkErr.password) return

        const params = {
            Email,
            password
        }
        setOnSubmit(true)
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
    }

    return (
          <Box
               sx={{
                height: '100%',
                width: '50%',
                '& .MuiTextField-root': { mb: 5 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '5rem 1rem',
              }}
          >
              <Typography
                  variant='h5'
                  textAlign='center'
                  mb='4rem'
                  fontWeight='700'
              >
                 
              </Typography>
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Choose Role</InputLabel>

              <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Student</MenuItem>
          <MenuItem value={20}>Staff</MenuItem>
          <MenuItem value={30}>Visitor</MenuItem>
        </Select>
              </FormControl>
          
              <LoadingButton
                  variant='contained'
                  fullWidth
                  size='large'
                  sx={{ marginTop: '1rem',backgroundColor:"#673ab7" }}
                  onClick={loginSubmit}
              >
                  Sign in
              </LoadingButton>
          </Box>
    

  
    )
}

export default IntroPage