import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/user/userSlice'
import '../componets/Profile.css'
const Profile = () => {
    const user = useSelector(selectUser)
  return (
    <div>
        <div className="col-md-12 text-center">
        <h3 className="animate-charcter">Welcom {user.name}</h3>
    </div>
        
    </div>
  )
}

export default Profile