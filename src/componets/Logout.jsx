import zelda from '../media/zelda.png'
import { Link } from "react-router-dom";
const Logout = () => {
  return (
    <div>
      <div className="logOut">
        <form>
          <h3 className='takeThis'>
              Take this alex 
          </h3>
          <img src={zelda} width="500px" alt="" /><br />
          <Link to={"/"}>
          <button type="submit" className="mt-3 glow-on-hover loginButton">
            Begin journy
          </button>
          </Link >
        </form>
      </div>
    </div>
  );
};

export default Logout;
