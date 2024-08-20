import React, { useState } from "react";
import { TextField, Button, Paper, Container } from "@mui/material";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "./security/AuthProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/patient/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const {firstName} = data;
        
        login(firstName); 
        toast.success("Login successful!");
        setTimeout(() => {
          navigate("/");
        }, 2000); // Delay for toast
      } else {
        toast.error("Login failed! Please check your credentials.");
        setShowErrorMessage(true);
      }
    } catch (error) {
      toast.error("An error occurred during login!");
    }
  };

  return (
    <div>
      <Navbar />
      <Container className="p-3">
        <h1 className="text-4xl align-middle font-extrabold mt-8">
          Login Form
        </h1>
        {showErrorMessage && (
          <div className="errorMessage align-middle font-bold mt-4">
            Authentication Failed. Check your Credentials
          </div>
        )}
        <Paper elevation={3} className="mt-8 p-4">
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              className="m-5"
              id="email"
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              value={email}
              fullWidth
              onChange={handleEmailChange}
            />
            <TextField
              className="m-2"
              id="password"
              type="password"
              name="password"
              label="Password"
              variant="outlined"
              value={password}
              fullWidth
              onChange={handlePasswordChange}
            />
            <div className="m-3">
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </div>
            <div className="p-3">
              <Link to="/register" className="mb-3">
                Don't have an account? Sign Up
              </Link>
            </div>
          </form>
        </Paper>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          draggable
        />
      </Container>
    </div>
  );
}

export default Login;
