import React, {useState, useEffect} from 'react'
import {
  useRouter
} from "next/router"
import { UseAppContext } from '../../../store/store';


const Login = () => {
  const [formData, setFormData] = useState ({
    email: "",
    password: ""
  }) //store all form data 
  const {
      state: {
        loginState
      },
      dispatch: {
        loginProcess
      }
    } = UseAppContext()
  const router = useRouter ();
  const loginApiFetch = async () => {
    await loginProcess (formData.email, formData.password)
  }
  //login submission handler
  const loginHandler = (e) => {
    e.preventDefault();
    loginApiFetch()
  }
  useEffect (() => {
    if (loginState.isLoggedIn) {
      router.push ("/profile")
    }
  }, [loginState.isLoggedIn])
  return (
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            onChange = {(e) => setFormData ({...formData, email:e.target.value})}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1"
            onChange = {(e) => setFormData ({...formData, password:e.target.value})}
            />
        </div>
        <button 
        type="submit" 
        className="btn bg-blue-500 text-blue-200 mr-6"
        onClick = {(e) => loginHandler (e)}
        >Log In</button>
        <button type="submit" className="btn bg-red-500 text-blue-200">Create New Account</button>
    </form>
  )
}

export default Login