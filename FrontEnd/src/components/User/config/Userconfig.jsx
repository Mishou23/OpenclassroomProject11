import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserAccount } from "../../../Store/reducers/useraccount";
import { profilupdate } from "../../../Store/reducers/profilupdate";


const UserConfig = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [editingFirstName, setEditingFirstName] = useState("");
  const [editingLastName, setEditingLastName] = useState("");

  useEffect(() => {
    // Ensure that the user is logged in before proceeding
    const isLoggedIn = localStorage.getItem("user");
    console.log('logIn :',isLoggedIn)
    if (!isLoggedIn) {
     console.log("redirect to login");
     navigate("/login")
    } else {
      // Fetch user data only if the user is logged in
      dispatch(getUserAccount()).then((userData) => {
        if (userData) {
          console.log('userData :', userData);
          setfirstname(userData.payload.body.firstName);
          setlastname(userData.payload.body.lastName);
        }
      });
    }
  }, [navigate, dispatch]);

 
  const handleDisconnect = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleNewName = (e) => {
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
        window.location.reload();
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
