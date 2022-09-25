import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import darkToggle from "../../media/dark.png";
import lightToggle from "../../media/light.png";
import { changeTheme } from "../../features/theme/theme-toggle-slice";
import { logout, selectUser } from "../../features/user/userSlice";
const RightSideNav = () => {
    const user = useSelector(selectUser);
  const dispatch = useDispatch();
    const selectTheme = useSelector((state) => state.theme);
  return (
    <>
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
            <div>
              {user == null ? (
                <Link to={"/login"}>
                  <button className=" user-false">Login now!</button>
                </Link>
              ) : (
                <div>
                  <Link to={"/profile"}>
                    <button className="user-true-left">Profile</button>
                  </Link>
                  <Link to={"/"}>
                    <button
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