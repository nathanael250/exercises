import React from "react";
import "./loginform.css"

const loginform = () => {
 
    return (
       <div className="cover">
        <h1>Login Form</h1>
        <input type="text" placeholder="UserName"/>
        <input type="password" placeholder="password" />
        <div className="login-btn">
            login
        </div>
        <p className="text">or login using</p>
        <div className="alt-login">
            <div className="google"></div>
            <div className="facebook"></div>
        </div>
       </div>
    )
}
export default loginform;