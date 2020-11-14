import React from 'react';
import NavBar from '../../components/Navigation/Navbar'
import Footer from '../../components/Footer/Footer'
import './signup.css';

var axios = require('axios');
var qs = require('qs');

class Signup extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
          email : "",
          username : "",
          password : "",
          password2 : ""
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      //this.handleChangeUsername = this.handleChange(this);
    }
    handleSubmit(event){
        console.log("at handle submit")
        let formData = new FormData(event.target);
        var config = {
            method: 'post',
            url: 'http://localhost:5000/api/users/register',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : formData
        };
        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }

    render(){
    return(
        <div className = 'registrationpage'>
            <NavBar />
            <div class="signupbox">
                <div className = 'signup'>
                    <h1>SIGN UP</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <p>Email</p>
                    <input type="text" name = "email" placeholder = "Enter Email" />
                    <p>Username</p>
                    <input type="text" name = "username" placeholder = "Enter Username" />
                    <p>Password</p>
                    <input type = "password" name = "password" placeholder="Enter Password" />
                    <p>Confirm Password</p>
                    <input type = "password" name = "password1" placeholder="Re-enter Password" />
                    <p className = 'errorMessage'>ERROR: Passwords do not match. Try typing again.</p>
                    <input type = "submit" value="Submit" />
                    <a href="/login">Already have an account? Log in here!</a>
                </form>
            </div>
            <Footer />
        </div>
    )
    }
}

export default Signup