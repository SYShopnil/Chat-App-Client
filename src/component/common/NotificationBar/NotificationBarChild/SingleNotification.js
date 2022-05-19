import React, {useState} from 'react'
import Link from "next/link"

const SingleNotification = ({data}) => {
  const [notificationType, setNotificationType] = useState (data.type)
  const [notificationContent, setNotificationContent] = useState (data.content)
  const [notificationPageLink, setNotificationPageLink] = useState (data.link)
  const [notificaitonSenderProfilePicture, setNotificationSenderProfilePicture] = useState (data.senderProfilePicture)
  

  return (
    <div className = {`grid grid-cols-12 gap-1 `}>
      <img 
          src= {`${notificaitonSenderProfilePicture}`} 
          alt="sender profile picture" 
          className = {`h-11 w-11  border-4 col-span-1`} 
          style = {{borderRadius: "100%"}} 
          
          />

          <div className = {`col-span-9 text-center d-flex justify-center align-middle`}>
            <p>{notificationContent}</p>
          </div>

          <div className = {`col-span-2`}>
            <i class="fa-solid fa-message"></i>
          </div>
    </div>
  )
}

export default SingleNotification