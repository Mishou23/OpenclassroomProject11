import React from "react";
import Header from "../../components/Header/header"; 
import UserConfig from "../../components/User/config/Userconfig"; 

function Nav() {
  const {
    firstname,
    handleDisconnect,
    isLoggedIn, 
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

export default Nav;
