import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import {   actionGenre,
    advenrtureGenre,
    fightingGenre,
    shooterGenre,
    casualGenre,
    puzzleGenre,
    racingGenre, } from "../features/games/category-slice";

const DropdownCategories = () => {
    const dispatch = useDispatch();
    const nav = useNavigate()
  return (
    <button style={{ background: "black" }}>
      categories
      <NavDropdown  label="categories" className="shadow" id="basic-nav-dropdown">
        <NavDropdown.Item >
          <div className="nav-link text-dark"
            to=""
            onClick={() => {
              nav('category/action/')  
              dispatch(actionGenre());
            }}>
                {/* fill the other navs */}
            action
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <div
            className="nav-link text-dark"
            to="category/racing/"
            onClick={() => {
              dispatch(racingGenre());
            }}>
          
            racing
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <div
            className="nav-link text-dark"
            to="category/puzzle/"
            onClick={() => {
              dispatch(puzzleGenre());
            }}>
          
            puzzle
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <div
            className="nav-link text-dark"
            to="category/shooter/"
            onClick={() => {
              dispatch(shooterGenre());
            }}>
          
            shooter
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <div
            className="nav-link text-dark"
            to="category/casual/"
            onClick={() => {
              dispatch(casualGenre());
            }}>
          
            casual
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <div
            className="nav-link text-dark"
            to="category/fighting/"
            onClick={() => {
              dispatch(fightingGenre());
            }}>
          
            fighting
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <div
            className="nav-link text-dark"
            to="category/adventure/"
            onClick={() => {
              dispatch(advenrtureGenre());
            }}>
          
            adventure
          </div>
        </NavDropdown.Item>

      </NavDropdown>
    </button>
  );
};

export default DropdownCategories;
