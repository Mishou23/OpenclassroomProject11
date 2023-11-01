import React from "react";
import Header from "../../components/Header/header";
import UserConfig from "../../components/User/config/Userconfig.jsx";
import { useEffect } from "react";
function Navbar() {
  const isLoggedIn = localStorage.getItem("user");
  const {
    firstname,
    handleDisconnect,
  } = UserConfig();
  console.log("Navbar - isLoggedIn:", isLoggedIn);
  console.log("Navbar - firstname:", firstname);

  return (
    <>
        <Header
          isLoggedIn={isLoggedIn}
          firstname={firstname}
          handleDisconnect={handleDisconnect}
        />
    </>
  );
}

export default Navbar;

