import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Sign-In/sign-in.jsx";
import Home from "./pages/Home/home.jsx";
import User from "./pages/User/user.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Set Home component as the default route */}
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
