import React from "react";
import "./NavBar.css";
import { NavBarElements } from "./NavBarElements";

export const NavBar = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        height: "50px",
        width: "100svw",
        background: "transparent",
        paddingBottom: "10px",
        backgroundColor: "#14cc60",
        borderRadius: "8px",
        paddingTop: "10px",
        marginTop: "-15px",
        zIndex: "2",
      }}
    >
      <center>
        <ul className="NavUl">
          {NavBarElements.map((value, key) => {
            return (
              <center className="NavHoverer" key={key}>
                <ul
                  id={window.location.pathname == value.link ? "active" : ""}
                  className="NavLi"
                  onClick={() => (window.location.pathname = value.link)}
                  style={{ color: value.color }}
                >
                  {value.name}
                </ul>
              </center>
            );
          })}
        </ul>
      </center>
    </div>
  );
};
