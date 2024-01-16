import React, { useState } from "react"
import "./LoginSignup.css"
import { useNavigate } from "react-router-dom";



import user_icon from "../Assets/person.png"
import email_icon from "../Assets/email.png"
import password_icon from "../Assets/password.png"

const LoginSignup = () => {
    
    console.log("LoginSignup component rendered");

    const navigate = useNavigate();

    const handleSignUpClick = () => {
        if (action === "Login") {
          setAction("Sign Up");
        } else {
          
          navigate("/home");
      
          
        }}

        const handleLoginClick = () => {
            if (action === "Sign Up") {
              setAction("Login");
            } else {
              
            
            navigate("/home");
        
            }}

    const [action,setAction] = useState("Login");

  return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action ==="Login"?"":<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Name" />
            </div>}
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="text" placeholder="Email" />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="text" placeholder="Password" />
            </div>
        </div>
        {action ==="Sign Up"?<div></div>:<div className="forgot-password">Forgot your password? <span>Click here!</span></div>}
        <div className="submit-container">
            <div className={action ==="Login"?"submit gray":"submit"}
             onClick={handleSignUpClick}>Sign Up</div>
            <div className={action ==="Sign Up"?"submit gray":"submit"}
            onClick={handleLoginClick}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup