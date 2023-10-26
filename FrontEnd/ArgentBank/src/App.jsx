import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from '../src/pages/home/home';
import './App.css'
// import SignIn from './SignIn';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sign-in" element={<SignIn />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
