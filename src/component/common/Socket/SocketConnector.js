import React, {useEffect, useState} from 'react'
import baseUrl from "../../../../utils/baseUrl"
import io from "socket.io-client";
import { UseAppContext } from '../../../store/store';

const SocketConnector = ({children}) => {
   const socket = io (baseUrl);
   const [firstTimeRender, setFirstTimeRender] = useState (false)
    const  {
        state: {
            loginState
        }
    } = UseAppContext ()

    //fix the two time render bug
    useEffect (() => {
        setFirstTimeRender (true)
    }, [])
    //add a new connection
    useEffect (() => {
       if(firstTimeRender) {
            //if user is logged in
            if (loginState.isLoggedIn) {
                const {
                    _id
                } = loginState.loggedInUser
                // console.log({userId: _id})
                socket.emit ("active", _id)
                socket.on ("connected", () => {
                    console.log(`A new user connected to socket server`)
                })
            }
       }
    }, [firstTimeRender])

    // socket.emit ("active", user._id)
    return (
        <div>
          {
              children
          } 
        </div>
    )
}

export default SocketConnector