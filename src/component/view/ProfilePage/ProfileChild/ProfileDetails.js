import React , {useState, useEffect} from 'react'
import { UseAppContext } from '../../../../store/store'
const ProfileDetails = () => {
  const initialProfileData = {
    name: "",
    sex: "",
    email: "",
    profileImage: ""
  }
  const [isProfileLoading, setIsProfileLoading] = useState (true)
  const [profileData, setProfileData] = useState (initialProfileData)
    const {
    state: {
      loginState
    }
  } = UseAppContext () //get global store data

  // fetch profile data when user is logged in
  useEffect (() => {
    if (loginState.isLoggedIn) {
      const {
        name,
        sex,
        profilePic,
        email
      } = loginState.loggedInUser
      setProfileData ({
        name,
        sex,
        email,
        profileImage: profilePic
      })
    }
    setIsProfileLoading (false)
  }, [])
  return (
    <>
      {
        !isProfileLoading
        ?
        <div className="card" style= {{width: "18rem"}}>
          <img src= {profileData.profileImage} className="card-img-top" alt="Profile Picture"/>
          <div className="card-body">
            <h1 className="card-title font-semibold mb-2 capitalize">{profileData.name}</h1>
            <h3 className = {`card-text mb-2`}>{profileData.email}</h3>
            <h2 className = {`card-text mb-2 capitalize`}>{profileData.sex}</h2>
          </div>
        </div>
        :
        <div>
          <h1>Loading....</h1>
        </div>
      }
    </>
  )
}

export default ProfileDetails