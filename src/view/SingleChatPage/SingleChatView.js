import React, {useState, useEffect} from 'react'
import Messages from '../../component/view/SingleChatPage/Messages'
import MainLayOut from '../../layout/MainLayOut'
import axios from "axios"
import baseURL from "../../../utils/baseUrl"
import {
  useRouter
} from "next/router"

const SingleChatView = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [messages, setMessages] = useState([])
  const [isMessageFetch, setIsMessageFetch] = useState(false)
  const router = useRouter ();
  //message fetching part 
  const messageFetch = async() => {
    const {
      query: {
        id:participant
      }
    } = router
    if (participant) {
      const body = {
        participant
      }
      const {
        data: {
          messageDetails,
          status
        }
      } = await axios.post (`${baseURL}/chat/get`, body) //get chat data according to user 
      if (status == 202) { //if message found
        setMessages (messageDetails)
      }
    }
    setIsLoading (false)
  }
  //message fetching userEffect
  useEffect (() => {
    messageFetch ()
  }, [isMessageFetch])

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
                    isMessageFetch = {isMessageFetch} 
                    setIsMessageFetch = {setIsMessageFetch}/>
                </div>
            </section>
        </MainLayOut>
      }
    </>
  )
}

export default SingleChatView