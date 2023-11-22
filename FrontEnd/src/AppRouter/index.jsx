import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import User from "../pages/User";

function AppRouter() {
  return (
    <Routes>
        <Route path="/user" element={<User />} />
      <Route path="/" index element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
  
    </Routes>
  );
}

export default AppRouter;
