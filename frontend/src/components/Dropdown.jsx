import React, { useState } from "react";
import { categoryDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "../App.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "category-submenu clicked" : "category-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {categoryDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
