import { useState } from "react";
import Collapse from "../Collapse";
import "./index.css";

function Account({ title, amount, description }) {
  const [open, setOpen] = useState(true);
  function handleToggle() {
    setOpen(!open);
  }
  return (
    <div>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button" onClick={handleToggle}>
            {`${open ? "View transactions" : "Close"}`}
          </button>
        </div>
      </section>
      <section
        className={`transactions-details ${open ? "nonVisible" : "visible"}`}
      >
        <div className="collapse-title">
          <div className="left-titles">
            <p>Date</p>
            <p>Description</p>
          </div>
          <div className="right-titles">
            <p>Amount</p>
            <p>Balance</p>
          </div>
        </div>
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
      </section>
    </div>
  );
}

export default Account;
