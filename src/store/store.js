import React, { createContext, useContext, useReducer, useEffect , useState} from "react";
import {useRouter} from "next/router"


//login handler
import {loginReducer, loginInitialState} from "./login/reducer/reducer"
import {
    loggedInFailed,
    loggedInSuccessful,
    loggedInRequest,
    alreadyLoggedIn,
    noUserLoggedIn,
    logoutRequest
} from "./login/action/action"

//notification loginHandler
import {
    notificationHandlerReducer,
    notificationInitialState
} from "./notification/reducer"
import {
    toggleNotificationBar
} from "./notification/action"

//context api part
const AppContext = createContext (null);
const Provider = AppContext.Provider
import axios from  "axios"
import baseUrl from "../../utils/baseUrl"
axios.defaults.withCredentials = true
import Test from "../component/test/Test";

export const AppWrapper = ({children}) => {
    //====================login logout global store part start ==============================//
    const router = useRouter ();
    const LoginReducer = loginReducer;
    const LoginInitialState = loginInitialState;
    const [loginState, dispatchLogin] = useReducer(LoginReducer, LoginInitialState)
    const [isFirstTimeRender, setIsFirstTimeRender] = useState(false)

    //testing notification part 
    const [myNotification, setMyNotification] = useState ("")

    //login process
    const loggedInProcess = async (email, password) => {
        //1st request for login 
        const body = {
            email,
            password
        }
        dispatchLogin (loggedInRequest ());
        const {
            data: {
                message,
                status,
                user
            }
        } = await axios.post (`${baseUrl}/user/login`, body); //login api fetching
        
        // console.log(message)
        if (status == 202) { //if successful login
            dispatchLogin (alreadyLoggedIn (user));
        }else {
            dispatchLogin (noUserLoggedIn ());
        }
    }

    
    //check is Logged in or not 
    const checkLoggedInUser = async () => {
        const {
            data: {
                message,
                status,
                user
            }
        } = await axios.get (`${baseUrl}/user/check/login`); //check login user api fetching
        // console.log(message)
        if (status == 202) { //if logged in user is available
            dispatchLogin (loggedInSuccessful (user));
            //  console.log({user: user._id})
            return true
        }else {
            dispatchLogin (loggedInFailed ());
            return false
        }
    }

    //logout process 
    const logoutProcess = async () => {
        const {
        data: {
            status,
            message
        }
        } = await axios.get (`${baseUrl}/user/logout`);
        // console.log(status)
        if (status == 202) {
            dispatchLogin (logoutRequest ())
            return true
        }
        return false
    }
    //======================login logout global store part End =======================================================
    

    //======================notification handler part start =========================================//
    const NotificationReducer = notificationHandlerReducer;
    const NotificationInitialState = notificationInitialState;
    const [notificationState, dispatchNotification] = useReducer(NotificationReducer, NotificationInitialState)

    //====================== notification handler part End =======================================================

    //My Send Data
    const contextValue = {
        state: {
            loginState,
            notificationState,
            myNotification
        },
        dispatch: {
            loginRequest: () => dispatchLogin(loggedInRequest()),
            loginSuccessful : (userData) => dispatchLogin(loggedInSuccessful (userData)),
            loginFailed : (userData) => dispatchLogin(loggedInFailed ()),
            loginProcess: async (email, password) =>  await loggedInProcess (email, password),
            checkSession : async () => await checkLoggedInUser (),
            toggleNotificationBar: () =>  dispatchNotification (toggleNotificationBar()),
            logoutProcess : async() => await logoutProcess (),
            changeNotification: (value) => setMyNotification (value)
        }
    }
    
    //session checker useEffect 
    useEffect (() => {
        if (isFirstTimeRender) {
            (async () => {
                const isLoggedIn = await checkLoggedInUser ()
                if (!isLoggedIn) {
                    router.push ("/login")
                }
            })()
        }
    }, [isFirstTimeRender])

    useEffect (() => {
        setIsFirstTimeRender (true)
    }, [])
    return (
        <Provider value = {contextValue}>
            {
                loginState.isLoading 
                ?
                <h1>Loading...</h1>
                :
                <>
                    {children}
                </>
            }
            
        </Provider>
    )
}

export const UseAppContext = () => {
    return useContext (AppContext)
} 


