import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/slices/userSlice";
import Account from "../../components/Account";
import EditUsername from "../../components/EditUsername";
import "./index.css";

function User() {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getUserData(token));
    }
  }, [dispatch]);

  function handleToggle() {
    setActive(!active);
  }

  function handleSaveButton() {
    setActive(false);
  }

  return (
    <div className="container">
      <main className="main bg-dark">
        <div className={`header ${active ? "nonVisible" : "visible"}`}>
          {userData && userData.firstName && userData.lastName ? (
            <h1>
              Welcome back
              <br />
              {userData.firstName} {userData.lastName} !
            </h1>
          ) : (
            <p>Loading user data</p>
          )}
          <button className="edit-button" onClick={handleToggle}>
            Edit Name
          </button>
        </div>
        <div className={active ? "edit-form open" : "edit-form close"}>
          <EditUsername onSave={handleSaveButton} />
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title={"Argent Bank Checking (x8349)"}
          amount={"$2,082.79"}
          description={"Available Balance"}
        />
        <Account
          title={"Argent Bank Checking (x8349)"}
          amount={"$2,082.79"}
          description={"Available Balance"}
        />
        <Account
          title={"Argent Bank Checking (x8349)"}
          amount={"$2,082.79"}
          description={"Available Balance"}
        />
      </main>
    </div>
  );
}

export default User;
