import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { dropdownItemsArray } from "../features/games/dropdown-category";




const DropdownCategories = () => {
    const dispatch = useDispatch();
    const nav = useNavigate()
  return (
    <button style={{ background: "black" }}>
      categories
      <NavDropdown  label="categories" className="shadow" id="basic-nav-dropdown">
      {dropdownItemsArray.map(item=>
        <NavDropdown.Item key={item.navCategory} >
        <div
          className="nav-link text-dark"
          onClick={() => {
            dispatch(item.action());
            nav(`/category/${item.navCategory}`)
          }}>
          {item.navCategory}
        </div>
       </NavDropdown.Item>
        )}
      

      </NavDropdown>
    </button>
  );
};

export default DropdownCategories;
