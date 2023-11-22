import { BrowserRouter as Router, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./AppRouter";
import { useSelector } from "react-redux";
import "./index.css";

function App() {
  const loggedIn = useSelector((state) => state.signIn.loggedIn || true);

  if (!loggedIn) {
    console.log("redirect to login");
    return <Navigate to="/sign-in" />;
  }

  return (
    <Router>
      {loggedIn ? <Header loggedIn={loggedIn} /> : <Header />}
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;
