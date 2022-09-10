import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { dropdownItemsArray } from "../features/games/dropdown-category";
import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";




const DropdownCategories = () => {
    const dispatch = useDispatch();
    const nav = useNavigate()
  return (
      
        <Dropdown>
         <Dropdown.Toggle className="dropdown-custom" variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
      hello
      <Dropdown.Menu>

      {dropdownItemsArray.map(item=>
        <DropdownItem key={item.navCategory} >
        <div
          className="nav-link text-dark"
          onClick={() => {
            dispatch(item.action());
            nav(`/category/${item.navCategory}`)
          }}>
          {item.navCategory}
        </div>
       </DropdownItem>
        )}
      </Dropdown.Menu>

      

      </Dropdown>


  );
};

export default DropdownCategories;
