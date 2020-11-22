import React from 'react';
import NavBar from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import './login.css';
var axios = require('axios');

export default function Login(){
    // State variables needed for login process
    const [state, setState] = React.useState({ email: "", password: ""});

    // handSubmit function used to send form data to database
    const handleSubmit = e => {
        e.preventDefault();
            
        axios.post('/api/users/login', state)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            window.location.href = "http://localhost:3000/"
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
        <div className = 'loginpage'>
            {/* <NavBar /> */}
            <div className = "loginbox">
                <div className = 'login'>
                    <h1>LOGIN</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <p>Email</p>
                    <input type="text" name = "email" placeholder = "Enter Email" onChange={handleChange} />
                    <p>Password</p>
                    <input type = "password" name = "password" placeholder="Enter Password" onChange={handleChange} />
                    <input type = "submit" value="Login"/>
                    <a href="#">Forgot your password?</a><br/>
                    <a href="/register">Don't have an account? Sign up here!</a>
                </form>
            </div>
            <Footer />
        </div>
    )
}