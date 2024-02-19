import React, { useState } from "react";

import plus from "../../assets/plus.jpg";

import "./Sidebar.css";

function Sidebar(props) {
  const [listOpen, setListOpen] = useState(false);

  const colors = [
    "#A3623A",
    "#E66C37",
    "#F5C869",
    "#71C0A7",
    "#FE6DB6",
    "#8D6FD1",
  ];

  return (
    <div className="sidebar">
      <img
        src={plus}
        alt="Add"
        onClick={() => {
          setListOpen(!listOpen);
        }}
      />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
