import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink to="/">
                <button className="appDisplayButton">ToDo App</button>
            </NavLink>
            <NavLink to="/users">
                <button className="appDisplayButton">Users</button>
            </NavLink>
        </nav>
    );
}

export default Navbar;
