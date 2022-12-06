import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import Popup from "react-animated-popup";
import { toggleFavorite } from '../features/games/favorite-games-slice'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FiHeart } from "react-icons/fi";
import { useState } from "react";
import "../css_work/Profile.css";

const Profile = () => {
  const [visible, setVisible] = useState(true);
  const [btnActive, setBtnActive] = useState({});   //{1:true}
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const faveGameArr = useSelector((state) => state.fave.favorite);
  const toggleActive = (game) => {
    btnActive[game.id] = !btnActive[game.id]
    setBtnActive({...btnActive})
}
  console.log(faveGameArr);
  return (
    <div>
      <div >
        <Popup   visible={visible}>
         

          <div id="popup-div">
            <div className="popup">
              <h2>Say Hello to your Profile {user.name}!</h2>
              <a className="close" href="#">
                &times;
              </a>
              <div class="content ">
                Here you can see your favorite Games and you can also remove if
                you wish to do so
              </div>
            </div>            
          </div>
          <button
            onClick={() => {
              setVisible(false);
            }}
            className="text-danger"
          >
            Close
          </button>
        </Popup>
      </div>
      <div className="col-md-12 text-center">
        <h3 className="animate-charcter">Welcom {user.name}</h3>
        <h1>
          your favorite games:
          {faveGameArr.map(game=>{
          return(
            <div key={game.id} className="card" style={{width: '20rem'}}>
              <img className="card-img-top" src={game.background_image} alt="Card image cap"/>
              <div className="card-body ">
              <h5 className="card-title">{game.name} </h5>
              <p className="card-text">General rating: {game.rating}/5</p>
              <div  onClick={() => toggleActive(game)} className='text-center mb-1'> 
              <FiHeart  className={btnActive[game.id] ? "heartActive":"heartInactive"}  onClick={()=> dispatch(toggleFavorite(game))}></FiHeart>                         
              </div>
              <p className='text-center'>add to favorites!</p>
              <button className='glow-on-hover loginButton buttonWidthChanger'>

              <Link to={'/gameDetails'} state={game}>
                Show details
              </Link>
              </button>
            </div>
          </div>)
            })}
        </h1>
      </div>
    </div>
  );
};

export default Profile;
