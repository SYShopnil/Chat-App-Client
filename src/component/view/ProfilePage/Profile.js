import React from 'react'
import ChatDetatils from './ProfileChild/ChatDetatils'
import ProfileDetails from './ProfileChild/ProfileDetails'
import ShowUserParent from './ProfileChild/ShowUser'

const Profile = () => {
  return (
    <div className = {`grid grid-cols-1 md:grid-cols-6 gap-2`}>
          {/* chat details part */}
          <div className = {`md:mb-0 mb-3 md:col-span-3 `}>
            <ShowUserParent/>
          </div>

          {/* profile details part */}
          <div className = {`md:col-span-3`}>
            <ProfileDetails/> 
          </div>
          
          <div className = {`md:mb-0 mb-3 md:col-span-1`}></div>
          <div className = {`md:mb-0 mb-3 md:col-span-3`}>
            <ChatDetatils/>
          </div>
         
    </div>
  )
}

export default Profile