import React from 'react'
import DropdownCategories from "./DropdownCategories";
import { Link } from 'react-router-dom';

const MiddleLinks = () => {
  return (
    <div>
        {/* simple navbar with the DropDownCategories added for cleanliness */}
        <div id="navbarNavDropdown">
            <ul className="navbar-nav ">
                <li className="nav-item active">
                    {/* navs back to home */}
                <Link to="/" className="nav-link custom-dropdown darkTheme">
                    Home
                </Link>
                </li>
                <li className="nav-item">
                <Link  className="nav-link custom-dropdown darkTheme" to="/discover">
                    Discover All Games
                </Link>
                </li>
                <DropdownCategories />
            </ul>
        </div>
    </div>
  )
}

export default MiddleLinks