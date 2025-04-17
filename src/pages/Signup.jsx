import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  TextField,
  Typography,
  Link,
  Divider,
  Card,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Google } from "@mui/icons-material";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  width: "100%",
  margin: "auto",
  padding: theme.spacing(4),
  boxShadow: theme.shadows[10],
  borderRadius: theme.spacing(2),
}));

const SignUpPage = () => {
  const [emailError, setEmailError] = useState < boolean > false;
  const [emailErrorMessage, setEmailErrorMessage] = useState < string > "";
  const [passwordError, setPasswordError] = useState < boolean > false;
  const [passwordErrorMessage, setPasswordErrorMessage] =
    useState < string > "";
  const [confirmPasswordError, setConfirmPasswordError] =
    useState < boolean > false;
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState < string > "";

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    if (!confirmPassword.value || confirmPassword.value !== password.value) {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage("Passwords do not match.");
      isValid = false;
    } else {
      setConfirmPasswordError(false);
      setConfirmPasswordErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateInputs()) {
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirm-password"),
    });
    // Add your sign-up logic here (e.g., API call)
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right, #e3f2fd, #fff)",
          padding: 2,
        }}
      >
        <StyledCard>
          <Typography variant="h5" component="h1" gutterBottom>
            Create an Account 🚀
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={3}>
            Join us by signing up today
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              error={emailError}
              helperText={emailErrorMessage}
            />

            <TextField
              fullWidth
              label="Password"
              margin="normal"
              type="password"
              name="password"
              id="password"
              autoComplete="new-password"
              required
              error={passwordError}
              helperText={passwordErrorMessage}
            />

            <TextField
              fullWidth
              label="Confirm Password"
              margin="normal"
              type="password"
              name="confirm-password"
              id="confirm-password"
              autoComplete="new-password"
              required
              error={confirmPasswordError}
              helperText={confirmPasswordErrorMessage}
            />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mt: 1 }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="I agree to the terms"
              />
              <Link href="#" variant="body2">
                Need help?
              </Link>
            </Stack>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Sign Up
            </Button>

            <Divider>OR</Divider>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<Google />}
              sx={{ mt: 2 }}
              onClick={() => alert("Sign up with Google")}
            >
              Sign up with Google
            </Button>

            <Typography mt={3} align="center">
              Already have an account?{" "}
              <Link href="#" variant="body2">
                Login
              </Link>
            </Typography>
          </Box>
        </StyledCard>
      </Box>
    </>
  );
};

export default SignUpPage;
