import { useState } from "react";
import { login } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  console.log(name)
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        loggedIn:true
      })
    );
  };
  return (
    <div>
      <div className="loginForm">
        <form onSubmit={(e) => handleSubmit(e)}>
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
            type="name"
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
{/* <form onSubmit={(e) => handleChange(e)}>         
<input
  value={name}
  onChange={(e) => {
    setText(e.target.value);
  }}
  className="mt-3 loginInput"
  type="name"
/>
<br />
<button type="submit" className="mt-3 glow-on-hover loginButton">
 search your game
</button>
</form> */}
