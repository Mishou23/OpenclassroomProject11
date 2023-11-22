// UserConfig.jsx
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAccount } from "../../../Store/reducers/useraccount";
import { profilupdate } from "../../../Store/reducers/profilupdate";

const UserConfig = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userAccount.userAccount?.body.userName);

  const [firstname, setfirstname] = useState("");
  const [username, setusername] = useState("");
  const [lastname, setlastname] = useState("");
  const [editingFirstName, setEditingFirstName] = useState("");
  const [editingUserName, setEditingUserName] = useState("");
  const [editingLastName, setEditingLastName] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("user");

    if (!isLoggedIn) {
      console.log("redirect to login");
      navigate("/login");
    } else {
      dispatch(getUserAccount()).then((userData) => {
        if (userData) {
          console.log('userData :', userData);
          setfirstname(userData.payload.body.firstName);
          setlastname(userData.payload.body.lastName);
          setusername(userData.payload.body.userName);
        }
      });
    }
  }, [navigate, dispatch]);

  const handleDisconnect = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleNewName = (e) => {
    e.preventDefault();

    const updatedUser = {
      userName: editingUserName,
    };

    dispatch(profilupdate(updatedUser))
      .then(() => {
        setusername(editingUserName);
        console.log("Update successful!");
      })
      .catch((error) => {
        console.error("Error during update:", error);
      });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setEditingUserName(username);
  };

  return {
    navigate,
    firstname,
    lastname,
    username,
    editingUserName,
    editingFirstName,
    editingLastName,
    setEditingFirstName,
    setEditingUserName,
    setEditingLastName,
    handleDisconnect,
    handleNewName,
    handleCancel,
  };
};

export default UserConfig;
