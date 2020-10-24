import React from 'react';
import {NavLink} from 'react-router-dom'
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
                    <img src="icon.png" alt=" " id="icon" />
                </label>
                <ul class = {this.state.open ? "showMenu" : "hideMenu"}>
                    <li><NavLink to = "/" activeClassName = "active" exact = {true}> Home </NavLink></li>
                    <li><NavLink to = "/login" activeClassName = "active"> Login/Signup </NavLink></li>
                    <li><NavLink to = "/polls" activeClassName = "active"> Make A Poll </NavLink></li>
                </ul>
                <div class = 'hamburger-menu' onClick = {this.openMenu}>
                    <i class= {this.state.open ? "fas fa-times" : "fas fa-bars"}></i>
                    {/* {<i class= {"showMenu" ? "fas fa-times" : "fas fa-bars"}></i> } */}
                </div>
            </nav>
        );
    }
}