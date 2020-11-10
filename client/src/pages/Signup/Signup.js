import React from 'react';
import Footer from '../../components/Footer/Footer'
import './signup.css';

export default function Signup(){
    return(
        <div className = 'registrationpage'>
            <div class="signupbox">
                <div className = 'signup'>
                    <h1>SIGN UP</h1>
                </div>
                <form>
                    <p>Email</p>
                    <input type="text" name = "" placeholder = "Enter Email"/>
                    <p>Username</p>
                    <input type="text" name = "" placeholder = "Enter Username"/>
                    <p>Password</p>
                    <input type = "password" name = "" placeholder="Enter Password"/>
                    <p>Confirm Password</p>
                    <input type = "password" name = "" placeholder="Re-enter Password"/>
                    <p className = 'errorMessage'>ERROR: Passwords do not match. Try typing again.</p>
                    <input type = "submit" name="" value="Register"/>
                    <a href="/login">Already have an account? Log in here!</a>
                </form>
            </div>
            <Footer />
        </div>
    )
}