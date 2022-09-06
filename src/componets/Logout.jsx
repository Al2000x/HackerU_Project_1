import zelda from '../media/zelda.png'
import { Link } from "react-router-dom";
import { logout } from "../features/user/userSlice";
import { useDispatch } from 'react-redux';
const Logout = () => {
  const dispatch = useDispatch
  return (
    <div>
      <div className="logOut">
        <form>
          <h3 className='takeThis'>
              Take this alex 
          </h3>
          <img src={zelda} width="500px" alt="" /><br />
          <button onClick={dispatch(
            logout()
          )} type="submit" className="mt-3 glow-on-hover loginButton">
            Begin journy
          </button>
        </form>
      </div>
    </div>
  );
};

export default Logout;
