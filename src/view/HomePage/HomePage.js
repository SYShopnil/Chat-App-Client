import React, {useState, useEffect} from 'react'
import {
  useRouter
} from  "next/router"
import Login from '../../component/view/LoginPage/Login'
import MainLayOut from '../../layout/MainLayOut'
import { UseAppContext } from '../../store/store'

const HomePage = () => {
  const {
    state: {
      loginState: {
        isLoggedIn
      }
    }
  } = UseAppContext ()
  const router = useRouter ()
  //  session checker useEffect 
    useEffect (() => {
        (async () => {
            if (isLoggedIn) {
              router.push ("/profile")
            }else {
              router.push ("/login")
            }
        })()
    }, [])
  return (
    <>
      <h1>Loading...</h1>
    </>
  )
}

export default HomePage