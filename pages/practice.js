import React, {useEffect, useState} from 'react'
import io from "socket.io-client"
import baseUrl from "../utils/baseUrl"

const practice = () => {
    const [isSocketConnect, setIsSocketConnect] = useState (false)
    const [isJoin, setIsJoin] = useState (false)
    const [roomName, setRoomName] = useState ("")
    const [inputRoomName,setInputRoomName] = useState ("")
    const [message, setMessage] = useState ("")
    const [displayMessage, setDisplayMessage] = useState ("")
    const socket = io (baseUrl);


    //join now handler 
    const joinNowHandle = (e) => {
        e.preventDefault();
        socket.emit("joinRoom", inputRoomName)
        socket.on ("successfullyJoin", () => {
            setIsJoin (true)
        })
        console.log(inputRoomName)
    }

    //messageSendHandler handler
    const messageSendHandler = (e) => {
        e.preventDefault();
        socket.emit ("newMessage", {message,roomName: inputRoomName })
    }

    //connect to socket 
    useEffect (() => {
        socket.emit ("join")
        socket.on ("connected", () => {
            setIsSocketConnect (true)
        })
    }, [])

    //to handler the socket 
    useEffect (() => {
        socket.on ("receivedMessage", (newMessage) => {
            setDisplayMessage (newMessage)
        })
    })
    
    return (
        <div>
            {
                isSocketConnect 
                &&
                <h1>Connected to Socket</h1>
            }
           <div className = {`mb-5`}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Room Name</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    placeholder = "Type Room Name"
                    onChange = {(e) => setInputRoomName (e.target.value) }
                    />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div>
                    <button
                        className = {`btn bg-orange-300`}
                        onClick = {(e) => joinNowHandle (e)}
                    >Join Now</button>
                </div>  
           </div>


           {
               isJoin
               &&
                <>
                    <div className = {`mb-3`} >
                        <h1 className = {`text-xl font-semibold`}>Welcome to {roomName}!!!</h1>
                    </div>
                    <div class="mb-3">
                        <input 
                        type="text" 
                        class="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        placeholder = "Message"
                        onChange = {(e) => setMessage (e.target.value)}
                        />
                    </div>

                    <div>
                        <button
                            className = {`btn bg-blue-400`}
                            onClick = {(e) => messageSendHandler (e)}
                        >Send Message</button>
                    </div>  
                </>
           }

           <div>
               <h1 className = {`text-2xl font-semibold`} >Message: {displayMessage}</h1>
           </div>
        </div>
    )
}

export default practice