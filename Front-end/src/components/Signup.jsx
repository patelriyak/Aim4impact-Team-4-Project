import signlogo from "../assets/Signup-logo.png";
import React, { useState } from "react";

function SignUp({ tabs }) {
    return(
        <div className="signup-container">
            <div className="signup">
                <img src={signlogo} width="233" height="80" alt="Maxwell" />
                <h1>Create an Account</h1>
                <h6>Already have an Account?<a href="#"> Login</a></h6>
            </div>
            <div className="signup-form">
            <form>
                <div className="display-flex jc-sb ai-c">
                    <div className="pr-2 fw-half">
                        <label>Firstname</label>
                        <input type="name" className="input-field" />
                    </div>
                    <div className="pl-2 fw-half">
                        <label>Last name</label>
                        <input type="name" className="input-field" />
                    </div>
                </div>
                <div className="display-flex jc-sb ai-c">
                    <div>
                        <label>How old are you?</label>
                        <input type="number" className="input-field" />
                    </div>
                </div>
                <div className="display-flex jc-sb ai-c">
                    <div>
                        <label>Select your gender</label>
                        <select className="input-field">
                            <option>Select your gender</option>
                            <option>female</option>
                            <option>male</option>
                        </select>
                    </div>
                </div>
                <div className="display-flex jc-sb ai-c">
                    <div>
                        <label>Do you have any allergies?</label>
                        <input type="text" className="input-field"/>
                    </div>
                </div>
                <div>
                    <label>Email address</label>
                    <input 
                                className="input-field"
                                type="email"
                            /> 
                </div>
                <div className="display-flex jc-sb ai-c">
                    <div className="pr-2 fw-half">
                        <label>Password</label>
                        <input className="password input-field m-r3" type="password"/>
                    </div>
                    <div className="pl-2 fw-half">
                        <label>Confirm Password</label>
                        <input className="confirm-password input-field" type="password"/>
                    </div>
                </div>
                <div className="display-flex jc-sb signup-buttton-container ai-c">
                <a href="">Login Instead</a>
                <button className="pri-btn">Create an Account</button>
                </div>
            </form>
            <div>
            </div>
            </div>
        </div>
    )
}
export default SignUp;