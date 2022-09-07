import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link} from "react-router-dom";
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
  return (
    <button style={{ background: "black" }}>
      categories
      <NavDropdown  label="categories" className="shadow" id="basic-nav-dropdown">
        <NavDropdown.Item >
          <Link
            className="nav-link text-dark"
            to="category/action/"
            onClick={() => {
              dispatch(actionGenre());
            }}
          >
            action
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link
            className="nav-link text-dark"
            to="category/racing/"
            onClick={() => {
              dispatch(racingGenre());
            }}
          >
            racing
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link
            className="nav-link text-dark"
            to="category/puzzle/"
            onClick={() => {
              dispatch(puzzleGenre());
            }}
          >
            puzzle
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link
            className="nav-link text-dark"
            to="category/shooter/"
            onClick={() => {
              dispatch(shooterGenre());
            }}
          >
            shooter
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link
            className="nav-link text-dark"
            to="category/casual/"
            onClick={() => {
              dispatch(casualGenre());
            }}
          >
            casual
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link
            className="nav-link text-dark"
            to="category/fighting/"
            onClick={() => {
              dispatch(fightingGenre());
            }}
          >
            fighting
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link
            className="nav-link text-dark"
            to="category/adventure/"
            onClick={() => {
              dispatch(advenrtureGenre());
            }}
          >
            adventure
          </Link>
        </NavDropdown.Item>

      </NavDropdown>
    </button>
  );
};

export default DropdownCategories;
