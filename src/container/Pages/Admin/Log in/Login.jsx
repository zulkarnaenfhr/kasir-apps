import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
    render() {
        return (
            <div id="Login">
                <div className="Login-Container">
                    <div className="Login-Form-Header-Container">
                        <h1>Login Admin</h1>
                    </div>
                    <form className="Login-Form-Container" action="">
                        <input type="text" placeholder="Username" className="container" />
                        <br />
                        <input type="text" placeholder="Password" className="container" />
                        <br />
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
