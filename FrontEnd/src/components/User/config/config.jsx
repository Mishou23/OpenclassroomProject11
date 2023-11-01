import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logOutUser } from "../../Store/userlogin";
import { useDispatch } from "react-redux";
import { getUserAccount } from "../../Store/useraccount";
import { profilupdate } from "../../Store/profilupdate";

const UserConfig = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [editingFirstName, setEditingFirstName] = useState("");
  const [editingLastName, setEditingLastName] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("user");
    if (!isLoggedIn) {
      console.log("redirect to login");
      navigate("/login");
    } else {
      dispatch(getUserAccount()).then((userData) => {
        if (userData) {
          console.log(userData);
          setfirstname(userData.payload.body.firstName);
          setlastname(userData.payload.body.lastName);
        }
      });
    }
  }, [navigate, dispatch]);

  const handleDisconnect = () => {
    // Call logOutUser using dispatch
    dispatch(logOutUser());

    // Reset the "user" item in localStorage and isAuthenticated
    localStorage.removeItem("user");

    // Redirect the user to the login page
    navigate("/login");
  };

  const handleNewName = () => {
    // Create an object with the new values of the first name and last name
    const updatedUser = {
      firstName: editingFirstName,
      lastName: editingLastName,
    };

    // Call the asynchronous action profilupdate with the new user data
    dispatch(profilupdate(updatedUser))
      .then(() => {
        // Update the firstname state upon successful update
        setfirstname(editingFirstName);
        console.log("Update successful!");
      })
      .catch((error) => {
        // Handle errors in case the update fails
        console.error("Error during update:", error);
      });
  };

  const handleCancel = () => {
    // Reset the editing state variables to the current first name and last name values
    setEditingFirstName(firstname);
    setEditingLastName(lastname);
  };

  return {
    navigate,
    firstname,
    lastname,
    editingFirstName,
    editingLastName,
    setEditingFirstName,
    setEditingLastName,
    handleDisconnect,
    handleNewName,
    handleCancel,
  };
};

export default UserConfig;
