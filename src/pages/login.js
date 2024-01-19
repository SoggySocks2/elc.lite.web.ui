import { useState } from "react";
import Axios from 'axios';
import { useHistory  } from "react-router-dom";

function Login() {

    const history = useHistory();
    const loginUrl = "https://localhost:7299/api/auth";
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [RememberMe, setRememberMe] = useState(false);

    const login = () => {
        
        try 
        {
            Axios
                .post(loginUrl, {
                    Headers: {
                        'Content-Type': 'application/json',
                        accept: 'application/json'
                    },
                    Email: Email,
                    Password: Password,
                    RememberMe: RememberMe
                })
                .then((res) => {    
                    alert(res["data"]["token"]);            
                    if(res.status === 200) {
                        //redirect to home
                        history.push("/home");
                    }
                    else
                    {
                        alert("Login failed. Not OK");
                    }
                })
                .catch((err) => {
                    alert("Error logging in. Not Status 200. Error: " + err + ".");
                });
        }
        catch (err) {
            alert("Error logging in. Error: " + err + ".");
        } 
    };

    return (
        <>
            <div>
            <h2>Log In</h2>
                <hr />
                <div asp-validation-summary="ModelOnly" className="text-danger" role="alert"></div>
                <div className="form-floating mb-3">
                    <input asp-for="Input.Email" className="form-control" autoComplete="username" aria-required="true" placeholder="name@example.com" value={Email} onChange={(event) => setEmail(event.target.value)} />
                    <label asp-for="Input.Email" className="form-label">Email</label>
                    <span asp-validation-for="Input.Email" className="text-danger"></span>
                </div>
                <div className="form-floating mb-3">
                    <input asp-for="Input.Password" className="form-control" autoComplete="current-password" aria-required="true" placeholder="password" value={Password} onChange={(event) => setPassword(event.target.value)} />
                    <label asp-for="Input.Password" className="form-label">Password</label>
                    <span asp-validation-for="Input.Password" className="text-danger"></span>
                </div>
                <div className="checkbox mb-3">
                    <label className="form-label">
                        <input className="form-check-input" checked={RememberMe} onChange={(event) => setRememberMe(event.target.value)} />   
                        &nbsp;Remember Me                     
                    </label>
                </div>
                <div>
                    <button id="login-submit" type="button" className="w-100 btn btn-lg btn-primary" onClick={login}>Log in</button>
                </div>
                <div>
                    <p>
                        <a id="forgot-password">Forgot your password?</a>
                    </p>
                    <p>
                        <a asp-page="./Register">Register as a new user</a>
                    </p>
                    <p>
                        <a id="resend-confirmation">Resend email confirmation</a>
                    </p>
                </div>
            </div>
        </>
    );
}
    
export default Login;