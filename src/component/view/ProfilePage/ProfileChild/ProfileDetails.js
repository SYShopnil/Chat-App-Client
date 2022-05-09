import React , {useState} from 'react'

const ProfileDetails = () => {
  const initialProfileData = {
    name: "Noshin Tasnim Priyoty",
    sex: "female",
    email: "noshinTasnim123@gmail.com",
    profileImage: "http://localhost:3030/user1652047216434.png"
  }
  const [profileData, setProfileData] = useState (initialProfileData)
  return (
    <div className="card" style= {{width: "18rem"}}>
      <img src= {profileData.profileImage} className="card-img-top" alt="Profile Picture"/>
      <div className="card-body">
        <h1 className="card-title font-semibold mb-2 capitalize">{profileData.name}</h1>
        <h3 className = {`card-text mb-2`}>{profileData.email}</h3>
        <h2 className = {`card-text mb-2 capitalize`}>{profileData.sex}</h2>
      </div>
    </div>
  )
}

export default ProfileDetails