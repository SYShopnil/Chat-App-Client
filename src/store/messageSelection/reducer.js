import {
    ADD_NEW_CHAT_ID,
    REMOVE_CHAT_ID
} from "./actionType"

const chatAddPartInitialState = {
    selectedChatId: []
}

const chatSelectionReducer = (state = chatAddPartInitialState, action) => {
    switch (action.type) {
        case ADD_NEW_CHAT_ID : {
            return {
                selectedChatId: [...state.selectedChatId, action.payload]
            }
        }
        case REMOVE_CHAT_ID : {
            const newChatIdList = state.selectedChatId.filter (chatId => chatId != action.payload)
            return {
                ...state,
                selectedChatId: newChatIdList
            }
        }
        default : return state
    }
}

export  {chatSelectionReducer,chatAddPartInitialState}