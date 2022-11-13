import React from 'react'
import DropdownCategories from "./DropdownCategories";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { pageDefaulter } from '../../features/games/page-slice';

const MiddleLinks = () => {
    const dispatch = useDispatch()
  return (
    <div>

        <div id="navbarNavDropdown">
            <ul className="navbar-nav ">
                <li className="nav-item active">
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
                <li className="nav-item">
                <Link className="nav-link custom-dropdown darkTheme" to="/about">
                    About
                </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default MiddleLinks