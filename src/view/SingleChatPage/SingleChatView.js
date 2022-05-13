import React, {useState, useEffect} from 'react'
import Messages from '../../component/view/SingleChatPage/Messages'
import MainLayOut from '../../layout/MainLayOut'
import axios from "axios"
import baseURL from "../../../utils/baseUrl"
import MessageStyle from "../../component/view/SingleChatPage/Message.module.css"
import {
  useRouter
} from "next/router"
import socket from '../../../utils/socket'
import { UseAppContext } from '../../store/store'
// import socket from "../../../utils/socket"
import Lottie from "lottie-react";
import typingAnimation from "../../../assert/typing.json";

const SingleChatView = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [messages, setMessages] = useState([])
  const [isMessageFetch, setIsMessageFetch] = useState(false)
  const [chatId, setChatId] = useState ("")
  const [chatMembers, setChatMembers] = useState ([])
  const router = useRouter ();
  const [sendInput, setSendInput] = useState("")
  const [isFirstRender, setIsFirstRender] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  //context part 
  const {
    dispatch: {
      changeNotification
    },
  } = UseAppContext ()

  const typingHandler = (e) => {
    e.preventDefault ();
    setSendInput (e.target.value)
    socket.emit ("typing", chatId);
  }

  //send message button handler
  const sendButtonHandler = async (e) => {
        e.preventDefault();
        const body = {
            content : sendInput
        }
        const {
            data: {
                status,
                message,
                newMessage
            }
        } = await axios.post (`${baseURL}/message/sent/${chatId}`,body )
        if (status == 201) { //when message has been sent successfully 
          const emitData = {
            sendBy: newMessage.sendBy,
            chatMembers,
            chatId
          }
          socket.emit ("newMessage",emitData)
          setIsMessageFetch (!isMessageFetch)
        }
        setSendInput ("")
        socket.emit ("typingFinish", chatId)
        // console.log(chatMembers)
    }

  //typing animation option 
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: typingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  //fix the two times render bug 
  useEffect (() => {
    setIsFirstRender (true)
  }, [])

  //get or create a new conversation useEffect
  useEffect (() => {
    (async() => {
      if (isFirstRender) {
        const {
          query: {
            id:participant
          }
        } = router
        // console.log ({participant})
        if (participant) {
          const body = {
            participant
          }
          const {data} = await axios.post (`${baseURL}/chat/get`, body)
            // console.log({response: data})
          let chat = ""
          if (true) {
            const {
              data: {
                messageDetails,
                status,
                message,
                conversationDetails
              }
            } = await axios.post (`${baseURL}/chat/get`, body) //get chat data according to user 
            if (status == 202) { //if message found
              chat = messageDetails[0].chatId
              setMessages (messageDetails)
              setChatId (messageDetails[0].chatId)
              setChatMembers (conversationDetails.members)  
            }
            if (status == 201 || status == 404) { //if a new conversion has created
              chat = conversationDetails._id
              setChatId (conversationDetails._id)  
              setChatMembers (conversationDetails.members)                                
            }
            
          }
          if (!isSelected) {
            setIsSelected (true)
            socket.emit ("joinChat", chat)
          }
        }
        
        setIsLoading (false)
      }
  })()
  }, [isMessageFetch, isFirstRender])
  
  //all time active useEffect to maintain the socket server 
 useEffect(() => {
   socket.on ("messageReceive", (receiveData) => {
     const {
       participant,
       chatId
     } = receiveData
     console.log(`A new message has been received`)
     if (isSelected) {
       setIsMessageFetch (!isMessageFetch)
     }else {
        changeNotification ("A new notification come")
     }
   })
   changeNotification ("A new notification come")
   socket.on ("startTyping", () => {
     setIsTyping (true)
   })
   socket.on ("stopTyping", () => {
     setIsTyping (false)
   })
  });

  //jsx part
  return (
    <>
      {
        isLoading
        ?
        <div>
          Loading....
        </div>
        :
        <MainLayOut>
            {/* chat box wrapper */}
            <section>
                {/* chat box title */}
                <div>
                    <h1 className = {`text-center font-bold text-xl`}>Chat Box</h1>
                </div>
                
                {/* message part */}
                <div>
                    <Messages 
                    messages = {messages} 
                    />
                </div>

              {/* typing animation part */}
              <div>
                {
                  isTyping
                  &&
                  <Lottie 
                    animationData={typingAnimation}
                    loop= {true}
                    style={{ marginBottom: 15, marginLeft: 0, width: 100 }}
                  />
                }
              </div>
              
                {/* message typing part */}
              <div className = {`mt-5`}>
                  <div className="form-floating mb-3">
                      <input type="text" 
                      className="form-control" 
                      id="floatingInput" 
                      placeholder="Type message"
                      style = {{position: "relative"}}
                      onChange = {(e) => typingHandler (e)}
                      value = {sendInput}
                      />

                      {/* send button */}
                      <i 
                      className= {`fa-solid fa-paper-plane ${MessageStyle.sendMessageButtonWrap}`}
                      onClick = {(e) => sendButtonHandler (e)}
                      ></i>
                      <label for="floatingInput">Send Message</label>
                  </div>
              </div>
            </section>
        </MainLayOut>
      }
    </>
  )
}

export default React.memo (SingleChatView)