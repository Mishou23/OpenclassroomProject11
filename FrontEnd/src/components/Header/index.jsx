import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/slices/signInSlice";
import { removeUserData } from "../../redux/slices/userSlice";
import logo from "../../assets/images/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";

// eslint-disable-next-line react/prop-types
function Header({ loggedIn }) {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  function handleSignOut() {
    localStorage.removeItem("token");
    dispatch(signOut());
    dispatch(removeUserData());
  }

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {loggedIn && userData ? (
            <div className="main-nav-item">
              <Link to="/user">
                <FontAwesomeIcon icon={faCircleUser} />
                {userData.userName}
              </Link>
              <Link to="/" onClick={handleSignOut}>
                <FontAwesomeIcon icon={faRightFromBracket} />
                Sign Out
              </Link>
            </div>
          ) : (
            <Link className="main-nav-item" to="/sign-in">
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
