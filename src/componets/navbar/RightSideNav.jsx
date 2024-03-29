import React from 'react'
import Swal from 'sweetalert2'
import darkToggle from "../../media/dark.png";
import lightToggle from "../../media/light.png";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from "../../features/theme/theme-toggle-slice";
import { logout, selectUser } from "../../features/user/userSlice";
const RightSideNav = () => {
    const user = useSelector(selectUser);  
  const dispatch = useDispatch();
    const selectTheme = useSelector((state) => state.theme);
  return (
    <>
    {/* theme changer sweet alert (Swal)*/}
    <img
         onClick={() => {
                {
                  //swal changing depending on the state
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
            <div>
              {/* just a check to ensure the website doesn't crash when the user == null */}
              {user == null ? (
                <Link to={"/login"}>
                  <button className=" user-false">Login now!</button>
                </Link>
              ) : (
                <div> 
                   
                   <span> hello {user.name}! </span>
                  <Link to={"/profile"}>
                    <button className="user-true-left">Profile</button>                    
                  </Link>
                  <Link to={"/"}>
                    <button
                    // using dispatch to activate a certain function using redux syntax
                      onClick={() => {
                        dispatch(logout());
                      }}
                      className="user-true-right"
                    >
                      logout
                    </button>
                  </Link>
                </div>
              )}
         </div>
    </>
  )
}

export default RightSideNav