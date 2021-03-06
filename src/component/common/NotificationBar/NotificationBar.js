import React from 'react'
import NotificationBarStyle from "./NotificationBar.module.css"
import Link from "next/link"
import {
  UseAppContext
} from "../../../store/store"
import SingleNotification from './NotificationBarChild/SingleNotification'

const NotificationBar = () => {
  const {
    state: {
      notificationState: {
        notificationData
      },
      myNotification
    },
    dispatch: {
      toggleNotificationBar
    }
  } = UseAppContext () //get notification data from global state
  return (
    <div className= {`card ${NotificationBarStyle.barWrapper}`}>
        <div className="card-header">
            Notification
        </div>
        {/* it will show all single notification */}
        <div className="card-body">
            {
              notificationData.length 
              ? 
              <>
                {
                  notificationData.map ((notification, ind) => {
                    return (
                      <div key = {ind}>
                        <Link href = {notification.link}>
                           <a >
                             <SingleNotification data = {notification}/>
                           </a>
                        </Link>
                      </div>
                    )
                  })
                }
              </>
              :
              <h1>No Notification</h1>
            }
        </div>
    </div>
  )
}

export default NotificationBar