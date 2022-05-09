import React, { createContext, useContext, useMemo, useReducer } from "react";
import {loginReducer, loginInitialState} from "./login/reducer/reducer"

const AppContext = createContext (null);
const Provider = AppContext.Provider


export const AppWrapper = ({children}) => {
    const LoginReducer = loginReducer;
    const LoginInitialState = loginInitialState;
    const [loginState, dispatchLogin] = useReducer(LoginReducer, LoginInitialState)
    const contextValue = {
        loginState,
        dispatchLogin
    }
    return (
        <Provider value = {contextValue}>
            {children}
        </Provider>
    )
}

export const UseAppContext = () => {
    return useContext (AppContext)
} 