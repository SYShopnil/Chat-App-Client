import React, {useState} from 'react'
import SingleMessages from './MessageChild/SingleMessages'
import axios from "axios"
import baseUrl from "../../../../utils/baseUrl"

const Messages = ({
    messages
}) => {
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
    </div>
  )
}

export default Messages