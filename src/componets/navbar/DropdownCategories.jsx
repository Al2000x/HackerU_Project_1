import React from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { dropdownItemsArray } from "../../features/games/dropdown-category";
import { Dropdown } from "react-bootstrap";
/**
 * this component uses a combo of two slices to decide what category to fetch using 
 * dropdown category and category slice and the nav func
 */
const DropdownCategories = () => {
    const dispatch = useDispatch();
    const nav = useNavigate()
  return (
    // 
        <Dropdown>
         <Dropdown.Toggle className="nav-link custom-dropdown darkTheme">
        Browes Categories
      </Dropdown.Toggle>
      <Dropdown.Menu>
      {/* first we map the array of dropdownItemsArray 
      which consists of two props: navCategory and action*/}
      {dropdownItemsArray.map(item=>
        <DropdownItem key={item.navCategory} >
        <div
        // then here depending on what is clicked it sends the action of the item in the array
        //that we mapped and the navigates to that adress.
        //from there it knows what category to inject into games list.
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
