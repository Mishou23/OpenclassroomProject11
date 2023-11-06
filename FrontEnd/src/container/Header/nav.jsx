import React from "react";
import Header from "../../components/Header/header";
import UserConfig from "../../components/User/config/Userconfig.jsx";
function Navbar() {
  const isLoggedIn = localStorage.getItem("user");
  const {
    firstname,
    handleDisconnect,
  } = UserConfig();
  
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

