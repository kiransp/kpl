import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// eslint-disable-next-line no-unused-vars

import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase-config";

const theme = createTheme();

export default function SignIn() {
  // const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const [emailErr, setEmailErr] = useState(false);
  const [pwErr, setPwErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    if (!email) {
      setEmailErr(true);
    } else if (!password) {
      setEmailErr(false);
      setPwErr(true);
    } else {
      setEmailErr(false);
      setPwErr(false);
      signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          console.log("auth ", auth);
          sessionStorage.setItem("isLoggedIn", true);
          sessionStorage.setItem("email", email);
          window.location.reload();
        })
        .catch((error) => alert("Invalid credentials"));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {emailErr ? (
              <span style={{ color: "#cc0000" }}>
                Please enter email address
              </span>
            ) : null}

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {pwErr ? (
              <span style={{ color: "#cc0000" }}>Please enter password</span>
            ) : null}
            {}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
