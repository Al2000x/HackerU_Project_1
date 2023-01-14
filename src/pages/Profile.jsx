import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import Popup from "react-animated-popup";
import { toggleFavorite } from "../features/games/favorite-games-slice";
import { useDispatch } from "react-redux";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";
import "../css_work/Profile.css";

const Profile = () => {
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const faveGameArr = useSelector((state) => state.fave.favorite);
  console.log(faveGameArr[0]);
  return (
    <div>
      <div>
        {/* popup using an extention */}
        <Popup visible={visible}>
          <div id="popup-div">
            <div className="popup">
              <p className="content text-dark">
                Say Hello to your Profile {user.name}!
              </p>
              <div class="content mb-2 ">
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
          <p> your favorite games:</p>
          <div>
            {" "}
            {faveGameArr[0] == null ? (
              <h1 className="place-holder">Favorite some games to see theme here!</h1>
            ) : (
              // a mapped carousell using the faveGameArr object array to display in real time an accurate carousell
              <Carousel>
                {faveGameArr.map((game) => {
                  return (
                    <div className="carouselDiv">
                      <img
                        className="pCarouselImg"
                        src={game.background_image}
                      />

                      <FiHeart
                        className="heartActive"
                        onClick={() => dispatch(toggleFavorite(game))}
                      ></FiHeart>
                    </div>
                  );
                })}
              </Carousel>
            )}{" "}
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Profile;
