import React from 'react'

const MainLayOut = ({children}) => {
  return (
     <div className = {`d-flex justify-center items-center `} style = {{minHeight: "100vh"}}>
       <div class="card p-8 w-10" style= {{width: "55rem"}}>
        <h1 className = {`card-img-top  text-3xl font-bold h-10 text-center`}>Chat APP</h1>
        <div class="card-body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayOut