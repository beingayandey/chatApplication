// LoginPage.tsx
import React from "react";
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  TextField,
  Typography,
  Divider,
  Card,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Google } from "@mui/icons-material";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  width: "100%",
  margin: "auto",
  padding: theme.spacing(4),
  boxShadow: theme.shadows[10],
  borderRadius: theme.spacing(2),
}));

const LoginPage = () => {
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
            Welcome Back 👋
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={3}>
            Please login to your account
          </Typography>

          <Box component="form" noValidate>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              type="email"
              name="email"
              autoComplete="email"
              required
            />

            <TextField
              fullWidth
              label="Password"
              margin="normal"
              type="password"
              name="password"
              autoComplete="current-password"
              required
            />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mt: 1 }}
            >
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Stack>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Login
            </Button>

            <Divider>OR</Divider>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<Google />}
              sx={{ mt: 2 }}
            >
              Sign in with Google
            </Button>

            <Typography mt={3} align="center">
              Don’t have an account?{" "}
              <Link to="/signup" variant="body2">
                Sign up
              </Link>
            </Typography>
          </Box>
        </StyledCard>
      </Box>
    </>
  );
};

export default LoginPage;
