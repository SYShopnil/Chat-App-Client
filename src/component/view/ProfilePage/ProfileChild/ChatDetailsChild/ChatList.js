import React, {useEffect, useState} from 'react'
import axios from "axios"

const ChatList = () => {
  const [chatlist, setChatList] = useState ([])
  console.log(chatlist)

  // fetching data from chat box
  const chatBoxFetch = async () => {
    const {
      data: {
        status,
        chats
      }
    } = await axios.get ("chatBox.json") //fetch chat data
    if (status == 202 ) {
      // console.log(chats)
      setChatList (chats)
    }
  }
  useEffect (() => {
    chatBoxFetch()
  },[])
  return (
    <section>
        {/* title part */}
        <h1 className = {`font-bold capitalize text-center text-2xl`}>Chat Box</h1>

        {/* display Chat list part */}
        <div>
            
        </div>
    </section>
  )
}

export default ChatList