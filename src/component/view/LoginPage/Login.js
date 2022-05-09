import React from 'react'

const Login = () => {
  return (
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" class="btn bg-blue-500 text-blue-200 mr-6">Log In</button>
        <button type="submit" class="btn bg-red-500 text-blue-200">Create New Account</button>
    </form>
  )
}

export default Login