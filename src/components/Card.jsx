import { useState } from "react";
import "../styles/Card.css";

function Card({ children, cardHeader }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="card">
      <div className="cardHeader">
        <span>{cardHeader}</span>
        <svg
          className={collapsed ? "dropArrow" : "dropArrow uncollapse"}
          onClick={() => setCollapsed(!collapsed)}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
        </svg>
      </div>
      <div className={collapsed ? "cardContentDiv" : "cardContentDiv collapse"}>
        {children}
      </div>
    </div>
  );
}

export default Card;
