import UserConfig from "./config/Userconfig.jsx";
import './style.css'
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

  
  return (
    <div className="contain_user">
      <main className="main bg-dark">
        <div className="header">
          <div className="info_prof">
            <div className="info_welcome">Edit user info</div>
            <div className="info_input_box">
            <div className="input-containers">
            <div className="input-container">
        <label className="label" htmlFor="username">
          User name :
        </label>
        <input
          className="info_input"
          type="text"
          name="username"
          id="username"
          placeholder={username}
          value={editingUserName}
          onChange={(e) => setEditingUserName(e.target.value)}
        />
        </div>
        
            <div className="input-container">
        <label className="label" htmlFor="firstname">
          First name :
        </label>
        <input
          className="info_input"
          type="text"
          name="firstname"
          id="firstname"
          placeholder={firstname}
          value={editingFirstName}
          onChange={(e) => setEditingFirstName(e.target.value)}
          readOnly
          disabled
        />
      </div>

      <div className="input-container">
        <label className="label" htmlFor="lastname">
          Last name :
        </label>
        <input
          className="info_input"
          type="text"
          name="lastname"
          id="lastname"
          placeholder={lastname}
          value={editingLastName}
          onChange={(e) => setEditingLastName(e.target.value)}
          readOnly
          disabled
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
              </div>
             
            </div>
          </div>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserAccount;
