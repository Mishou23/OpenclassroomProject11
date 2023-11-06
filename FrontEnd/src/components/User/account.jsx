import UserConfig from "./config/Userconfig.jsx";
import './style.css'
const UserAccount = () => {
  const {
    firstname,
    username,
    lastname,
    editingFirstName,
    editingUsername,
    editingLastName,
    setEditingFirstName,
    setEditingUsername,
    setEditingLastName,
    handleNewName,
    handleCancel,
  } = UserConfig();

  
  return (
    <div className="contain_user">
      <main className="main bg-dark">
        <div className="header">
          <div className="info_prof">
            <div className="info_welcome">Welcome back</div>
            <div className="info_input_box">
              <div className="info_box_left">
                <input
                  className="info_input"
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder={firstname}
                  value={editingFirstName}
                  onChange={(e) => setEditingFirstName(e.target.value)}
                />
                <input
                  className="info_input"
                  type="text"
                  name="username"
                  id="username"
                  placeholder={username}
                  value={editingUsername}
                  onChange={(e) => setEditingUsername(e.target.value)}
                />
                <button className="info_button button_left" onClick={handleNewName}>
                  SAVE
                </button>
              </div>
              <div className="info_box_right">
                <input
                  className="info_input"
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder={lastname}
                  value={editingLastName}
                  onChange={(e) => setEditingLastName(e.target.value)}
                />
                <button className="info_button button_right" onClick={handleCancel}>
                  CANCEL
                </button>
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
