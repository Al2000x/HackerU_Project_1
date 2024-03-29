import React from "react";
import Login from "../componets/LoginLogout/Login";
import WelcomeScreen from "../componets/LoginLogout/WelcomeScreen";
import "../css_work/Login.css";
import "../css_work/Logout.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
const LoginLogout = () => {
  const user = useSelector(selectUser);
  //here we combine the return of WelcomeScreen and Login depending if the user == null
  return (
    <>
      <section>
        <div className="LoginBG">
          {user  ?  <WelcomeScreen/>:<Login/>}
        </div>
      </section>
    </>
  );
};
export default LoginLogout;
