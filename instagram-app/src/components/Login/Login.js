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
                        />
                    </div>
                    <div className="single-input">
                        <input 
                            type="text" 
                            name = "password" 
                            placeholder = "Enter your password"
                            onChange = {this.handleChange}
                        />
                    </div>
                    <div className="btn-container">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
