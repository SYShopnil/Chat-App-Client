import React from 'react'

const Registration = () => {
  return (
    <form>
        {/* full name */}
        <div class="mb-3">
            <label for="forFullName" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="forFullName" aria-describedby="emailHelp"/>
        </div>
        {/* gender */}
        <div class="mb-3" >
             <label for="forFullName" class="form-label">Gender</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                    Male
                </label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                <label class="form-check-label" for="flexRadioDefault2">
                    Female
                </label>
            </div>
        </div>
        {/* email */}
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>

        {/* password */}
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>

        {/* profile picture upload */}
        <div class="mb-3">
            <label for="formFile" class="form-label">Profile Picture</label>
            <input class="form-control" type="file" id="formFile"/>
        </div>

        {/* registration button */}
        <button type="submit" class="btn btn-btn bg-red-500 text-blue-200">Register</button>
    </form>
  )
}

export default Registration