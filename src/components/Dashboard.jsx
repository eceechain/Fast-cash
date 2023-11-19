import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Status from "./Status";
import Login from "./Login";
import Register from "./Register";
import Loan from "./Loan";
import NavBar from "./NavBar";
function Dashboard() {
  return (
    <Router>
      <div className="dashboard">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/loan/status" element={<Status />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Dashboard;
