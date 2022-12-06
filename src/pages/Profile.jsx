import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import "react-alice-carousel/lib/alice-carousel.css";
import Popup from "react-animated-popup";
import "../css_work/Profile.css";
import { useState } from "react";

const Profile = () => {
  const [visible, setVisible] = useState(true);
  const user = useSelector(selectUser);
  const faveGameArr = useSelector((state) => state.fave.favorite);

  console.log(faveGameArr);
  return (
    <div>
      <div >
        <Popup   visible={visible}>
         

          <div id="popup-div">
            <div className="popup">
              <h2 className="">Say Hello to your Profile {user.name}!</h2>
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
          {faveGameArr.map((game) => game.name)}
        </h1>
      </div>
    </div>
  );
};

export default Profile;
