import  {LOGGED_IN_FAILED, LOGGED_IN_SUCCESSFUL} from "../actionType/actionType"
const loggedInFailed = () => {
    return {
        type: LOGGED_IN_FAILED,
        payload: null
    }
}

const loggedInSuccessful = (data) => {
    return {
        type: LOGGED_IN_SUCCESSFUL,
        payload: data
    }
}

const loggedInProcess = async (email, password) => {
    
}

export {
    loggedInFailed,
    loggedInSuccessful
}