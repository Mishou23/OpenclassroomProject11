import React from "react";
import Header from "../../components/Header/header";
import UserConfig from "../../components/User/config/Userconfig.jsx";
function Navbar() {
  const isLoggedIn = localStorage.getItem("user");
  const {
    username,
    handleDisconnect,
  } = UserConfig();
  
  return (
    <>
        <Header
          isLoggedIn={isLoggedIn}
          username={username}
          handleDisconnect={handleDisconnect}
        />
    </>
  );
}

export default Navbar;

