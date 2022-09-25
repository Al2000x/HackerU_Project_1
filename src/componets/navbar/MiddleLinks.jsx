import React from 'react'
import DropdownCategories from "./DropdownCategories";
import { Link } from 'react-router-dom';
const MiddleLinks = () => {
  return (
    <div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
                <li className="nav-item active">
                <Link to="/" className="nav-link">
                    Home <span className="sr-only">(current)</span>
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">
                    Features
                </Link>
                </li>
                <DropdownCategories />
                <li className="nav-item">
                <Link className="nav-link hoverWrapper" to="/about">
                    About
                </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default MiddleLinks