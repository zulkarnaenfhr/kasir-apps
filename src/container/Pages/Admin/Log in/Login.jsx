import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { API } from "../../../../services";
import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                username: "",
                password: "",
            },
            statusLogin: true,
        };
        this.handleFormChange = this.handleFormChange.bind(this);
        this.buttonHiddenTriggerLoginLink = createRef();
    }

    handleFormChange = (event) => {
        const dataNew = { ...this.state.data };
        dataNew[event.target.name] = event.target.value;
        this.setState({
            data: dataNew,
        });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        API.getAdminData(this.state.data.username)
            .then(async (result) => {
                if (this.state.data.password === result.data.password) {
                    this.buttonHiddenTriggerLoginLink.current.click();
                } else {
                    this.setState({
                        statusLogin: false,
                    });
                    await Swal.fire({
                        icon: "error",
                        title: "<strong>Incorrect Username or Password!</strong>",
                        timer: "3000",
                    });
                }
            })
            .catch(async (err) => {
                this.setState({
                    statusLogin: false,
                });
                await Swal.fire({
                    icon: "error",
                    title: "<strong>Incorrect Username or Password!</strong>",
                    timer: "3000",
                });
            });
    };

    render() {
        return (
            <div id="Login">
                <div
                    style={{
                        display: "none",
                    }}
                >
                    <Link
                        ref={this.buttonHiddenTriggerLoginLink}
                        to={{
                            pathname: `/kasir-apps/kasir`,
                        }}
                        state={{
                            username: this.state.data.username,
                            password: this.state.data.password,
                        }}
                    >
                        <p>link to kasir , after log in success</p>
                    </Link>
                </div>
                <div className="Login-Container">
                    <div className="Login-Form-Header-Container">
                        <h1>Login Admin</h1>
                        {this.state.statusLogin === false ? (
                            <div className="Login-InvalidMessages-Container">
                                <p>username or password is invalid!!!</p>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <form onSubmit={this.handleFormSubmit} className="Login-Form-Container" action="">
                        <input required onChange={this.handleFormChange} name="username" type="text" placeholder="Username" className="container" />
                        <br />
                        <input required onChange={this.handleFormChange} name="password" type="password" placeholder="Password" className="container" />
                        <br />
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
