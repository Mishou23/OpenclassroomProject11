import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./AppRouter";
import SignIn from "./pages/SignIn";
import { useSelector } from "react-redux";
import "./index.css";

function App() {
  const loggedIn = useSelector((state) => state.signIn.loggedIn || false);

  return (
    <Router>
      <Header loggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={<AppRouter />} />
        <Route
          path="/sign-in"
          element={loggedIn ? <Navigate to="/" /> : <SignIn />}
        />
        {loggedIn ? (
          // If user is logged in, allow navigation to all pages
          <Route path="/*" element={<AppRouter />} />
        ) : (
          // If user is not logged in, redirect to home page
          <Route path="/*" element={<Navigate to="/" />} />
        )}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
