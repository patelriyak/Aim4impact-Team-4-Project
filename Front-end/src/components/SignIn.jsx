import signlogo from "../assets/Signup-logo.png";
import React, { useState } from "react";

function SignIn() {
    return(
        <div className="signup-container">
            <div className="signup">
                <img src={signlogo} width="233" height="80" alt="Maxwell" />
                <h1>Login</h1>
                <h6>Don't have an Account?<a href="#"> Signup</a></h6>
            </div>
            <div className="signup-form">
            <form>
                <div>
                    <label>Email address</label>
                    <input  className="input-field" type="email"/> 
                </div>
                <div className="">
                    <div className="">
                        <label>Password</label>
                        <input className="password input-field m-r3" type="password"/>
                    </div>
                    
                </div>
                <div className="display-flex jc-sb signup-buttton-container ai-c">
                <a href="">Signup Instead</a>
                <button className="pri-btn">Login</button>
                </div>
            </form>
            <div>
            </div>
            </div>
        </div>
    )
}
export default SignIn;