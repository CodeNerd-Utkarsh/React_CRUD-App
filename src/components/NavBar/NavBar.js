import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="https://github.com/HBaseDevelopers">HBase.Org </a>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <NavLink exact to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink exact to="/about" className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink exact to="/contact" className="nav-link">Contact</NavLink>
                    </li>
                </ul>
            </div>
            <Link className="btn btn-info" to='/users/add'>
                Add User
                </Link>

        </div>
    </nav >
    );
}
export default NavBar;
