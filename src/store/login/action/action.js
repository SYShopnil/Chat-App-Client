import  {LOGGED_IN_FAILED, 
    LOGGED_IN_SUCCESSFUL, 
    LOGGED_IN_REQUEST,
    RESTORE_LOGIN_USER_SESSION,
    UNSUCCESSFULLY_LOGIN_USER_SESSION,
    LOGOUT} from "../actionType/actionType"
const loggedInFailed = () => {
    return {
        type: LOGGED_IN_FAILED,
        payload: null
    }
}

const loggedInSuccessful = (data) => {
    // console.log({data})
    return {
        type: LOGGED_IN_SUCCESSFUL,
        payload: data
    }
}

const alreadyLoggedIn = (user) => {
    return {
        type: RESTORE_LOGIN_USER_SESSION,
        payload: user
    }
}

const noUserLoggedIn = () => {
    return {
        type: UNSUCCESSFULLY_LOGIN_USER_SESSION
    }
}
const loggedInRequest = () => {
    return {
        type: LOGGED_IN_REQUEST,
        payload: null
    }
}

const logoutRequest = () => {
    return {
        type: LOGOUT
    }
}

export {
    loggedInFailed,
    loggedInSuccessful,
    loggedInRequest,
    alreadyLoggedIn,
    noUserLoggedIn,
    logoutRequest
}