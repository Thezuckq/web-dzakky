import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const listMenu = [
    "Contact",
    "Portofolio",
    "infoCorona",
    "Experiences",
    "About",
    "Home",
  ];
  return (
    <div className="header">
      <div className="list-menu">
        {listMenu.map((name) => {
          return (
            <Link to={`/${name}`} key={name}>
              <div className="menu-item">{name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Header;
