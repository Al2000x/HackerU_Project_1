import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/user/userSlice'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../media/gamestick_light_mode.png'
import '../css_work/Profile.css'

const Profile = () => {

    const user = useSelector(selectUser)
    const faveGameArr = useSelector(state => state.fave.favorite)


    console.log(faveGameArr)
  return (
    <div>
        <div className="col-md-12 text-center">
        <h3 className="animate-charcter">Welcom {user.name}</h3>
        <h1>your favorite games:
         {faveGameArr.map(game =>game.name)}
        </h1>
    </div>
        
    </div>
  )
}

export default Profile