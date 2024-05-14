import DetailSignup from "./DetailSignup";

export default function SignUp() {
    return(
        <div>
            <div>
            <h1>Create an Account</h1>
            <h6>Already have an Account?<a href="#">Login</a></h6>
            </div>
            <div>
            <form>
                <label>Email address</label>
                <input 
                            onChange={handleName} 
                            className="input"
                            value={email} 
                            type="email"
                        /> 
                <div>
                <label>Password</label>
                <input className="password" value={password} type="password"/>
                <label>Confirm Password</label>
                <input className="confirm-password" value={cpassword} type="password"/>
                </div>
                <div>
                <a>Login Instead</a>
                <button>Create an Account</button>
                </div>
            </form>
            <div>

            </div>
            <div>
                <a href="#">Sign up with Facebook</a>
            </div>
            </div>
            <DetailSignup/>
        </div>
    )
}
