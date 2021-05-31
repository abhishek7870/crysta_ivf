import React, { useState } from "react";

function FAQListItem({ title, content }) {
  const [toggle, setToggle] = useState(false);
  return (
    <li>
      <div className="collapsible-header" onClick={() => setToggle(!toggle)}>
        <h6>
          {title}
          <span>{!toggle ? "+" : "-"}</span>
        </h6>
      </div>
      <div className="collapsible-body">
        <span style = {{}}>{content}</span>
      </div>
    </li>
  );
}

export default FAQListItem;
