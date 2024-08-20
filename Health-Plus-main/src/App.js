import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Emergency from "./Components/Emergency";
import Info from "./Components/Info";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AuthProvider from "./Components/security/AuthProvider";
import ProtectedRoute from "./Components/security/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/appointment" element={<ProtectedRoute element={<Appointment />} />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/services" element={<Info />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
