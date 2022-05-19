import {
    TOGGLE_NOTIFICATION_BAR,
    A_NEW_NOTIFICATION_COME
} from "./actionType.js"

export const notificationInitialState = {
    notificationData: [],
    isShow: false,
    isUpdated: false
}

 const notificationHandlerReducer = (state = notificationInitialState, action) => {
    switch (action.type) {
        case TOGGLE_NOTIFICATION_BAR: {
            return {
                ...state,
                isShow: !state.isShow
            }
        }
        case A_NEW_NOTIFICATION_COME : {
            return {
                ...state,
                isShow: true,
                isUpdated: true,
                notificationData: [
                    ...state.notificationData,
                    action.payload
                ]
            }
        }
        default:
            return state;
    }
}
export {
    notificationHandlerReducer
}