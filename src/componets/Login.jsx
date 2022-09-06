import { useState } from "react";


const Login = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <div className="loginForm">
        <form>
          <h1>
            WELCOME TO
            <br />
            GAME INFORMER
          </h1>
          <h2>enter username</h2>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="mt-3 loginInput"
            type="text"
          />
          <br />

          <button type="submit" className="mt-3 glow-on-hover loginButton">
            Pledge your loyalty
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
