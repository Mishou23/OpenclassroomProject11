import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Sign-In/sign-in.jsx";
import Home from "./pages/Home/home.jsx";
import User from "./pages/User/user.jsx"
import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        { <Route path="/sign-in" element={<SignIn />} /> }
        { <Route path="/profile" element={<User />} /> }
      </Routes>
    </Router>
  );
}

export default App;
