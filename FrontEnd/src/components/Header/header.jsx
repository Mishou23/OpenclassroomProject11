import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Header({ isLoggedIn, username, handleDisconnect }) {
  console.log("Header - isLoggedIn:", isLoggedIn);
  console.log("Header - username:", username);
  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isLoggedIn ? (
            <div>
              <Link className="main-nav-item" to="/profile">
                <i className="fa fa-user-circle"></i>
                {username}
              </Link>
              <Link
                className="main-nav-item"
                onClick={handleDisconnect}
                to="/login"
              >
                <i className="fa fa-sign-out"></i>
                Disconnect
              </Link>
            </div>
          ) : (
            <Link className="main-nav-item" to="/login">
              <FontAwesomeIcon icon={faCircleUser} />
              Sign In
              {console.log(isLoggedIn)}
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
