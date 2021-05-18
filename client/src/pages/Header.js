import React from "react";
import { Link } from "react-router-dom";
import logo from "./placeholder-logo.png";

function Header() {
    return (
        <header className="app-header">
            <div className="header-logo">
                <Link to="/">
                    <img  alt="logo" src={logo} height="64"/>
                </Link>
            </div>

            <div className="header-links">
                <div class="login-header-link">
                    <Link to="/login">
                        <p>Login</p>
                    </Link>
                </div>
                <div class="registration-header-link">
                    <Link to="/registration">
                        <p>Registration</p>
                    </Link>
                </div>
            </div>  
        </header>
    )
}



export default Header;