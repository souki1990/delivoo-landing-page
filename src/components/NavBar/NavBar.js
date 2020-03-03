import React from "react";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <a className="delivroo" href="/">Delivroo</a>
            <a href="/user" className="user-name">
                <i className="user-icon"></i>
                <span>Jon Smith</span>
            </a>
        </nav>
    )
}
export default NavBar;