import React from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { changeTheme } from "../features/theme/theme-toggle-slice";
import { NavLink, Link} from "react-router-dom";
import darkToggle from "../media/dark.png";
import lightToggle from "../media/light.png";
import darkLoggo from "../media/gamestick_dark_mode.png";
import lightLoggo from "../media/gamestick_light_mode.png";
import { Navbar, Container, Nav } from "react-bootstrap";




const TopNav = () => {
  const dispatch = useDispatch();
  const selectTheme = useSelector((state) => state.theme);
  // navbar navbar-expand-lg p-3 navbar-bg navbar-dark d-flex

  return (
    
    <Navbar bg="light" expand="lg"className={
      selectTheme.dark
        ? "navbar navbar-expand-lg p-3 navbar-bg navbar-dark d-flex"
        : "navbar navbar-expand-lg p-3 navbar-bg navbar-light d-flex"
    }>
        <Link to={"/"}>
          <img
            src={selectTheme.dark ? darkLoggo : lightLoggo}
            height="50px"
            alt="website logo"
          />
          <h3
            className={
              selectTheme.dark
                ? "d-inline-block game-informer-dark"
                : "d-inline-block game-informer-light"
            }
          >
            &nbsp;&nbsp;&nbsp; Game Informer
          </h3>
        </Link>
        <div className="flex-grow-1"></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item active">
              <Link to="/" className="nav-link">              
                  Home <span className="sr-only">(current)</span>
              </Link>
                
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
             <button style={{background:"black"}}>
              categories
              <NavDropdown  label="categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Action/">Action</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">Comedy </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Drama</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">Thriller</NavDropdown.Item>
              </NavDropdown>
             </button>
              
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-grow-1 spacer"></div>
        {/* theme changer swal */}
        <img
          onClick={() => {
            {
              selectTheme.dark
                ? Swal.fire(`light theme`)
                : Swal.fire({
                    title: `dark theme`,
                    customClass: {
                      confirmButton: `swal-dark-confirm-btn`,
                      popup: `dark`,
                    },
                  });
            }
            dispatch(changeTheme());
          }}
          src={selectTheme.dark ? darkToggle : lightToggle}
          height="30px"
          width="100px"
        />
        {/* theme changer swal */}
        &nbsp;&nbsp;
        <Link to={"/login"}>
          <button className=" btn-custom">Login Now!</button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default TopNav;
