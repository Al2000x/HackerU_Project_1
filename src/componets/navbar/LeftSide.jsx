import React from 'react'
import darkLoggo from "../../media/gamestick_dark_mode.png";
import lightLoggo from "../../media/gamestick_light_mode.png";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const LeftSideNav = () => {
  //using useSelector to access the theme state to make boolean question
    const selectTheme = useSelector((state) => state.theme);
  return (
    <>
    <Link to={"/"}>
    <img
      src={selectTheme.dark ? darkLoggo : lightLoggo}
      //depending of the state of the selectTheme.dark the websites logo will change
      height="50px"
      alt="website logo"
    />
    <h3
      className={
        selectTheme.dark
          ? "d-inline-block game-informer-dark"
          : "d-inline-block game-informer-light"
      }
      //depending of the state of the selectTheme.dark the className will change
    >
      &nbsp;&nbsp;&nbsp; Game Informer
    </h3>
  </Link>
  </>
  )
}

export default LeftSideNav