/* Zachary Miller
   Main app content rendered using React Router library to display certain pages 
   based on given URL route, documentation referenced: https://reactrouter.com/web/guides/quick-start

*/
import React from 'react';
import MyPollsMenu from './pages/MyPollsMenu';
import PollCreation from './pages/PollCreation';
import Footer from './components/Footer/Footer';
import PollifyNavbar from './components/Navigation/Navigation';
import Home from './pages/Landing_Page/Home';
import Login from './pages/Login/Login';
import Signup from "./pages/Signup/Signup";
import PollInterface from './pages/PollInterface';
import {Route,  BrowserRouter as PollifyRouter} from 'react-router-dom';


export default function PollifyApp(){
    return (
        <PollifyRouter>
            <div>
                <PollifyNavbar/>{/* All pages are wrapped with Shaniya's Navbar and footer*/}
                <Route path="/" exact='true'>{/* exact attribute specifies that path string must be exact, necessary as all routes begin with '/' */}
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
                <Route path="/poll">
                    <PollInterface/>
                </Route>
                <Footer/>
            </div>
        </PollifyRouter>    
    )
}