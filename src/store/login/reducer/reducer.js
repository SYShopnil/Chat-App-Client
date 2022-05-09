import {LOGGED_IN_SUCCESSFUL, LOGGED_IN_FAILED} from "../actionType/actionType"

export const loginInitialState = {
    isLoggedIn: false,
    isLoading: true,
    loggedInUser: null
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGGED_IN_SUCCESSFUL: {
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                loggedInUser: action.payload
            }
        }
        case  DECREASE : {
            if (state.count > 0) {
                return {
                    ...state,
                    isLoading: false,
                    isLoggedIn: false,
                    loggedInUser: null
                }
            }
        }
    
        default:
            return state;
    }
}

