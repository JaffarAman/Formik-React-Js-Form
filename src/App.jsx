import React from 'react'
import Basic from './Component/Basic'
import LoginPic from "./img/login.svg"
import LoginForm from "./Component/loginForm.jsx"
const App = () => {
  return (
    <div className="container mt-5">

    <div className="row">
      <div className="col-md-5">
      <h1 className="font-weight-bold">SIGN UP</h1>
          
          <LoginForm />

      </div>
      <div className="col-md-5 my-auto">
        <img src={LoginPic} className="img-fluid" alt="" />
      </div>
      <div></div>

    </div>
    </div>
  )
}

export default App
