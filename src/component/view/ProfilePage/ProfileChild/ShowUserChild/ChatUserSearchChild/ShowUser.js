import React from 'react'
import {useRouter} from "next/router"
const ShowUser = (
    {
        name,
        profileImage,
        userId
    }
) => {
    const router = useRouter ();
    const createChatHandler = async (e) => {
        e.preventDefault();
        router.push (`/chat/${userId}`)
    }
  return (
    <section className = {`grid grid-cols-3 gap-2`}>
        {/* profile picture */}
        <div>
            <img src= {profileImage} className = {`w-1/2`} alt="Profile Image" />
        </div>

        {/* full name  */}
        <div className = {`text-center`}>
            <h3>{name}</h3>
        </div>

        {/* message button */}
        <button 
        type = "button"
        onClick = {(e) => createChatHandler (e)}
        >
            <i class="fa-solid fa-message"></i>
        </button>
    </section>
  )
}

export default ShowUser