import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'

export default class Navigation extends React.Component{
    

     render(){
        return(
            <div>
                <Navbar collapseOnSelect expand="sm" bg="#2c3e50" variant="dark">
                <Navbar.Brand style={{fontSize: 30}} href="/">
                    <span style={{color: "yellow"}}>P</span>ollify
                    <img src="icon4.png" alt=" " id="icon" style={{height: 40, marginLeft:10, marginBottom: 10}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" />
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link eventKey={2} href="/login">Login</Nav.Link>
                        <Nav.Link eventKey={3} href="/mypolls">My Polls</Nav.Link>
                        <Nav.Link eventKey={4} href="/createpoll">Create Poll</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
     }
}