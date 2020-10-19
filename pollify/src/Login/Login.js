import React from 'react';
import NavBar from '../../components/Navigation/Navbar'
import Footer from '../../components/Footer/Footer'
import './login.css';

export default function Login(){
    return(
        <div className = 'loginpage'>
            <NavBar />
            <div className = "loginbox">
                <div className = 'login'>
                    <h1>LOGIN</h1>
                </div>
                <form>
                    <p>Email</p>
                    <input type="text" name = "" placeholder = "Enter Email"/>
                    <p>Password</p>
                    <input type = "password" name = "" placeholder="Enter Password"/>
                    <input type = "submit" name="" value="Login"/>
                    <a href="#">Forgot your password?</a><br/>
                    <a href="/register">Don't have an account? Sign up here!</a>
                </form>
            </div>
            <Footer />
        </div>
    )
}