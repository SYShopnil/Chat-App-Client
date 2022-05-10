import  { 
    TOGGLE_NOTIFICATION_BAR, 
} from "./actionType.js"
const toggleNotificationBar = () => {
    return {
        type: TOGGLE_NOTIFICATION_BAR,
    }
}

// const loggedInSuccessful = (data) => {
//     // console.log({data})
//     return {
//         type: LOGGED_IN_SUCCESSFUL,
//         payload: data
//     }
// }

// const alreadyLoggedIn = (user) => {
//     return {
//         type: RESTORE_LOGIN_USER_SESSION,
//         payload: user
//     }
// }

// const noUserLoggedIn = () => {
//     return {
//         type: UNSUCCESSFULLY_LOGIN_USER_SESSION
//     }
// }
// const loggedInRequest = () => {
//     return {
//         type: LOGGED_IN_REQUEST,
//         payload: null
//     }
// }


export {
    toggleNotificationBar
}