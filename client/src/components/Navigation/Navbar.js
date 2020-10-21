import React from 'react';
import './nav.css';

export default class Navbar extends React.Component{

    state = {open: false};

    openMenu = () => {
        this.setState({open: !this.state.open})
    }

    render(){

        return(
            <nav>
                <label class="logo"> 
                    <span>P</span>ollify 
                    <img src="icon.png" alt="Free Logo Design" id="icon" />
                </label>
                <ul class = {this.state.open ? "showMenu" : "hideMenu"}>
                    <li><a class="active" href="#"> Home </a></li>
                    <li><a href="#"> Login/Signup </a></li>
                    <li><a href="#"> Make A Poll </a></li>
                </ul>
                <div class = 'hamburger-menu' onClick = {this.openMenu}>
                    <i class= {this.state.open ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav>
        );
    }
}