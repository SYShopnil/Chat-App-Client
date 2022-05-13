import React, {useEffect, useState} from 'react'
import io from "socket.io-client"

const Test = () => {
  const [time, setTime] = React.useState('fetching')  
  const [sendData, setSendData] = useState ("")
    const [displayData, setDisplayData] = useState ("")
  React.useEffect(()=>{
    const socket = io('http://localhost:3030')
    socket.on('connect', ()=>console.log(socket.id))
    socket.on('connect_error', ()=>{
      setTimeout(()=>socket.connect(),3030)
    })
   socket.on('time', (data)=>setTime(data))
   socket.on('disconnect',()=>setTime('server disconnected'))

 
 },[])

 const sendHandler = (e) => {
   const socket = io('http://localhost:3030')
    e.preventDefault();
    socket.emit ("send", sendData)
  }

  useEffect (() => {
    const socket = io('http://localhost:3030')
        socket.on("receive", (data) => {
            setDisplayData (data);
        })
    })
 return (
   <div className="App">
     {time}

      <div>
                <input 
                type="text" 
                onChange = {(e) => setSendData (e.target.value)}/>
                <button
                    onClick={(e) => sendHandler (e)}
                >Send Data</button>
            </div>

            <div>
                <h1>Message: {displayData}</h1>
            </div>
   </div>
 )
}

export default Test