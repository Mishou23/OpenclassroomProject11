// Header.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import UserConfig from "../../components/User/config/Userconfig.jsx";

function Header() {
  const userName = useSelector((state) => state.userAccount.userAccount?.body.userName);
  const isLoggedIn = localStorage.getItem("user");
  const [localUserName, setLocalUserName] = useState(userName);
  const { handleDisconnect } = UserConfig();
  useEffect(() => {
    setLocalUserName(userName);
  }, [userName]);

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isLoggedIn ? (
            <div>
              {localUserName && (
                <Link className="main-nav-item" to="/profile">
                  <i className="fa fa-user-circle"></i>
                  {localUserName}
                </Link>
              )}
              <Link className="main-nav-item" onClick={handleDisconnect} to="/login">
                <i className="fa fa-sign-out"></i>
                Disconnect
              </Link>
            </div>
          ) : (
            <Link className="main-nav-item" to="/login">
              <FontAwesomeIcon icon={faCircleUser} />
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
