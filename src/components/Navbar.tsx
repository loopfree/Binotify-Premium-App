import React from "react";
import { LordIcon } from "./LordIcon";

function Navbar({ user="Admin" }) {
  return (
    <nav className="flex flex-col justify-between h-screen w-1/6 bg-black p-8">
      <div>
        <h1 className="title">\(OwO)/</h1>
        <ul className="nav-container">
          <a href="/">
            <li className="nav-button">
              <LordIcon
                className="h-8 w-8"
                src="/lord-icon/home-icon.json"
                trigger="hover"
                colors="primary:#ffffff"
              />
              <p className="nav-desc">Home</p>
            </li>
          </a>
        </ul>
        <div className="divider" />
        <p className="status">{user}</p>
      </div>
      <div className="nav-button logout-button">
          <LordIcon
            className="w-8 h-8"
            src="/lord-icon/logout-icon.json"
            trigger="hover"
            colors="primary:#f037a5"
          />
          <p className="text-fuschia">Log Out</p>
      </div>
    </nav>
  )
}

export default Navbar;
