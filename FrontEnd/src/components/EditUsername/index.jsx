import { useDispatch, useSelector } from "react-redux";
import { editUserName } from "../../redux/slices/userNameSlice";
import {getUserData } from "../../redux/slices/userSlice";
import "./index.css";

function EditUsername({ onSave }) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  async function handleSaveButton(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const newUserName = document.getElementById("username").value;
    try {
      await dispatch(editUserName({ token, newUserName }));
      await dispatch(getUserData(token)); 
      onSave();
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <form>
      {userData && userData.firstName && userData.lastName ? (
        <div>
          <h3 className="edit-form-title">Edit user info</h3>
          <div className="flex-row">
            <label htmlFor="username">User name:</label>
            <input type="text" id="username" defaultValue={userData.userName} />
          </div>
          <div className="flex-row">
            <label htmlFor="firstname">First name:</label>
            <input
              className="read-only"
              type="text"
              id="firstname"
              value={userData.firstName}
              readOnly
            />
          </div>
          <div className="flex-row">
            <label htmlFor="lastname">Last name:</label>
            <input
              className="read-only"
              type="text"
              id="lastname"
              value={userData.lastName}
              readOnly
            />
          </div>
          <div className="edit-form-buttons">
            <button
              className="save-button edit-button"
              onClick={handleSaveButton}
            >
              Save
            </button>
            <button className="cancel-button edit-button">Cancel</button>
          </div>
        </div>
      ) : (
        <p>Error</p>
      )}
    </form>
  );
}

export default EditUsername;
