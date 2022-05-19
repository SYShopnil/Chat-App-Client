import React from 'react'
import NotificationBar from '../component/common/NotificationBar/NotificationBar'
import MainLayoutStyle from  "./MainLayout.module.css"
import Link from "next/link"
import {
  UseAppContext
} from "../store/store"

const MainLayOut = ({children}) => {
  const {
    state: {
      notificationState: {
        isShow,
        notificationData
      }
    },
    dispatch: {
      toggleNotificationBar
    }
  } = UseAppContext () //get notification data from global state
  return (
     <div className = {`d-flex justify-center items-center `} style = {{minHeight: "100vh"}}>
       <div class="card p-8 w-10" style= {{width: "55rem"}}>
         {/* Chat app name */}
        <Link href="/">
          <a>
            <h1 className = {`card-img-top  text-3xl font-bold h-10 text-center`}>Chat APP</h1>
          </a>
        </Link>
        

        {/* notification sign part */}
        <div className = {`flex justify-end`}>
          <div className = {`${MainLayoutStyle.notificationWrapper}`}>{notificationData.length}</div>
          <i className= {`fa-solid fa-bell text-2xl`} onClick = {(e) => toggleNotificationBar () }></i>
        </div>

        {/* notification bar part */}
        <div>
          {
            isShow
            && 
            <NotificationBar/>
          }
        </div>
        <div class="card-body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayOut