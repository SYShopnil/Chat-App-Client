import axios from "axios"
import baseUrl from "../../../utils/baseUrl"
import clientUrl from "../../../utils/clientUrl"
import  { 
    TOGGLE_NOTIFICATION_BAR, 
    A_NEW_NOTIFICATION_COME
} from "./actionType.js"
const toggleNotificationBar = () => {
    return {
        type: TOGGLE_NOTIFICATION_BAR,
    }
}

const newNotificationCome = async (notificationData) => {
    const {
        notificationType
    } = notificationData
    // console.log(notificationData)

    let payload;

    //if user send a new message notification
    if (notificationType == "newMessage") {
        const {
            sendBy,
            participant
        } = notificationData
        const {
            data: {
                status,
                userData
            }
        } = await axios.get (`${baseUrl}/user/get/individual/${sendBy}`)
        let senderName
        let senderProfilePicture;
        if (status == 202) {
            senderName = userData.name
            senderProfilePicture = userData.profilePic
        }
        payload = {
            type: "newMessage",
            content: `${senderName} has sent a new message`, 
            link: `/chat/${participant}`,
            senderProfilePicture
        }
    }

    return {
        type: A_NEW_NOTIFICATION_COME,
        payload
    }
}
export {
    toggleNotificationBar,
    newNotificationCome
}