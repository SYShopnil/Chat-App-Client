import React, {useEffect, useState, useRef} from 'react'
import baseUrl from "../../../../utils/baseUrl"
import io from "socket.io-client";
import { UseAppContext } from '../../../store/store';

const SocketConnector = ({children}) => {
//    const socket = io (baseUrl);
   const socket = useRef();
   const [firstTimeRender, setFirstTimeRender] = useState (false)
    const  {
        state: {
            loginState,
            selectedChat,
            notificationState
        },
        dispatch: {
            newNotificationCome
        }
    } = UseAppContext ()

    //fix the two time render bug
    useEffect (() => {
        if (!socket.current) {
            socket.current = io(baseUrl);
        }
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
                socket.current.emit ("active", _id)
                socket.current.on ("connected", () => {
                    console.log(`A new user connected to socket server`)
                })
            }
       }
       return  () => {
           socket.current.emit("disconnectSocket");
           socket.current.off();
       }
    }, [firstTimeRender])

    //message received part
    useEffect (() => {
        socket.current.on ("messageReceive", async (messageData) => {
            const {chatId} = messageData
            const isSelected = selectedChat.find (selectedChatId => selectedChatId == chatId)
            // console.log(isSelected)
            if (isSelected) {
                console.log(`A new Message received`)
            }else {
    
                const {participant,sender} = messageData
                const notificationSendData = { //for sent a new message
                    notificationType: "newMessage",
                    sendBy: sender,
                    participant,
                }
                // console.log(notificationSendData)
                await newNotificationCome (notificationSendData)
            }
        })

        console.log({notificationState})
    })

    return (
        <div>
          {
              children
          } 
        </div>
    )
}

export default SocketConnector