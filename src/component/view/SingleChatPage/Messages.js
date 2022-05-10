import React, {useState} from 'react'
import SingleMessages from './MessageChild/SingleMessages'
import MessageStyle from "./Message.module.css"
import axios from "axios"
import baseUrl from "../../../../utils/baseUrl"

const Messages = ({
    messages,
    isMessageFetch,
    setIsMessageFetch
}) => {
    const [sendInput, setSendInput] = useState("")
    let chatId = "";
    const sendButtonHandler = async (e) => {
        e.preventDefault();
        const body = {
            content : sendInput
        }

        const {
            data: {
                status,
                message
            }
        } = await axios.post (`${baseUrl}/message/sent/${chatId}`,body )
        if (status == 201) { //when message has been sent successfully 
            console.log(`Message sent`)
            setIsMessageFetch (!isMessageFetch)
        }
        setSendInput ("")
    }
    if (messages.length) {
        chatId = messages[0].chatId
    }
  return (
    <div>
        {/* message display part */}
        <div>
            {
                !messages.length
                ?
                <>
                    No Conversation Yet
                </>
                :
                <>
                    {
                        messages.map ((message, ind) => {
                            return (
                                <div key = {ind}>
                                    <SingleMessages message = {message}/>
                                </div>
                            )
                        })
                    }
                </>
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
                onChange = {(e) => setSendInput (e.target.value)}
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
        
    </div>
  )
}

export default Messages