import React, {useEffect, useState} from 'react'
import axios from "axios"
import ChatBox from './ChatListChild/ChatBox'
import Link from 'next/link'
import baseUrl from "../../../../../../utils/baseUrl"
import { UseAppContext } from '../../../../../store/store'

const ChatList = () => {
  const [chatlist, setChatList] = useState ([])
  const [scrollClass, setScrollClass] = useState ("")
  let loggedInUserId = ""
  const {
    state: {
      loginState: {
        isLoggedIn
      }
    }
  } = UseAppContext ()

  if (isLoggedIn) {
      const {
        state: {
          loginState: {
            loggedInUser: {
              _id
            }
          }
        }
      } = UseAppContext ()
      loggedInUserId = _id

  }
  // fetching data from chat box
  const chatBoxFetch = async () => {
    const {
      data: {
        status,
        chats
      }
    } = await axios.get (`${baseUrl}/chat/show/chatBox`) //fetch chat data
    if (status == 202 ) {
      setChatList (chats)
      if (chats.length > 3) {
        setScrollClass ("overflow-y-scroll")
      }
    }
  }
  useEffect ( () => {
    chatBoxFetch()
  },[])

  return (
    <section className = {`border-3 p-5 bg-slate-200 ${scrollClass} `}>
      <h1 className = {`font-bold capitalize text-center text-2xl mb-3`}>Chat Box</h1>
        {
          chatlist.length 
          ?
          <>
            {
              chatlist.map((chat, ind) => {
                // console.log(chat)
                const {
                  members
                } = chat
                const nonLoggedInUser = members.filter (member => {
                    return member._id != loggedInUserId
                })
                let participantId = ""
                nonLoggedInUser.map (member => {
                    participantId+= member._id
                })
                return (
                  <Link href = {`/chat/${participantId}`} key = {ind} >
                    <a>
                      <ChatBox chat = {chat} />
                    </a>
                  </Link>
                )
              })
            }
          </>
          :
          <>
            <h1>No Chat history found</h1>
          </>
        }
    </section>
  )
}

export default ChatList