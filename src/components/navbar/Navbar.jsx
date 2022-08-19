import React from "react";
import "./navbar.css";
import kfo_logo from "../../assets/kfo_logo.png";
// BEM --> Block Element Modifier

const Navbar = () => {
    return (
        <div className="gpt3_navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={kfo_logo} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Navbar