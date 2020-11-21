import React from 'react';
import MyPollsMenu from './pages/MyPollsMenu';
import PollCreation from './pages/PollCreation';
import Footer from './components/Footer/Footer';
import PollifyNavbar from './components/Navigation/Navigation';
import Home from './pages/Landing_Page/Home';
import Login from './pages/Login/Login';
import Signup from "./pages/Signup/Signup";

import {Route,  BrowserRouter as PollifyRouter} from 'react-router-dom';

export default function PollifyApp(){
    return (
        <PollifyRouter>
            <div>
                <PollifyNavbar/>
                <Route path="/" exact='true'>
                    <Home/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Signup/>
                </Route>
                <Route path="/mypolls">
                    <MyPollsMenu/>
                </Route>
                <Route path="/createpoll">
                    <PollCreation/>
                </Route>
                <Footer/>
            </div>
        </PollifyRouter>    
    )
}