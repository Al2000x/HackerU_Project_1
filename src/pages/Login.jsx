import React from "react";

import './Login.css'
const Login = () => {
  return (
  <>
  <section>
  <div className="LoginBG">
    <div className="loginForm">
     <h1>WELCOME TO<br />GAME INFORMER</h1>
      <h2 >enter username</h2>
      <input className="mt-3 loginInput" type="text" /><br />
      <button className="mt-3 glow-on-hover loginButton">Begin your journey</button>
    </div>
    </div>
    </section>
  </>
  );
};

export default Login;
// <div>
//   <section>
//     <div>
//       <img src="" alt="" />
//       <h2></h2>
//       <input type="text" /><button></button></div>
//   </section>
// </div>
