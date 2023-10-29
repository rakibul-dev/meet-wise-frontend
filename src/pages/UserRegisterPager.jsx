import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const UserRegisterPager = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const handleSubmit = async () => {
    console.log({ userName, password });

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/user/register",
        { userName, password, email, role: "customer" },
        {
          "Content-Type": "application/json",
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        navigate("/login");
        // Login successful, you can redirect to the dashboard or perform other actions.
        console.log("Logged in successfully");
      }
    } catch (error) {
      console.log(error);
    }
    // const response = await fetch("http://localhost:5000/auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username: "rakib", password: "asdasdasd" }),
    // });

    // if (response.status === 200) {
    //   // Handle successful login
    // } else {
    //   // Handle login failure
    // }
  };
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={4}>
          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h4">Register</Typography>
            <TextField
              type="text"
              label="user name"
              fullWidth
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={userName}
            />
            <TextField
              type="text"
              label="email"
              fullWidth
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <TextField
              type="password"
              label="password"
              fullWidth
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                handleSubmit();
              }}
            >
              Register
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserRegisterPager;
