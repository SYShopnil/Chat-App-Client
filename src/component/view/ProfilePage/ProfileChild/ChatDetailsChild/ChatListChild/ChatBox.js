import React from 'react'
import {UseAppContext} from "../../../../../../store/store"

const ChatBox = ({
    chat
}) => {
    const {
        state: {
            loginState: {
                loggedInUser: {
                    _id: loggedInUserId
                },
                isLoggedIn
            }
        }
    } = UseAppContext ()

    let showProfilePicture = ""
    let showSenderName = ""

    //find the non logged in user member's profile picture 
    if (isLoggedIn) {
        const {
            members
        } = chat //get individual chat's all member
        
        const nonLoggedInUser = members.filter (member => {
            return member._id != loggedInUserId
        })
        nonLoggedInUser.map (member => {
            showProfilePicture+= member.profilePic
            showSenderName += member.name
        })
    }
    return (
        <div className = {`grid grid-cols-4 mb-3`}>
            {/* title part */}
            <div className = {`col-span-1 `}>
                <img src= {showProfilePicture} className = {`h-11 w-11  border-4`} style = {{borderRadius: "100%"}} alt="Profile Picture" />
            </div>
            {/* display Chat list part */}
            <div className = {`col-span-3`}>
                {/* sender name */}
                <div>
                    <h1 className = {`font-extrabold`}>{showSenderName}</h1>
                </div>
                {/* latest message */}
                <div>
                    <h1>
                        {
                            chat.latestMessage
                            ?
                            <>
                                {
                                    chat.latestMessage
                                }
                            </>
                            :
                            <>
                                No Conversation Yet
                            </>
                        }
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default ChatBox