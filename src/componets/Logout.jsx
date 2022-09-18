import zelda from '../media/zelda.png'
import { Link } from "react-router-dom";
import { selectUser } from "../features/user/userSlice";
import {  useSelector } from 'react-redux';
const Logout = () => {
  const user = useSelector(selectUser)
  return (
    <div>
      <div className="logOut">
        <form>
          <h3 className='takeThis'>
               take this {user.name} 
          </h3>
          <img src={zelda} width="500px"/><br />
          <Link to={("/")}>
          <button type="submit" className="mt-3 glow-on-hover loginButton">
            Begin journy
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Logout;
