import {LOGGED_IN_SUCCESSFUL, 
    LOGGED_IN_FAILED, 
    LOGGED_IN_REQUEST,
    RESTORE_LOGIN_USER_SESSION,
    UNSUCCESSFULLY_LOGIN_USER_SESSION} from "../actionType/actionType"

export const loginInitialState = {
    isLoggedIn: false,
    isLoading: true,
    loggedInUser: null
}

export const loginReducer = (state = loginInitialState, action) => {
    switch (action.type) {
        case LOGGED_IN_SUCCESSFUL: {
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                loggedInUser: action.payload
            }
        }
        case  LOGGED_IN_FAILED : {
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                loggedInUser: null
            }
        }
        case  LOGGED_IN_REQUEST : {
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                loggedInUser: null
            }
        }
        case RESTORE_LOGIN_USER_SESSION : {
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                loggedInUser: action.payload
            }
        }
        case UNSUCCESSFULLY_LOGIN_USER_SESSION : {
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                loggedInUser: null
            }
        }
        default:
            return state;
    }
}

