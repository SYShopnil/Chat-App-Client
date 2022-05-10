import React, {useState, useEffect} from 'react'
import SearchBar from './ChatUserSearchChild/SearchBar'
import axios from "axios"
import baseUrl from "../../../../../../utils/baseUrl"
import ShowUser from './ChatUserSearchChild/ShowUser'
import userSearchStyle from "./ChatUserSearch.module.css"

const ChatUserSearch = () => {
  const [users, setUsers] = useState ([])
  const [searchBy, setSearchBy] = useState ("")
  const fetchUserData = async () => {
    const {data:response} = await axios.post (`${baseUrl}/user/show/all`, searchBy);
     if (response.status == 202) {
       const {
         message,
         users
      } = response
      setUsers (users)
     }
  
  }

  //fetch all user data 
  useEffect (() => {
    fetchUserData ();
  }, [])
  return (
    <section>
      {/* search bar part */}
      <div>
        <SearchBar />
      </div>

      {/* display all user part */}
      <div className = {`${userSearchStyle.showUserWrap}`}>
        {
          users.length
          ?
          <div>
            {
              users.map((user, ind) => {
                const {
                  name,
                  profilePic: profileImage,
                  _id: userId
                } = user
                return (
                  <div key = {ind}>
                      <ShowUser name = {name} profileImage = {profileImage} userId = {userId}/>
                  </div>
                )
              })
            }
          </div>
          : 
          <div>
            <h1>No User Found</h1>
          </div>
        }
      </div>
    </section>
  )
}

export default ChatUserSearch