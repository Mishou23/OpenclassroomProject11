import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Header({ isLoggedIn, firstname, handleDisconnect }) {
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
              <a className="main-nav-item" href="">
                <i className="fa fa-user-circle"></i>
                {firstname}
              </a>
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
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
