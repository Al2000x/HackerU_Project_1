import React from "react";
import Login from "../componets/Login";
import Logout from "../componets/Logout";
import "../componets/Login.css";
import "../componets/Logout.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
const LoginLogout = () => {
  const user = useSelector(selectUser);
  return (
    <>
      <section>
        <div className="LoginBG">
          {user  ?  <Logout/>:<Login/>}
        </div>
      </section>
    </>
  );
};

export default LoginLogout;
// <div>
//   <section>
//     <div>
//       <img src="" alt="" />
//       <h2></h2>
//       <input type="text" /><button></button></div>
//   </section>
// </div>
