import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props)  {
        super(props); 
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = this.state.username;
        if(!user) return;
        localStorage.setItem("user", user)
        window.location.reload()
    }


    render() {
        return (
            <div className = "form-wrapper">
                <div className="login-form-header">
                    <h2>Welcome Back</h2>
                </div>
                <form action="">
                    <div className="single-input">
                        <input 
                            type="text" 
                            name = "username" 
                            placeholder = "Enter your username"
                            onChange = {this.handleChange}
                            value = {this.state.username}
                        />
                    </div>
                    <div className="single-input">
                        <input 
                            type="password" 
                            name = "password" 
                            placeholder = "Enter your password"
                            onChange = {this.handleChange}
                            value = {this.state.password}
                        />
                    </div>
                    <div className="btn-container">
                        <button type="submit" onClick = {this.handleSubmit}>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
