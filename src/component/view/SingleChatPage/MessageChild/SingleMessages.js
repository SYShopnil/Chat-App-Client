import React, {useState}from 'react'
import { UseAppContext } from '../../../../store/store';
import SingleMessageStyle from "./SingleMessage.module.css"
import socket from "../../../../../utils/socket"

const SingleMessages = ({message}) => {
  const [messageContent, setMessageContent] = useState ({
    chatId: message.chatId,
    content: message.content,
    sendBy: {
      name: message.sendBy.name,
      profilePic: message.sendBy.profilePic,
      senderId: message.sendBy._id
    },
    messageId: message._id
  })
  const {
    state: {
      loginState: {
        isLoggedIn
      }
    }
  } = UseAppContext ()
  
  //check who is the sender 
  let senderStyle = "justify-start"
  let senderParagraphStyle = `${SingleMessageStyle.receiverMessageWrapper}`
  if (isLoggedIn) {
    const {
      state: {
        loginState: {
          loggedInUser: {
            _id:loggedInUserId
          }
        }
      }
    } = UseAppContext ()
    // console.log(senderStyle)
    if (loggedInUserId == messageContent.sendBy.senderId) {
      senderStyle = `justify-end`
      senderParagraphStyle = `${SingleMessageStyle.senderMessageWrapper}`
    }else {
      
    }
  }
  return (
    <section className = {`d-flex ${senderStyle} `}>
      {/* profile pic part */}
        <div className = {`mr-4`}>
          <img 
          src={messageContent.sendBy.profilePic} 
          alt= "Sender profile picture" 
          className = {`${SingleMessageStyle.senderProfilePicWrap} h-10 w-10`}/>
        </div>
      {/* message content part */}
      <div className = {``}>
        <p className = {`bg-blue-100 text-zinc-800 ${senderParagraphStyle}`}>{messageContent.content}</p>
      </div>
    </section>
  )
}

export default SingleMessages