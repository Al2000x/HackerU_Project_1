import React from "react";

const Login = () => {
  return (
    <div>
      <div className="loginForm">
        <h1>
          WELCOME TO
          <br />
          GAME INFORMER
        </h1>
        <h2>enter username</h2>
        <input
          className="mt-3 loginInput"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <Link to={"/"}>
          <button className="mt-3 glow-on-hover loginButton">
            Begin your journey
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;