// Page design written by Shaniya Malcolm
// Backend Support written by Jordan Le | Reference: https://github.com/axios/axios#example | https://reactjs.org/docs/forms.html

import React from 'react';
import Footer from '../../components/Footer/Footer'
import './signup.css';
var axios = require('axios');

export default function Signup(){
    // State variables needed for login process
    const [state, setState] = React.useState({ email: "", username: "", password: "", password2: "" });

    // handSubmit function used to send form data to database
    const handleSubmit = e => {
        e.preventDefault();
            
        axios.post('/api/users/register', state)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            window.location.href = "http://localhost:3000/login"
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    // handChange function used to control the state variables inside the form
    const handleChange = e => {
        setState({
          ...state,
          [e.target.name]: e.target.value
        });
    };

    return(
        <div className = 'registrationpage'>
            <div class="signupbox">
                <div className = 'signup'>
                    <h1>SIGN UP</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <p>Email</p>
                    <input type="text" name="email" placeholder = "Enter Email" onChange={handleChange}/>
                    <p>Username</p>
                    <input type="text" name="username" placeholder = "Enter Username" onChange={handleChange}/>
                    <p>Password</p>
                    <input type = "password" name="password" placeholder="Enter Password" onChange={handleChange}/>
                    <p>Confirm Password</p>
                    <input type = "password" name="password2" placeholder="Re-enter Password" onChange={handleChange}/>
                    <p className = 'errorMessage'>ERROR: Passwords do not match. Try typing again.</p>
                    <input type="submit" value="Register"/>
                    <a href="/login">Already have an account? Log in here!</a>
                </form>
            </div>
            <Footer />
        </div>
    )
}
