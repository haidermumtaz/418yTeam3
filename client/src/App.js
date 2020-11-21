import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Landing_Page/Home';
import Login from './pages/Login/Login';
import Signup from "./pages/Signup/Signup";
import CreatePoll from "./pages/PollCreation";
import MyPollsMenu from './pages/MyPollsMenu';
import PollInterface from './pages/PollInterface';

export default class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Route path = "/" component={Home} exact= {true}  />
        <Route path = "/login" component={Login} />
        <Route path = "/register" component={Signup}/>
        <Route path = "/createPoll" component={CreatePoll}/>
        <Route path = "/myPolls" component={MyPollsMenu}/>
        <Route path = "/poll" component={PollInterface}/>
      </BrowserRouter>
    );
  }
}
