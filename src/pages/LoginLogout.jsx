import React from "react";
import Login from "../componets/Login";
import Logout from "../componets/Logout";
import "../componets/Login.css";
import "../componets/Logout.css";
const LoginLogout = () => {
  return (
    <>
      <section>
        <div className="LoginBG">
        {/* <Login></Login> */}
        <Logout></Logout>
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
