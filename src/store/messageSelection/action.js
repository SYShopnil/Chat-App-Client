import {
    ADD_NEW_CHAT_ID,
    REMOVE_CHAT_ID
} from "./actionType"

const addNewChatIntoList = (chatId) => {
    return {
        type: ADD_NEW_CHAT_ID,
        payload: chatId
    }
}

const removeChatIdFromList = (chatId) => {
    return {
        type: REMOVE_CHAT_ID,
        payload: chatId
    }
}

export {
    removeChatIdFromList,
    addNewChatIntoList
}