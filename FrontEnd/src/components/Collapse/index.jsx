import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

function Collapse() {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!open);
  }

  return (
    <div className="collapse">
      <div className="collapse-items">
        <div className="description">
          <p>27/02/20</p>
          <p>Golden Sun Bakery</p>
        </div>
        <div className="balance">
          <span>$8.00</span>
          <span>$298.00</span>
          <div
            className={`collapse-icon ${open ? "rotateDown" : "rotateUp"}`}
            onClick={handleToggle}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
        </div>
      </div>
      <div className={open ? "collapse-content open" : "collapse-content"}>
        <div className="content-items">
          <div className="section-left">
            <p>Transaction type</p>
            <p>Category</p>
            <p>Note</p>
          </div>
          <div className="section-right">
            <p>Electronic</p>
            <div className="section-food">
              <p>Food</p>
              <FontAwesomeIcon icon={faPencil} />
            </div>
            <div className="section-text">
              <p>Iorem ipsum</p>
              <FontAwesomeIcon icon={faPencil} />
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collapse;
