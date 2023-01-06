import React from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { dropdownItemsArray } from "../../features/games/dropdown-category";
import { Dropdown } from "react-bootstrap";
const DropdownCategories = () => {
    const selectTheme = useSelector(state=>state.theme)
    const dispatch = useDispatch();
    const nav = useNavigate()
  return (
    // 
        <Dropdown>
         <Dropdown.Toggle className="nav-link custom-dropdown darkTheme">
        Browes Categories
      </Dropdown.Toggle>
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
