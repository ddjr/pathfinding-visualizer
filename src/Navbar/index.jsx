import React from "react";
import "./Navbar.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
export default function Navbar({ onClick }) {
  return (
    <div className="navbar">
      <h2 className="navbar__title">Pathfinding Visualizer</h2>
      <div className="navbar__menu">
        <button className="navbar__menu__item" onClick={onClick}>
          Visualize
        </button>
        <div className="navbar__menu__item">
          <span>Algorithms</span>
          <KeyboardArrowDownIcon />
        </div>
        <div className="navbar__menu__item">
          <span>Mazes & Patterns</span>
          <KeyboardArrowDownIcon />
        </div>
        <span className="navbar__menu__item">Add Target</span>

        <span className="navbar__menu__item">Clear Board</span>
      </div>
    </div>
  );
}
