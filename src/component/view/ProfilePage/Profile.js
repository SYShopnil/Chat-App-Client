import React from 'react'
import ChatDetatils from './ProfileChild/ChatDetatils'
import ProfileDetails from './ProfileChild/ProfileDetails'
import ShowUserParent from './ProfileChild/ShowUser'
import axios from "axios"
import {useRouter} from "next/router"
import baseUrl from "../../../../utils/baseUrl"
import { UseAppContext } from '../../../store/store'

const Profile = () => {
  const router = useRouter ();
  const {
      dispatch: {
        logoutProcess
      }
    } = UseAppContext ()
  const logoutHandler = async (e) => {
    e.preventDefault();
    const isLogout = await logoutProcess ();
    if (isLogout) {
      router.push ("/")
    }
  }
  return (
    <div className = {`grid grid-cols-1 md:grid-cols-6 gap-2`}>
          {/* Logout button */}
          <div className = {`col-span-12 md:col-span-6 flex justify-end`}>
            <button className = {`btn bg-slate-300`} onClick = {(e) => logoutHandler(e)}>Logout</button>
          </div>

          {/* chat details part */}
          <div className = {`md:mb-0 mb-3 col-span-12  md:col-span-3 `}>
            <ShowUserParent/>
          </div>

          {/* profile details part */}
          <div className = {` col-span-12 md:col-span-3`}>
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