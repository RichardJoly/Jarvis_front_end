import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav class="navbar">
            <button className="nav"><Link to="/">Home</Link></button>
            <button className="nav"><Link to="/login">Login</Link></button>
            <button className="nav"><Link to="/register">Register</Link></button>
            <button className="nav"><Link to="/Babycam">Babycam</Link></button>
            <button className="nav"><Link to="/Updater">Updater</Link></button>
        </nav>
    );
};

export default Navbar;