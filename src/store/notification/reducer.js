import {
    TOGGLE_NOTIFICATION_BAR
} from "./actionType.js"

export const notificationInitialState = {
    notificationData: [],
    isShow: false,
    isUpdated: false
}

export const notificationHandlerReducer = (state = notificationInitialState, action) => {
    switch (action.type) {
        case TOGGLE_NOTIFICATION_BAR: {
            return {
                ...state,
                isShow: !state.isShow
            }
        }
        default:
            return state;
    }
}
