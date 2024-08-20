import React, { useState } from "react";
import Navbar from "./Navbar";
import { TextField, Button, Paper, Container } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    mobile: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8080/patient/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        toast.info("Registration successful!");
        setTimeout(() => {
          navigate("/login");
        }, 1000); // delay toast adjust
      } else {
        toast.error("Registration failed! Please check your details.");
      }
    } catch (error) {
      toast.error("An error occurred during registration!");
    }
  };
  
  

  return (
    <div>
      <Navbar />
      <Container className="p-3">
        <h1 className="text-4xl align-middle font-extrabold mt-8">
          Register Form
        </h1>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          draggable
        />
        <Paper elevation={3} className="mt-8 p-4">
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              className="m-2"
              name="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
              value={formData.firstName}
              onChange={handleChange}
            />
            <TextField
              className="m-2"
              name="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
            />
            <TextField
              className="m-5"
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              className="m-2"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={formData.password}
              onChange={handleChange}
            />
            <TextField
              className="m-2"
              name="address"
              label="Address"
              variant="outlined"
              fullWidth
              value={formData.address}
              onChange={handleChange}
            />
            <TextField
              className="m-2"
              name="mobile"
              label="Phone no"
              variant="outlined"
              fullWidth
              value={formData.mobile}
              onChange={handleChange}
            />
            <TextField
              className="m-2"
              name="age"
              label="Age"
              variant="outlined"
              fullWidth
              value={formData.age}
              onChange={handleChange}
            />
            <TextField
              className="m-2"
              name="gender"
              label="Gender"
              variant="outlined"
              fullWidth
              value={formData.gender}
              onChange={handleChange}
            />
            <div className="p-3 -ml-6x">
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default Register;
