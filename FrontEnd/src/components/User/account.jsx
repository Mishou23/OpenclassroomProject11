import React, { useState } from "react";
import UserConfig from "./config/Userconfig.jsx";
import Account from "./Account/index.jsx";
import './style.css';

const UserAccount = () => {
  const {
    firstname,
    lastname,
    username,
    editingUserName,
    editingFirstName,
    editingLastName,
    setEditingFirstName,
    setEditingUserName,
    setEditingLastName,
    handleNewName,
    handleCancel,
  } = UserConfig();

  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };
  const accounts = [
    { title: "Argent Bank Checking (x8349)", amount: "$2,082.79", description: "Available Balance" },
    { title: "Argent Bank Savings (x6712)", amount: "$10,928.42", description: "Available Balance" },
    { title: "Argent Bank Credit Card (x8349)", amount: "$184.30", description: "Current Balance" },
  ];
  
  return (
    <div className="contain_user">
      <main className={`main bg-dark ${editMode ? 'edit-mode' : ''}`}>
        {editMode ? (
          <div className="header">
            <h1>Edit User Info</h1>
            <form>
              <div className="input-container">
                <label htmlFor="editedUsername"> User name :</label>
                <input
                  className="info_input"
                  type="text"
                  id="editedUsername"
                  placeholder={username}
                  value={editingUserName}
                  onChange={(e) => setEditingUserName(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="editedFirstName"> First name :</label>
                <input
                  className="info_input"
                  type="text"
                  id="editedFirstName"
                  placeholder={firstname}
                  value={editingFirstName}
                  onChange={(e) => setEditingFirstName(e.target.value)}
                  disabled="disabled"
                  readOnly
                />
              </div>
              <div className="input-container">
                <label htmlFor="editedLastName"> Last name :</label>
                <input
                  className="info_input"
                  type="text"
                  id="editedLastName"
                  placeholder={lastname}
                  value={editingLastName}
                  onChange={(e) => setEditingLastName(e.target.value)}
                  disabled="disabled"
                  readOnly
                />
              </div>
              <div className="btn-position">
                <button className="info_button button_left" onClick={handleNewName}>
                  SAVE
                </button>
                <button className="info_button button_right" onClick={handleCancel}>
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="header">
            <h1>Welcome back<br />{firstname} {lastname}</h1>
            <button className="edit-button" onClick={toggleEditMode}>
              Edit Name
            </button>
          </div>
        )}
        <h2 className="sr-only">Accounts</h2>

{/* Map over the accounts array and render Account component */}
{accounts.map((account, index) => (
  <Account key={index} {...account} />
))}
</main>
</div>
);
};

export default UserAccount;