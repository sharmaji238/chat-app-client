import { useFileHandler, useInputValidation, useStrongPassword } from '6pp';
import {
  Button,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
  Box,
  Avatar,
  Icon,
  IconButton,
  Stack
} from '@mui/material';
import { useState } from 'react';
import { usernameValidator } from '../utils/validation';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { VishuallyHiddenInput } from '../components/styles/StyledComponent';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  // const onSubmit

  const name = useInputValidation("")
  const bio = useInputValidation("")
  const username = useInputValidation("", usernameValidator)
  const password = useStrongPassword()

  const avatar = useFileHandler("single")

  const handleLogin = (e) => {
    e.preventDefault();
  }

  const handleSignup = (e) => {
    e.preventDefault();
  }
  return (
    <div style={{ backgroundImage: 'linear-gradient(45deg, #f8cdda, #1d2b64)' }}>
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {isLoggedIn ? (
          <>
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>
            <Box
              component="form"              
              onSubmit={handleSignup}
              sx={{ width: '100%', mt: 2 }}
              noValidate
              autoComplete="off"
            
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />

              <Button
                sx={{ mt: 2 }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>

              <Divider sx={{ my: 3 }}>OR</Divider>

              <Button
                fullWidth
                variant="text"
                onClick={toggleLogin}
              >
                Sign Up Instead
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Typography variant="h5" 
            // gutterBottom
            >
              Sign Up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSignup}
              sx={{ width: '100%', mt: 2 }}
              noValidate
              autoComplete="off">

              <Stack position={"relative"} width={"7.5rem"} mx={"auto"}>
                <Avatar
                src={avatar.preview}
                  sx={{
                    width: "7.5rem",
                    height: "7.5rem",
                    margin: '0 auto',
                    objectFit: "contain",
                    // backgroundColor: 'primary.main',
                  }}

                />
                <IconButton
                  size="small"
                   sx={{
                    width: 30,
                    height: 30,
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon fontSize="xs"/>
                    <VishuallyHiddenInput type='file' onChange={avatar.changeHandler}/>
                  </>
                </IconButton>
              </Stack>

              {avatar.error && (
                  <Typography
                    m={"1rem auto"}
                    width={"fit-content"}
                    display={"block"}
                    color="error"
                    variant="caption"
                  >
                    {avatar.error}
                  </Typography>
                )}
              
              <TextField
                required
                fullWidth
                size="small"
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              {name.error && (<Typography color="error" variant="caption">
                {name.error}
              </Typography>)}
              <TextField
                required
                fullWidth
                size="small"
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              {bio.error && (
                <Typography color="error" variant="caption">
                  {bio.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                size="small"
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}

              <TextField
                required
                fullWidth
                size="small"
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              // disabled={isLoading}
              >
                Sign Up
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>

              <Button
                // disabled={isLoading}
                fullWidth
                variant="text"
                onClick={toggleLogin}
              >
                Login Instead
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
    </div>
  );
};

export default Login;



{/* <Typography variant="h6" gutterBottom>
              Please log in to continue.
            </Typography>
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              color="primary"
              onClick={toggleLogin}
            >
              Go to Login
            </Button> */}
